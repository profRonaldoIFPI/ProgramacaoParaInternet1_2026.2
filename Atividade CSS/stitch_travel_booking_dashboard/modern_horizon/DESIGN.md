---
name: Modern Horizon
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3e4850'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6e7881'
  outline-variant: '#bec8d2'
  surface-tint: '#006591'
  primary: '#006591'
  on-primary: '#ffffff'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#89ceff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#d88a00'
  on-tertiary-container: '#4a2c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system projects effortless luxury, discovery, and quiet confidence. Designed for discerning travelers and modern explorers, it bridges the gap between high-end concierge elegance and crisp technological efficiency. The emotional response is centered around anticipation, calm clarity, and inspiration—stripping away visual clutter and chaotic travel aggregator tropes in favor of an airy, luminous editorial atmosphere anchored by deep, deliberate structural contrast.

The aesthetic fuses **Modern Minimalism** with **Architectural Tonal Layering**. Vast, breathable ivory-tinted canvases create breathing room for rich photography, while deep oceanic navy elements provide structural gravitas and orientation. Strategic pops of radiant azure and warm sunlit amber direct intent, evoking sun-drenched landscapes and tranquil ocean depths.

## Colors

The palette establishes an interplay between daylight clarity and midnight structure:

- **Primary (`#0EA5E9`) — Sky Cyan**: Used for primary conversion triggers, active itinerary highlights, interactive cues, and link states. It represents dynamic motion and clarity.
- **Secondary (`#0F172A`) — Deep Oceanic Navy**: Anchors persistent structures such as sidebars, top headers in immersive views, heavy editorial headers, and elevated badges. Provides executive polish and crisp contrast.
- **Tertiary (`#F59E0B`) — Warm Amber**: Reserved for ratings, special recommendations, price alerts, curated badges, and subtle sun-warmed accents.
- **Neutral (`#F8FAFC` to `#FFFFFF`) — Mist & Pure White**: Serves as the expansive canvas and layered card planes, complemented by `#E2E8F0` and `#CBD5E1` for delicate structural dividers.

In dark structural surfaces (such as navigation rails or drawer panels), `#1E293B` provides contextual layering above `#0F172A` with soft optical borders.

## Typography

Typographic hierarchy relies on **Plus Jakarta Sans** across all levels, utilizing its sculpted geometric balance, friendly terminals, and crisp legibility at compact interface scales.

- **Headlines & Display:** Heavy weights (`700`, `800`) with tight line heights evoke an editorial travel publication feel.
- **Body:** Standardized at `400` weight with generous line-height ratios (`1.5` to `1.6`) to ensure high readability during itinerary browsing and accommodation reviews.
- **Labels & Micro-data:** Styled in `600` and `700` with slight positive tracking (`+0.02em`) on compact tags, flight metadata, and pricing indicators.

## Layout & Spacing

The layout model is governed by a **12-column responsive fluid grid** with an intentional, rhythmic layout engine:

- **Desktop (1200px+):** 12 columns, `gutter: 1.5rem` (24px), dynamic max-width container capped at 1440px with `margin: 2.5rem` (40px) outer padding. Navigation utilizes a fixed 280px left architectural bar or floating header.
- **Tablet (768px - 1199px):** 8 columns, `gutter: 1.25rem` (20px), `margin: 1.5rem` (24px). Sidebar collapses to an icon rail or contextual modal sheet.
- **Mobile (below 768px):** 4 columns, `gutter: 1rem` (16px), `margin: 1rem` (16px). Bottom bar transitions handle core navigation.

Component rhythm adheres to a strict 4px/8px incremental scale, ensuring consistent baseline alignment between media cards, filter widgets, and booking forms.

## Elevation & Depth

Visual hierarchy uses **ambient diffused shadows** blended with **subtle low-contrast borders** rather than stark drop shadows:

- **Level 0 (Base Canvas):** Un-elevated `#F8FAFC` foundation.
- **Level 1 (Cards & Modules):** Pure white surface (`#FFFFFF`) with a faint 1px border (`rgba(226, 232, 240, 0.8)`) paired with a soft ambient shadow: `0 2px 8px -2px rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Dropdowns, Hover States, Floating Search Bars):** `0 12px 24px -6px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modals, Overlays, Floating Itinerary Bars):** `0 20px 40px -8px rgba(15, 23, 42, 0.16)`.
- **Dark Inverted Elements (Sidebar / Panels):** Surfaces use tonal stratification (`#0F172A` as base, `#1E293B` as nested elements) punctuated with subtle translucent inner borders (`rgba(255, 255, 255, 0.08)`).

## Shapes

The design system embraces a **Rounded (Level 2)** shape identity. 

- Standard inputs, buttons, and listing tags carry `0.5rem` (8px) corner radii.
- Medium components such as destination cards, summary blocks, and modular panels adopt `1rem` (16px).
- Large focal cards, modals, and Hero search capsules leverage `1.5rem` (24px).
- Badges, status pills, and round action buttons utilize full circular geometry (`pill` / `9999px`).

## Components

- **Buttons:**
  - *Primary*: Background `#0EA5E9`, text `#FFFFFF`, font `label-lg`, `rounded-md` (8px). Hover triggers smooth brightness transition with `0 4px 12px rgba(14, 165, 233, 0.25)`.
  - *Secondary / Inverse*: Background `#0F172A`, text `#FFFFFF`. Used for high-impact actions like "Book Now" or "Checkout".
  - *Subtle / Ghost*: Transparent background, text `#0F172A`, subtle border on hover (`#E2E8F0`).
- **Cards (Destinations & Accommodations):**
  - Crisp white background, `rounded-xl` (16px), delicate border (`#E2E8F0`), with a 16:10 or 4:3 aspect-ratio image container.
  - Hover state applies a 4px upward translation (`translate-y: -4px`) and transitions the shadow from Level 1 to Level 2.
  - Includes absolute floating badges (e.g., rating badge `#FEF3C7` with `#D97706` text and star icon).
- **Search & Filter Modules (Omni-bar):**
  - Segmented floating pill capsules combining Destination, Date Picker, and Guests.
  - Dividers are 1px vertical tracks (`#E2E8F0`). Active field displays an internal glow ring in `#0EA5E9` (15% opacity).
- **Chips & Tags:**
  - Filters utilize soft tinted neutral backgrounds (`#F1F5F9`) with `#334155` text. Active state adopts deep navy (`#0F172A`) with pure white text and smooth scale micro-interaction.
- **Inputs & Form Controls:**
  - Height of 44px to 48px, background `#FFFFFF`, border `1px solid #CBD5E1`, text `#0F172A`. Focused state transitions to `border-color: #0EA5E9` with a subtle focus ring.
- **Checkboxes & Radios:**
  - Checkboxes use `rounded-sm` (4px), 20x20px dimension. Selected state displays `#0EA5E9` fill with a crisp white check glyph.