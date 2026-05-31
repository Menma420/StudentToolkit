# StudentTools.in — Complete Implementation Blueprint
### Single Source of Truth for AI Coding Agent Execution

> **Version:** 1.0 | **Stack:** Next.js 15 · TypeScript · Tailwind CSS · shadcn/ui · Vercel  
> **Target:** Lighthouse 95+ across all metrics | LCP < 1.5s | CLS = 0 | INP < 100ms

---

## Table of Contents

1. [Product Specification (PRD)](#1-product-specification)
2. [MVP Scope](#2-mvp-scope)
3. [Information Architecture](#3-information-architecture)
4. [Complete URL Structure](#4-complete-url-structure)
5. [Component Architecture](#5-component-architecture)
6. [Page Templates](#6-page-templates)
7. [Design System](#7-design-system)
8. [SEO Architecture](#8-seo-architecture)
9. [Content Strategy](#9-content-strategy)
10. [Folder Structure](#10-folder-structure)
11. [State Management Strategy](#11-state-management-strategy)
12. [Data Architecture](#12-data-architecture)
13. [Tool Engine Architecture](#13-tool-engine-architecture)
14. [Performance Strategy](#14-performance-strategy)
15. [Analytics Architecture](#15-analytics-architecture)
16. [AdSense Architecture](#16-adsense-architecture)
17. [Accessibility Plan](#17-accessibility-plan)
18. [Testing Strategy](#18-testing-strategy)
19. [Deployment Architecture](#19-deployment-architecture)
20. [AI Coding Agent Execution Plan](#20-ai-coding-agent-execution-plan)

---

## 1. Product Specification

### Vision

StudentTools.in is the definitive free utility website for Indian college students. It provides fast, accurate, mobile-first calculators and tools that solve recurring academic problems — CGPA calculation, attendance tracking, exam rank prediction, and placement preparation — with zero friction, no login required, and no paywalls.

### User Personas

**Persona 1 — The Engineering Student (Primary)**
- Age: 18–22
- Device: Mid-range Android smartphone (Redmi, Realme, Samsung M-series)
- Network: 4G mobile data, occasionally college WiFi
- Use case: Checks CGPA at end of every semester, checks attendance weekly, uses GATE tools in final year
- Search behavior: Direct Google searches like "cgpa calculator", "how many classes can I miss"
- Pain: Existing tools are slow, ad-heavy, not India-specific

**Persona 2 — The CAT/GATE Aspirant**
- Age: 21–26, final year or working professional
- Device: Mix of mobile and laptop
- Use case: Percentile estimation, rank prediction, college predictor
- Search behavior: "CAT percentile calculator 2026", "GATE rank predictor CSE"
- Pain: Scattered data, tools require account creation

**Persona 3 — The Placement Seeker**
- Age: 20–24, pre-final and final year
- Device: Laptop primary, mobile secondary
- Use case: CTC calculator, TCS NQT score, aptitude practice
- Search behavior: "TCS NQT score calculator", "take home salary calculator india"
- Pain: Generic tools not calibrated for Indian fresher packages

### User Goals

| Goal | Frequency | Tool |
|------|-----------|------|
| Calculate/convert CGPA | Every semester | CGPA Calculator |
| Check bunkable classes | Weekly during semester | Attendance Calculator |
| Know marks needed to pass | Pre-exam | Percentage Calculator |
| Predict GATE rank | Annual (result season) | GATE Rank Predictor |
| Estimate CAT percentile | Annual (result season) | CAT Percentile Calculator |
| Study using Pomodoro | Daily | Study Timer |
| Calculate take-home salary | Pre-placement | CTC Calculator |

### Functional Requirements

**FR-01** — Every tool must work entirely client-side with no API calls for core functionality.

**FR-02** — All tools must produce results without page reload.

**FR-03** — Tool results must update in real time as inputs change (on input, not on submit).

**FR-04** — Every tool page must have: tool description, inputs, results, how-it-works section, FAQ (min 4 Q&As), related tools section.

**FR-05** — Site must have a functional search that filters tools by name and category.

**FR-06** — Mobile breakpoints must be tested at 375px, 390px, 414px, 768px.

**FR-07** — All forms must have accessible labels, error messages, and ARIA attributes.

**FR-08** — Pages must render completely without JavaScript for SEO (SSG).

**FR-09** — AdSense ad slots must be present but conditionally loaded.

**FR-10** — Sitemap must be auto-generated and include all tool and blog pages.

### Non-Functional Requirements

**NFR-01** — LCP < 1.5 seconds on mobile 4G (Lighthouse throttled).

**NFR-02** — CLS = 0 on all pages (no layout shift from ads or async content).

**NFR-03** — INP < 100ms on all interactive tool inputs.

**NFR-04** — All pages must score 95+ on Lighthouse Performance, Accessibility, SEO, Best Practices.

**NFR-05** — Zero runtime errors in production (TypeScript strict mode enforced).

**NFR-06** — All tool logic must be unit-testable pure functions.

**NFR-07** — New tool additions must require only: (1) adding entry to tools registry, (2) creating one component file.

**NFR-08** — Total JavaScript bundle for tool pages < 150KB gzipped.

### Success Metrics

| Metric | 30-day target | 90-day target | 12-month target |
|--------|---------------|---------------|-----------------|
| Organic monthly visitors | 500 | 5,000 | 50,000 |
| Pages indexed by Google | 20 | 60 | 150+ |
| Lighthouse Performance | 95+ | 97+ | 97+ |
| Core Web Vitals pass rate | 100% | 100% | 100% |
| AdSense monthly revenue | ₹0 | ₹500 | ₹6,000 |
| Avg. session duration | 90s | 120s | 150s |
| Pages per session | 1.5 | 2.0 | 2.5 |

---

## 2. MVP Scope

### MVP Tools (Launch Set — 7 Tools)

---

### Tool 1: CGPA Calculator

**Purpose:** Convert semester grades/marks to CGPA on 10-point and 4-point scales. Convert CGPA to percentage.

**Inputs:**

| Field | Type | Validation | Default |
|-------|------|-----------|---------|
| Scale | Select | Required, options: 10-point \| 4-point | 10-point |
| Grading mode | Select | Required, options: Grade Points \| Marks | Grade Points |
| Number of subjects | Number | Min: 1, Max: 20, Integer | 6 |
| Subject credits (per subject) | Number[] | Min: 1, Max: 20, Integer | 4 |
| Grade points / Marks (per subject) | Number[] | Grade points: 0–10 or 0–4; Marks: 0–100 | — |

**Outputs:**

- CGPA (2 decimal places)
- Equivalent percentage (formula: CGPA × 9.5 for 10-point scale)
- Grade classification (Distinction ≥ 8.5, First Class ≥ 6.5, Second Class ≥ 5.5)
- Semester-wise CGPA trend table if multiple semesters entered

**Validation Rules:**

- If grade points mode: value must be ≤ selected scale maximum
- Credits must be positive integers
- Total credit-weighted average must be computable
- Show inline error per field, not summary

**Edge Cases:**

- 0 credits in a subject — disable that row, show warning
- All subjects with 0 marks — show "CGPA: 0.00" without crashing
- Single subject input — valid, compute normally
- Different universities have different max marks for internal/external — provide note

**SEO Opportunity:** "CGPA calculator" (90K/mo), "cgpa to percentage" (50K/mo), "VTU cgpa calculator" (12K/mo), "Anna University cgpa" (10K/mo)

---

### Tool 2: Attendance Calculator

**Purpose:** Calculate current attendance percentage; determine how many classes a student can miss or must attend to meet a target percentage.

**Inputs:**

| Field | Type | Validation | Default |
|-------|------|-----------|---------|
| Classes attended | Number | Min: 0, Integer | — |
| Total classes held | Number | Min: 1, Integer | — |
| Target percentage | Number | Min: 50, Max: 100 | 75 |

**Outputs:**

- Current attendance %
- Classes that can still be missed (to stay above target)
- Classes needed if currently below target
- Visual percentage bar

**Validation Rules:**

- Attended ≤ Total held (show error if violated)
- Target must be a realistic value (warn if > 95%)
- Both fields required before computing

**Edge Cases:**

- Already at exactly 75% — show "0 classes can be missed"
- Already below target — switch to "attend N more classes" mode
- 100% attendance — show celebratory message
- 0 classes held — show empty state, not error

**SEO Opportunity:** "attendance calculator" (60K/mo), "how many classes can I miss" (15K/mo), "bunk calculator" (8K/mo)

---

### Tool 3: Percentage / Marks Calculator

**Purpose:** Calculate percentage from marks, marks needed to achieve a target percentage, and aggregate across subjects.

**Mode 1 — Marks to Percentage:**

| Input | Validation |
|-------|-----------|
| Marks obtained | 0 ≤ value ≤ maximum marks |
| Maximum marks | Min: 1 |

Output: Percentage (2 decimal places), grade classification

**Mode 2 — Marks Needed:**

| Input | Validation |
|-------|-----------|
| Target percentage | 0–100 |
| Maximum marks | Min: 1 |

Output: Minimum marks needed (round up)

**Mode 3 — Aggregate (multi-subject):**

| Input | Validation |
|-------|-----------|
| Subject name | Optional text |
| Marks obtained | Per subject |
| Maximum marks | Per subject |

Output: Overall percentage, subject-wise table

**SEO Opportunity:** "percentage calculator" (50K/mo), "marks to percentage" (20K/mo), "aggregate percentage calculator" (5K/mo)

---

### Tool 4: GATE Rank Predictor

**Purpose:** Predict GATE rank from score using historical rank-score data for each branch.

**Inputs:**

| Field | Type | Validation |
|-------|------|-----------|
| GATE Score | Number | 0–100, 2 decimal places |
| Branch | Select | Required, 29 GATE branches |
| Year | Select | Available years with data |

**Outputs:**

- Estimated rank range (e.g., "Rank: 150–250")
- Percentile
- Qualifying for PSU cutoff (Yes/No with disclaimer)
- IIT/NIT/IIIT admission probability (based on historical cutoffs)
- Link to college predictor

**Data source:** Static JSON with GATE official data (score vs rank at 5-point intervals)

**Edge Cases:**

- Score above historical maximum — "Likely top 10 rank"
- Score below qualifying cutoff — show qualifying marks, encourage retry
- Branch with limited historical data — show disclaimer

**SEO Opportunity:** "GATE rank predictor" (40K/mo), "GATE score to rank" (10K/mo), "GATE 2026 rank predictor" (seasonal spike)

---

### Tool 5: CAT Percentile Calculator

**Purpose:** Estimate CAT percentile from slot-normalized score.

**Inputs:**

| Field | Type | Validation |
|-------|------|-----------|
| CAT Score (raw or scaled) | Number | 0–198 (maximum possible) |
| Slot | Select | Morning \| Afternoon \| Evening |
| Year | Select | Available years |

**Outputs:**

- Estimated percentile
- VARC / DILR / QA sectional percentile estimates
- IIM shortlist probability (rough indicator)
- Table of historical cutoffs for top IIMs

**Data source:** Static JSON with CAT score-percentile mapping from official CAT data

**Edge Cases:**

- Score = 0 — valid, show 0th percentile
- Percentile > 99.9 — cap at "99.9+"
- Score input while changing year — recalculate immediately

**SEO Opportunity:** "CAT percentile calculator" (35K/mo), "CAT score to percentile" (8K/mo)

---

### Tool 6: Study Timer (Pomodoro)

**Purpose:** Web-based Pomodoro timer with session tracking and sound alerts.

**Inputs:**

| Setting | Type | Default | Range |
|---------|------|---------|-------|
| Work duration | Number (minutes) | 25 | 5–90 |
| Short break | Number (minutes) | 5 | 1–30 |
| Long break | Number (minutes) | 15 | 5–60 |
| Sessions before long break | Number | 4 | 2–8 |

**States:** Idle → Work → Short Break → Long Break → Complete

**Features:**
- Visual circular progress indicator (CSS-only, no canvas)
- Browser tab title updates with remaining time
- Sound alert on session completion (Web Audio API, optional)
- Session count display
- Browser notification support (optional, with permission prompt)
- Keyboard shortcuts: Space (start/pause), R (reset)

**Persistence:** localStorage for session count and settings

**SEO Opportunity:** "pomodoro timer" (15K/mo), "study timer" (6K/mo), "pomodoro timer online" (5K/mo)

---

### Tool 7: CTC / Salary Calculator

**Purpose:** Break down annual CTC into monthly take-home salary considering standard Indian deductions.

**Inputs:**

| Field | Type | Validation | Notes |
|-------|------|-----------|-------|
| Annual CTC | Number | Min: 100000 | In rupees |
| Basic salary % of CTC | Number | 40–60 | Default 50% |
| HRA % of basic | Number | 0–100 | Default 40% |
| PF deduction | Boolean | — | Default: true |
| Professional tax (state) | Select | Indian states | Varies by state |
| Income tax regime | Select | Old \| New | Default: New |

**Outputs:**

- Monthly gross salary
- Monthly deductions breakdown (PF, Professional Tax, TDS estimate)
- Monthly take-home (in-hand)
- Annual breakdown table
- Tax slab applicable

**Edge Cases:**

- Very low salary (below tax threshold) — TDS = 0
- PF opt-out — recalculate without EPF deduction
- Metro vs non-metro HRA exemption — dropdown

**SEO Opportunity:** "CTC calculator India" (30K/mo), "take home salary calculator" (25K/mo), "in hand salary calculator" (15K/mo)

---

### MVP Supporting Pages

| Page | Purpose |
|------|---------|
| Homepage | Tool discovery hub |
| /tools | Full tool listing |
| /about | About page (AdSense requirement) |
| /contact | Contact form (AdSense requirement) |
| /privacy | Privacy policy (GDPR + AdSense requirement) |
| /blog | Blog index |
| 5 initial blog posts | SEO + AdSense content requirement |

---

## 3. Information Architecture

### Primary Navigation

```
Logo (StudentTools.in)
├── Tools (mega menu dropdown)
│   ├── CGPA Tools
│   │   ├── CGPA Calculator
│   │   ├── GPA to Percentage Converter
│   │   └── Semester GPA Calculator
│   ├── Attendance Tools
│   │   ├── Attendance Calculator
│   │   └── Bunk Calculator
│   ├── Exam Tools
│   │   ├── GATE Rank Predictor
│   │   ├── CAT Percentile Calculator
│   │   └── Percentage Calculator
│   ├── Placement Tools
│   │   ├── CTC / Salary Calculator
│   │   └── TCS NQT Score Calculator
│   └── Study Tools
│       └── Study Timer (Pomodoro)
├── Blog
├── Search (icon, expands to inline search)
└── [No auth, no user menu]
```

### Mobile Navigation

- Hamburger menu (bottom-right FAB on mobile)
- Bottom tab bar on mobile: Home | Tools | Search | Blog
- Category accordions inside mobile menu

### Breadcrumbs

All pages below root level display breadcrumbs:

```
Home > Tools > CGPA Tools > CGPA Calculator
Home > Blog > How to Calculate CGPA in VTU
Home > Category > CGPA Tools
```

### Search Experience

- Global search accessible from navbar (icon)
- Search filters tools by: name, category, description keywords
- Results show: tool name, category badge, short description, direct link
- Client-side search using Fuse.js (no API needed)
- Search indexed at build time from tools registry

### Complete Sitemap

```
/                          (Homepage)
/tools                     (All tools index)
/tools/cgpa-calculator
/tools/attendance-calculator
/tools/percentage-calculator
/tools/gate-rank-predictor
/tools/cat-percentile-calculator
/tools/study-timer
/tools/ctc-calculator
/tools/gpa-to-percentage
/tools/semester-gpa-calculator
/tools/bunk-calculator
/tools/tcs-nqt-calculator
/tools/education-loan-emi
/tools/marks-needed-calculator
/tools/aggregate-calculator
/tools/cgpa-improvement-calculator
/tools/jee-rank-predictor
/tools/internship-stipend-calculator
/tools/scholarship-calculator
/tools/word-count
/category/cgpa-tools
/category/attendance-tools
/category/exam-tools
/category/placement-tools
/category/study-tools
/category/finance-tools
/blog
/blog/how-to-calculate-cgpa-vtu
/blog/attendance-rules-indian-colleges
/blog/gate-score-vs-rank
/blog/cgpa-vs-percentage-placements
/blog/how-to-use-pomodoro-technique
/about
/contact
/privacy
/disclaimer
/sitemap.xml (auto-generated)
```

---

## 4. Complete URL Structure

### Design Principles

- All URLs lowercase, hyphen-separated
- No trailing slashes (canonical enforced)
- No query parameters in canonical URLs (tool state via React state, not URL)
- Descriptive, keyword-rich slugs

### Tool Pages

```
/tools/[slug]

Exact routes:
/tools/cgpa-calculator
/tools/attendance-calculator
/tools/percentage-calculator
/tools/gate-rank-predictor
/tools/cat-percentile-calculator
/tools/study-timer
/tools/ctc-calculator
/tools/gpa-to-percentage
/tools/semester-gpa-calculator
/tools/bunk-calculator
/tools/tcs-nqt-calculator
/tools/education-loan-emi
/tools/marks-needed-calculator
/tools/aggregate-calculator
/tools/cgpa-improvement-calculator
/tools/jee-rank-predictor
/tools/internship-stipend-calculator
/tools/scholarship-calculator
/tools/word-count
```

### Category Pages

```
/category/[slug]

/category/cgpa-tools
/category/attendance-tools
/category/exam-tools
/category/placement-tools
/category/study-tools
/category/finance-tools
/category/productivity-tools
/category/ai-tools
```

### Blog Pages

```
/blog
/blog/[slug]

/blog/how-to-calculate-cgpa-vtu
/blog/attendance-rules-indian-colleges
/blog/gate-score-vs-rank-explained
/blog/cgpa-vs-percentage-which-matters-placements
/blog/pomodoro-technique-study-guide-students
```

### Static Pages

```
/about
/contact
/privacy
/disclaimer
/terms
```

### Next.js App Router File Mapping

```
app/
├── page.tsx                            → /
├── tools/
│   ├── page.tsx                        → /tools
│   └── [slug]/
│       └── page.tsx                    → /tools/[slug]
├── category/
│   └── [slug]/
│       └── page.tsx                    → /category/[slug]
├── blog/
│   ├── page.tsx                        → /blog
│   └── [slug]/
│       └── page.tsx                    → /blog/[slug]
├── about/page.tsx                      → /about
├── contact/page.tsx                    → /contact
├── privacy/page.tsx                    → /privacy
├── disclaimer/page.tsx                 → /disclaimer
├── sitemap.ts                          → /sitemap.xml
└── robots.ts                           → /robots.txt
```

---

## 5. Component Architecture

### Naming Convention

- Components: PascalCase
- Hooks: camelCase with `use` prefix
- Utilities: camelCase
- Types: PascalCase with `Type` or `Props` suffix

---

### 5.1 Layout Components

#### `Navbar`

**File:** `components/layout/Navbar.tsx`

**Responsibility:** Top navigation, logo, search trigger, mobile hamburger.

**Props:** None (reads from tools registry)

**State:**
- `isMobileMenuOpen: boolean`
- `isSearchOpen: boolean`
- `activeCategory: string | null` (for mega menu hover)

**Behavior:**
- Desktop: horizontal nav with mega menu on hover
- Mobile: hamburger that opens slide-in drawer
- Search icon opens inline search bar (see SearchBar component)
- Sticky with `position: sticky top-0 z-50`
- Background: `bg-white/95 backdrop-blur-sm border-b`

---

#### `Footer`

**File:** `components/layout/Footer.tsx`

**Responsibility:** Site footer with links, copyright, disclaimer.

**Props:** None

**Sections:**
- Logo + tagline
- Tool categories (links to category pages)
- Quick links (About, Contact, Privacy, Disclaimer)
- Copyright line
- "Not affiliated with any university" disclaimer

---

#### `Breadcrumbs`

**File:** `components/layout/Breadcrumbs.tsx`

**Props:**
```typescript
interface BreadcrumbsProps {
  items: Array<{ label: string; href?: string }>;
}
```

**Behavior:**
- Uses `<nav aria-label="Breadcrumb">` with `<ol>` list
- Last item has no link (current page)
- Outputs BreadcrumbList JSON-LD schema
- Chevron separator between items

---

#### `MobileNav`

**File:** `components/layout/MobileNav.tsx`

**Responsibility:** Slide-in drawer for mobile navigation.

**Props:**
```typescript
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Behavior:**
- Full-height right slide drawer
- Category accordion expand/collapse
- Close on backdrop click or Escape key
- Trap focus while open (accessibility)

---

### 5.2 Tool Components

#### `ToolCard`

**File:** `components/tools/ToolCard.tsx`

**Responsibility:** Card displayed in tool grids (homepage, category pages, related tools).

**Props:**
```typescript
interface ToolCardProps {
  tool: ToolMeta;
  variant?: 'default' | 'compact' | 'featured';
  showCategory?: boolean;
}
```

**Renders:**
- Tool icon (Lucide icon from tool metadata)
- Tool name (H3)
- Short description (1 sentence)
- Category badge
- "Use Tool →" link (entire card is clickable)

**Variants:**
- `default`: Full card with icon, name, description, category
- `compact`: Name + short description only (for related tools sidebar)
- `featured`: Larger card for hero section spotlight

---

#### `ToolLayout`

**File:** `components/tools/ToolLayout.tsx`

**Responsibility:** Wrapper layout for all tool pages.

**Props:**
```typescript
interface ToolLayoutProps {
  tool: ToolMeta;
  children: React.ReactNode; // the calculator component
}
```

**Layout structure:**
```
[Breadcrumbs]
[Tool Header: title, description, category badge]
[Ad slot: horizontal banner — desktop only]
[Main content grid: 2-column on desktop]
  [Left: Calculator Component (children)]
  [Right: Sticky sidebar — Ad slot 300x250]
[How It Works Section]
[Examples Section]
[FAQ Section]
[Related Tools Section]
[Ad slot: horizontal banner]
[SEO Content Section]
```

---

#### `CalculatorForm`

**File:** `components/tools/CalculatorForm.tsx`

**Responsibility:** Wrapper that provides consistent form styling, card container, and reset functionality for all calculator forms.

**Props:**
```typescript
interface CalculatorFormProps {
  title?: string;
  onReset?: () => void;
  children: React.ReactNode;
}
```

**Renders:**
- White card with border and shadow
- Optional title
- Children (form fields)
- Reset button

---

#### `ResultCard`

**File:** `components/tools/ResultCard.tsx`

**Responsibility:** Display calculation result with emphasis styling.

**Props:**
```typescript
interface ResultCardProps {
  label: string;
  value: string | number;
  unit?: string;
  highlight?: boolean;
  classification?: string; // e.g., "Distinction"
  classificationColor?: 'green' | 'blue' | 'yellow' | 'red';
  helper?: string; // small explanatory text below value
}
```

**Renders:**
- Muted label text (12px)
- Large value display (32px, bold)
- Optional unit suffix
- Optional colored classification badge
- Optional helper text

---

#### `FAQSection`

**File:** `components/tools/FAQSection.tsx`

**Responsibility:** Accordion FAQ section for tool pages.

**Props:**
```typescript
interface FAQSectionProps {
  faqs: Array<{ question: string; answer: string }>;
  toolName: string;
}
```

**Behavior:**
- Uses shadcn/ui Accordion component
- One open at a time (type="single")
- Outputs FAQPage JSON-LD schema
- Visually separated from main content with section heading "Frequently Asked Questions"

---

#### `RelatedTools`

**File:** `components/tools/RelatedTools.tsx`

**Responsibility:** Grid of related tool cards at the bottom of tool pages.

**Props:**
```typescript
interface RelatedToolsProps {
  currentToolSlug: string;
  relatedSlugs: string[];
}
```

**Renders:**
- Section heading "Related Tools"
- 3-column grid of ToolCards (compact variant)
- Resolves tool metadata from slugs

---

#### `HowItWorks`

**File:** `components/tools/HowItWorks.tsx`

**Responsibility:** Numbered steps explaining the calculation methodology.

**Props:**
```typescript
interface HowItWorksProps {
  steps: Array<{ step: number; title: string; description: string }>;
  formula?: string; // LaTeX-free plain-text formula
}
```

---

#### `ExampleSection`

**File:** `components/tools/ExampleSection.tsx`

**Responsibility:** Worked example showing inputs → outputs for SEO and user comprehension.

**Props:**
```typescript
interface ExampleSectionProps {
  inputs: Array<{ label: string; value: string }>;
  outputs: Array<{ label: string; value: string }>;
  explanation: string;
}
```

---

### 5.3 UI Components

#### `SearchBar`

**File:** `components/ui/SearchBar.tsx`

**Responsibility:** Client-side fuzzy search across all tools.

**Props:**
```typescript
interface SearchBarProps {
  placeholder?: string;
  onClose?: () => void;
  autoFocus?: boolean;
}
```

**Behavior:**
- Fuse.js fuzzy search on tool name, description, keywords
- Results appear below input (dropdown or inline list)
- Keyboard: Arrow keys navigate, Enter opens tool, Escape closes
- Debounced: 150ms
- Shows: tool name, category, short description

---

#### `CategoryBadge`

**File:** `components/ui/CategoryBadge.tsx`

**Props:**
```typescript
interface CategoryBadgeProps {
  category: ToolCategory;
  size?: 'sm' | 'md';
}
```

Each category has a fixed color mapping:
- cgpa-tools: blue
- attendance-tools: green
- exam-tools: purple
- placement-tools: orange
- study-tools: teal
- finance-tools: yellow

---

#### `ProgressBar`

**File:** `components/ui/ProgressBar.tsx`

**Props:**
```typescript
interface ProgressBarProps {
  value: number; // 0–100
  max?: number;
  color?: 'green' | 'yellow' | 'red' | 'blue';
  showLabel?: boolean;
  animated?: boolean;
}
```

Used in Attendance Calculator to show attendance percentage visually.

---

#### `AdSlot`

**File:** `components/ui/AdSlot.tsx`

**Responsibility:** Wrapper for Google AdSense ad units with CLS prevention.

**Props:**
```typescript
interface AdSlotProps {
  slot: string; // AdSense slot ID
  format: 'horizontal' | 'square' | 'responsive';
  className?: string;
}
```

**Critical behavior:**
- Always reserves space before ad loads (fixed height container)
- Uses `min-height` to prevent CLS: horizontal=90px, square=250px
- Only renders after hydration (useEffect) to prevent SSR mismatch
- Wrapped in `ErrorBoundary` to prevent ad errors from crashing page

---

#### `ShareButton`

**File:** `components/ui/ShareButton.tsx`

**Props:**
```typescript
interface ShareButtonProps {
  url: string;
  title: string;
  description?: string;
}
```

Uses Web Share API with fallback to clipboard copy.

---

### 5.4 Page-Specific Components

#### `HeroSection` (Homepage)

**File:** `components/home/HeroSection.tsx`

- H1 heading with keyword-rich text
- Subheading
- Search bar (full width)
- 3 featured tool cards

#### `CategoryGrid` (Homepage + /tools)

**File:** `components/home/CategoryGrid.tsx`

- Category cards with icon, name, tool count
- Links to /category/[slug]

#### `ToolGrid`

**File:** `components/home/ToolGrid.tsx`

- Masonry or equal-height grid of ToolCards
- Accepts `tools: ToolMeta[]` prop
- Optional filter by category

---

## 6. Page Templates

### 6.1 Tool Page Template

**File:** `app/tools/[slug]/page.tsx`

```typescript
// Static generation — generates all tool pages at build time
export async function generateStaticParams() {
  return getAllTools().map(tool => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  return {
    title: `${tool.title} | StudentTools.in`,
    description: tool.metaDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.title,
      description: tool.metaDescription,
      type: 'website',
      url: `https://studenttools.in/tools/${tool.slug}`,
    },
    alternates: { canonical: `https://studenttools.in/tools/${tool.slug}` },
  };
}
```

**Page Layout:**
```
<main>
  <Breadcrumbs items={[...]} />
  <ToolLayout tool={tool}>
    <Suspense fallback={<CalculatorSkeleton />}>
      <DynamicToolComponent />
    </Suspense>
  </ToolLayout>
</main>
```

**Structured Data output (in `<head>`):**
- SoftwareApplication schema
- BreadcrumbList schema
- FAQPage schema (from tool FAQs)

**SEO Elements:**
- `<title>`: "[Tool Name] — [1-line benefit] | StudentTools.in"
- `<meta name="description">`: 150–160 chars, keyword-rich
- `<link rel="canonical">`: Absolute URL
- `<meta property="og:*">`: Full Open Graph set
- `<meta name="twitter:*">`: Twitter card

---

### 6.2 Category Page Template

**File:** `app/category/[slug]/page.tsx`

**Layout:**
```
<main>
  <Breadcrumbs />
  <CategoryHeader>
    [Category name (H1)]
    [Category description]
    [Tool count badge]
  </CategoryHeader>
  <ToolGrid tools={categoryTools} />
  <SEOContent>
    [2–3 paragraphs about the category]
    [H2: Why use [category] tools?]
    [H2: How to [common action in category]]
  </SEOContent>
</main>
```

---

### 6.3 Blog Page Template

**File:** `app/blog/[slug]/page.tsx`

**Data source:** MDX files in `content/blog/[slug].mdx`

**Layout:**
```
<main>
  <Breadcrumbs />
  <article>
    [Post header: title, date, reading time, author]
    [Featured image (optional)]
    [Ad slot — horizontal]
    [MDX content]
    [Ad slot — mid-article, inline responsive]
    [Related tools CTA section]
    [Ad slot — end of article]
  </article>
  <aside>
    [Sticky: Popular tools list]
    [Ad slot — sidebar 300x250]
  </aside>
</main>
```

**Structured Data:** Article schema, BreadcrumbList schema

---

### 6.4 Homepage Template

**File:** `app/page.tsx`

**Layout:**
```
<HeroSection />
<section aria-label="Popular Tools">
  [PopularToolsGrid — top 6 by priority]
</section>
<section aria-label="Browse by Category">
  <CategoryGrid />
</section>
<section aria-label="All Tools">
  <ToolGrid showAll />
</section>
<section aria-label="About StudentTools">
  [SEO content paragraph — keyword-rich homepage text]
</section>
```

---

### 6.5 Legal Page Template

**File:** `app/privacy/page.tsx`, `app/about/page.tsx`, etc.

**Layout:**
```
<main className="max-w-3xl mx-auto px-4 py-12">
  <Breadcrumbs />
  <h1>[Page Title]</h1>
  <p className="text-sm text-muted-foreground">[Last updated: Date]</p>
  <article className="prose prose-sm max-w-none mt-8">
    [Page content]
  </article>
</main>
```

No ads on legal pages.

---

## 7. Design System

### Color Palette

```typescript
// tailwind.config.ts
const colors = {
  primary: {
    50:  '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',   // Primary action color
    600: '#2563eb',   // Primary hover
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  // Semantic
  success: '#16a34a',
  warning: '#d97706',
  error: '#dc2626',
  // Neutrals (use Tailwind's zinc)
  // Background: zinc-50 (#fafafa)
  // Surface: white (#ffffff)
  // Border: zinc-200 (#e4e4e7)
  // Muted text: zinc-500 (#71717a)
  // Body text: zinc-800 (#27272a)
  // Heading: zinc-900 (#18181b)
};
```

### Typography

```typescript
// next.config.ts — Google Fonts
import { Geist, Geist_Mono } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});
```

**Type Scale (Tailwind classes):**

| Element | Class | Size | Weight |
|---------|-------|------|--------|
| H1 (tool title) | `text-3xl font-bold` | 30px | 700 |
| H2 (section) | `text-2xl font-semibold` | 24px | 600 |
| H3 (card title) | `text-xl font-semibold` | 20px | 600 |
| H4 (subsection) | `text-base font-semibold` | 16px | 600 |
| Body | `text-base` | 16px | 400 |
| Small / Helper | `text-sm` | 14px | 400 |
| Caption / Label | `text-xs` | 12px | 400 |
| Result value | `text-4xl font-bold` | 36px | 700 |

### Spacing

Follow Tailwind's 4px base unit scale. Key breakpoints:

| Token | px | Usage |
|-------|----|-------|
| `gap-2` | 8px | Inline elements |
| `gap-4` | 16px | Card internal spacing |
| `gap-6` | 24px | Between cards in grid |
| `gap-8` | 32px | Between page sections |
| `gap-12` | 48px | Major section breaks |
| `p-4` | 16px | Card padding mobile |
| `p-6` | 24px | Card padding desktop |

### Border Radius

```
Default element: rounded-lg (8px)
Cards: rounded-xl (12px)
Buttons: rounded-lg (8px)
Badges: rounded-full
Input fields: rounded-lg (8px)
```

### Shadows

```css
/* Card shadow */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)

/* Elevated card (hover) */
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)

/* Result card */
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
```

### Breakpoints

```
sm:  640px   (large phone landscape)
md:  768px   (tablet)
lg:  1024px  (small laptop)
xl:  1280px  (desktop)
2xl: 1536px  (large desktop)
```

**Mobile-first defaults:**
- Single column layout on mobile
- 2-column grid on `md:`
- 3-column grid on `lg:`
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Tailwind Config Extensions

```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
```

### shadcn/ui Components to Install

```bash
npx shadcn@latest add button card input label select accordion
npx shadcn@latest add badge separator tabs slider switch toast
npx shadcn@latest add dialog sheet command navigation-menu
```

---

## 8. SEO Architecture

### Technical SEO

#### Robots.txt (`app/robots.ts`)

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://studenttools.in/sitemap.xml',
    host: 'https://studenttools.in',
  };
}
```

#### Sitemap (`app/sitemap.ts`)

```typescript
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tools = getAllTools();
  const posts = getAllPosts();
  const categories = getAllCategories();

  const toolUrls = tools.map(tool => ({
    url: `https://studenttools.in/tools/${tool.slug}`,
    lastModified: tool.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const categoryUrls = categories.map(cat => ({
    url: `https://studenttools.in/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogUrls = posts.map(post => ({
    url: `https://studenttools.in/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: 'https://studenttools.in', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://studenttools.in/tools', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://studenttools.in/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...toolUrls,
    ...categoryUrls,
    ...blogUrls,
  ];
}
```

#### Canonical URLs

Set in `generateMetadata` for every page:
```typescript
alternates: {
  canonical: `https://studenttools.in${pathname}`,
}
```

Never set canonical via `<link>` tags in static HTML — use Next.js metadata API only.

#### `app/layout.tsx` Root Metadata

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://studenttools.in'),
  title: {
    default: 'StudentTools.in — Free Tools for Indian College Students',
    template: '%s | StudentTools.in',
  },
  description: 'Free calculators and tools for Indian college students. CGPA calculator, attendance calculator, GATE rank predictor, CAT percentile, and more.',
  keywords: ['cgpa calculator', 'attendance calculator', 'gate rank predictor', 'cat percentile', 'student tools india'],
  authors: [{ name: 'StudentTools.in' }],
  creator: 'StudentTools.in',
  publisher: 'StudentTools.in',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'GOOGLE_SEARCH_CONSOLE_TOKEN', // env variable
  },
};
```

---

### On-Page SEO

#### Title Tag Formula

```
Tool pages:    [Tool Name] — [Primary Keyword] | StudentTools.in
Category pages: [Category Name] Tools for Students | StudentTools.in
Blog posts:    [Post Title] | StudentTools.in
Homepage:      StudentTools.in — Free Tools for Indian College Students
```

#### Meta Description Formula

```
Tool pages (150–160 chars):
"[Action verb] your [metric] with our free [tool name]. 
 [Unique feature]. Works for [university/context]. 
 No login required."

Example:
"Calculate your CGPA instantly with our free CGPA calculator. 
 Supports 10-point and 4-point scales, VTU, Anna University, and SPPU. 
 Convert CGPA to percentage in seconds. No login required."
```

---

### Structured Data (JSON-LD)

#### SoftwareApplication Schema (Tool Pages)

```typescript
const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: tool.title,
  description: tool.description,
  url: `https://studenttools.in/tools/${tool.slug}`,
  applicationCategory: 'EducationApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  creator: {
    '@type': 'Organization',
    name: 'StudentTools.in',
    url: 'https://studenttools.in',
  },
};
```

#### FAQPage Schema

```typescript
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: tool.faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
```

#### BreadcrumbList Schema

```typescript
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.href ? `https://studenttools.in${item.href}` : undefined,
  })),
};
```

#### Article Schema (Blog Posts)

```typescript
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  author: { '@type': 'Organization', name: 'StudentTools.in' },
  publisher: {
    '@type': 'Organization',
    name: 'StudentTools.in',
    logo: { '@type': 'ImageObject', url: 'https://studenttools.in/logo.png' },
  },
  datePublished: post.publishedAt,
  dateModified: post.updatedAt,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://studenttools.in/blog/${post.slug}` },
};
```

#### WebSite Schema (Homepage only)

```typescript
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'StudentTools.in',
  url: 'https://studenttools.in',
  description: 'Free tools for Indian college students',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://studenttools.in/tools?search={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};
```

---

### Open Graph & Twitter Cards

Defined in `generateMetadata` for every page:

```typescript
openGraph: {
  title: tool.title,
  description: tool.metaDescription,
  url: `https://studenttools.in/tools/${tool.slug}`,
  siteName: 'StudentTools.in',
  type: 'website',
  images: [{
    url: `https://studenttools.in/og/${tool.slug}.png`, // Static OG image
    width: 1200,
    height: 630,
    alt: tool.title,
  }],
  locale: 'en_IN',
},
twitter: {
  card: 'summary_large_image',
  title: tool.title,
  description: tool.metaDescription,
  images: [`https://studenttools.in/og/${tool.slug}.png`],
},
```

---

### Internal Linking Strategy

Each tool's metadata includes `relatedTools: string[]` — 3 to 5 related tool slugs.

**Linking rules:**
1. CGPA Calculator → links to: Attendance Calculator, Percentage Calculator, GPA to Percentage
2. Attendance Calculator → links to: CGPA Calculator, Study Timer, Percentage Calculator
3. GATE Rank Predictor → links to: CGPA Calculator, CAT Percentile Calculator
4. CTC Calculator → links to: Internship Stipend Calculator, Education Loan EMI
5. All tools → link to their parent category page via breadcrumbs

Blog posts must link to at minimum 1 tool page and 1 related blog post.

---

## 9. Content Strategy

### Tool Page Content Structure

Every tool page must contain these sections in order:

#### Section 1: Introduction (above calculator)
- H1: "[Tool Name]" (exact keyword match)
- 2–3 sentences describing what the tool does and who it's for
- Mention of India/Indian universities where relevant

#### Section 2: Calculator (main feature)
- The interactive calculator component
- Clear input labels
- Real-time results
- Example pre-populated values on load

#### Section 3: How It Works
- H2: "How to Calculate [Metric]"
- 3–5 numbered steps
- Plain-text formula (no LaTeX)
- Example calculation embedded in steps

#### Section 4: Examples
- H2: "Example Calculation"
- Concrete scenario with realistic Indian student data
- Input values → output values
- Why the result matters

#### Section 5: FAQ (minimum 4 Q&As)

CGPA Calculator FAQs:
1. "What is the formula to convert CGPA to percentage?"
2. "How is CGPA calculated in VTU?"
3. "What is a good CGPA for placements?"
4. "Can I improve my CGPA in final semesters?"
5. "What is the difference between CGPA and GPA?"

Attendance Calculator FAQs:
1. "What is the minimum attendance required in Indian colleges?"
2. "How is attendance percentage calculated?"
3. "What happens if attendance is below 75%?"
4. "Can I get a medical exemption for attendance?"

#### Section 6: Related Tools
- H2: "Related Tools"
- Grid of 3 ToolCards (compact variant)

#### Section 7: SEO Content (below related tools, `text-sm text-muted-foreground`)
- H2 with secondary keyword
- 3–4 paragraphs expanding on the topic
- Mention university-specific contexts
- Internal links to blog posts

---

### Blog Post Requirements

Each post: 800–1500 words, minimum 3 H2 sections, 1 tool CTA embed, 1 internal link to another post.

**Initial 5 posts:**

1. **"How to Calculate CGPA in VTU University"** (targets "VTU CGPA calculator" 12K/mo)
   - Introduction to VTU grading
   - Step-by-step CGPA calculation
   - Embed: CGPA Calculator tool CTA
   - Common mistakes
   - FAQ

2. **"Attendance Rules in Indian Colleges: What Every Student Must Know"** (targets "college attendance rules" 8K/mo)
   - 75% minimum rule explained
   - Medical exemption process
   - Consequences of low attendance
   - Embed: Attendance Calculator CTA

3. **"GATE Score vs Rank: Complete Guide for 2026"** (targets "GATE rank predictor" 40K/mo, seasonal)
   - How GATE score is calculated (normalized marks)
   - Score vs rank for CSE, ECE, ME, Civil
   - Embed: GATE Rank Predictor CTA
   - PSU cutoffs 2025

4. **"CGPA vs Percentage: Which Matters More for Placements?"** (targets "cgpa for placements" 5K/mo)
   - Employer preferences
   - When to convert (and how)
   - Embed: CGPA Calculator + Percentage Calculator
   - University-specific standards

5. **"The Pomodoro Technique: A Complete Study Guide for Engineering Students"** (targets "pomodoro technique students" 3K/mo)
   - What is Pomodoro
   - How to adapt for engineering exam prep
   - Embed: Study Timer CTA
   - Sample study schedule

---

## 10. Folder Structure

```
studenttools.in/
├── .env.local                    # Local environment variables
├── .env.example                  # Template for env vars
├── .gitignore
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind + design tokens
├── tsconfig.json                 # TypeScript config (strict mode)
├── components.json               # shadcn/ui config
├── package.json
│
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── logo.png
│   ├── logo.svg
│   ├── og/                       # Static Open Graph images (1200×630)
│   │   ├── default.png
│   │   ├── cgpa-calculator.png
│   │   ├── attendance-calculator.png
│   │   └── [tool-slug].png
│   ├── icons/                    # PWA icons
│   └── manifest.webmanifest
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Homepage
│   │   ├── globals.css           # Global styles
│   │   ├── sitemap.ts            # Auto-generated sitemap
│   │   ├── robots.ts             # Robots.txt
│   │   ├── not-found.tsx         # 404 page
│   │   ├── error.tsx             # Error boundary
│   │   │
│   │   ├── tools/
│   │   │   ├── page.tsx          # /tools index
│   │   │   └── [slug]/
│   │   │       ├── page.tsx      # Tool page
│   │   │       └── loading.tsx   # Loading skeleton
│   │   │
│   │   ├── category/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Category page
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog index
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Blog post
│   │   │
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── disclaimer/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   └── MobileNav.tsx
│   │   │
│   │   ├── tools/
│   │   │   ├── ToolLayout.tsx
│   │   │   ├── ToolCard.tsx
│   │   │   ├── ToolGrid.tsx
│   │   │   ├── CalculatorForm.tsx
│   │   │   ├── ResultCard.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── RelatedTools.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── ExampleSection.tsx
│   │   │   └── ToolPageSkeleton.tsx
│   │   │
│   │   ├── calculators/          # Individual tool UIs
│   │   │   ├── CGPACalculator.tsx
│   │   │   ├── AttendanceCalculator.tsx
│   │   │   ├── PercentageCalculator.tsx
│   │   │   ├── GATERankPredictor.tsx
│   │   │   ├── CATPredictorCalculator.tsx
│   │   │   ├── StudyTimer.tsx
│   │   │   └── CTCCalculator.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CategoryGrid.tsx
│   │   │   └── FeaturedTools.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogGrid.tsx
│   │   │   └── BlogHeader.tsx
│   │   │
│   │   ├── seo/
│   │   │   ├── StructuredData.tsx   # JSON-LD injector
│   │   │   └── MetaTags.tsx
│   │   │
│   │   └── ui/                   # shadcn/ui + custom
│   │       ├── SearchBar.tsx
│   │       ├── CategoryBadge.tsx
│   │       ├── ProgressBar.tsx
│   │       ├── AdSlot.tsx
│   │       ├── ShareButton.tsx
│   │       └── [shadcn components]
│   │
│   ├── features/                 # Feature-level logic (no UI)
│   │   ├── cgpa/
│   │   │   ├── calculations.ts   # Pure calculation functions
│   │   │   └── validation.ts     # Zod schemas
│   │   ├── attendance/
│   │   │   ├── calculations.ts
│   │   │   └── validation.ts
│   │   ├── gate/
│   │   │   ├── calculations.ts
│   │   │   └── lookupRank.ts
│   │   ├── cat/
│   │   │   ├── calculations.ts
│   │   │   └── lookupPercentile.ts
│   │   ├── ctc/
│   │   │   ├── calculations.ts
│   │   │   └── taxRules.ts
│   │   └── timer/
│   │       └── timerLogic.ts
│   │
│   ├── lib/
│   │   ├── tools.ts              # Tool registry + getAllTools(), getToolBySlug()
│   │   ├── categories.ts         # Category registry
│   │   ├── blog.ts               # Blog post utilities (MDX)
│   │   ├── seo.ts                # SEO metadata generators
│   │   ├── analytics.ts          # GA4 event helpers
│   │   └── utils.ts              # cn(), formatNumber(), etc.
│   │
│   ├── hooks/
│   │   ├── useCalculator.ts      # Generic calculator state hook
│   │   ├── useLocalStorage.ts    # Type-safe localStorage hook
│   │   ├── useTimer.ts           # Pomodoro timer hook
│   │   └── useSearch.ts          # Tool search hook (Fuse.js)
│   │
│   ├── types/
│   │   ├── tool.ts               # ToolMeta, ToolCategory interfaces
│   │   ├── blog.ts               # BlogPost interface
│   │   ├── seo.ts                # SEO metadata types
│   │   └── analytics.ts          # Analytics event types
│   │
│   ├── data/
│   │   ├── tools/                # Tool metadata JSON files
│   │   │   ├── cgpa-calculator.ts
│   │   │   ├── attendance-calculator.ts
│   │   │   └── ...
│   │   ├── gate-data.json        # GATE score → rank lookup table
│   │   ├── cat-data.json         # CAT score → percentile table
│   │   ├── tax-data.ts           # Income tax slabs 2025-26
│   │   └── professional-tax.ts   # State-wise professional tax
│   │
│   └── content/
│       └── blog/
│           ├── how-to-calculate-cgpa-vtu.mdx
│           ├── attendance-rules-indian-colleges.mdx
│           └── ...
│
└── tests/
    ├── unit/
    │   ├── features/
    │   │   ├── cgpa.test.ts
    │   │   ├── attendance.test.ts
    │   │   └── ctc.test.ts
    │   └── lib/
    │       └── utils.test.ts
    ├── integration/
    │   └── tools.test.ts
    └── e2e/
        ├── cgpa-calculator.spec.ts
        └── attendance-calculator.spec.ts
```

---

## 11. State Management Strategy

### Decision: No Global State Manager Required for MVP

Use React's built-in state (`useState`, `useReducer`) for all tool interactions. Zustand is not needed unless multiple components outside the tool page need to share calculation state.

### State Layers

**Layer 1 — Local Component State**

Each calculator component manages its own form state using `useState` or `react-hook-form`. State is not persisted on navigation (acceptable — tools are stateless by design).

```typescript
// In CGPACalculator.tsx
const [subjects, setSubjects] = useState<Subject[]>(defaultSubjects);
const [result, setResult] = useState<CGPAResult | null>(null);
const [error, setError] = useState<string | null>(null);
```

**Layer 2 — Form State (React Hook Form)**

All multi-field forms use `react-hook-form` with `zod` resolver for validation.

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  attended: z.number().min(0).int(),
  total: z.number().min(1).int(),
  target: z.number().min(50).max(100),
});

const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  defaultValues: { attended: 0, total: 0, target: 75 },
  mode: 'onChange', // Real-time validation
});
```

**Layer 3 — Persisted State (localStorage)**

Only the Study Timer persists state between sessions:

```typescript
// hooks/useLocalStorage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setLocalStorage = useCallback((v: T) => {
    setValue(v);
    localStorage.setItem(key, JSON.stringify(v));
  }, [key]);

  return [value, setLocalStorage] as const;
}
```

**Layer 4 — URL State (future enhancement)**

For shareable results (Phase 2+), tool state can be serialized to URL search params. Not needed for MVP.

### Zustand Adoption Criteria

Add Zustand only when:
1. Multiple disconnected components need to share tool state
2. Search results need to be cached across navigation
3. User preferences (theme, units) need to persist globally

---

## 12. Data Architecture

### TypeScript Interfaces

```typescript
// src/types/tool.ts

export type ToolCategory =
  | 'cgpa-tools'
  | 'attendance-tools'
  | 'exam-tools'
  | 'placement-tools'
  | 'study-tools'
  | 'finance-tools'
  | 'productivity-tools'
  | 'ai-tools';

export interface FAQ {
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface Example {
  title: string;
  inputs: Array<{ label: string; value: string }>;
  outputs: Array<{ label: string; value: string }>;
  explanation: string;
}

export interface ToolMeta {
  slug: string;                    // URL slug: 'cgpa-calculator'
  title: string;                   // H1 + page title
  shortTitle: string;              // Card title (shorter)
  description: string;             // Full description (SEO)
  metaDescription: string;         // 150-160 char meta description
  shortDescription: string;        // Card description (1 sentence)
  category: ToolCategory;
  icon: string;                    // Lucide icon name
  keywords: string[];              // SEO keywords
  faqs: FAQ[];                     // Minimum 4
  howItWorks: HowItWorksStep[];    // 3-5 steps
  example: Example;
  relatedTools: string[];          // Slugs of related tools
  priority: number;                // 1-10, higher = show first
  isNew?: boolean;                 // Show "New" badge
  publishedAt: string;             // ISO date string
  updatedAt: string;               // ISO date string
}

export interface CategoryMeta {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;                    // Lucide icon name
  color: string;                   // Tailwind color class (e.g., 'blue')
  tools: string[];                 // Tool slugs in this category
}
```

```typescript
// src/types/blog.ts

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTime: number;             // Minutes
  tags: string[];
  relatedTools: string[];          // Tool slugs mentioned
  relatedPosts: string[];          // Blog post slugs
  featured?: boolean;
}
```

### Tool Registry Structure

All tools are registered in `src/data/tools/` as individual TypeScript files and exported from `src/lib/tools.ts`.

**Example: `src/data/tools/cgpa-calculator.ts`**

```typescript
import { ToolMeta } from '@/types/tool';

export const cgpaCalculator: ToolMeta = {
  slug: 'cgpa-calculator',
  title: 'CGPA Calculator',
  shortTitle: 'CGPA Calculator',
  description: 'Calculate your CGPA from semester grades and convert to percentage. Supports VTU, Anna University, SPPU, and all Indian university grading systems.',
  metaDescription: 'Free CGPA calculator for Indian students. Convert CGPA to percentage, calculate semester GPA, supports 10-point and 4-point scales. Works for VTU, Anna University, SPPU.',
  shortDescription: 'Calculate CGPA and convert to percentage instantly.',
  category: 'cgpa-tools',
  icon: 'GraduationCap',
  keywords: ['cgpa calculator', 'cgpa to percentage', 'gpa calculator india', 'vtu cgpa', 'anna university cgpa'],
  priority: 10,
  publishedAt: '2025-01-01',
  updatedAt: '2025-01-01',
  relatedTools: ['attendance-calculator', 'percentage-calculator', 'gpa-to-percentage'],
  faqs: [
    {
      question: 'What is the formula to convert CGPA to percentage in India?',
      answer: 'For most Indian universities on a 10-point scale, the formula is: Percentage = CGPA × 9.5. For example, a CGPA of 8.0 equals 76% (8.0 × 9.5). This is the standard formula recommended by UGC.',
    },
    // ... more FAQs
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Enter your subjects and credits',
      description: 'Add the number of credits for each subject. Credits (also called credit hours) indicate how much weight a subject carries.',
    },
    // ...
  ],
  example: {
    title: 'Example: B.Tech 3rd Semester',
    inputs: [
      { label: 'Mathematics (4 credits)', value: '8.5 grade points' },
      { label: 'Data Structures (4 credits)', value: '9.0 grade points' },
      { label: 'Digital Electronics (3 credits)', value: '7.5 grade points' },
    ],
    outputs: [
      { label: 'CGPA', value: '8.36' },
      { label: 'Percentage', value: '79.41%' },
      { label: 'Classification', value: 'First Class with Distinction' },
    ],
    explanation: 'Weighted average = (4×8.5 + 4×9.0 + 3×7.5) / (4+4+3) = 92/11 = 8.36 CGPA',
  },
};
```

### Tool Registry (`src/lib/tools.ts`)

```typescript
import { cgpaCalculator } from '@/data/tools/cgpa-calculator';
import { attendanceCalculator } from '@/data/tools/attendance-calculator';
// ... import all tools

export const TOOLS: ToolMeta[] = [
  cgpaCalculator,
  attendanceCalculator,
  // ... all tools sorted by priority
].sort((a, b) => b.priority - a.priority);

export function getAllTools(): ToolMeta[] {
  return TOOLS;
}

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return TOOLS.find(t => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolMeta[] {
  return TOOLS.filter(t => t.category === category);
}

export function getRelatedTools(slugs: string[]): ToolMeta[] {
  return slugs.map(slug => TOOLS.find(t => t.slug === slug)).filter(Boolean) as ToolMeta[];
}

export function getFeaturedTools(count = 6): ToolMeta[] {
  return TOOLS.slice(0, count);
}
```

### Static Data Files

**`src/data/gate-data.json`** structure:
```json
{
  "CS": {
    "2024": [
      { "score": 90, "rank": 50, "percentile": 99.9 },
      { "score": 85, "rank": 150, "percentile": 99.7 },
      { "score": 80, "rank": 350, "percentile": 99.3 }
    ]
  }
}
```

**`src/data/cat-data.json`** structure:
```json
{
  "2024": [
    { "score": 180, "percentile": 99.9 },
    { "score": 160, "percentile": 99.5 },
    { "score": 140, "percentile": 98.5 }
  ]
}
```

---

## 13. Tool Engine Architecture

### Core Concept

Every tool follows a strict separation:

```
Tool = Data (metadata) + Logic (pure functions) + UI (React component)
```

Adding a new tool requires only:
1. Creating a metadata file in `src/data/tools/[slug].ts`
2. Creating a React component in `src/components/calculators/[Name].tsx`
3. Registering the metadata in `src/lib/tools.ts`

The routing, SEO, layout, FAQs, related tools, and structured data are all generated automatically from the metadata.

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      URL: /tools/cgpa-calculator                │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ app/tools/[slug]/page.tsx                                │  │
│  │  1. getToolBySlug(params.slug)    → ToolMeta             │  │
│  │  2. generateMetadata()             → SEO + OG            │  │
│  │  3. StructuredData(tool)           → JSON-LD             │  │
│  └──────────────────┬───────────────────────────────────────┘  │
│                     │                                           │
│  ┌──────────────────▼───────────────────────────────────────┐  │
│  │ ToolLayout (tool: ToolMeta)                               │  │
│  │  - Breadcrumbs (auto from tool.category)                 │  │
│  │  - Tool Header (title, description, category badge)      │  │
│  │  - Ad slot (horizontal)                                  │  │
│  │  ┌─────────────────────────────────────┐                 │  │
│  │  │ Dynamic Calculator Component        │  [Ad Sidebar]   │  │
│  │  │ (resolved from tool.slug)           │                 │  │
│  │  └─────────────────────────────────────┘                 │  │
│  │  - HowItWorks (tool.howItWorks)                          │  │
│  │  - ExampleSection (tool.example)                         │  │
│  │  - FAQSection (tool.faqs)                                │  │
│  │  - RelatedTools (tool.relatedTools)                      │  │
│  │  - SEO Content Section                                   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Dynamic Calculator Component Resolution

```typescript
// src/app/tools/[slug]/page.tsx

import dynamic from 'next/dynamic';

const CALCULATOR_COMPONENTS: Record<string, React.ComponentType> = {
  'cgpa-calculator': dynamic(() => import('@/components/calculators/CGPACalculator')),
  'attendance-calculator': dynamic(() => import('@/components/calculators/AttendanceCalculator')),
  'percentage-calculator': dynamic(() => import('@/components/calculators/PercentageCalculator')),
  'gate-rank-predictor': dynamic(() => import('@/components/calculators/GATERankPredictor')),
  'cat-percentile-calculator': dynamic(() => import('@/components/calculators/CATPredictorCalculator')),
  'study-timer': dynamic(() => import('@/components/calculators/StudyTimer')),
  'ctc-calculator': dynamic(() => import('@/components/calculators/CTCCalculator')),
};

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const CalculatorComponent = CALCULATOR_COMPONENTS[params.slug];

  return (
    <ToolLayout tool={tool}>
      {CalculatorComponent ? (
        <Suspense fallback={<CalculatorSkeleton />}>
          <CalculatorComponent />
        </Suspense>
      ) : (
        <ComingSoon />
      )}
    </ToolLayout>
  );
}
```

### Calculator Pure Function Pattern

All calculation logic lives in `src/features/[tool]/calculations.ts` as pure TypeScript functions with zero side effects.

```typescript
// src/features/cgpa/calculations.ts

export interface Subject {
  name: string;
  credits: number;
  gradePoints: number;
}

export interface CGPAResult {
  cgpa: number;
  percentage: number;
  classification: 'Distinction' | 'First Class' | 'Second Class' | 'Pass' | 'Fail';
  totalCredits: number;
  creditPoints: number;
}

export function calculateCGPA(subjects: Subject[], scale: 10 | 4 = 10): CGPAResult {
  if (subjects.length === 0) throw new Error('No subjects provided');

  const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
  if (totalCredits === 0) throw new Error('Total credits cannot be zero');

  const creditPoints = subjects.reduce((sum, s) => sum + s.credits * s.gradePoints, 0);
  const cgpa = parseFloat((creditPoints / totalCredits).toFixed(2));

  const percentage = scale === 10
    ? parseFloat((cgpa * 9.5).toFixed(2))
    : parseFloat((cgpa * 25).toFixed(2)); // 4-point scale conversion

  const classification = getClassification(cgpa, scale);

  return { cgpa, percentage, classification, totalCredits, creditPoints };
}

function getClassification(cgpa: number, scale: 10 | 4): CGPAResult['classification'] {
  if (scale === 10) {
    if (cgpa >= 8.5) return 'Distinction';
    if (cgpa >= 6.5) return 'First Class';
    if (cgpa >= 5.5) return 'Second Class';
    if (cgpa >= 4.0) return 'Pass';
    return 'Fail';
  }
  // 4-point scale
  if (cgpa >= 3.5) return 'Distinction';
  if (cgpa >= 3.0) return 'First Class';
  if (cgpa >= 2.0) return 'Second Class';
  if (cgpa >= 1.0) return 'Pass';
  return 'Fail';
}
```

### Validation Framework (Zod)

Each tool has its own Zod schema in `src/features/[tool]/validation.ts`:

```typescript
// src/features/attendance/validation.ts
import { z } from 'zod';

export const attendanceSchema = z.object({
  attended: z
    .number({ invalid_type_error: 'Please enter a number' })
    .int('Must be a whole number')
    .min(0, 'Cannot be negative'),
  total: z
    .number({ invalid_type_error: 'Please enter a number' })
    .int('Must be a whole number')
    .min(1, 'Must have at least 1 class'),
  target: z
    .number()
    .min(50, 'Target must be at least 50%')
    .max(100, 'Target cannot exceed 100%'),
}).refine(
  (data) => data.attended <= data.total,
  {
    message: 'Classes attended cannot exceed total classes',
    path: ['attended'],
  }
);

export type AttendanceFormData = z.infer<typeof attendanceSchema>;
```

### `useCalculator` Hook

Generic hook that wraps form state + validation + calculation result:

```typescript
// src/hooks/useCalculator.ts
import { useState, useCallback } from 'react';
import { ZodSchema } from 'zod';

interface UseCalculatorOptions<TInput, TResult> {
  schema: ZodSchema<TInput>;
  calculate: (input: TInput) => TResult;
  defaultInput: TInput;
}

export function useCalculator<TInput, TResult>({
  schema,
  calculate,
  defaultInput,
}: UseCalculatorOptions<TInput, TResult>) {
  const [result, setResult] = useState<TResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = useCallback((rawInput: unknown) => {
    const parsed = schema.safeParse(rawInput);
    if (!parsed.success) {
      setError(parsed.error.errors[0].message);
      setResult(null);
      return;
    }
    try {
      setResult(calculate(parsed.data));
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Calculation error');
      setResult(null);
    }
  }, [schema, calculate]);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { result, error, handleCalculate, reset };
}
```

---

## 14. Performance Strategy

### Static Generation (Priority)

- All tool pages: `generateStaticParams` — renders at build time, served from CDN edge
- All category pages: Static
- Blog posts: Static (from MDX)
- Homepage: Static

**No server-side rendering** unless dynamic user data is needed (not in MVP scope).

### Image Optimization

```typescript
// All images use Next.js Image component
import Image from 'next/image';

<Image
  src="/og/cgpa-calculator.png"
  alt="CGPA Calculator"
  width={1200}
  height={630}
  priority // For above-fold images only
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Inline blur placeholder
/>
```

Rules:
- Never use `<img>` directly
- Set explicit `width` and `height` on all images to prevent CLS
- Use `priority` only for LCP images (hero, above fold)
- Use WebP format via Next.js automatic conversion

### Font Loading

```typescript
// app/layout.tsx — single font load, display: swap
import { Geist } from 'next/font/google';

const font = Geist({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-geist-sans',
});
```

Only load Latin subset — no Devanagari or extra scripts (tool content is English).

### Bundle Optimization

**next.config.ts:**
```typescript
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
```

**Lucide icons — import individually, never wildcard:**
```typescript
// ❌ Never
import { GraduationCap, Calculator } from 'lucide-react';
// When 500+ icons get bundled

// ✅ Always import from specific path
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
```

### CLS Prevention

All elements that resize or load asynchronously must have reserved space:

1. **Ad slots:** Fixed `min-height` container before ad loads
2. **Result cards:** Pre-render empty result card on page load
3. **Images:** Always specify `width` and `height`
4. **Fonts:** `display: swap` with matching fallback font size

### Lazy Loading

```typescript
// All calculator components are lazy-loaded (code splitting)
const GATERankPredictor = dynamic(
  () => import('@/components/calculators/GATERankPredictor'),
  {
    loading: () => <CalculatorSkeleton />,
    ssr: false, // Timer/interactive tools only — rest use ssr: true
  }
);
```

### Performance Budgets

Set in `next.config.ts`:
```typescript
// These will fail the build if exceeded
experimental: {
  webVitalsAttribution: ['CLS', 'LCP'],
}
```

Target metrics per route:
- Homepage: FCP < 1.0s, LCP < 1.5s, bundle < 100KB
- Tool pages: FCP < 0.8s (static), LCP < 1.5s, bundle < 150KB
- Blog pages: FCP < 1.2s, LCP < 2.0s

---

## 15. Analytics Architecture

### Google Analytics 4 Setup

```typescript
// src/lib/analytics.ts

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

type EventName =
  | 'tool_viewed'
  | 'calculation_completed'
  | 'tool_reset'
  | 'search_performed'
  | 'search_result_clicked'
  | 'faq_expanded'
  | 'related_tool_clicked'
  | 'blog_scroll_50'
  | 'blog_scroll_100'
  | 'ad_slot_viewed'
  | 'share_button_clicked';

interface EventParams {
  tool_name?: string;
  tool_category?: string;
  result_value?: string;
  search_query?: string;
  result_count?: number;
  faq_question?: string;
  destination_url?: string;
  post_title?: string;
}

export function trackEvent(name: EventName, params?: EventParams) {
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;
  window.gtag('event', name, {
    ...params,
    timestamp: Date.now(),
  });
}
```

### Events to Track

| Event | When | Params |
|-------|------|--------|
| `tool_viewed` | On tool page load | tool_name, tool_category |
| `calculation_completed` | On successful calculation | tool_name, result_value |
| `tool_reset` | On reset button click | tool_name |
| `search_performed` | On search input (debounced) | search_query, result_count |
| `search_result_clicked` | On search result click | tool_name, search_query |
| `faq_expanded` | On FAQ accordion open | tool_name, faq_question |
| `related_tool_clicked` | On related tool link | tool_name, destination_url |
| `share_button_clicked` | On share action | tool_name |

### Google Analytics Script

```typescript
// app/layout.tsx
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="ga-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
  `}
</Script>
```

### Google Search Console

- Submit sitemap via GSC after first deploy
- Connect GA4 to GSC for combined insights
- Monitor: impressions, CTR, average position per tool keyword

---

## 16. AdSense Architecture

### Ad Slot Placement Rules

**Allowed placements:**
1. **Horizontal leaderboard** (728×90 desktop / responsive mobile) — below tool header, above calculator
2. **Rectangle** (300×250) — sticky sidebar on desktop tool pages
3. **In-article** (responsive) — mid-article in blog posts
4. **Horizontal banner** — below related tools section, above footer

**Forbidden placements:**
- Above the fold on mobile (causes CLS + bad UX)
- Inside the calculator interface
- Between form fields
- On About, Contact, Privacy pages
- Interstitial or popup ads (never)
- Pop-unders

### Ad Slot Component

```typescript
// src/components/ui/AdSlot.tsx
'use client';

import { useEffect, useRef } from 'react';

interface AdSlotProps {
  slotId: string;
  format: 'horizontal' | 'square' | 'responsive';
  className?: string;
}

// Reserved height per format (prevents CLS)
const MIN_HEIGHTS: Record<AdSlotProps['format'], number> = {
  horizontal: 90,
  square: 250,
  responsive: 100,
};

export function AdSlot({ slotId, format, className }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn('AdSense error:', e);
    }
  }, []);

  return (
    <div
      className={className}
      style={{ minHeight: MIN_HEIGHTS[format] }}
      aria-label="Advertisement"
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format={format === 'responsive' ? 'auto' : undefined}
        data-full-width-responsive="true"
      />
    </div>
  );
}
```

### AdSense Script (loaded once in layout)

```typescript
// app/layout.tsx — only in production
{process.env.NODE_ENV === 'production' && (
  <Script
    async
    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
    crossOrigin="anonymous"
    strategy="lazyOnload"
  />
)}
```

### Ad Slot IDs (environment variables)

```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_AD_SLOT_HORIZONTAL=1234567890
NEXT_PUBLIC_AD_SLOT_SQUARE=0987654321
NEXT_PUBLIC_AD_SLOT_ARTICLE=1122334455
```

---

## 17. Accessibility Plan

### WCAG 2.1 AA Compliance Target

**Keyboard Navigation:**
- All interactive elements reachable via Tab
- Logical tab order (left-to-right, top-to-bottom)
- Focus ring visible on all focusable elements (`focus-visible:ring-2`)
- Skip to main content link at top of every page
- Modal/drawer traps focus when open
- Escape closes modals, dropdowns, mobile menu

**Semantic HTML:**
- Correct heading hierarchy: one H1 per page, H2 for sections, H3 for sub-sections
- `<nav>` for navigation, `<main>` for main content, `<aside>` for sidebars
- `<article>` for blog posts, `<section>` with aria-label for page sections
- Form fields always paired with `<label>` via `htmlFor`
- Error messages linked to fields via `aria-describedby`

**ARIA Patterns:**
```typescript
// Calculator form with live region for results
<div aria-live="polite" aria-atomic="true">
  {result && <ResultCard {...result} />}
</div>

// Loading state
<div aria-busy={isCalculating} aria-label="Calculating result">

// Accordion FAQ
<button
  aria-expanded={isOpen}
  aria-controls={`faq-answer-${index}`}
  id={`faq-question-${index}`}
>

// Search results
<ul role="listbox" aria-label="Search results">
  <li role="option" aria-selected={false}>...
```

**Color Contrast:**
- Body text (#27272a on white): 16.75:1 — Passes AAA
- Muted text (#71717a on white): 4.63:1 — Passes AA
- Primary blue (#2563eb on white): 5.9:1 — Passes AA
- Error red (#dc2626 on white): 5.5:1 — Passes AA
- All text on colored backgrounds must be tested and verified

**Screen Reader:**
- All images have descriptive `alt` attributes
- Decorative images: `alt=""`
- Icon-only buttons: `aria-label="Reset form"`
- Progress bars: `role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}`

**Motion:**
- All animations respect `prefers-reduced-motion`
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 18. Testing Strategy

### Unit Tests (Vitest)

Test all pure calculation functions in `src/features/*/calculations.ts`.

```typescript
// tests/unit/features/cgpa.test.ts
import { describe, it, expect } from 'vitest';
import { calculateCGPA } from '@/features/cgpa/calculations';

describe('calculateCGPA', () => {
  it('calculates correct CGPA for 10-point scale', () => {
    const subjects = [
      { name: 'Math', credits: 4, gradePoints: 9 },
      { name: 'Physics', credits: 3, gradePoints: 8 },
    ];
    const result = calculateCGPA(subjects, 10);
    expect(result.cgpa).toBe(8.57);
    expect(result.percentage).toBe(81.43);
    expect(result.classification).toBe('Distinction');
  });

  it('returns Fail for CGPA below 4.0', () => {
    const subjects = [{ name: 'Math', credits: 4, gradePoints: 3 }];
    const result = calculateCGPA(subjects, 10);
    expect(result.classification).toBe('Fail');
  });

  it('handles single subject', () => {
    const subjects = [{ name: 'Math', credits: 3, gradePoints: 8.5 }];
    expect(() => calculateCGPA(subjects)).not.toThrow();
  });

  it('throws on empty subjects array', () => {
    expect(() => calculateCGPA([])).toThrow('No subjects provided');
  });
});
```

**Test all edge cases per tool:**

Attendance Calculator edge cases to test:
- `attended = total` → can miss 0 classes
- `attended > total` → validation error
- `attended = 0, total = 100, target = 75` → need 300 more classes
- `target = 100` → can miss 0 classes

CGPA Calculator edge cases:
- All grade points = 0
- All subjects same grade points
- Single subject with 1 credit
- 10-point scale vs 4-point scale

### Integration Tests (Vitest + Testing Library)

Test React components with user interactions:

```typescript
// tests/integration/AttendanceCalculator.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { AttendanceCalculator } from '@/components/calculators/AttendanceCalculator';

it('shows result when valid inputs entered', async () => {
  render(<AttendanceCalculator />);
  fireEvent.change(screen.getByLabelText(/classes attended/i), { target: { value: '60' } });
  fireEvent.change(screen.getByLabelText(/total classes/i), { target: { value: '100' } });
  expect(await screen.findByText(/60%/i)).toBeInTheDocument();
  expect(await screen.findByText(/cannot miss/i)).toBeInTheDocument();
});
```

### E2E Tests (Playwright)

```typescript
// tests/e2e/cgpa-calculator.spec.ts
import { test, expect } from '@playwright/test';

test('CGPA calculator computes correct result', async ({ page }) => {
  await page.goto('/tools/cgpa-calculator');
  // Verify page loads
  await expect(page).toHaveTitle(/CGPA Calculator/);

  // Fill in form
  await page.fill('[data-testid="credits-0"]', '4');
  await page.fill('[data-testid="grade-points-0"]', '9');

  // Check result appears
  await expect(page.locator('[data-testid="result-cgpa"]')).toContainText('9.00');
});

test('tool page passes Core Web Vitals', async ({ page }) => {
  await page.goto('/tools/cgpa-calculator');
  // Check no layout shift
  const cls = await page.evaluate(() => {
    return new Promise(resolve => {
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        resolve(entries.reduce((sum, e: any) => sum + e.value, 0));
      }).observe({ type: 'layout-shift', buffered: true });
      setTimeout(() => resolve(0), 3000);
    });
  });
  expect(cls).toBeLessThan(0.1);
});
```

### Tooling

```json
{
  "devDependencies": {
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.0.0",
    "@playwright/test": "^1.40.0",
    "jsdom": "^23.0.0"
  }
}
```

**Scripts:**
```json
{
  "scripts": {
    "test": "vitest",
    "test:e2e": "playwright test",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## 19. Deployment Architecture

### Environment Variables

```env
# .env.example (commit this)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_AD_SLOT_HORIZONTAL=XXXXXXXXXX
NEXT_PUBLIC_AD_SLOT_SQUARE=XXXXXXXXXX
NEXT_PUBLIC_AD_SLOT_ARTICLE=XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://studenttools.in
NEXT_PUBLIC_GSC_VERIFICATION=XXXXXXXXXX

# .env.local (never commit)
# Add actual values here locally
```

### Vercel Configuration

**`vercel.json`:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "redirects": [
    { "source": "/tool/:slug", "destination": "/tools/:slug", "permanent": true }
  ]
}
```

### GitHub Actions CI/CD

**`.github/workflows/ci.yml`:**
```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm test

  lighthouse:
    runs-on: ubuntu-latest
    needs: lint-and-test
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci && npm run build
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/tools/cgpa-calculator
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
```

**`lighthouse-budget.json`:**
```json
[
  {
    "path": "/tools/cgpa-calculator",
    "assertions": {
      "categories:performance": ["error", { "minScore": 0.95 }],
      "categories:accessibility": ["error", { "minScore": 0.95 }],
      "categories:seo": ["error", { "minScore": 0.95 }],
      "categories:best-practices": ["error", { "minScore": 0.95 }]
    }
  }
]
```

### Preview Deployments

Vercel auto-deploys every PR as a preview URL. No additional configuration needed.

### Production Deployment

1. Merge PR to `main` → Vercel triggers build
2. Build runs `next build` → all static pages generated
3. Deploy to Vercel edge network (global CDN)
4. Zero-downtime deployment (Vercel default)

### Domain Setup

1. Purchase `studenttools.in` on GoDaddy/Namecheap
2. Add to Vercel: Project → Domains → Add `studenttools.in`
3. Update DNS: point A record to Vercel IP, CNAME `www` to `cname.vercel-dns.com`
4. Vercel auto-provisions SSL certificate (Let's Encrypt)
5. Set redirect: `www.studenttools.in` → `studenttools.in` (in Vercel dashboard)

---

## 20. AI Coding Agent Execution Plan

This section breaks the project into sequential phases. Each phase has clear acceptance criteria. No phase should begin until the previous phase passes all acceptance criteria.

---

### Phase 0: Project Initialization

**Goal:** Scaffold the Next.js project with all dependencies installed and configured.

**Commands to Execute:**
```bash
npx create-next-app@latest studenttools --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd studenttools
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install @hookform/resolvers react-hook-form zod
npm install fuse.js
npm install @next/mdx @mdx-js/react @mdx-js/mdx next-mdx-remote
npm install -D vitest @testing-library/react @testing-library/user-event jsdom @vitejs/plugin-react
npm install -D @playwright/test
npx shadcn@latest init
npx shadcn@latest add button card input label select accordion badge separator tabs slider switch toast dialog sheet command navigation-menu
```

**Files to Create:**
- `tailwind.config.ts` — full design system config
- `tsconfig.json` — strict mode enabled
- `next.config.ts` — with image domains, MDX support
- `.env.example`
- `.env.local`
- `.gitignore`
- `components.json` (shadcn config)
- `vitest.config.ts`
- `playwright.config.ts`

**`tsconfig.json` requirements:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

**Acceptance Criteria:**
- [ ] `npm run dev` starts without errors on port 3000
- [ ] `npm run build` completes without TypeScript errors
- [ ] `npm run lint` passes with 0 errors
- [ ] shadcn Button component renders on homepage
- [ ] Tailwind CSS applies styles correctly

---

### Phase 1: Design System

**Goal:** Implement the complete visual foundation — colors, typography, spacing, and base UI components.

**Files to Create:**
- `src/app/globals.css` — CSS variables, base styles, `prefers-reduced-motion` rule
- `tailwind.config.ts` — Complete with all color tokens, font family, animation keyframes
- `src/lib/utils.ts` — `cn()` helper using `clsx` + `tailwind-merge`

**Components to Build:**
- `src/components/ui/ProgressBar.tsx`
- `src/components/ui/CategoryBadge.tsx`
- `src/components/ui/ShareButton.tsx`
- `src/components/ui/AdSlot.tsx`

**`globals.css` requirements:**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  /* ... full shadcn CSS variable set */
}

* {
  @apply border-border;
}

body {
  @apply bg-background text-foreground;
  font-feature-settings: "rlig" 1, "calt" 1;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Acceptance Criteria:**
- [ ] All shadcn components render with correct Tailwind styles
- [ ] `cn()` utility merges class names correctly
- [ ] ProgressBar renders with correct percentage fill
- [ ] CategoryBadge renders with correct color per category
- [ ] AdSlot renders with reserved min-height container
- [ ] No TypeScript errors

---

### Phase 2: Data Architecture

**Goal:** Create all TypeScript interfaces and the complete tools data registry.

**Files to Create:**
- `src/types/tool.ts` — All interfaces
- `src/types/blog.ts`
- `src/types/seo.ts`
- `src/types/analytics.ts`
- `src/lib/tools.ts` — Tool registry functions
- `src/lib/categories.ts` — Category registry

**Tool Data Files (7 MVP tools):**
- `src/data/tools/cgpa-calculator.ts`
- `src/data/tools/attendance-calculator.ts`
- `src/data/tools/percentage-calculator.ts`
- `src/data/tools/gate-rank-predictor.ts`
- `src/data/tools/cat-percentile-calculator.ts`
- `src/data/tools/study-timer.ts`
- `src/data/tools/ctc-calculator.ts`

**Static Data Files:**
- `src/data/gate-data.json` — GATE score-rank lookup for CS, EC, ME, CE, EE branches
- `src/data/cat-data.json` — CAT score-percentile lookup for 2023, 2024
- `src/data/tax-data.ts` — Income tax slabs (old + new regime) for FY 2025-26
- `src/data/professional-tax.ts` — State-wise professional tax rates

**Acceptance Criteria:**
- [ ] `getAllTools()` returns 7 tools
- [ ] `getToolBySlug('cgpa-calculator')` returns correct tool object
- [ ] `getToolsByCategory('cgpa-tools')` returns correct tools
- [ ] All tools have minimum 4 FAQs
- [ ] All tools have `relatedTools` array with 3 slugs
- [ ] TypeScript compiles with strict mode — no errors
- [ ] All interfaces match the specification in Section 12

---

### Phase 3: Layout Components

**Goal:** Build the complete site navigation, footer, and breadcrumbs.

**Files to Create:**
- `src/app/layout.tsx` — Root layout with fonts, metadata, analytics scripts
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Breadcrumbs.tsx`
- `src/components/layout/MobileNav.tsx`
- `src/components/ui/SearchBar.tsx`

**Navbar requirements:**
- Logo links to `/`
- "Tools" opens mega menu with all categories and top tools
- Search icon opens inline SearchBar
- Hamburger visible on mobile (`md:hidden`)
- Sticky: `position: sticky; top: 0; z-index: 50`
- Background: white with 95% opacity + backdrop blur

**Footer requirements:**
- 4-column grid on desktop, 2-column on tablet, 1-column on mobile
- Column 1: Logo + tagline + brief description
- Column 2: Tool categories (links to /category/*)
- Column 3: Resources (links to /blog, popular tools)
- Column 4: Company (About, Contact, Privacy, Disclaimer)
- Bottom bar: Copyright + disclaimer text

**SearchBar requirements:**
- Install Fuse.js: `import Fuse from 'fuse.js'`
- Search keys: `['title', 'shortDescription', 'keywords', 'category']`
- Threshold: 0.3 (fuzzy but not too loose)
- Minimum characters: 2
- Debounce: 150ms
- Show max 8 results

**Acceptance Criteria:**
- [ ] Navbar renders on all viewport sizes (375px, 768px, 1280px)
- [ ] Mobile menu opens and closes correctly
- [ ] Search returns relevant results for "cgpa", "attendance", "salary"
- [ ] Breadcrumbs render correct structure and links
- [ ] Footer is accessible (all links have text, no empty hrefs)
- [ ] Skip-to-content link is first focusable element
- [ ] Tab navigation order is logical throughout

---

### Phase 4: Tool Framework

**Goal:** Build the generic tool rendering system — ToolLayout, ToolCard, all tool UI scaffolding components.

**Files to Create:**
- `src/components/tools/ToolLayout.tsx`
- `src/components/tools/ToolCard.tsx`
- `src/components/tools/ToolGrid.tsx`
- `src/components/tools/CalculatorForm.tsx`
- `src/components/tools/ResultCard.tsx`
- `src/components/tools/FAQSection.tsx`
- `src/components/tools/RelatedTools.tsx`
- `src/components/tools/HowItWorks.tsx`
- `src/components/tools/ExampleSection.tsx`
- `src/components/tools/ToolPageSkeleton.tsx`
- `src/components/seo/StructuredData.tsx`
- `src/hooks/useCalculator.ts`
- `src/hooks/useLocalStorage.ts`
- `src/lib/seo.ts` — generateToolMetadata(), generateFAQSchema(), etc.

**StructuredData component:**
```typescript
// Renders JSON-LD scripts in page <head>
// Accepts: 'SoftwareApplication' | 'FAQPage' | 'BreadcrumbList' | 'Article' | 'WebSite'
```

**ToolLayout 2-column grid (desktop):**
```
[Left, 65% width]: Calculator form + results
[Right, 35% width]: Sticky ad slot (300x250) + quick links
```

**Mobile:** Single column, sidebar moves below calculator

**Acceptance Criteria:**
- [ ] ToolLayout renders all sections in correct order
- [ ] ToolCard renders in all 3 variants (default, compact, featured)
- [ ] FAQSection uses shadcn Accordion, outputs FAQPage schema
- [ ] RelatedTools resolves slugs to tool metadata correctly
- [ ] StructuredData injects valid JSON-LD (validate at schema.org/validator)
- [ ] useCalculator hook handles errors without crashing
- [ ] ToolPageSkeleton has correct height to prevent CLS

---

### Phase 5: Homepage + Category Pages + /tools

**Goal:** Build the homepage, tools index, and category pages using the tool framework.

**Files to Create:**
- `src/app/page.tsx` — Homepage
- `src/app/tools/page.tsx` — All tools index
- `src/app/category/[slug]/page.tsx` — Category pages
- `src/components/home/HeroSection.tsx`
- `src/components/home/CategoryGrid.tsx`
- `src/components/home/FeaturedTools.tsx`

**Homepage sections:**
1. HeroSection with H1, SearchBar, 3 featured tool CTAs
2. "Popular Tools" — top 6 tools by priority
3. "Browse by Category" — 6 category cards
4. "All Tools" — complete grid
5. SEO text section (200 words, keyword-rich)

**Category page requirements:**
- `generateStaticParams` for all 6 categories
- H1: "[Category Name] Tools for Students"
- Description paragraph
- Tool grid (all tools in category)
- SEO text at bottom

**Acceptance Criteria:**
- [ ] `npm run build` generates all static category pages
- [ ] Homepage H1 contains target keywords
- [ ] CategoryGrid links to correct category URLs
- [ ] Search on homepage returns tools
- [ ] All tool cards link to correct tool URLs
- [ ] Lighthouse: Performance > 95, SEO > 95

---

### Phase 6: Routing + Tool Pages

**Goal:** Build the dynamic tool page routing and populate all 7 MVP tool pages.

**Files to Create:**
- `src/app/tools/[slug]/page.tsx`
- `src/app/tools/[slug]/loading.tsx`
- `src/app/not-found.tsx`

**Tool page requirements:**
- `generateStaticParams` — all 7 tool slugs
- `generateMetadata` — per tool metadata
- Dynamic component resolution (see Section 13)
- StructuredData: SoftwareApplication + FAQPage + BreadcrumbList
- All sections from ToolLayout render

**Acceptance Criteria:**
- [ ] All 7 tool routes resolve correctly in `npm run build`
- [ ] `/tools/invalid-slug` returns 404
- [ ] Each tool page has correct `<title>` and `<meta description>`
- [ ] Canonical URL is set on each tool page
- [ ] JSON-LD validates on schema.org/validator for each tool
- [ ] Loading skeleton shows while calculator component loads

---

### Phase 7: CGPA Calculator

**Goal:** Build the complete, production-ready CGPA Calculator.

**Files to Create:**
- `src/features/cgpa/calculations.ts` — Pure calculation functions
- `src/features/cgpa/validation.ts` — Zod schema
- `src/components/calculators/CGPACalculator.tsx` — UI component

**Calculation tests to write first (TDD):**
```
tests/unit/features/cgpa.test.ts
```

**UI Requirements:**
- Scale selector (10-point / 4-point)
- Dynamic subject rows (add/remove) — default 6 rows
- Credits and grade points input per subject
- Real-time calculation as inputs change
- Result: CGPA, Percentage, Classification
- Percentage bar visualization (ProgressBar component)
- "Copy Result" button
- Reset button

**Acceptance Criteria:**
- [ ] All unit tests pass
- [ ] CGPA calculated correctly for test cases
- [ ] Validation errors shown inline (not toast)
- [ ] Results update in real time (< 16ms per keystroke)
- [ ] Add/remove subject rows works
- [ ] INP < 100ms on every keystroke (measure with DevTools)
- [ ] Accessible: all inputs have labels, results announced by screen reader

---

### Phase 8: Attendance Calculator

**Goal:** Build the Attendance Calculator.

**Files to Create:**
- `src/features/attendance/calculations.ts`
- `src/features/attendance/validation.ts`
- `src/components/calculators/AttendanceCalculator.tsx`
- `tests/unit/features/attendance.test.ts`

**UI Requirements:**
- 3 inputs: Classes Attended, Total Classes Held, Target %
- Real-time calculation
- Visual attendance percentage bar (color: green ≥ target, red < target)
- Two result modes:
  - Mode A (above target): "You can miss X more classes"
  - Mode B (below target): "You need to attend X more classes consecutively"
- Warning if target > 90%

**Acceptance Criteria:**
- [ ] All unit tests pass (including edge cases)
- [ ] Attended > Total shows validation error on Attended field
- [ ] Mode switches correctly when attendance crosses target
- [ ] ProgressBar updates color based on threshold

---

### Phase 9: Percentage Calculator

**Goal:** Build the 3-mode Percentage / Marks Calculator.

**Files to Create:**
- `src/features/percentage/calculations.ts`
- `src/features/percentage/validation.ts`
- `src/components/calculators/PercentageCalculator.tsx`
- `tests/unit/features/percentage.test.ts`

**UI Requirements:**
- Tab interface (shadcn Tabs) for 3 modes:
  - Mode 1: Marks → Percentage
  - Mode 2: Marks Needed (target %)
  - Mode 3: Aggregate (multi-subject table)
- Mode 3 allows dynamic row addition (like CGPA calculator)

**Acceptance Criteria:**
- [ ] All 3 modes calculate correctly
- [ ] Mode 3 handles 1–20 subjects
- [ ] All edge cases handled (0 marks, 100% target, etc.)

---

### Phase 10: GATE Rank Predictor

**Goal:** Build the GATE Rank Predictor using static lookup tables.

**Files to Create:**
- `src/features/gate/calculations.ts` — Binary search on sorted score-rank array
- `src/features/gate/lookupRank.ts` — Lookup functions
- `src/components/calculators/GATERankPredictor.tsx`
- `tests/unit/features/gate.test.ts`

**Calculation approach:**
```typescript
// Find rank by binary search on score-rank lookup table
// Return rank range (upper bound + lower bound for score ± 2 points)
// Calculate percentile from rank and total appeared
```

**UI Requirements:**
- Branch selector (dropdown with all 29 GATE branches)
- Year selector (2023, 2024, 2025)
- Score input (0–100, 2 decimal places)
- Results: Rank range, Percentile, PSU eligibility indicator
- IIT/NIT cutoff comparison table (static data)

**Acceptance Criteria:**
- [ ] Rank calculation matches GATE official data for known test cases
- [ ] Graceful handling for score outside data range
- [ ] Branch + Year selection triggers recalculation
- [ ] PSU eligibility shows correct year data

---

### Phase 11: CAT Percentile Calculator

**Goal:** Build the CAT Percentile Calculator.

**Files to Create:**
- `src/features/cat/calculations.ts`
- `src/features/cat/lookupPercentile.ts`
- `src/components/calculators/CATPredictorCalculator.tsx`
- `tests/unit/features/cat.test.ts`

**UI Requirements:**
- Score input
- Year selector
- Output: Overall percentile, sectional estimates
- IIM cutoff table (2024 data)
- Disclaimer about normalization

**Acceptance Criteria:**
- [ ] Percentile lookup matches known CAT data points
- [ ] Handles max score (198) correctly
- [ ] Disclaimer prominently displayed

---

### Phase 12: Study Timer (Pomodoro)

**Goal:** Build the full-featured Pomodoro study timer.

**Files to Create:**
- `src/hooks/useTimer.ts` — Timer state machine hook
- `src/components/calculators/StudyTimer.tsx`
- `tests/unit/hooks/useTimer.test.ts`

**Timer states:**
```typescript
type TimerState = 'idle' | 'work' | 'shortBreak' | 'longBreak' | 'complete';
```

**UI Requirements:**
- Circular progress visualization (CSS `conic-gradient`, no canvas)
- Large time display (MM:SS)
- State label (Work / Short Break / Long Break)
- Session counter (dots)
- Settings panel: work/break durations, sessions before long break
- Start / Pause / Reset controls
- Keyboard: Space (start/pause), R (reset)
- Browser tab title shows countdown: "23:45 — Study Timer | StudentTools.in"
- Sound on completion (Web Audio API, optional with toggle)

**Persistence:**
- Settings in localStorage
- Session count in localStorage (resets daily)

**Acceptance Criteria:**
- [ ] Timer counts down correctly
- [ ] Transitions: Work → Short Break → Work → (4 cycles) → Long Break
- [ ] Tab title updates every second
- [ ] Settings persist across page reload
- [ ] Keyboard shortcuts work
- [ ] `prefers-reduced-motion` disables CSS animations

---

### Phase 13: CTC / Salary Calculator

**Goal:** Build the CTC take-home calculator for Indian freshers.

**Files to Create:**
- `src/features/ctc/calculations.ts`
- `src/features/ctc/taxRules.ts`
- `src/components/calculators/CTCCalculator.tsx`
- `tests/unit/features/ctc.test.ts`

**Calculation requirements:**
```typescript
// Deductions to handle:
// 1. EPF: 12% of Basic (employee) + 12% employer (not deducted from take-home)
// 2. Professional Tax: state-specific, monthly slab
// 3. Income Tax (TDS): new regime slabs FY 2025-26
// 4. HRA exemption: metro vs non-metro
// Output: monthly gross, deductions breakdown, monthly in-hand
```

**UI Requirements:**
- Annual CTC input
- Basic % slider (40–60%)
- HRA % slider (40–100%)
- PF toggle
- State selector (for professional tax)
- Tax regime selector (Old / New)
- Result: Detailed monthly breakdown table
- Annual breakdown table (optional toggle)

**Acceptance Criteria:**
- [ ] Tax calculation matches known manual calculations
- [ ] Professional tax varies correctly by state
- [ ] PF toggle shows/hides PF deduction correctly
- [ ] Result table is accessible (proper table markup)

---

### Phase 14: Blog System

**Goal:** Implement the MDX blog system with 5 initial posts.

**Files to Create:**
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/lib/blog.ts` — MDX parsing utilities
- `src/components/blog/BlogCard.tsx`
- `src/components/blog/BlogGrid.tsx`
- `src/components/blog/BlogHeader.tsx`
- `src/content/blog/how-to-calculate-cgpa-vtu.mdx`
- `src/content/blog/attendance-rules-indian-colleges.mdx`
- `src/content/blog/gate-score-vs-rank-explained.mdx`
- `src/content/blog/cgpa-vs-percentage-which-matters-placements.mdx`
- `src/content/blog/pomodoro-technique-study-guide-students.mdx`

**MDX blog post frontmatter:**
```mdx
---
title: "How to Calculate CGPA in VTU University"
description: "Step-by-step guide to calculating CGPA in Visvesvaraya Technological University with examples."
publishedAt: "2025-01-15"
updatedAt: "2025-01-15"
author: "StudentTools"
readingTime: 5
tags: ["cgpa", "vtu", "engineering"]
relatedTools: ["cgpa-calculator", "percentage-calculator"]
---
```

**Acceptance Criteria:**
- [ ] `npm run build` generates all 5 blog posts as static pages
- [ ] Blog index shows all posts sorted by date
- [ ] Each post has correct Article JSON-LD
- [ ] MDX renders correctly (headings, lists, code blocks)
- [ ] Related tools section renders on each post
- [ ] Reading time shows in blog header

---

### Phase 15: Static Pages

**Goal:** Build all required static pages.

**Files to Create:**
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/disclaimer/page.tsx`

**About page requirements:**
- No ads
- Mission statement
- What tools we offer
- Contact link
- "Not affiliated with any university" disclaimer

**Contact page requirements:**
- Simple contact form (mailto: action — no backend needed)
- Email address displayed as text
- Note: response time expectation

**Privacy page requirements:**
- AdSense data collection disclosure
- Google Analytics disclosure
- Cookie usage
- Contact for data requests
- "Last updated" date

**Acceptance Criteria:**
- [ ] All pages render without errors
- [ ] No AdSlot components on these pages
- [ ] Privacy policy is legally sufficient for AdSense approval
- [ ] Contact form has correct form structure and accessibility

---

### Phase 16: SEO + Sitemap + Robots

**Goal:** Finalize all SEO infrastructure.

**Files to Create/Update:**
- `src/app/sitemap.ts` — Auto-generated sitemap
- `src/app/robots.ts` — Robots.txt
- Review all `generateMetadata` functions
- Add structured data to all pages
- Create OG images for all 7 tools (static PNG files in `public/og/`)

**OG Image Specification:**
- Size: 1200×630px
- Background: Primary blue gradient
- Tool icon (white, 120px)
- Tool name (white, 48px bold)
- Tagline: "Free tool at StudentTools.in" (white, 24px)
- StudentTools.in logo bottom-right

**Sitemap verification:**
- All 7 tool pages included
- All 6 category pages included
- All 5 blog posts included
- Homepage and static pages included

**Acceptance Criteria:**
- [ ] `/sitemap.xml` returns valid XML
- [ ] `/robots.txt` allows all pages, specifies sitemap
- [ ] All tool pages have canonical tags
- [ ] All tool pages have OG images
- [ ] Meta descriptions are 150–160 characters (validate all)
- [ ] GSC shows 0 crawl errors after submission
- [ ] schema.org validator passes for all 3 schema types per tool

---

### Phase 17: Performance Optimization

**Goal:** Achieve 95+ Lighthouse on all metrics for all tool pages.

**Optimization tasks:**
1. Audit and fix any CLS issues (run Lighthouse on each tool page)
2. Check LCP element — ensure it's preloaded if it's an image
3. Ensure no render-blocking resources
4. Verify font `display: swap` is applied
5. Check `next/image` usage — every `<img>` must be replaced
6. Audit bundle size: `ANALYZE=true npm run build`
7. Replace any wildcard Lucide imports with specific imports
8. Check AdSlot has correct reserved height
9. Add `<link rel="preconnect">` for Google Fonts and AdSense domains

**`next.config.ts` additions:**
```typescript
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};
```

**Acceptance Criteria:**
- [ ] Lighthouse Performance ≥ 95 on homepage (mobile)
- [ ] Lighthouse Performance ≥ 95 on /tools/cgpa-calculator (mobile)
- [ ] Lighthouse Performance ≥ 95 on /tools/attendance-calculator (mobile)
- [ ] CLS = 0 on all tested pages
- [ ] LCP < 1.5s on all tested pages
- [ ] INP < 100ms on calculator inputs
- [ ] Total JS bundle < 150KB gzipped (verify with build analyzer)

---

### Phase 18: Analytics + AdSense Integration

**Goal:** Integrate GA4 and AdSense, verify events are firing.

**Files to Create/Update:**
- `src/lib/analytics.ts` — Complete event tracking functions
- `src/app/layout.tsx` — Add GA4 + AdSense scripts
- Update all calculator components to call `trackEvent('calculation_completed', ...)`
- Update SearchBar to call `trackEvent('search_performed', ...)`
- Update FAQSection to call `trackEvent('faq_expanded', ...)`
- Update RelatedTools to call `trackEvent('related_tool_clicked', ...)`

**Verification:**
- Open GA4 DebugView while using calculators
- Verify each event appears with correct params
- Verify AdSense shows placeholder (publisher code placeholder in dev)

**Acceptance Criteria:**
- [ ] GA4 events fire on all tracked interactions
- [ ] AdSense script loads only in production
- [ ] AdSlot components reserve correct height (no CLS from ad load)
- [ ] No console errors from analytics or ad scripts
- [ ] `trackEvent` is called with correct params on calculation completion

---

### Phase 19: Testing Suite

**Goal:** Achieve test coverage for all critical calculation paths.

**Files to Create:**
- Unit tests for all 7 tools' calculation functions
- Integration tests for top 3 calculator components
- E2E tests for critical user paths

**Minimum test coverage targets:**
- `src/features/*/calculations.ts`: 100%
- `src/lib/tools.ts`: 90%
- `src/features/*/validation.ts`: 85%

**E2E critical paths:**
1. User loads CGPA calculator → enters 5 subjects → sees CGPA result
2. User loads Attendance calculator → enters values → sees attendance percentage
3. User uses homepage search → types "cgpa" → clicks first result → lands on correct tool
4. User loads any tool page → uses keyboard to Tab through all inputs → all focusable

**Acceptance Criteria:**
- [ ] `npm test` runs without failures
- [ ] All edge cases per tool are covered (minimum test count per Section 18)
- [ ] `npm run test:e2e` passes all critical paths
- [ ] Coverage report shows 85%+ on features directory

---

### Phase 20: Pre-Launch Checklist

**Final verification before go-live:**

**Technical:**
- [ ] `npm run build` completes with 0 TypeScript errors
- [ ] `npm run lint` passes with 0 warnings
- [ ] All 7 tool pages resolve: `curl -I https://studenttools.in/tools/cgpa-calculator`
- [ ] Sitemap accessible: `curl https://studenttools.in/sitemap.xml`
- [ ] Robots.txt accessible: `curl https://studenttools.in/robots.txt`
- [ ] SSL certificate valid (HTTPS enforced)
- [ ] `www.studenttools.in` redirects to `studenttools.in`
- [ ] No console errors in production

**SEO:**
- [ ] Google Search Console verified with meta tag
- [ ] Sitemap submitted to GSC
- [ ] All tool pages indexed (request indexing in GSC for top 7 pages)
- [ ] structured-data testing tool passes for all 3 schema types
- [ ] All meta descriptions are 150–160 chars (no truncation in SERP)

**AdSense:**
- [ ] AdSense application submitted
- [ ] All pages have Privacy Policy link in footer
- [ ] No prohibited content on any page
- [ ] About + Contact pages live

**Accessibility:**
- [ ] WAVE accessibility tool shows 0 errors on homepage and 2 tool pages
- [ ] VoiceOver / NVDA can navigate the CGPA calculator and complete a calculation
- [ ] Color contrast passes on all text elements

**Performance:**
- [ ] Lighthouse report run on mobile for homepage, CGPA calculator, Attendance calculator
- [ ] All scores ≥ 95

**Content:**
- [ ] 5 blog posts published
- [ ] All FAQs have factual, accurate answers
- [ ] Tool descriptions mention India-specific context where relevant
- [ ] No placeholder text ("Lorem ipsum") anywhere
- [ ] Privacy policy last updated date matches actual date

---

## Appendix A: Package.json Reference

```json
{
  "name": "studenttools",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "analyze": "ANALYZE=true next build"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "lucide-react": "^0.400.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "react-hook-form": "^7.51.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.23.0",
    "fuse.js": "^7.0.0",
    "@next/mdx": "^15.0.0",
    "@mdx-js/react": "^3.0.0",
    "@mdx-js/mdx": "^3.0.0",
    "next-mdx-remote": "^5.0.0",
    "gray-matter": "^4.0.3",
    "reading-time": "^1.5.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "vitest": "^1.6.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.0",
    "@vitejs/plugin-react": "^4.3.0",
    "jsdom": "^24.1.0",
    "@playwright/test": "^1.45.0",
    "@next/bundle-analyzer": "^15.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

## Appendix B: Environment Variable Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Yes (prod) | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | Yes (prod) | AdSense publisher ID |
| `NEXT_PUBLIC_AD_SLOT_HORIZONTAL` | Yes (prod) | Horizontal banner ad slot ID |
| `NEXT_PUBLIC_AD_SLOT_SQUARE` | Yes (prod) | Square ad slot ID |
| `NEXT_PUBLIC_AD_SLOT_ARTICLE` | Yes (prod) | In-article ad slot ID |
| `NEXT_PUBLIC_SITE_URL` | Yes | Full site URL (https://studenttools.in) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Yes | Google Search Console meta verification tag |

---

## Appendix C: Key Decision Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| State manager | None (useState) | Tools are stateless; Zustand adds complexity with no benefit |
| Blog system | MDX files | No database needed; fast SSG; easy to add posts |
| Search | Fuse.js client-side | No API needed; instant results; zero latency |
| Font | Geist (Next.js) | Optimal loading via next/font; performance-first |
| Icon library | Lucide React | Tree-shakeable; consistent style; used by shadcn |
| Form validation | Zod + RHF | Industry standard; type-safe; excellent DX |
| Testing | Vitest + Playwright | Fast unit tests + real browser E2E |
| Styling | Tailwind + shadcn | Utility-first; component library for complex UI |
| Backend | None | All tools are pure client-side computation |
| Database | None | Static data in JSON files; zero ops overhead |

---

*End of StudentTools.in Implementation Blueprint v1.0*

*This document is the single source of truth. Do not start implementation before reviewing all 20 sections. Execute phases in order. Do not skip acceptance criteria.*
