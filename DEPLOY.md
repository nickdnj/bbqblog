# Deploying the Wharfside Picnic Guide

This site follows the **Wharfside house pattern** (same as TagSmart and SignBoard):
a Docker container on the Beelink mini PC, published to a `*.vistter.com` subdomain
through the **shared Cloudflare Tunnel** that lives in VistterStream's compose.

| | Value |
|---|---|
| Public URL | `https://picnic.vistter.com` |
| Container | `picnic` (nginx:alpine, static) |
| Host port | `8120` → container `80` |
| Tunnel route | `picnic.vistter.com` → `http://host.docker.internal:8120` |
| LAN/admin fallback | `http://100.108.181.24:8120` (Tailscale) |
| Mini PC | `nickd@100.108.181.24` (Tailscale; LAN IP unreachable from dev machine) |

## One-time setup (needs Nick + Cloudflare access)

These steps publish the subdomain. They mirror how `tagsmart.vistter.com` and
`signboard.vistter.com` were added (ingress managed in the Cloudflare dashboard /
API against the existing `vistterstream` tunnel — token-based auth).

1. **Add the tunnel ingress route** (Cloudflare Zero Trust → Networks → Tunnels →
   `vistterstream` tunnel → Public Hostnames → *Add*):
   - Subdomain `picnic`, domain `vistter.com`
   - Service: `HTTP` → `host.docker.internal:8120`
2. **DNS** — adding the public hostname above auto-creates the proxied CNAME
   `picnic.vistter.com` → `<tunnel-UUID>.cfargotunnel.com`. Verify it exists.
3. No `config.yml` edit is required — this tunnel is token-based and routes from the
   dashboard (the repo `config.yml` only documents the original `stream.vistter.com` rules).

## Deploy (repeatable)

From this repo on the dev machine:

```bash
./scripts/deploy-minipc.sh
```

That `rsync`s the site to `~/bbqblog` on the mini PC and runs
`docker compose -f docker-compose.minipc.yml up -d --build`.

Manual equivalent:

```bash
rsync -az --exclude='.git' --exclude='node_modules' ./ nickd@100.108.181.24:~/bbqblog/
ssh nickd@100.108.181.24 'cd ~/bbqblog && docker compose -f docker-compose.minipc.yml up -d --build'
```

## Verify

```bash
curl -fsS http://100.108.181.24:8120/healthz     # -> ok   (LAN, via Tailscale)
curl -fsSI https://picnic.vistter.com            # -> 200  (public, once tunnel route is live)
```

## Notes
- It's a static site — nginx serves `index.html` + `assets/` + `docs/`. No DB, no secrets.
- Container is capped at 64 MB / 0.25 CPU; it sits next to VistterStream/TagSmart/SignBoard.
- Cloudflare blocks default bot/Python user-agents (error 1010); not relevant for browser traffic,
  but any future provisioning script must send a custom `User-Agent` (see SignBoard scripts).
