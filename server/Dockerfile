# ── Stage 1: Build ─────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Generate Prisma client & build TypeScript
ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
RUN npx prisma generate
RUN npm run build

# ── Stage 2: Production image ───────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Only copy production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled output + required runtime files
COPY --from=builder /app/dist        ./dist
COPY --from=builder /app/generated   ./generated
COPY --from=builder /app/prisma      ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

EXPOSE 5000

# Run Prisma migrations then start the server
CMD ["sh", "-c", "npx prisma db push && node dist/src/index.js"]
