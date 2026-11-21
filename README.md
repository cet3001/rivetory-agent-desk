# Rivetory Agent Desk

The new Rivetory website. A static site: plain HTML, CSS and JS, no framework, deployed to Cloudflare Pages from this repo.

## Brand

Night Shift. Navy #0F1B2D, Steel #3A4A5E, Signal amber #F2A93B, Off-white #F5F3EE. Manrope headings, Inter body.

## Pages

- `/` Home
- `/how-it-works.html`
- `/restoration.html`
- `/ai-callers.html`
- `/pricing.html`
- `/start-a-pilot.html` (books via Cal.com intro event for now; replace with a pilot event later)
- `/demo.html` (fictional demo company facts page, labeled as a sample)
- `/about.html`, `/privacy.html`, `/terms.html`

## Deploy

```sh
cd /Users/cet3001/Projects/rivetory-agent-desk
set -a; . /Users/cet3001/Projects/sitewhip/.cf-env; set +a
npx wrangler pages deploy . --project-name=rivetory-agent-desk
```

Deploy only from this repo. Verify every page returns 200 on the fresh Pages URL after each deploy.

## Rules

No em dashes anywhere in copy. No invented clients, testimonials, outcomes or data. The sample owner summary and the demo company are labeled as samples. Do not touch rivetory.com DNS (no cutover yet).
