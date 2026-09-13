# Maple Bridge Therapy

Occupational therapy and consulting website serving MENA. Includes Home, Services, About and Contact, responsive navigation, interactive service selection, and WhatsApp/email links.

## Cloudflare Pages setup

Connect this GitHub repository through **Workers & Pages → Create application → Pages → Connect to Git**.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist/client` |
| Root directory | Leave blank |
| Node.js version | `22.16.0` (set by `.node-version`) |

Select Save and Deploy. Cloudflare generates a pages.dev URL; add your domain under Custom domains. Push future changes to main to trigger automatic builds after connecting Cloudflare.

## Development

```sh
npm ci
npm run dev
```

```sh
npm run build
```

The build produces a static site with `dist/client/index.html`, all four pages, a 404 page, images, CSS and interactive JavaScript. Deploy the whole `dist/client` directory. No server, database or API credentials are needed. Preview through a web server, not by opening HTML files directly.

Service navigation uses native links and section anchors. Contact selections populate WhatsApp messages and email subjects; no website form stores enquiries.

Cloudflare documentation: https://developers.cloudflare.com/pages/get-started/git-integration/
