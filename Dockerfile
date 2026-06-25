# Next.js Dockerfile for Dokploy
# Build context: repo root
# Build path in Dokploy: mx.pclub.web/

# ---------- Dependencies ----------
FROM node:22-alpine AS deps
RUN corepack enable
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else npm install; \
  fi

# ---------- Build ----------
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm build; \
  else npm run build; \
  fi

# ---------- Runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy built app + node_modules (Dokploy will run via `next start`)
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./next.config.mjs

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://localhost:3000/ >/dev/null || exit 1

CMD ["npm", "run", "start"]