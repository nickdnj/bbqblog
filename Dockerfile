# Wharfside Picnic Guide — full-stack PWA (React build) + Express/SQLite API.
# House pattern: one container on the mini PC behind the shared Cloudflare Tunnel
# at picnic.vistter.com. Single Node process serves the built PWA AND /api.

# ---- 1. Build the React PWA ----
FROM node:22-bookworm AS client
WORKDIR /client
COPY client/package*.json ./
# npm install (not ci): the lockfile can miss other-platforms' optional deps
# (the @emnapi/* npm optional-dependency bug) when authored on macOS.
RUN npm install --no-audit --no-fund
COPY client/ ./
RUN npm run build   # -> /client/dist

# ---- 2. Build the server + prune to prod deps (compiles better-sqlite3) ----
FROM node:22-bookworm AS server
WORKDIR /server
COPY server/package*.json ./
RUN npm install --no-audit --no-fund
COPY server/ ./
RUN npm run build && npm prune --omit=dev   # tsc -> /server/dist, keep native better-sqlite3

# ---- 3. Runtime ----
FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production \
    PORT=8120 \
    CLIENT_DIST=/app/client/dist \
    DB_PATH=/data/picnic.db
COPY --from=server /server/dist ./dist
COPY --from=server /server/node_modules ./node_modules
COPY --from=server /server/package.json ./package.json
COPY --from=client /client/dist ./client/dist
EXPOSE 8120
CMD ["node", "dist/index.js"]
