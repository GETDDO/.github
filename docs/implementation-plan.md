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
Chromium: 10 browser checks passed. Both tracks and all 10 slides checked for canvas/footer overflow. Review findings fixed: skip-link route loss and mobile active-slide outline state. Runtime errors and failed asset requests: 0.
