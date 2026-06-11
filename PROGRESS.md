# Luther Starks Website — Project Progress

> Internal reference doc for the lutherstarks.com website. Last updated: 2026-06-10.

## Overview

Professional, multi-page marketing/portfolio website for **Luther Starks** (VP of Acquiring & BaaS at Priority). Purpose: showcase his business acumen and case studies, and act as a collection point for inbound business leads.

Pages: Home, About Luther, Specialties, Case Studies, Blog/Insights, Contact.

## Live URLs

- **Production site:** https://lutherstarks.com (custom domain, HTTPS)
- **Vercel default:** https://luther-starks.vercel.app

## Tech Stack & Services (full reference)

### Framework & libraries
- **Next.js** (App Router) — React framework, server components + server actions.
- **TypeScript** — typed source across the app.
- **Tailwind CSS** — utility-first styling (`tailwind.config.ts`, `postcss.config.js`).
- **Fonts:** Playfair Display (serif display) + Inter (body), via Next font loading.
- **No external email SDK** — contact form uses the Resend REST API directly via `fetch` (keeps `package.json` lean; no `resend` npm dependency).

### Source control — GitHub
- Repo: `brendancoen/luther-starks`, default branch `main`.
- Edits made through the GitHub web UI (no local clone in this workflow).

### Hosting / CI/CD — Vercel
- Team: `brendancoen-7552s-projects`, project `luther-starks`.
- Auto-deploys on every push to `main`; production maps to lutherstarks.com.
- Dashboard: https://vercel.com/brendancoen-7552s-projects/luther-starks
- Env var `RESEND_API_KEY` set here (server-side only).

### Domain registrar & DNS — Squarespace
- Domain: lutherstarks.com. Account email: luther@stayon30a.com.
- DNS settings: https://account.squarespace.com/domains/managed/lutherstarks.com/dns/dns-settings
- DNS re-auth (password) required for custom record edits — owner enters it.

### Database — Supabase (available, optional)
- Project: `Luther_Starks_Website`, id `cmcskjltdcoqqnyuzbvm`, org `table-dominance`.
- Base URL: https://cmcskjltdcoqqnyuzbvm.supabase.co
- Dashboard: https://supabase.com/dashboard/project/cmcskjltdcoqqnyuzbvm
- Not currently wired into the live site; reserved for future lead storage.

### Transactional email — Resend
- Domain `lutherstarks.com` verified, region us-east-1 (North Virginia).
- Sending ON, Receiving OFF.
- Domain id `8227e5ea-7331-4b1d-a408-6434b47b7c22`.
- Dashboard: https://resend.com/domains/8227e5ea-7331-4b1d-a408-6434b47b7c22
- API key stored as `RESEND_API_KEY` in Vercel (not in repo).

## Contact Form (lead capture)

- **Server action:** `src/app/contact/actions.ts` — `sendContactMessage(form)`. Resend REST API via `fetch` -> POST https://api.resend.com/emails.
- **From:** leads@lutherstarks.com (display "Luther Starks Website")
- **To:** Luther.Starks@prth.com
- **Reply-To:** the prospect's submitted email address
- **UI:** `src/app/contact/page.tsx` calls the action with loading / error / success states.

## DNS Configuration (Squarespace)

Site / domain records:
- A `@` -> 216.150.1.1 (Vercel)
- CNAME `www` -> 461dcf3247c5a13e.vercel-dns-016.com.

Resend sending records (do NOT remove):
- TXT `resend._domainkey` -> DKIM public key (p=MIGf...)
- MX `send` -> feedback-smtp.us-east-1.amazonses.com (priority 10)
- TXT `send` -> v=spf1 include:amazonses.com ~all

Pre-existing email policy records (left untouched):
- TXT `@` -> v=spf1 -all
- TXT `_dmarc` -> v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s

## Design System

- Backgrounds: #0A0E1A (base), #0D1225 (mid), #060912 (footer)
- Accent gold: #D4AF37 / #F0D060 / #B8941F
- Text: #E8EAF0
- Boxed "LS" monogram logo.

## Status

- [x] Multi-page site built and deployed
- [x] Custom domain lutherstarks.com live over HTTPS
- [x] About & Contact photos in place
- [x] Resend domain verified
- [x] Contact form wired end-to-end (sends real leads to Luther.Starks@prth.com)
- [x] siteUrl / metadataBase set to https://lutherstarks.com
- [x] sitemap.xml (auto-generated via src/app/sitemap.ts)
- [x] robots.txt (auto-generated via src/app/robots.ts; disallows /admin, /login)
- [x] Unique per-page titles & descriptions (About, Specialties, Case Studies, Blog/Insights, Contact)

## Open / Backlog

- [ ] Live end-to-end test of the contact form (sends a real email to Luther — left for the owner to run)
- [ ] Optional: change www redirect 307 -> 308 (permanent) for SEO in Vercel
- [ ] 1200x630 OG share banner image
- [ ] Real Case Study content (currently placeholder)
- [ ] Real Blog/Insights articles (currently placeholder)
- [ ] Homepage "track record" 01/02/03 stats left as-is per owner request

## SEO

- sitemap: src/app/sitemap.ts — routes: /, /about, /specialties, /case-studies, /blog, /contact.
- robots: src/app/robots.ts — allow all; disallow /admin and /login; declares host + sitemap URL.
- Per-page metadata: each page exports `metadata` (title + description + canonical + openGraph). Contact is a client component, so its metadata lives in src/app/contact/layout.tsx.
- Title template is '%s | Luther Starks' (set in layout.tsx); page titles supply the prefix.
- NOTE: src/app/insights/page.tsx contains the literal text '404: Not Found' (not real code) so /insights 404s. It was removed from the sitemap. Either build a real Insights page or delete the route. The live Insights content is at /blog.

### SEO backlog
- [ ] 1200x630 OG share image (og:image is still a small placeholder SVG).
- [ ] JSON-LD structured data (Person + Organization/WebSite schema).
- [ ] Decide fate of /insights route (build real page or delete the broken stub).

## Key References

- Luther LinkedIn: https://www.linkedin.com/in/luther-starks-64723223/
- Priority: https://prioritycommerce.com/
- Nezz: https://nezzapp.com/
- Nezz press release: https://prioritycommerce.com/resource-center/nezz-priority-banking-infrastructure-real-time-settlement/
