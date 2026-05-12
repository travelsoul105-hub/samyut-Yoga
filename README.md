# Samyut Yoga Platform

Production-ready Next.js 14 website and student LMS for **Samyut Yoga** — The Traditional Yoga School in Mysore, India.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| CMS | Sanity (blog) |
| Video | Mux |
| Payments (India) | Razorpay |
| Payments (International) | Stripe |
| Email | Resend |
| Bookings | Cal.com embed |
| Certificates | pdf-lib |
| SEO | next-sitemap + JSON-LD |

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.local.example .env.local
# Fill in all values — see .env.local.example for instructions
```

### 3. Set Up Supabase Database

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run `supabase/migrations/001_initial_schema.sql`
3. Copy your project URL and anon key to `.env.local`

### 4. Configure Resend (Email)

1. Create account at [resend.com](https://resend.com)
2. Add and verify domain `samyutyoga.com`
3. Copy API key to `.env.local`

### 5. Configure Mux (LMS Video)

1. Create account at [mux.com](https://mux.com)
2. Copy Token ID and Secret to `.env.local`
3. Upload lesson videos; copy playback IDs to the `lessons` table in Supabase

### 6. Configure Sanity (Blog)

1. Create project at [sanity.io](https://sanity.io)
2. Copy project ID to `.env.local`
3. Schema for `post`: `title`, `slug`, `excerpt`, `mainImage`, `body`, `publishedAt`, `categories`

### 7. Configure Payments

**Razorpay (Indian students — INR):**
- Dashboard → Settings → API Keys → copy to `.env.local`

**Stripe (International — EUR/USD):**
- Dashboard → Developers → API Keys → copy to `.env.local`

### 8. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
samyut-yoga/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── teacher-training/
│   │   ├── page.tsx            # TTC overview
│   │   ├── ashtanga/page.tsx   # 200hr Ashtanga TTC
│   │   └── hatha/page.tsx      # 200hr Hatha TTC
│   ├── beyond-asana/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post
│   ├── facilities/page.tsx
│   ├── faqs/page.tsx
│   ├── contact/page.tsx
│   ├── register/page.tsx       # Registration → Supabase + Resend
│   ├── terms/page.tsx
│   ├── login/page.tsx          # Supabase Auth
│   ├── dashboard/              # Protected LMS
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Overview
│   │   ├── modules/page.tsx
│   │   ├── lesson/[id]/page.tsx  # Mux video
│   │   ├── assignments/page.tsx
│   │   ├── quizzes/page.tsx
│   │   ├── resources/page.tsx
│   │   ├── forum/page.tsx
│   │   ├── live-sessions/page.tsx  # Cal.com embed
│   │   └── certificate/page.tsx   # pdf-lib
│   └── api/                    # API routes
│       ├── register/route.ts
│       ├── workshop-interest/route.ts
│       ├── contact/route.ts
│       ├── auth/login/route.ts
│       └── certificate/route.ts
├── components/
│   ├── layout/                 # Navbar, Footer, WhatsApp button
│   ├── home/                   # 10 homepage sections
│   └── JsonLd.tsx              # JSON-LD schemas
├── lib/
│   ├── supabase/               # client.ts + server.ts
│   ├── sanity/                 # client.ts
│   └── resend.ts               # Email helpers
├── supabase/migrations/
│   └── 001_initial_schema.sql  # Complete DB schema
├── CLAUDE.md                   # AI context
├── .env.local.example          # Environment template
├── next-sitemap.config.js      # Sitemap generation
└── tailwind.config.ts          # Design tokens
```

## Deployment (Vercel)

```bash
npx vercel --prod
```

Add all `.env.local.example` variables in Vercel Dashboard → Settings → Environment Variables.

Set `NEXT_PUBLIC_SITE_URL=https://samyutyoga.com` in production.

## Contact

- Email: info@samyutyoga.com  
- WhatsApp: +91 81477 62621  
- School: Samyut Yoga, Chamundi Hills, Mysore, Karnataka, India
