# Gopal Kaul — Portfolio Site

Build a modern, minimal, premium portfolio site that feels like a luxury automotive brand's digital experience — sharp, fluid, and engineered.

## Tech Stack Decision

### Astro 5 + React Islands + GSAP + TailwindCSS v4

| Concern | Decision | Rationale |
|---|---|---|
| **Framework** | **Astro 5** | SSR/SSG, zero-JS by default, Content Layer for blog, View Transitions, islands architecture. Crushes Next.js on performance for content-driven sites. |
| **Interactive components** | **React** (via `client:visible` / `client:load` islands) | Used sparingly — nav menu, theme toggle, and any interactive widgets. Keeps JS payload tiny. |
| **Animations** | **GSAP + ScrollTrigger** (vanilla `<script>` in `.astro` files) | Framework-agnostic, no hydration overhead, perfect for scroll-driven reveals and timeline sequences. Far lighter than shipping Framer Motion + React runtime for every animation. |
| **Page transitions** | **Astro View Transitions** (`<ClientRouter />`) | Native browser API, SPA-like feel with zero bundle cost. Smooth crossfades between `/` and `/blog`. |
| **Styling** | **TailwindCSS v4** + custom design tokens | Utility-first but fully customized — no default shadcn look. Custom color palette, typography, and spacing. |
| **UI Components** | **shadcn/ui** (cherry-picked, heavily restyled) | Only use `Button`, `Card`, `Badge`, `Sheet` (mobile nav). Override every default to match our automotive design system. |
| **Blog** | **Astro Content Collections** (MDX) | Type-safe, fast builds, supports components inside blog posts. |
| **Analytics** | **Google Analytics 4 + Partytown** | Offloaded to web worker — zero impact on main thread. Tracks referral source, page views, etc. |
| **Deployment** | **Vercel** (or Netlify) | Edge SSR, automatic preview deploys, great Astro support. |

> [!TIP]
> This stack gives you the **best of both worlds**: Astro's near-zero JS performance + React's component ecosystem when you actually need interactivity. GSAP in vanilla `<script>` tags means animations run without hydration cost.

---

## Design Philosophy — "Engineered Elegance"

Inspired by **BMW M Division** and **Ducati Corse** — not the logos, but the *feeling*: precision, performance, and controlled aggression.

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--bg-primary` | `#FAFAF9` (warm white) | `#0A0A0B` (near-black) | Page background |
| `--bg-surface` | `#F0EFED` (stone) | `#141416` (elevated surface) | Cards, sections |
| `--text-primary` | `#1A1A1A` | `#E8E6E3` | Headings, body |
| `--text-muted` | `#6B6B6B` | `#8A8A8A` | Secondary text |
| `--accent` | `#DC2626` (BMW M Red) | `#EF4444` (lighter red) | CTAs, active states, highlights |
| `--accent-secondary` | `#1E40AF` (BMW M Blue) | `#3B82F6` | Subtle accents, links, code |
| `--border` | `#E5E5E5` | `#262626` | Dividers, card borders |
| `--gradient-hero` | Red → Blue (M-stripe) | Red → Blue (M-stripe glow) | Hero accent strip |

### Typography

- **Headings**: `Inter` (tight letter-spacing, heavy weight) — clean, engineered feel
- **Body**: `Inter` (regular weight) — consistent, premium
- **Monospace accents**: `JetBrains Mono` — for code snippets, section numbers, etc.
- **Branding**: Clean, typographic logo `GOPAL KAUL` using weighted Montserrat.
- All text uses `font-feature-settings: "cv02", "cv03", "cv04"` for Inter's alternate glyphs

### Design Principles

1. **Negative space is a feature** — generous whitespace, let content breathe
2. **Typography-driven hierarchy** — oversized headings (`clamp(2.5rem, 5vw, 5rem)`), subtle body
3. **Monochrome + accent pops** — mostly grayscale with strategic red/blue M-stripe accents
4. **Micro-interactions everywhere** — magnetic cursor effects, smooth reveals, parallax layers
5. **No visual clutter** — no skill bars, no percentage charts, no icon grids

---

## Page Structure & Sections

### `/` — Home (Single-Page Scroll)

#### Hero Section
- Full-viewport intro with your name in large, bold typography
- Animated subtitle using a **typewriter/morph** effect cycling through: `Software Developer` → `Linux Enthusiast` → `Motorcycle Rider` → `Musician`
- Subtle M-stripe gradient line (red → blue) animating across the bottom
- Floating `<GK/>` monogram with a subtle glow
- Two CTAs: "View my work" (scroll) + "Get in touch" (scroll to contact)
- Background: subtle noise texture + very faint grid pattern that shifts on scroll

#### About Section (`#about`)
- Split layout: text left, abstract visual/photo right
- Short, punchy 2-3 paragraph bio (not a wall of text)
- Inline tech badges with subtle hover animations (glow + lift)
- Tech categories: **Languages**, **Frameworks**, **Tools** — presented as a minimal, elegant tag cloud (not an icon grid)
- Animated on scroll-enter via GSAP `ScrollTrigger`

#### Experience Section (`#experience`)
- **Horizontal timeline** (desktop) / **vertical stack** (mobile)
- Each role as a sleek card with:
  - Company name + role title
  - Date range
  - 1-2 bullet points (concise)
  - Tech tags as subtle badges
- Cards animate in with staggered fade + slide
- Active/current role gets the accent highlight treatment
- Companies: Fanatics → Oracle (Senior) → Oracle (IC2) → Asymmetri → SkilZen → Accellor

#### Contact Section (`#contact`)
- Clean, minimal layout
- Large "Let's connect" heading
- Email as a prominent, styled link
- Social icons (GitHub, LinkedIn, Instagram, Spotify, X/Twitter) with magnetic hover effect
- Optional: a minimal contact form (can add later)

### `/blog` — Blog Index
- Clean grid of blog post cards
- Each card: title, date, reading time, tags, excerpt
- Hover effect: subtle lift + accent border glow
- Filtering by tags (optional, can add later)
- Pagination or "load more"

### `/blog/[slug]` — Blog Post
- Clean reading experience with proper typography (`prose` styles)
- Table of contents sidebar (sticky on desktop)
- Code blocks with syntax highlighting (Shiki, already built into Astro)
- Estimated reading time
- Back to blog link
- Share buttons (optional)

---

## Navigation

- **Desktop**: Minimal top bar with `<GK/>` logo left, section links center-right, theme toggle + "Blog" right
- **Mobile**: Hamburger → full-screen overlay menu with staggered animation
- Section links use smooth scroll with active state tracking
- Navigation is semi-transparent with a backdrop blur on scroll (`glassmorphism`)
- Theme toggle: sun/moon icon with a smooth morph animation

---

## Animation Strategy (GSAP)

| Element | Animation | Trigger |
|---|---|---|
| Hero text | Clip-path reveal + fade up | Page load |
| Hero subtitle | Typewriter/morph cycle | Page load (loop) |
| M-stripe line | Width animation (0% → 100%) | Page load |
| Section headings | Slide up + fade in | ScrollTrigger (enter viewport) |
| Experience cards | Staggered slide up + fade | ScrollTrigger |
| Tech badges | Scale in with stagger | ScrollTrigger |
| Contact socials | Magnetic follow cursor on hover | Pointer events |
| Page transitions | Crossfade via View Transitions API | Navigation |
| Nav background | Opacity transition on scroll | Scroll position |

> [!IMPORTANT]
> All GSAP animations live in `<script>` tags inside `.astro` files — **not** inside React components. This means zero hydration cost for animations. React is only used for genuinely interactive widgets.

---

## Analytics — Google Analytics 4 + Partytown

- Install `@astrojs/partytown`
- GA4 script loaded with `type="text/partytown"` — runs in a web worker
- Forward `dataLayer.push` and `gtag` events
- Tracks: page views, referral source (`utm_source`), scroll depth, time on page
- Zero impact on main thread / Lighthouse scores

> [!NOTE]
> You'll need to provide your GA4 Measurement ID (`G-XXXXXXXXXX`). I'll set up the integration so you just need to drop in your ID later.

---

## Project Structure

```
portfolio/
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── public/
│   └── fonts/            # Self-hosted Inter + JetBrains Mono (optional, or use Google Fonts CDN)
├── src/
│   ├── assets/           # Images, icons
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── MobileMenu.tsx       # React island (client:load)
│   │   ├── ThemeToggle.tsx      # React island (client:load)
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── BlogCard.astro
│   │   └── ui/                  # shadcn components (restyled)
│   │       ├── button.tsx
│   │       ├── badge.tsx
│   │       ├── card.tsx
│   │       └── sheet.tsx
│   ├── content/
│   │   ├── config.ts            # Content collection schema
│   │   └── blog/
│   │       └── hello-world.mdx  # Sample blog post
│   ├── data/
│   │   └── experience.ts       # Experience data (type-safe)
│   ├── layouts/
│   │   ├── BaseLayout.astro     # HTML shell, meta, analytics, fonts
│   │   └── BlogLayout.astro     # Blog post layout (prose styles)
│   ├── lib/
│   │   ├── animations.ts       # GSAP animation utilities
│   │   └── utils.ts            # cn() helper, etc.
│   ├── pages/
│   │   ├── index.astro          # Home page
│   │   ├── blog/
│   │   │   ├── index.astro      # Blog listing
│   │   │   └── [...slug].astro  # Dynamic blog posts
│   │   └── 404.astro
│   └── styles/
│       └── global.css           # Tailwind directives + custom styles
```

---

## User Review Required

> [!IMPORTANT]
> **Your current role at Fanatics** — Your resume shows you're at Fanatics since Feb 2026 as Software Developer 2. Your current portfolio still lists Oracle as your latest. I'll update to reflect **Fanatics** as current. Confirm this is correct?

> [!IMPORTANT]
> **Photo** — Do you want a profile photo on the site? If yes, please provide one or point me to where it is. If not, I'll use an abstract/geometric visual instead.

> [!IMPORTANT]
> **Domain / Deployment** — Are you deploying to `gopal-kaul.is-a.dev` again? Should I set up for Vercel, Netlify, or GitHub Pages?

## Open Questions

1. **GA4 Measurement ID** — Do you already have a Google Analytics 4 property set up? If so, share the `G-XXXXXXXXXX` ID. If not, I'll add a placeholder.

2. **Blog content** — Should I create a sample blog post, or do you have existing posts to migrate?

3. **Resume/CV download** — Want a "Download Resume" button? If so, should it link to the PDF you shared?

4. **Projects section** — Your resume mentions Symmetry and Tradejini. Want to showcase projects, or keep it minimal with just experience for now?

5. **LinkedIn URL** — Your resume has `linkedin.com/in/gopal-kaul` — confirm this is your current LinkedIn?

---

## Verification Plan

### Automated Tests
- `npm run build` — ensure zero build errors
- Lighthouse CI (target: 95+ Performance, 100 Accessibility, 100 SEO, 100 Best Practices)
- Check all View Transitions work between pages
- Responsive testing at 320px, 768px, 1024px, 1440px breakpoints

### Manual Verification
- Visual review of light/dark mode in browser
- Scroll animation smoothness check
- Mobile menu functionality
- Blog post rendering with MDX components
- Analytics verification in GA4 Real-Time dashboard
