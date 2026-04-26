# Design Brief

## Direction
Luxury Minimal — Car-e-Ghar premium car care service website with dark, professional aesthetic and cyan primary accent.

## Tone
Confident professional minimalism. Dark foundation with bright cyan accents convey premium quality and trustworthiness for high-end automotive services.

## Differentiation
Cyan primary accent (#3abce0 / 0.75 0.15 190) paired with deep purple (#100996 / 0.65 0.18 270) creates distinctive color separation; clean geometric typography elevates service positioning.

## Color Palette

| Token      | OKLCH         | Role                                       |
| ---------- | ------------- | ------------------------------------------ |
| background | 0.14 0.015 260 | Deep dark charcoal base (dark mode)       |
| foreground | 0.95 0.01 260 | Near-white text, high contrast            |
| card       | 0.18 0.018 260 | Elevated surface for service cards       |
| primary    | 0.75 0.15 190 | Cyan accent, buttons, links, highlights  |
| accent     | 0.65 0.18 270 | Deep purple for secondary actions, accents |
| muted      | 0.22 0.02 260 | Subdued text, secondary elements         |
| border     | 0.28 0.02 260 | Subtle dividers and card borders          |

## Typography
- Display: Space Grotesk — bold geometric sans-serif for hero, section titles, branding
- Body: DM Sans — clean technical sans for body text, labels, UI
- Scale: hero `text-5xl md:text-7xl`, h2 `text-3xl md:text-5xl`, label `text-sm uppercase`, body `text-base`

## Elevation & Depth
Layered surface hierarchy: background → card (elevated) → hover state (lifted +4px shadow). Subtle shadows on interactive elements; no depth effects beyond shadow and translation.

## Structural Zones

| Zone    | Background         | Border              | Notes                                    |
| ------- | ------------------ | ------------------- | ---------------------------------------- |
| Header  | card with 50% opacity | border-bottom (muted) | Sticky, smooth scrolling, nav links      |
| Hero    | background         | —                   | Cyan accent text, CTA buttons prominent |
| Content | background, alternating bg-muted/40 | —          | Service grid, testimonials, contact     |
| Footer  | card with opacity  | border-top (muted)  | Address, phone, map placeholder, links   |

## Spacing & Rhythm
Spacious 2rem–4rem section gaps. Card grid: 3-col on desktop, 2-col tablet, 1-col mobile. Micro-spacing: 4px label→text, 12px inside cards, 16px section padding.

## Component Patterns
- Buttons: `btn-primary` (cyan bg, dark text), `btn-accent` (purple bg), rounded-lg, hover lifts +4px
- Cards: `.card-elevated` rounded-lg, border, soft shadow, hover state elevation
- Services: grid cards with image placeholder section (labeled Image 1/2/3), title, description, buttons

## Motion
- Entrance: `.fade-in` 0.6s ease-out on page load, staggered by section
- Hover: `.card-elevated` hover state lifts, buttons scale 95% on active
- Smooth: all transitions use `.transition-smooth` (0.3s cubic-bezier)

## Constraints
- No real images; use placeholders labeled Image 1, 2, 3
- Sticky navbar fixed top with z-index
- Fully responsive sm/md/lg breakpoints
- Dark mode default; light mode not required
- All text must maintain 0.95–0.14 lightness difference for AA+ contrast

## Signature Detail
Cyan primary accent with complementary deep purple accent creates a distinctive color tension uncommon in car service websites; paired with geometric bold typography establishes premium positioning.
