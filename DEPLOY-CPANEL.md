# Hosting TICAdvisor on cPanel (static)

The app is a React site. It can be exported as plain static HTML — no Node.js on the server.

## 1. Build the static site

```bash
bun install
bun run build:static
```

This prerenders every page to HTML:

```
dist/client/
  index.html            ->  /
  services/index.html   ->  /services
  about/index.html      ->  /about
  events/index.html     ->  /events
  contact/index.html    ->  /contact
  assets/ fonts/ images/ ...
  .htaccess
```

## 2. Upload

Upload the **contents of `dist/client`** (including the hidden `.htaccess`) into
`public_html` (or the subdomain's document root) via cPanel File Manager or FTP.

The included `.htaccess` handles clean URLs, client-side routing fallback,
gzip compression and asset caching.

## Notes

- The contact form is front-end only. For real submissions on cPanel, point it at a
  PHP mail script or a third-party form endpoint (e.g. FormSubmit, Formspree).
- Re-run `bun run build:static` and re-upload after every content change.
