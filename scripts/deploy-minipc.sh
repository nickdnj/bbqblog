#!/usr/bin/env bash
# Deploy the Wharfside Picnic Guide (full-stack PWA + blog API) to the mini PC.
# Mirrors the SignBoard / TagSmart house pattern: rsync source, then docker compose up --build.
#
# Prereqs:
#   - SSH access to the mini PC (Tailscale)
#   - A .env on the mini PC at $DEST/.env with at least:
#       PICNIC_JWT_SECRET=<long random string>
#       PICNIC_ADMIN_PASSWORD=<strong admin password>   (also save it in Apple Passwords)
#       PICNIC_ADMIN_EMAIL=admin@wharfsidemb.com         (optional)
#   - The shared Cloudflare Tunnel route picnic.vistter.com -> host.docker.internal:8120
#     (already configured; the port is unchanged from the old static container).
set -euo pipefail

MINIPC="${MINIPC:-nickd@100.108.181.24}"   # Tailscale IP — LAN IP is unreachable from the dev machine
DEST="${DEST:-~/bbqblog}"

echo "→ Syncing app source to ${MINIPC}:${DEST}"
# --delete so files removed locally (e.g. deleted pages) don't linger on the mini PC
# and break the in-image build. Excluded paths below are protected from deletion.
rsync -az --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='server/data' \
  --exclude='.review' \
  --exclude='.tmp' \
  --exclude='.env' \
  ./ "${MINIPC}:${DEST}/"

echo "→ Building & (re)starting the container on the mini PC (builds the PWA + server in-image)"
ssh "${MINIPC}" "cd ${DEST} && test -f .env || { echo 'ERROR: ${DEST}/.env missing (need PICNIC_JWT_SECRET + PICNIC_ADMIN_PASSWORD)'; exit 1; }; docker compose -f docker-compose.minipc.yml --env-file .env up -d --build"

echo "→ Done."
echo "   LAN:    http://100.108.181.24:8120        (admin: /admin)"
echo "   Public: https://picnic.vistter.com        (existing tunnel route, port unchanged)"
