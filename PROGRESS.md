# Luther Starks Website — Project Progress

> Internal reference doc for the lutherstarks.com website. Last updated: 2026-06-10.

## Overview

Professional, multi-page marketing/portfolio website for **Luther Starks** (VP of Acquiring & BaaS at Priority). Purpose: showcase his business acumen and case studies, and act as a collection point for inbound business leads.

Pages: Home, About Luther, Specialties, Case Studies, Blog/Insights, Contact.

## Live URLs

- **Production site:** https://lutherstarks.com (custom domain, HTTPS)
- **Vercel default:** https://luther-starks.vercel.app

## Tech Stack & Services

- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS
- **Source control:** GitHub — `brendancoen/luther-starks` (main branch)
- **Hosting / CI:** Vercel — project `luther-starks` (auto-deploys on push to main)
- **Domain registrar / DNS:** Squarespace Domains — lutherstarks.com
- **Database (available, optional):** Supabase — project `Luther_Starks_Website` (id `cmcskjltdcoqqnyuzbvm`)
- **Transactional email:** Resend — domain `lutherstarks.com` verified (us-east-1)

## Contact Form (lead capture)

- **Server action:** `src/app/contact/actions.ts` — `sendContactMessage(form)`. Uses the Resend REST API via `fetch` (no npm dependency added).
- **From:** leads@lutherstarks.com (display "Luther Starks Website")
- **To:** Luther.Starks@prth.com
- **Reply-To:** the prospect's submitted email address
- **UI:** `src/app/contact/page.tsx` calls the action with loading / error / success states.
- **API key:** `RESEND_API_KEY` stored in Vercel env, read server-side only.

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

## Status

- [x] Multi-page site built and deployed
- [x] Custom domain lutherstarks.com live over HTTPS
- [x] About & Contact photos in place
- [x] Resend domain verified
- [x] Contact form wired end-to-end (sends real leads to Luther.Starks@prth.com)
- [x] siteUrl / metadataBase set to https://lutherstarks.com

## Open / Backlog

- [ ] Live end-to-end test of the contact form (sends a real email to Luther — left for the owner to run)
- [ ] Optional: change www redirect 307 -> 308 (permanent) for SEO in Vercel
- [ ] 1200x630 OG share banner image
- [ ] Real Case Study content (currently placeholder)
- [ ] Real Blog/Insights articles (currently placeholder)
- [ ] Homepage "track record" 01/02/03 stats left as-is per owner request

## Key References

- Luther LinkedIn: https://www.linkedin.com/in/luther-starks-64723223/
- Priority: https://prioritycommerce.com/
- Nezz: https://nezzapp.com/
