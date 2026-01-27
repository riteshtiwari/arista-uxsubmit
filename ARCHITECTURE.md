# Presentation App - Architecture Documentation

## Overview
Next.js-based presentation application for "When Good Design Decisions Go Bad" talk. Features story-based navigation with curated/all view modes.

## ⚠️ CRITICAL: Local Development Setup

### The Problem
The app uses `output: 'export'` and `basePath: '/presentations/designed-correctly'` for static deployment on Vercel, which **BREAKS local dev server**.

### The Solution
**next.config.ts** conditionally disables these settings in development:

```typescript
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  // Only export in production (Vercel builds)
  ...(!isDev ? { output: 'export' } : {}),
  
  // Skip basePath in dev for easier local testing
  ...(isDev || isStandalone ? {} : { basePath: '/presentations/designed-correctly' }),
};
```

### Local Development URLs
- **Dev server:** `http://localhost:3000/story/0/slide/0`
- **Production (Vercel):** `https://domain.com/presentations/designed-correctly/story/0/slide/0`

### Why This Matters
- `output: 'export'` causes 404s on dynamic routes in dev mode
- `basePath` requires accessing full prefixed path
- Without these fixes, you'll see "This page could not be found" errors locally
- Production builds on Vercel work fine because they use the production config

### Troubleshooting Local 404s
1. Check `next.config.ts` has isDev conditional logic
2. Verify you're accessing `/story/0/slide/0` not `/presentations/designed-correctly/story/0/slide/0`
3. Clear `.next` cache: `rm -rf .next`
4. Restart dev server

## Data Structure

### Stories (`/public/data/stories.json`)
- **Total Stories:** 21 (IDs 0-20)
- **Section Stories:** IDs 17, 18, 19, 20 (category: "Section Title")
- **Content Stories:** 17 stories with actual content

**Story Schema:**
```typescript
{
  id: number;
  title: string;
  category: string;
  accentColor: 'coral' | 'cyan' | 'amber' | 'emerald' | 'violet' | 'blue';
  slides: Slide[];
}
```

**Slide Schema:**
```typescript
{
  type: 'hook' | 'shock' | 'application' | 'custom';
  customComponent?: string;  // e.g., 'BomberPlane', 'IntroSlide'
  content: {
    headline?: string;
    subheadline?: string;
    body?: string;
    source?: string;
    takeaways?: string[];
    visual?: string;
    visualization?: VisualizationData;
  }
}
```

### View Modes

#### Curated Mode (16 items)
Defined in `/constants/navigation.ts` via `CURATED_STORY_IDS`:
- ID 0: Introduction
- ID 17: Section 1 - "Where Our Attention Goes"
  - ID 1: The Bullet Hole
  - ID 2: The Streetlight Effect
  - ID 4: The Map Is Not the Territory
- ID 18: Section 2 - "Why It Feels Right"
  - ID 15: The PM Said It Was Fine
  - ID 8: False Consensus Effect
  - ID 12: Local vs Global Optimization
  - ID 14: The Perfectly Consistent Wrong Thing
- ID 19: Section 3 - "What Breaks at Scale"
  - ID 6: Second-Order Effects
  - ID 7: The Dashboard That Died at 10x
  - ID 9: Regression to the Mean
- ID 20: Section 4 - "The Hard Truth"
  - ID 11: Not Understanding the Domain

#### All Mode (21 items)
Shows all stories in flat list without section hierarchy.

### Navigation Behavior
**Toggle Location:** Bottom of side nav  
**Persistence:** localStorage key `presentationViewMode`  
**Protection:** Viewing non-curated story in curated mode redirects to Introduction (ID 0)

## Design System

### Color Palette (`/app/globals.css`)

**Backgrounds:**
- `--bg-primary`: #0a0a0a (main canvas)
- `--bg-secondary`: #111111 (sidebar, cards)
- `--bg-tertiary`: #1a1a1a (hover states)
- `--bg-elevated`: #222222

**Text:**
- `--text-primary`: #ffffff
- `--text-secondary`: #888888
- `--text-muted`: #555555

**Accent Colors:**
- `--accent-coral`: #ff6b6b
- `--accent-cyan`: #4ecdc4
- `--accent-amber`: #f4a261
- `--accent-emerald`: #2ecc71
- `--accent-violet`: #a78bfa
- `--accent-blue`: #60a5fa

**Glassmorphism:**
- `--glass-bg`: rgba(255, 255, 255, 0.05)
- `--glass-border`: rgba(255, 255, 255, 0.1)
- `--glass-shadow`: rgba(0, 0, 0, 0.5)
- Applied with: `backdrop-filter: blur(20px)`

### Typography

**Font Family:** 'Inter' (weights: 300, 400, 500, 600, 700, 800)

**Type Scale:**
- `.heading-xl`: clamp(3rem, 6vw, 5rem), weight 800, line-height 1.1
- `.heading-lg`: clamp(2rem, 4vw, 3.5rem), weight 800, line-height 1.2
- `.heading-md`: clamp(1.5rem, 3vw, 2.5rem), weight 700, line-height 1.3
- `.heading-sm`: clamp(1.2rem, 2.5vw, 1.8rem), weight 600
- `.body-lg`: clamp(1.1rem, 2vw, 1.3rem), weight 400, line-height 1.7
- `.body`: clamp(0.95rem, 1.5vw, 1.1rem), line-height 1.7
- `.caption`: clamp(0.8rem, 1.2vw, 0.95rem), secondary color, weight 400

**Utility Classes:**
- `.accent-coral`, `.accent-cyan`, `.accent-amber`, `.accent-emerald`, `.accent-violet`, `.accent-blue`
- `.glass-card`: pre-configured glassmorphism card

### Animations & Transitions

**Timing Functions:**
- `--transition-fast`: 0.2s ease
- `--transition-medium`: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- `--transition-slow`: 0.6s cubic-bezier(0.4, 0, 0.2, 1)

**Framer Motion Patterns:**
- Initial opacity: 0
- Staggered delays: 0.2s, 0.4s, 0.6s, 0.8s
- Y-axis entrance: 10-30px
- Scale entrance: 0.9-0.95 to 1
- List item stagger: 0.1s increments

## Component Architecture

### Navigation Components

#### ChapterNav (`/components/Navigation/ChapterNav.tsx`)
**Dimensions:**
- Width: 260px
- Position: Fixed left, full height

**Styling:**
- Background: `var(--bg-secondary)`
- Overflow: Auto (vertical scroll)
- Z-index: 100

**Structure in Curated Mode:**
```
Navigation Item (story/section)
├─ Section Header (if category === "Section Title")
│  ├─ Font: 11px uppercase, weight 700, letter-spacing 0.05em
│  ├─ Padding: 12px 14px
│  └─ Active: coral border
└─ Sub-items (nested stories)
   ├─ Indented: 28px from left
   ├─ Font: 13px, weight 400
   └─ Active: emerald left border
```

**Structure in All Mode:**
- Flat numbered list (01, 02, 03...)
- Number opacity: 0.5, font-size 10px
- Active state: emerald border

**Toggle Arrow:**
- Located on Introduction item
- SVG chevron pointing left
- Opacity: 0.6, hover: 1.0
- Hides entire navigation

**Filter Toggle (Bottom):**
- Padding: 12px 20px 20px
- Font: 10px uppercase, weight 600, letter-spacing 0.08em
- Opacity: 0.4, hover: 0.7
- Icons: ◯ (All) / ◉ (Curated)
- Shows count: "All (21)" or "Curated (16)"

#### SlideIndicator (`/components/Navigation/SlideIndicator.tsx`)
**Position:** Fixed top-right (30px, 40px)  
**Format:** "X / Y"  
**Styling:**
- Current slide: primary color, weight 600
- Separator: opacity 0.5
- Total: opacity 0.7
- Font-size: 14px

### Slide Components

#### Generic Slide Types

**HookSlide** (unused in current data):
- Center-aligned
- Headline with optional subheadline (accented)
- Visual placeholder
- Animations: headline → subheadline → visual

**ShockSlide** (`/components/Slides/ShockSlide.tsx`):
- Center-aligned content
- Accented headline (heading-lg)
- Optional subheadline (body-lg, accented)
- Body text (body-lg)
- Source citation (caption)
- Animation sequence: headline → subheadline → body → source

**ApplicationSlide** (`/components/Slides/ApplicationSlide.tsx`):
- Headline (heading-lg)
- Takeaways list with arrow bullets (→)
  - Each item: bg-secondary card, 16px padding
  - Hover: translate right 4px
  - Bullet color matches accent
- Body text below
- Staggered list animations (0.1s per item)

**Custom Components** (20 unique):
- IntroSlide, PositioningSlide, OrientationSlide
- BomberPlane, StreetlightSearch, ConwaysLaw, MapTerritory
- CobraEffect, SecondOrder, ScalabilityBreak
- FalseConsensus, RegressionMean, PowerLaw
- DomainKnowledge, LocalGlobal, SilentAgreement
- ConsistentWrong, PMSignedOff, FigmaVsProduction
- SectionTitleSlide, Section2TitleSlide, Section3TitleSlide, Section4TitleSlide

Each custom component follows similar patterns:
- Center-aligned layout
- Framer Motion animations
- Accent color prop integration
- Custom visual elements/SVGs

### Page Components

#### StoryPage (`/components/StoryPage.tsx`)
Main orchestrator component.

**State Management:**
- `currentStory`: Current story object
- `totalSlides`: Slide count for indicator
- `isNavVisible`: Navigation toggle state
- `viewMode`: 'curated' | 'all' (persisted to localStorage)

**Keyboard Navigation:**
- `→`: Next slide, or next story at slide boundary
- `←`: Previous slide only (no story crossing)
- `↑`: Previous story (jump to first slide)
- `↓`: Next story (jump to first slide)
- `Home`: First story in current view
- `End`: Last story in current view

**Route Protection:**
- Monitors viewMode + current storyId
- Redirects to Introduction if non-curated story accessed in curated mode

**Layout:**
```
<div className="page">
  <button className="showNavButton" /> {/* when nav hidden */}
  <ChapterNav />
  <SlideIndicator />
  <main className={`main ${!isNavVisible ? 'centered' : ''}`}>
    <SlideContainer />
  </main>
</div>
```

**Main Content Behavior:**
- Default: margin-left 260px, width calc(100% - 260px)
- Nav hidden: margin-left 0, width 100%
- Transition: 0.3s ease-in-out

## Routing Structure

**Pattern:** `/story/[storyId]/slide/[slideId]`

**Examples:**
- `/story/0/slide/0` - Introduction, first slide
- `/story/1/slide/2` - The Bullet Hole, third slide
- `/story/17/slide/0` - Section 1 title

**Route Handling:** Next.js App Router  
**Page Component:** `/app/story/[storyId]/slide/[slideId]/page.tsx`

## Build & Development

**Framework:** Next.js 15+ (App Router)  
**Styling:** CSS Modules  
**Animations:** Framer Motion  
**TypeScript:** Strict mode enabled

**Key Scripts:**
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server

## File Organization

```
/app
  /story/[storyId]/slide/[slideId]
    page.tsx          # Route entry point
  globals.css         # Design system, typography
  layout.tsx          # Root layout
  page.tsx            # Home redirect

/components
  StoryPage.tsx       # Main orchestrator
  /Navigation
    ChapterNav.tsx    # Sidebar navigation
    SlideIndicator.tsx # Slide counter
    NavToggle.tsx     # (Not currently used)
  /Slides
    SlideContainer.tsx # Slide type router
    [SlideType].tsx   # Individual slide components
    
/constants
  navigation.ts       # CURATED_STORY_IDS

/public/data
  stories.json        # All story/slide content
  content.json        # Reference/citation data

/types
  content.types.ts    # TypeScript interfaces
```

## Image Handling
Currently placeholders. Images should be placed in `/public/images/` and referenced in story content.

## State Persistence
- View mode: `localStorage.getItem('presentationViewMode')`
- Only client-side (useEffect check for window)
- Default: 'curated'

## Accessibility
- Keyboard navigation supported
- `aria-label` on interactive elements
- `aria-current="page"` on active nav items
- `aria-live` on slide indicator
- Tab index management on hidden nav (-1 when hidden)

## Design Patterns

### Hover States
- Navigation items: color shift, subtle movement
- Takeaway cards: translate right 4px
- Toggle buttons: opacity increase
- Consistent timing: `--transition-fast` (0.2s)

### Active States
- Navigation: border accent (emerald for items, coral for sections)
- Font weight increase (400 → 500/700)
- Color accent application
- No background fills (border-only approach)

### Responsive Strategy
- Fluid typography via clamp()
- Flexible spacing
- Fixed navigation width (260px)
- Content adapts to available space
- Mobile breakpoints not yet implemented

## Known Constraints
- Navigation must show section hierarchy in Curated mode
- Section title stories (17-20) have only 1 slide each
- Introduction (ID 0) contains toggle arrow
- Filter toggle must persist state
- Non-curated stories require redirect in curated mode
- Left arrow never crosses story boundaries

## Future Considerations
- Mobile responsive layout
- Touch gesture support
- Image lazy loading
- Presentation mode (auto-advance)
- Speaker notes
- Export/print functionality
