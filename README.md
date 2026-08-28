# hello-vercel

A simple static site deployed to Vercel via GitHub Actions.

Every push to `main` runs `.github/workflows/deploy.yml`, which uses the
Vercel CLI to pull project settings, build, and deploy to production.

## Required repository secrets

- `VERCEL_TOKEN` — a Vercel account token
- `VERCEL_ORG_ID` — the Vercel team ID (annagzh team)
- `VERCEL_PROJECT_ID` — the Vercel project ID
