# Wharfside Picnic Guide — static site served by nginx.
# House pattern: built and run as a Docker container on the Wharfside mini PC,
# published via the shared Cloudflare Tunnel at picnic.vistter.com.
FROM nginx:alpine

# Static site (explicit copies — keep the image to just the published assets)
COPY index.html /usr/share/nginx/html/index.html
COPY assets/    /usr/share/nginx/html/assets/
COPY docs/      /usr/share/nginx/html/docs/

# Server config (gzip, cache headers, /healthz)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
