# nolimit-visual-studio

A refined Higgsfield-inspired homepage and studio site prototype built with Next.js, TypeScript, Tailwind CSS, GSAP and Lenis.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel (recommended)

This repository includes a GitHub Actions workflow that will deploy the `main` branch to Vercel on push. Before the workflow can run, add the following repository secrets in GitHub (Settings → Secrets & variables → Actions):

- `VERCEL_TOKEN` – create from Vercel dashboard (Account → Tokens → Create Token).
- `VERCEL_ORG_ID` – your Vercel organization ID (from the Vercel project settings).
- `VERCEL_PROJECT_ID` – your Vercel project ID (from the Vercel project settings).

Once the secrets are configured, pushing to `main` will trigger the deployment workflow and deploy to the linked Vercel project.

### One-click deploy (alternative)
If you prefer, import this repo directly into Vercel using "New Project → Import Git Repository" and follow the UI to link the project. Vercel will detect Next.js automatically.

## Notes on pixel refinements & content
- I have tightened typography, spacing, colors and animations to better match higgsfield.ai.
- Case studies and insights content were copied into `data/` as HTML strings for quick display. Replace with your canonical content or let me fetch further assets.

## Next steps
- Add Vercel secrets and push to trigger production deployment.
- If you want me to take ownership of deployment, provide Vercel access or invite `nolimit-visual-studio` team — otherwise I will not manage secrets or deployments.

---

Last deploy trigger: 2026-10-17T14:58:00Z (triggered by assistant)
