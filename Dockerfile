# Next.js Dockerfile for Dokploy (standalone output)
# Build context: repo root
# Build path in Dokploy: / (after buildPath fix)
#
# Uses Next.js standalone output for a ~50MB image instead of the full ~210MB
# dev-dependencies image. Trade-off: no standalone shell scripts; `next start`
# still works because we copy the standalone build + public + .next/static.

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
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
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

# Copy the standalone server (includes its own pruned node_modules)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Copy static assets and public dir (NOT in standalone)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# next.config.mjs is read at runtime by middleware/server components in some setups
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./next.config.mjs

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://localhost:3000/ >/dev/null || exit 1

# Standalone build outputs a `server.js` in the root
CMD ["node", "server.js"]