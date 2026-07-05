# Kind Cycle

- **Production**: [kindcycle.uk](https://kindcycle.uk/)
- **Staging**: [kind-cycle.vercel.app](https://kind-cycle.vercel.app/)

## Deployment

| Branch | Target |
|--------|--------|
| `staging` | Vercel (auto-deploy on push) |
| `main` | Production Droplet (auto-deploy on push) |

### Staging

Pushing to `staging` triggers Vercel's git integration directly (see `vercel.json`), which builds and deploys automatically. No manual steps required.

### Production

Pushing to `main` triggers the [`Deploy to Production`](.github/workflows/deploy-production.yml) GitHub Actions workflow:

1. Checks out the repo and sets up pnpm and Node (version from `.nvmrc`).
2. Installs dependencies with `pnpm install --frozen-lockfile`.
3. Builds the app with `pnpm run build`.
4. Backs up the current live deployment on the server to `/var/www/kindcycle-backup`.
5. Syncs the new `dist/` output to `/var/www/kindcycle` on the droplet via `rsync` over SSH.

This requires the following GitHub Actions secrets to be configured on the repo (values are not stored here):

- `VITE_GTM_ID`
- `SSH_PRIVATE_KEY`
- `DROPLET_IP`
- `DROPLET_USER`

To deploy to production, merge/push to `main` — no manual trigger is needed.

## Rollback

If a production deployment needs to be reverted, the previous build is backed up on the server at `/var/www/kindcycle-backup`. To restore:

```bash
ssh user@server "cp -r /var/www/kindcycle-backup /var/www/kindcycle"
```

## Local development

```bash
pnpm install
pnpm run dev       # http://localhost:5173
pnpm run build     # output to dist/
pnpm run preview   # preview production build locally
```

## Tech stack

- React 19 + TypeScript
- Vite
- SCSS
- i18next (EN, ES, FR, PL, SO, BG, PT, TR, BN, AK)
