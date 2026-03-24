# doors2ai — Senior UX/UI Design Audit Report
**Prepared by:** Principal Product Designer (Analysis Role)
**Date:** March 2026
**Scope:** Full site audit — index, programs, curriculum, pricing, faq, contact, about, style.css
**Standard:** Premium SaaS / AI education platform (Stripe, Vercel, Maven, Linear level)

---

## Executive Summary

doors2ai has a solid structural foundation. The CSS token system is thoughtful, the information architecture is logical, the copy is clear, and the Inter typography renders cleanly. The site communicates what the product is without confusion.

However, it does not yet feel like a premium AI education platform. It feels like a well-coded prototype — technically correct, visually polished enough to ship, but missing the visual ambition, credibility signals, and emotional design language that separate a "good bootcamp site" from a platform people trust with a serious career transition.

The gap is not content. The content is strong. The gap is visual impact, depth, perceived value, and the absence of social proof infrastructure. A motivated career-changer landing on this site for the first time would understand it — but they would not feel compelled by it.

---

## Design Maturity Score

| Dimension | Score | Rating |
|---|---|---|
| Typography system | 7/10 | Professional |
| Color & brand identity | 6/10 | Startup+ |
| Visual hierarchy | 6.5/10 | Professional |
| Layout quality | 6.5/10 | Professional |
| Component maturity | 6/10 | Startup+ |
| Design system architecture | 7.5/10 | Professional |
| UX credibility signals | 4/10 | Startup |
| Conversion design | 5/10 | Startup+ |
| Visual identity strength | 4.5/10 | Startup |
| Emotional impact / wow factor | 3.5/10 | Beginner-Startup |

**Overall maturity rating: Professional (lower end)**
*Just below the threshold of "premium." Strong bones. Weak finish and near-zero emotional design.*

---

## Strengths

### 1. Solid CSS Token Architecture
The `:root` variable system is genuinely well-structured. Color tokens, radius scale, shadow scale, a spacing system via `clamp()`, and a clearly named type scale. This is infrastructure a design system would actually be proud of. The token naming is intuitive (`--brand`, `--text-2`, `--bg-dark`).

### 2. Typography is Clean and Readable
Inter is the correct choice for a technical education brand. The size hierarchy — hero h1 at clamp(38px–58px), section h2 at clamp(24px–32px), body at 15.5px — is well-calibrated. Letter spacing at -1.5px on the hero H1 gives it a modern, editorial feel. The line-height of 1.7 on body copy is comfortable.

### 3. Information Architecture is Logical
The nav structure (Programs → Curriculum → Pricing → About → FAQ → Contact) maps cleanly to where a prospective student would go. The Apply Now CTA being persistent in the nav is correct. Active states on nav links work. Sticky nav is present.

### 4. Track Color System has Potential
The three-track color coding — blue for Frontend, amber/orange for Full Stack, purple for AI — is a smart differentiator. It makes the three programs feel like distinct product lines rather than a menu of courses.

### 5. The Dark CTA Section is a Moment of Depth
The `cta-section` with `bg-dark: #0C1A14` + a radial green glow is the closest the site comes to having real visual personality. The contrast between the light page body and the dark CTA section creates appropriate rhythm and draws the eye.

### 6. Learning Path Track Layout
The bordered three-column path track (`path-track`) with left accent colors per track is a clever structural component. It communicates the curriculum narrative visually.

### 7. Copy is Precise and Professional
The writing avoids the "learn to code in 12 weeks!" bootcamp clichés. Phrases like "production mindset from the start," "not tutorials — a real engineering curriculum," and "graded enterprise capstone project" signal real professional standards.

---

## Weaknesses

### Critical Weaknesses

#### W1. Zero Social Proof
There is not a single student testimonial, outcome story, quote, cohort photo, success metric, employer name, alumni role, or LinkedIn reference anywhere across all 7 pages. For a career-transition education product asking people to invest time and money, the absence of any social proof is the single most significant trust gap. Even Udemy — which is the commodity end of the market — shows ratings. Maven and Section School lead with cohort alumni outcomes and employer logos.

#### W2. The Homepage Hero Has No Visual Element
The index.html hero is left-aligned text on a white background with a very subtle radial green gradient (7% opacity) in the corner. At first viewport, it looks like a documentation page. There is no visual anchor — no product screenshot, no abstract illustration, no student-facing imagery, no animated element, no device mockup, no "what you'll build" preview. The hero does the job of being readable but delivers no emotional impact. This is the most visible gap between the current site and a premium education platform.

#### W3. The Founder Section is Critically Underpowered
The about.html founder card shows:
- A two-letter "DB" monogram in a colored circle
- The name "Dan B." (not a full name)
- No photo (placeholder promised but not delivered)
- No LinkedIn link
- No specific role/title beyond "Founder & Lead Instructor"
- No specific credentials stated beyond vague "decades of enterprise delivery experience"

In a product that is entirely dependent on instructor credibility, this is a serious conversion barrier. Students pay for access to a person. A credentialed LinkedIn profile, a real photo, specific company/institution references, and quantified teaching experience would double the trust signal on this page.

#### W4. Pricing Signals Low Value Without Anchoring
$199/$299/$499 CAD for a multi-week bootcamp program is dramatically below market rate — which creates a different problem than being expensive: it raises doubt. A 14-week instructor-led AI engineering program for $499 CAD (~$360 USD) with live sessions and a graded capstone looks underpriced by an order of magnitude compared to:
- Coursera Plus: ~$500/yr
- Maven cohort courses: $500–$2,500 per course
- Section School AI programs: $1,500–$5,000+

Without any anchoring context — "introductory cohort pricing," "early access pricing," a comparison to alternatives, or a clear value justification — the low price undercuts perceived value rather than appearing as an advantage. Buyers of serious education interpret "suspiciously cheap" as a quality signal.

#### W5. No Hero Visual for Any Page
The `page-hero-dark` class (used on all inner pages) is named "dark" but actually renders as `#F7FAFC` — a very light gray. The pages look like a lighter version of the standard sections. There is no real visual differentiation between the page hero and a regular section heading. The curriculum page adds a progress bar visualization which is a nice touch, but it is small.

---

### Significant Weaknesses

#### W6. The Brand Identity Has No AI "Personality"
The green (#1D9E75) brand color reads as clean and organic — it is a good enterprise SaaS neutral — but it carries no AI/engineering identity. Compare: Anthropic uses muted rust-orange with depth. Hugging Face uses warm gold. Cohere uses purple. Linear uses deep purple/indigo. Vercel uses pure black. The current green is versatile but anonymous. Nothing about the visual identity says "this is where you come to learn about agentic AI systems."

#### W7. Section Rhythm is Monotonous
Every section follows the same pattern: section-label → h2 → description paragraph → grid of cards. This is structurally correct but visually fatiguing over multiple pages. There are no breakout layouts, no full-bleed sections, no asymmetric arrangements, no visual pauses. The eye adapts after 3 sections and stops reading carefully.

#### W8. Outcome Statistics are Weak
The outcomes section on the homepage shows: 12 (modules), 1 (capstone), 6+ (projects), 0 (prior experience needed). These are program structure metrics, not outcomes. They describe what the program contains, not what students achieve. Compare: "87% of graduates landed a technical role within 6 months" vs "12 structured modules." The latter tells you nothing meaningful about results. And "0 Prior experience needed" as a headline stat is a missed opportunity — it should be a reassurance, not a featured number.

#### W9. Mobile Navigation is Missing
There is no hamburger menu or mobile nav pattern in style.css. The navigation has 6 links + a CTA button in a 62px height bar — on a 375px mobile viewport this will break or overflow badly. This is a critical omission for a modern site.

#### W10. Tech Tags are Invisible
The `.tech-tag` components (Python, LangChain, RAG, etc.) have near-zero visual weight — 11px font, neutral gray background, faint border. On a premium AI education site, the tech stack should feel exciting and legible. These currently read as metadata footnotes rather than value signals.

---

### Minor Weaknesses

#### W11. Logo is a Wordmark in Default Inter
The `doors2ai` logo is Inter 700, with the `2` in brand green. While this is cleaner than a complex mark, there is no custom letterform, no icon, no distinctive styling. It reads as a placeholder name rather than a considered brand identity.

#### W12. Programs Page Repeats the Homepage Path Track Verbatim
The learning path section appears identically on both index.html and programs.html. A returning visitor lands on Programs expecting new information and immediately sees the exact same component. This creates a sense of a site that is slightly padded.

#### W13. "HEAD OFFICE" in All-Caps on Contact Page
Small detail, but `contact.html` displays "HEAD OFFICE" and "RESPONSE TIME" in all-caps inside the contact sidebar. For a single-location, single-instructor platform, calling it a "Head Office" is jarring — it reads as a template placeholder that was never updated.

#### W14. The Curriculum Tab Navigation is JavaScript-Primitive
The tab switching on curriculum.html uses `style.display = 'none'/'block'` inline style toggling. No CSS transitions, no slide animation, no tab indicator animation. The tab bar looks fine but the content swap is abrupt.

#### W15. Progress Bar on Curriculum Hero is Unlabeled in Context
The `curr-progress` bar (Foundations/Core AI/Advanced proportions) is a visually interesting element but the small color legend below it doesn't create enough visual clarity about what the proportions mean. There's no timeline, no week markers.

---

## 10 — Wow Factor Gap Analysis

### Why this does NOT feel like a Stripe-level site

Stripe's homepage delivers instant conviction through density of craft: smooth animations, a 3D illustrated hero, micro-interactions on every component, gradient mesh backgrounds, and photographic credibility through team imagery. Every pixel communicates that a serious engineering team built this. doors2ai has zero of that visual craftsmanship signal.

**Missing:** Custom illustration / abstract visual system, animation, depth, layering, micro-interactions.

### Why this does NOT feel like a modern AI startup site

Modern AI startup sites (Cohere, Anthropic, Mistral, Perplexity) share a visual vocabulary: dark backgrounds or deep gradient meshes, neon accent glows, node/network visualizations, terminal-style code snippets, animated data flows. None of this vocabulary is present in doors2ai. The site looks like it could equally be a productivity tool, a legal SaaS, or a health app.

**Missing:** AI visual language — dark hero, neural network aesthetic, code previews, animated data flow elements.

### Why this does NOT feel like a premium education platform

Maven, Section School, and the upper tier of education platforms build trust through social proof first. They lead with outcomes: "Alumni at Stripe, Google, and Anthropic." They show faces, names, and LinkedIn profiles. They show cohort photos. doors2ai asks people to trust a brand with zero visible evidence of past students or results.

**Missing:** Alumni proof, cohort imagery, outcome testimonials, employer logos, LinkedIn-linked instructor profile.

---

## 11 — Opportunities to Elevate to Premium Level

### Visual Polish

- **Hero depth:** Introduce a subtle animated gradient mesh or abstract geometric background for the homepage hero. Even a static layered dark section with a soft glow would dramatically increase perceived quality.
- **Contrast layers:** Add a dark-treatment hero section to at least one inner page to create visual variety between light and dark.
- **Shadow depth:** The card shadows (`--shadow-sm: 0 1px 4px rgba(0,0,0,0.07)`) are very conservative. Slightly warmer, deeper shadows on featured cards would add dimensionality.
- **Image/visual presence:** A single strong visual — a stylized workflow diagram, an abstract AI node graph, or even a well-composed hero image — would transform the homepage.

### Brand Presence

- **AI identity:** Introduce a visual motif that communicates AI/engineering. Could be a minimal node-graph pattern used as a background texture, a "terminal window" code snippet in the hero, or a simplified neural network diagram in the curriculum section.
- **Logo mark:** Add a minimal icon mark to complement the wordmark — even a simple geometric symbol. This makes the brand feel designed rather than named.
- **Brand gradient:** A subtle brand-to-dark gradient used in the hero section would create a more distinctive palette.

### Perceived Value

- **Pricing reframe:** Regardless of actual price, the pricing page needs social proof directly alongside the pricing cards. Alumni quotes about ROI. A "what this compares to" table. A "why this price is serious" explainer.
- **Instructor credentials:** A full-name, real photo, LinkedIn, and specific prior employers/institutions on the about page would dramatically increase perceived value. People pay for people.
- **Cohort exclusivity signals:** "Limited to 20 students per cohort" prominently displayed creates scarcity that justifies premium positioning.
- **Outcome stats:** Replace "12 modules / 1 capstone" with real outcome metrics, or if no alumni data exists yet, replace with forward-looking value propositions: "Portfolio projects reviewable on GitHub" / "Interview-ready in 14 weeks."

### Modern Feel Details

- **Smooth tab transitions** on curriculum.html with CSS transitions
- **Scroll-triggered fade-in** on stat numbers in the outcomes section
- **Hover states on program cards** that reveal a subtle gradient background
- **Code snippet preview** in the hero — even a 5-line Python snippet showing a LangGraph pattern communicates "this is technical, this is real"
- **Animated live dot** is already present — expand this subtle motion language to 1–2 more locations

---

## 12 — Improvement Roadmap by Effort

### Quick Wins (High Impact / Low Effort)

1. **Add 2–3 student testimonials** to the homepage and pricing page. Even from beta/pilot students. A single sentence with a name and role transforms trust.
2. **Add a real instructor photo** to about.html and replace "DB" initials. Even a professional LinkedIn photo. This is the single highest-ROI change.
3. **Add full instructor name and LinkedIn link** to about.html. Replace "Dan B." with full name.
4. **Specify "Limited cohort — [X] seats remaining"** on the homepage hero tag. Changes the enrollment tag from informational to urgency-creating.
5. **Add a visual to the homepage hero** — even a well-chosen abstract image or a single clean illustration in the right column would transform the first impression.
6. **Rewrite the outcomes stats** to be outcome-focused rather than program-structure metrics.
7. **Fix "HEAD OFFICE" language** on contact.html — replace with a simple "Based in Toronto, Canada. Fully online."
8. **Add font-weight 300 or italic accent** to the hero subtext to break the visual monotony of the body copy weight.
9. **Make tech tags colored by track** — instead of neutral gray, give the Python/LangChain/RAG tags the purple AI track accent color to reinforce the track identity system.
10. **Add a sticky CTA or enrollment bar** at the bottom of viewport on the pricing page for mobile.

### Phase 2 Improvements (Medium Effort)

1. **Mobile navigation** — Build a hamburger/off-canvas nav. Critical for any modern site.
2. **Instructor section redesign** on about.html — Add photo, credentials grid, LinkedIn, and a "Dan teaches this way because..." story block.
3. **Dark hero variant** on the homepage — Swap the light hero to a dark/deep background with a radial green glow. More premium, more AI-company feeling.
4. **Animated curriculum progress visualization** — Replace the static progress bar on curriculum.html with an interactive timeline that shows which weeks cover which modules.
5. **Testimonials section** between the learning path and the programs grid on the homepage.
6. **Pricing anchoring redesign** — Add a "What you get vs. alternatives" comparison table, and a "Why this is priced this way" value statement.
7. **Smooth tab transitions** on curriculum.html — CSS transitions on tab content swap.
8. **Replace generic outcome stats** with a narrative outcomes block — real graduate stories if available, value propositions if not.
9. **AI visual motif** — A node/graph pattern or abstract geometric used consistently as a section background texture in the AI track context.
10. **Contact page redesign** — The form is functional but sterile. Adding a "What happens next" process timeline (Apply → Review → Confirm → Start) would reduce anxiety and increase conversions.

### Premium Upgrades (Advanced Design Polish)

1. **Full brand refresh with custom logo mark** — The wordmark-only logo limits brand versatility. A simple icon mark would allow for favicons, social profiles, and co-branding.
2. **Gradient mesh hero** — An animated gradient mesh background (as seen on Vercel, Linear, Arc) would instantly signal 2025-level design quality.
3. **Instructor mini-documentary section** — A short text/visual narrative about Dan's background with photos, pull quotes, and a visual timeline of his career would create genuine emotional investment.
4. **Code preview component in the AI program section** — A syntax-highlighted Python code block showing a simplified LangGraph pattern, styled as a terminal window.
5. **Alumni showcase page** — Even 3–5 alumni profiles with photos, roles, and quotes would transform the credibility of the platform.
6. **Dark mode support** — The token system is well-positioned for dark mode. Adding it would feel natural for an AI engineering audience.
7. **Animated scroll-triggered stats** — The outcome numbers counting up on scroll is a well-worn effect but still impactful at this site's current visual level.
8. **Lottie or CSS animations** in the curriculum section — Visualizing data flowing through a RAG pipeline or an agent loop would be a genuinely differentiating interaction.

---

## 13 — Competitive Comparison

| Platform | Visual Maturity | Social Proof | Brand Identity | AI/Technical Feel |
|---|---|---|---|---|
| Coursera | High — photo-led | Very high | Strong, established | Moderate |
| Udacity | High — dark theme | High | Strong | High |
| Maven | High — clean + human | Very high | Strong | Moderate |
| Section School | High — modern SaaS | High | Strong | High |
| Reforge | Premium — editorial | Extremely high | Very strong | Moderate |
| **doors2ai (current)** | **Moderate** | **None** | **Weak** | **Low-moderate** |

**Current ranking:** doors2ai sits below all named competitors in perceived design maturity. It is significantly ahead of random WordPress bootcamp sites and course-builder platforms (Teachable/Kajabi templates). It is comparable to a well-built V1 of a boutique program that has not yet invested in design seriously.

**Specific gaps vs. Maven (most directly comparable):**
Maven leads with instructor credibility front and center. Their page heroes are human-photo-led. Every cohort shows student count, alumni outcomes, and employer logos. doors2ai has none of these. Maven's site would convert 3–5x higher than doors2ai on the same traffic, purely from credibility infrastructure.

---

## 14 — Brutally Honest Design Feedback

### What makes this feel amateur

- "DB" initials avatar as the founder photo. In 2025, on a premium education platform, an initials monogram in place of a real photo signals "this might not be a real person" to skeptical visitors.
- "HEAD OFFICE: Toronto, Canada" on the contact page. This reads like a template. A solo instructor doesn't have a head office.
- Zero testimonials. This is not a design choice — it is a gap. Every serious education platform, no matter how small, shows some form of social proof. The absence is jarring.
- The homepage hero is left-aligned text on a white background with a pale radial gradient visible only on high-contrast monitors. It looks like a CSS boilerplate demo.
- Privacy Policy and Terms of Service links pointing to `#`. These are expected to be real pages. Placeholder anchors on a commercial enrollment site break trust.

### What is good but not great

- The CSS token system is genuinely above average for a site at this stage, but the tokens aren't being used to their full potential. The shadow scale (`shadow-sm/md/lg`) is conservative to the point of being invisible. The brand is well-defined but underused.
- The section-label pattern (small uppercase green label + dash) is a nice micro-detail, but it appears on every single section without variation — it loses impact through overuse.
- The dark CTA section is the visual highlight of the site, but it appears at the bottom of every page identically. It needs slight variation per page to feel intentional rather than templated.
- The navigation is technically correct but visually anonymous. It could belong to any SaaS site. There is no visual moment of brand recognition.

### What is professional but not premium

- The type scale and spacing are legitimately professional. This does not look cheap or broken. The Inter font, the letter-spacing, the line-heights — these are correct decisions.
- The three-track color system (blue/orange/purple) is a good idea executed at minimum viable fidelity. It needs to breathe more — larger areas of track color, not just small badge pills.
- The curriculum tab section on curriculum.html is functional and organized. But the transition is abrupt and the module cards are visually identical regardless of content depth or importance.

---

## 15 — Top 10 Prioritized Improvements by Impact

| Rank | Improvement | Impact | Rationale |
|---|---|---|---|
| 1 | Add instructor real photo + full credentials to about.html | Critical | Credibility collapse point. This is the highest single-action ROI change. |
| 2 | Add 3–5 student testimonials to homepage and pricing page | Critical | No social proof = no trust = no conversion for career-transition learners. |
| 3 | Redesign homepage hero with a visual element (illustration, screenshot, abstract graphic) | High | First impression determines bounce rate. A text-only hero on white is inadequate for 2025. |
| 4 | Rewrite outcome stats to be results-focused, not program-structure-focused | High | "12 modules" is not a value proposition. "Build 6 deployed AI systems" is. |
| 5 | Add mobile navigation | High | Critical gap — the site likely breaks on mobile viewports. |
| 6 | Redesign the pricing page with value anchoring and testimonials | High | The prices are low enough to create doubt. They need to be framed, not just listed. |
| 7 | Darken or add depth to the inner page heroes | Medium-High | page-hero-dark renders as #F7FAFC. It needs real visual distinction. |
| 8 | Add a "What happens after you apply" process flow to contact.html | Medium | Reduces conversion anxiety. Applicants don't know what to expect. |
| 9 | Introduce AI visual language (code snippet, node diagram, terminal) into the homepage | Medium | The site currently has no visual signal that this is an AI-specific program. |
| 10 | Fix Privacy Policy and Terms of Service links | Medium | Pointing legal links to # on a commercial enrollment site is a trust-breaking signal. |

---

## Design System Maturity Assessment

**Score: 7/10 — Professional, below premium**

The CSS architecture is stronger than the visual design it currently supports.

**Strengths:**
- Complete token set with logical naming
- Spacing system using `clamp()` is correct
- Shadow scale defined (though underutilized)
- Radius scale defined and consistently applied
- Section alternation pattern implemented cleanly
- Component classes are semantically named

**Gaps:**
- No animation/motion tokens (duration, easing are defined but not systematized)
- No dark mode variant (tokens are structured for it but it isn't built)
- No responsive breakpoints defined (media queries are not visible in the reviewed CSS)
- The `page-hero-dark` class name is a semantic mismatch — it doesn't render dark
- Inline styles are present throughout the HTML (`style="margin-bottom:14px"`, `style="flex:3"`) indicating the token system isn't fully realized — some styling escapes into the markup
- No typography scale for display text distinct from body text (the hero H1 uses a direct class rather than a reusable display scale)

---

## Conversion Readiness Assessment

**Score: 4.5/10 — Significantly below conversion-optimized**

The site has the correct structure for a conversion funnel (Hero → Programs → Curriculum → Pricing → Apply) but the persuasion infrastructure is near-absent.

**What works:**
- Persistent "Apply Now" CTA in the nav
- CTA section at bottom of every page
- Primary/secondary button hierarchy is clear
- "View full program →" links connect pages logically

**What is missing:**
- **No testimonials anywhere** — The single highest-impact trust element is absent
- **No scarcity signals** — Cohort seats "are limited" but no number is given
- **No urgency mechanism** — No countdown, no "next cohort starts X date," no waitlist
- **The pricing page lacks ROI framing** — No "compared to $X bootcamp alternatives" context
- **No exit intent capture** — No newsletter, no email capture for "not ready yet" visitors
- **Contact form has no confidence loop** — After submission there is no visible confirmation, next-steps, or timeline
- **Pricing feels accidental** — The placeholder comment `<!-- PLACEHOLDER: Replace with confirmed tuition amount -->` is still visible in the HTML source. Visitors who view source will see this.

---

## Final Verdict

doors2ai is a technically solid V1 site with a professional structural foundation. The code quality is above average, the copy is precise, and the design system tokens show design literacy. It would pass a developer review easily.

It would not pass a design review at Maven, Section School, or any premium education platform.

The single biggest problem is the trust gap. No photos. No testimonials. No alumni outcomes. No visible evidence that any student has ever completed this program. In the education market, perceived risk is the primary conversion killer. Every element of this site that reduces perceived risk (instructor credentials, alumni proof, outcome specificity) is either missing or underpowered.

The second biggest problem is visual ambition. The site looks appropriate for its current state. It does not look like where the product aspires to be. Premium education platforms sell aspiration as much as curriculum. The design should make a visitor feel something — excitement, credibility, trust, ambition — before they read a single word.

**The path from Professional to Premium requires two parallel investments:**
1. **Trust infrastructure** (social proof, credible human presence, outcome data) — No amount of visual polish compensates for its absence.
2. **Visual impact** (hero redesign, AI visual identity, depth, motion) — These signal that the platform takes itself seriously and will take students seriously.

Neither investment requires a ground-up redesign. The existing CSS architecture can support premium visual treatment. The existing content quality can support testimonial expansion. The gap is not structural — it is ambition.

---

*This report covers analysis only. No code modifications were made or suggested.*
