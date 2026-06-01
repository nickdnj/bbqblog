# Deploying the Wharfside Picnic Guide

A full-stack **PWA + blog**: a React/Vite front end and an Express + SQLite API,
served by one Node process in one Docker container — the **Wharfside house pattern**
(same as TagSmart/SignBoard), published to `picnic.vistter.com` through the shared
Cloudflare Tunnel.

| | Value |
|---|---|
| Public URL | `https://picnic.vistter.com` |
| Admin | `https://picnic.vistter.com/admin` |
| Container | `picnic` (Node 22, serves built PWA + `/api`) |
| Port | `8120` (host) → `8120` (container) |
| Tunnel route | `picnic.vistter.com` → `host.docker.internal:8120` (already configured) |
| Data | SQLite at `/data/picnic.db` in the `picnic_data` volume |
| Mini PC | `nickd@100.108.181.24` (Tailscale) |

## One-time: secrets on the mini PC

Create `~/bbqblog/.env` on the mini PC (git-ignored, never committed):

```ini
PICNIC_JWT_SECRET=<run: openssl rand -hex 32>
PICNIC_ADMIN_EMAIL=admin@wharfsidemb.com
PICNIC_ADMIN_PASSWORD=<a strong password — also save it in Apple Passwords>
PICNIC_ADMIN_NAME=Wharfside Board
```

- `PICNIC_ADMIN_PASSWORD` seeds the first board login **on an empty database only**.
  Pick it deliberately and store it in Apple Passwords.
- The tunnel route already points at port 8120 (unchanged from the old static site),
  so **no Cloudflare change is needed** to go live — deploying the new container on
  8120 swaps the site over.

## Deploy / redeploy

From this repo on the dev machine:

```bash
./scripts/deploy-minipc.sh
```

It rsyncs the source to `~/bbqblog`, then on the box runs
`docker compose -f docker-compose.minipc.yml --env-file .env up -d --build`
(the image builds the PWA and the server in multi-stage; nothing is built on the dev machine).

## Verify

```bash
curl -fsS http://100.108.181.24:8120/healthz        # -> ok   (LAN, via Tailscale)
curl -fsS http://100.108.181.24:8120/api/posts      # -> []   (empty until the board posts)
curl -fsSI https://picnic.vistter.com               # -> 200  (public)
```

Then sign in at `https://picnic.vistter.com/admin` and publish the first post.

## Publishing Bob's videos
The Bob's Grill School episodes live in `client/src/data/content.ts` (`episodes[]`).
Paste a YouTube video ID into the matching episode's `youtubeId` and redeploy — the
"coming soon" card becomes a click-to-load embed. (No backend change.)

## Notes
- Rollback: the previous static container image is still in Docker on the box; if needed,
  re-deploy the `main` branch (static nginx) which also binds 8120.
- Changing the admin password later needs a DB update (no self-serve "change password" yet)
  — a future enhancement alongside multi-user / approval workflow.
- Cloudflare blocks default bot/Python user-agents (error 1010); not relevant to browsers.
