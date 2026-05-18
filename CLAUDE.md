# Samyut Yoga Platform — CLAUDE.md

## Project Overview
**Project:** Samyut Yoga Platform  
**School:** Samyut Yoga, Mysore, Karnataka, India  
**Founder:** Yogacharya Aravind Prasad (E-RYT 500, YACEP, 15+ years)  
**Tagline:** "The Traditional Yoga School in Mysore" | "Where Mystical Science Meets The Modern Mind"  
**Full form:** Scientific & Mystical Yoga for Universal Transformation

## Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS — see tailwind.config.ts for colour tokens
- **Database & Auth:** Supabase (PostgreSQL + Row Level Security)
- **CMS:** Sanity (blog posts, course content)
- **Video:** Mux (LMS lesson hosting, access-controlled)
- **Payments:** Razorpay (Indian ₹) + Stripe (International €/USD)
- **Email:** Resend (transactional emails)
- **Bookings:** Cal.com embed
- **Certificates:** pdf-lib generation
- **SEO:** next-sitemap, JSON-LD schemas

## Design System
| Token | Value | Usage |
|-------|-------|-------|
| `forest` | #1B3A2D | Primary, navbars, headings |
| `ivory` | #F7F3EC | Page background |
| `terracotta` | #C4714A | CTAs, urgent badges |
| `gold` | #C9A84C | Accents, icons |
| `amber` | #8B5E3C | Beyond Asana section |
| `charcoal` | #2C2C2C | Body text |

**Fonts:** Cormorant Garamond (headings) + Inter (body)  
**Beyond Asana accent:** amber/gold tones to visually distinguish from TTC green sections

## Routes
```
/                           Homepage
/about                      About
/teacher-training           TTC overview
/teacher-training/ashtanga  200hrs Ashtanga Yoga TTC
/teacher-training/hatha     200hrs Hatha Yoga TTC
/beyond-asana               Beyond Asana Workshops
/blog                       Blog listing (Sanity)
/blog/[slug]                Blog post (Sanity)
/facilities                 Facilities
/faqs                       FAQs
/contact                    Contact
/register                   Registration form → Supabase + Resend
/terms                      Terms and Conditions
/login                      Student login (Supabase Auth)
/dashboard                  Protected LMS dashboard
/dashboard/modules          Course modules
/dashboard/lesson/[id]      Video lesson (Mux)
/dashboard/assignments      Written reflections
/dashboard/quizzes          MCQ quizzes
/dashboard/resources        PDF downloads
/dashboard/forum            Community forum
/dashboard/live-sessions    Cal.com consultation booking
/dashboard/certificate      Certificate download (pdf-lib)
```

## Key Rules
1. **NO workshops or short courses** — only TTC (Ashtanga, Hatha) and Beyond Asana Workshops
2. **Beyond Asana section** always uses amber/gold colour scheme, NOT the forest green used for TTC
3. **WhatsApp button** (wa.me/918073239301) must be visible on ALL non-dashboard pages (bottom right)
4. **Batch sizes:** Max 12 students per batch
5. **Forum:** Lifetime VIP Membership FREE with any TTC enrollment

## Contact Details
- Email: info@samyutyoga.com
- Phone 1: +91 9538015757
- Phone 2: +91 80732 39301
- Instagram: @samyutyogamysore
- YouTube: @samyutyoga
- Facebook: https://www.facebook.com/profile.php?id=61561163703486

## DB Schema
See `/supabase/migrations/001_initial_schema.sql` for complete schema.  
Tables: `students`, `courses`, `enrolments`, `modules`, `lessons`, `progress`,  
`assignments`, `assignment_submissions`, `quiz_questions`, `quiz_attempts`,  
`forum_posts`, `forum_likes`, `certificates`, `applications`, `workshop_interests`

## Development Commands
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
```

## Setup Steps (new developer)
1. Copy `.env.local.example` to `.env.local` and fill all values
2. Run `npm install`
3. Run Supabase migration: paste `supabase/migrations/001_initial_schema.sql` in Supabase SQL Editor
4. Configure Resend domain for samyutyoga.com
5. Set up Mux and add playbackIds to lessons table
6. Connect Sanity project for blog CMS
7. Run `npm run dev`

## Git & Deployment Workflow
- **Always work directly on the `main` branch** — never create feature branches or worktrees
- Commit and push to `main` immediately after each change
- Vercel auto-deploys to samyutyoga.com on every push to `main`
- **Images:** Keep new images under 100KB before committing. Use sharp to compress if needed:
  ```bash
  node -e "require('sharp')('input.png').resize(180,180).png({compressionLevel:9}).toFile('output.png')"
  ```
- Never commit large files (videos, raw photos) — use Cloudinary or public URLs instead
