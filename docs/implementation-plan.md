# GETDDO mentoring presentation

## Design
Static, Korean-first presentation hub for GETDDO/.github, served from `site/` with GitHub Pages. Original logo; mint #1FBE8E, ticket orange #FF5A2D, yellow #FFC83D and neutral #1F242B. White editorial layout with ticket motifs. Web slides only; no PowerPoint export.

One mentoring card per round, separate frontend/backend links. Round 1 opens; rounds 2/3 remain disabled until each deck is enabled and supplied with slides. Every deck starts with cover, agenda, requirements, architecture and questions. Architecture is a discussion template, not a claim about implemented systems. Requirements are a dated summary, preserving unresolved policies.

## Implementation and verification
- [x] Content: `site/content.js` exports rounds and typed slide data; cover, agenda, cards, architecture, questions, text, image and split layouts. Check both tracks and disabled routes.
- [x] UI: `site/index.html`, `site/styles.css`, `site/app.js` implement hub, 16:9 stage, slide outline, arrows, keyboard, full screen and direct hash URLs. Check first/last boundaries, reload, Back, invalid URLs and mobile overflow in Chromium.
- [x] Delivery: Pages workflow uploads only `site/`; README documents editing, future rounds, local preview and publishing. Verify all relative assets under `/.github/` as well as root.

## Constraints
Do not change existing backend files. Do not infer finalized policies from contradictory requirements. No runtime CDN or build dependencies. Keep a requirements snapshot in `site/requirements.md` for traceability. Test runner is development-only. Publishing remains a separate explicit step after the artifact is reviewable.

## Verification results
Chromium: 10 browser checks passed. Both tracks and all 12 slides checked for canvas/footer overflow. Review findings fixed: skip-link route loss and mobile active-slide outline state. Runtime errors and failed asset requests: 0.

## Delivery status
Source committed and pushed to GETDDO/.github main. On 2026-09-17, the user approved changing the repository visibility to public. Visibility updated and Pages workflow publishing enabled at https://getddo.github.io/.github/.

## Shared requirements update
Cover, agenda and two requirement slides share one data source across tracks. Seven high-level feature groups use the 2026-09-17 requirements snapshot. Architecture and questions remain track-specific. Verified shared data equality, seven groups, agenda destinations and all browser checks.

## Presentation copy revision
Replaced promotional copy with short headings and feature descriptions. Shared sections: cover, agenda, events, tickets, admin. Events describe ticket-free entries, scheduled ticket-based enrollment, weights and prize configurations. Five agenda destinations; seven slides per track.

## Agenda and closing update
Top-level agenda: requirements, architecture, questions. Events, tickets and admin remain requirement subsections. Added a shared thank-you closing slide to both tracks (8 slides each). Browser checks passed for all 16 slides and final-page navigation.

## Backend ERD placeholder
Added backend-only ERD image placeholder after architecture, with its own agenda entry. Frontend remains 8 slides; backend has 9. Shared cover and requirement content unchanged. Empty source renders a placeholder without a broken image; README documents adding the final asset. All 17 slides and 11 browser checks passed.

## Backend mentoring context
Backend expanded to 14 slides with overview, requirement-based scope/scale, status placeholders, entry and draw/publication flows, validation targets and focused questions. System architecture and ERD remain empty image placeholders. Implementation status, detailed design, schedule and measured results explicitly pending. Frontend data verified unchanged. All 22 slides and 11 browser checks passed.

## Game concept and technology stacks
Frontend game concept added with takoyaki as an unconfirmed candidate, proposed play flow and pending rules/screens. Both tracks now include technology stacks. Backend values read from local Gradle configuration; frontend main contains only README, so choices are pending. Frontend 10 slides, backend 15; all 25 slides and 13 browser checks passed.

## Icon-based technology layout
Replaced technology cards with a dedicated white-background logo/name/version/role list and a separate notes column. Backend uses bundled Devicon/Simple Icons with licenses; pending frontend technologies use project-authored category icons. Verified icon loads, no colored cards, no content/footer overlaps and all 13 browser checks.

## MySQL and Redis selection
Added bundled MySQL and Redis logos and removed JUnit from the presentation. Database versions and Redis usage remain pending. Compact seven-entry layout verified visually; all 13 browser checks passed. Backend dependencies unchanged.
