#!/usr/bin/env bash
# Deploy the Wharfside Picnic Guide to the Wharfside mini PC.
# Mirrors the SignBoard / TagSmart house pattern: rsync source, then docker compose up.
#
# Prereqs: SSH access to the mini PC (Tailscale), and the shared Cloudflare Tunnel
# route picnic.vistter.com -> host.docker.internal:8120 already added (see DEPLOY.md).
set -euo pipefail

MINIPC="${MINIPC:-nickd@100.108.181.24}"   # Tailscale IP — LAN IP is unreachable from the dev machine
DEST="${DEST:-~/bbqblog}"

echo "→ Syncing site to ${MINIPC}:${DEST}"
rsync -az \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.review' \
  --exclude='.tmp' \
  ./ "${MINIPC}:${DEST}/"

echo "→ Building & (re)starting the container on the mini PC"
ssh "${MINIPC}" "cd ${DEST} && docker compose -f docker-compose.minipc.yml up -d --build"

echo "→ Done."
echo "   LAN:    http://100.108.181.24:8120"
echo "   Public: https://picnic.vistter.com   (once the tunnel route is added — see DEPLOY.md)"
