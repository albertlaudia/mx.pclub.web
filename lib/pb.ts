/**
 * PocketBase server client (typed, no SDK dependency).
 *
 * Server-only. Never import from client components.
 * Uses global `fetch` so it works in Edge runtime too.
 *
 * If `NEXT_PUBLIC_PB_URL` is not set, the client returns null
 * and the data layer falls back to static data in `lib/data/*`.
 */

const PB_URL = process.env.NEXT_PUBLIC_PB_URL ?? process.env.PB_URL ?? ''

export function isPbConfigured(): boolean {
  return PB_URL.length > 0
}

export interface PbListOptions {
  page?: number
  perPage?: number
  filter?: string
  sort?: string
  expand?: string
  fields?: string
}

export interface PbListResult<T> {
  items: T[]
  page: number
  perPage: number
  totalItems: number
  totalPages: number
}

export interface PbError {
  status: number
  message: string
  code?: number
  data?: Record<string, unknown>
}

export class PocketBaseError extends Error {
  status: number
  code?: number
  data?: Record<string, unknown>

  constructor(err: PbError) {
    super(err.message)
    this.name = 'PocketBaseError'
    this.status = err.status
    this.code = err.code
    this.data = err.data
  }
}

async function pbFetch<T>(path: string, init?: RequestInit & { token?: string }): Promise<T> {
  if (!isPbConfigured()) {
    throw new PocketBaseError({
      status: 0,
      message: 'PB_URL not configured',
    })
  }
  const url = `${PB_URL.replace(/\/$/, '')}${path}`
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (init?.headers) {
    Object.assign(headers, init.headers)
  }
  if (init?.token) headers.Authorization = init.token

  const res = await fetch(url, {
    ...init,
    headers,
    // Cache for 60s on the Next.js data cache; fresh on revalidation.
    next: { revalidate: 60, tags: ['pb', path.split('?')[0]] },
  })

  if (!res.ok) {
    let body: PbError | null = null
    try {
      body = (await res.json()) as PbError
    } catch {
      body = { status: res.status, message: res.statusText }
    }
    throw new PocketBaseError(body)
  }

  return (await res.json()) as T
}

export async function pbList<T>(
  collection: string,
  opts: PbListOptions = {},
  token?: string,
): Promise<PbListResult<T>> {
  const params = new URLSearchParams()
  if (opts.page) params.set('page', String(opts.page))
  if (opts.perPage) params.set('perPage', String(opts.perPage))
  if (opts.filter) params.set('filter', opts.filter)
  if (opts.sort) params.set('sort', opts.sort)
  if (opts.expand) params.set('expand', opts.expand)
  if (opts.fields) params.set('fields', opts.fields)

  const query = params.toString()
  return pbFetch<PbListResult<T>>(
    `/api/collections/${collection}/records${query ? `?${query}` : ''}`,
    { token },
  )
}

export async function pbGet<T>(
  collection: string,
  id: string,
  expand?: string,
  token?: string,
): Promise<T> {
  const q = expand ? `?expand=${encodeURIComponent(expand)}` : ''
  return pbFetch<T>(`/api/collections/${collection}/records/${id}${q}`, { token })
}

export async function pbFirst<T>(
  collection: string,
  filter: string,
  sort?: string,
  token?: string,
): Promise<T | null> {
  const result = await pbList<T>(collection, { filter, sort, perPage: 1 }, token)
  return result.items[0] ?? null
}

export async function pbCreate<T>(
  collection: string,
  data: Record<string, unknown>,
  token?: string,
): Promise<T> {
  return pbFetch<T>(`/api/collections/${collection}/records`, {
    method: 'POST',
    body: JSON.stringify(data),
    token,
  })
}

export async function pbUpdate<T>(
  collection: string,
  id: string,
  data: Record<string, unknown>,
  token?: string,
): Promise<T> {
  return pbFetch<T>(`/api/collections/${collection}/records/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    token,
  })
}

export async function pbDelete(collection: string, id: string, token?: string): Promise<void> {
  await pbFetch<unknown>(`/api/collections/${collection}/records/${id}`, {
    method: 'DELETE',
    token,
  })
}

// Auth helpers (superuser, used for admin operations and seeding)
let _superuserToken: { token: string; expiresAt: number } | null = null

export async function pbSuperuserAuth(): Promise<string | null> {
  if (!isPbConfigured()) return null
  const identity = process.env.PB_IDENTITY
  const password = process.env.PB_PASSWORD
  if (!identity || !password) return null

  if (_superuserToken && _superuserToken.expiresAt > Date.now() + 60_000) {
    return _superuserToken.token
  }

  try {
    const res = await fetch(
      `${PB_URL.replace(/\/$/, '')}/api/collections/_superusers/auth-with-password`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identity, password }),
        cache: 'no-store',
      },
    )
    if (!res.ok) return null
    const json = (await res.json()) as { token: string }
    _superuserToken = {
      token: json.token,
      expiresAt: Date.now() + 12 * 60 * 60 * 1000, // 12h
    }
    return json.token
  } catch {
    return null
  }
}

// Helper for admin operations
export async function pbAdminList<T>(
  collection: string,
  opts: PbListOptions = {},
): Promise<PbListResult<T>> {
  const token = await pbSuperuserAuth()
  if (!token) {
    throw new PocketBaseError({
      status: 401,
      message: 'PB superuser creds missing',
    })
  }
  return pbList<T>(collection, opts, token)
}

export async function pbAdminCreate<T>(
  collection: string,
  data: Record<string, unknown>,
): Promise<T> {
  const token = await pbSuperuserAuth()
  if (!token) {
    throw new PocketBaseError({
      status: 401,
      message: 'PB superuser creds missing',
    })
  }
  return pbCreate<T>(collection, data, token)
}

export async function pbAdminUpdate<T>(
  collection: string,
  id: string,
  data: Record<string, unknown>,
): Promise<T> {
  const token = await pbSuperuserAuth()
  if (!token) {
    throw new PocketBaseError({
      status: 401,
      message: 'PB superuser creds missing',
    })
  }
  return pbUpdate<T>(collection, id, data, token)
}
