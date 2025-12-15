# GitHub Repository Intelligence Platform - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium dark-themed SaaS products like Linear, Vercel, and Raycast. Focus on calm professionalism, subtle sophistication, and intelligence-driven interfaces.

## Core Design Principles

### Dark Theme Foundation
- **Base Colors**: Dark charcoal/slate backgrounds (never pure black #000000)
- **Surface Treatment**: Soft contrast for eye-friendly extended viewing
- **Depth**: Clean surfaces with layered depth through subtle shadows
- **Premium SaaS Vibe**: Calm, professional, confident—not flashy

### Intentional Color Strategy
Colors convey meaning, not decoration:
- 🟢 **Green Gradients**: Healthy, stable, positive metrics
- 🟡 **Amber Gradients**: Warnings, needs attention
- 🔴 **Red Gradients**: Risk, critical issues
- 🟣 **Purple Gradients**: Intelligence, analysis insights
- 🔵 **Blue Gradients**: Popularity, community activity

**Gradient Rules**:
- Subtle and directional
- Used for emphasis on critical elements
- Never decorative or overwhelming

## Typography Hierarchy
- **Hero Headlines**: Bold, authoritative weight
- **Section Titles**: Clear hierarchy with icon-first pattern
- **Body Text**: High readability optimized for dark backgrounds
- **Metrics/Numbers**: Large, prominent display for key statistics
- **Labels**: Secondary weight, subtle contrast

## Layout System
**Spacing Primitives**: Tailwind units of **2, 4, 8, 12, 16, 20, 24** for consistent rhythm
- Card padding: p-6 to p-8
- Section spacing: py-12 to py-20
- Component gaps: gap-4 to gap-6

**Grid Patterns**:
- Stats cards: 2-4 column responsive grid
- Analysis sections: Single column for depth, cards for scannability
- Feature preview: 2x2 grid (desktop), stack on mobile

## Component Library

### StatCard (Reusable)
- Icon → Big Number → Label pattern
- Glassy dark surface with subtle border
- Hover: Lift effect (y-axis transform) + enhanced shadow
- Motion: Staggered entry animation

### HealthCard / InsightCard
- Icon-first with color-coded gradient accent
- One-line insight format
- Rounded corners (rounded-lg to rounded-xl)
- Soft drop shadow for depth

### ScoreCard
- Prominent numerical score (0-10 or percentage)
- Category label
- Visual indicator (gradient bar or ring)
- Grouped for comprehensive scoring view

### Charts (Recharts Integration)
- Dark theme optimized
- Animated entry reveals
- Icon + title above chart
- Clean, minimal styling—data is the star
- Charts include: Language Pie, Commit Timeline, Issues vs Resolutions

## Page-Specific Guidelines

### Home Page
**Hero Section**:
- Centered layout
- Headline: "Understand GitHub repositories beyond stars."
- Subtext: "Architecture. Code quality. Engineering maturity."
- Repository input field (owner/repo format)
- Primary CTA: "Analyze Repository →" with gradient accent
- Background: Subtle gradient or abstract pattern (dark-on-dark)

**Feature Preview Cards** (4 cards):
- Icons: 🧱 Architecture Quality, 🫀 Code Health, 📘 Documentation, 🚀 Production Readiness
- Glassy surfaces with gradient borders
- Hover lift animation
- Clearly interactive

### Repository Analyzer Page (Core Product)

**Repo Header**:
- Large repository name
- Owner (secondary emphasis)
- Visibility badge (🔓 Public / 🔒 Private)
- Description text

**Core Stats Row**:
- 5 StatCards: ⭐ Stars, 🍴 Forks, 🐞 Open Issues, 🔄 Commits, 🕒 Last Updated
- Horizontal layout, responsive stack

**Analysis Sections** (8 comprehensive sections):
Each section feels like a senior engineer's review:
1. Executive Summary (TL;DR + verdict badges)
2. Engineering Mindset & Intent
3. Architecture & System Design
4. Code Quality & Maintainability
5. Git & Engineering Discipline
6. Documentation & DX
7. Testing & Reliability
8. Performance, Security & Best Practices

**Visual Intelligence Section**:
- 3 charts with consistent dark styling
- Animated reveals on scroll

**Insight Cards**:
- 4-6 one-line insights with color-coded icons
- Quick-scan format

**Scoring Dashboard**:
- 6 dimension scores (0-10 each)
- Overall Engineering Maturity Score (0-100, prominent)
- Visual progress indicators

**Improvement Roadmap**:
- Split: ✅ Short-term (1-2 weeks) | 🚀 Long-term (1-3 months)
- Actionable bullet points

**Hiring Perspective**:
- Recruiter-style verdict
- Role suitability
- What's holding it back

### Profile Context (Minimal, Secondary)
- Avatar (small, circular)
- Username + followers count
- GitHub link
- Never dominates—quiet sidebar or top corner placement

## Motion & Animation (Framer Motion - Mandatory)
**Subtle + Premium Philosophy**:
- Page enter: Fade + slide transitions
- Card hover: Y-axis lift (-4px) + shadow enhancement
- Chart reveals: Staggered entry on scroll
- Section loading: Staggered children animations
- No flashy effects—everything feels alive but calm

**Key Interactions**:
- All cards elevate on hover
- Buttons have subtle scale on press
- Focus states: Gradient outline rings
- Loading states: Skeleton shimmer (dark theme)

## Images
**No hero images required**. This is a data-driven intelligence platform focused on charts, metrics, and analysis. Visual impact comes from:
- Clean UI surfaces
- Animated data visualizations
- Intentional gradients
- Premium typography

If future imagery needed: Use abstract tech/code patterns, never stock photos.

## Accessibility
- High contrast text on dark backgrounds
- Clear focus indicators (gradient rings)
- Icon + text labels for all interactive elements
- Keyboard navigation support
- Semantic HTML structure

## Quality Standards
This must feel like:
✅ A real SaaS developer intelligence tool  
✅ Recruiter and senior engineer respectable  
✅ Top-tier portfolio demonstration  
✅ Confident, not flashy  
✅ Calm, dark, modern, insight-driven

**Icon Library**: Lucide React exclusively  
**Charts**: Recharts with dark theme  
**Motion**: Framer Motion throughout