# Kind Cycle

- **Production**: [kindcycle.uk](https://kindcycle.uk/)
- **Staging**: [kind-cycle.vercel.app](https://kind-cycle.vercel.app/)

## Deployment

| Branch | Target |
|--------|--------|
| `staging` | Vercel (auto-deploy on push) |
| `main` | Production Droplet (auto-deploy on push) |

## Rollback

If a production deployment needs to be reverted, the previous build is backed up on the server at `/var/www/kindcycle-backup`. To restore:

```bash
ssh user@server "cp -r /var/www/kindcycle-backup /var/www/kindcycle"
```

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output to dist/
npm run preview   # preview production build locally
```

## Tech stack

- React 19 + TypeScript
- Vite
- SCSS
- i18next (EN, ES, FR, PL, SO, BG, PT, TR, BN, AK)
