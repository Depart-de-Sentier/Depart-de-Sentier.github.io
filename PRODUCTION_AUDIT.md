# Production Audit Report — d-d-s.ch

**Date:** February 2026  
**Scope:** Font loading, asset paths, case sensitivity, CSS variables, viewport meta

---

## 1. Font Fix — Urbane Rounded Light

### Status: ✓ RESOLVED via pivot to Open Source (Nunito)

**Current setup:** The site now uses **Nunito** (Google Fonts), an Open Source font that aligns with the DdS mission. Font loaded via:

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
```

**CSS variables:** `--font-body` and `--font-heading` are set to `'Nunito', sans-serif`.

---

## 2. Asset Paths — Fixed

**Structure:** All static assets are organized under `assets/`:
- `assets/css/` — stylesheets
- `assets/js/` — scripts
- `assets/images/` — images, logos, favicons
- ~~`assets/fonts/`~~ — removed (font now via Google Fonts)

---

## 3. Case Sensitivity — Verified

All image references match the exact filenames in the project:

| Reference | Actual file | Status |
|-----------|-------------|--------|
| DdS.jpg | DdS.jpg | ✓ |
| Singapore.jpg | Singapore.jpg | ✓ |
| Group-picture-2022.png | Group-picture-2022.png | ✓ |
| Chris Mutel-circle.png | Chris Mutel-circle.png | ✓ |
| Tomas Navarrete-circle.png | Tomas Navarrete-circle.png | ✓ |
| Karin-circle.png | Karin-circle.png | ✓ |
| Joao-circle.png | Joao-circle.png | ✓ |
| Melanie-circle.png | Melanie-circle.png | ✓ |
| Manuel-circle.png | Manuel-circle.png | ✓ |
| Xiaojin-Zhang.png | Xiaojin-Zhang.png | ✓ |
| Green Logo.svg | Green Logo.svg | ✓ |
| quebec-city.jpg | quebec-city.jpg | ✓ |
| pexels-willianjusten-22484277.jpg | pexels-willianjusten-22484277.jpg | ✓ |

---

## 4. CSS Variables — Verified

Brand hex codes are correctly assigned in `assets/css/dds.css`:

| Variable | Hex | DdS Brand |
|----------|-----|-----------|
| `--color-primary-dark-green` | #3C5343 | ✓ |
| `--color-primary-beige` | #F0EEE1 | ✓ |
| `--color-dark-charcoal` | #2B2B2B | ✓ |
| `--color-accent-sage` | #84AE99 | ✓ |

---

## 5. Responsive Meta — Fixed

All HTML pages now use:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This prevents the zoomed-out mobile layout.

---

## Summary Checklist

- [x] **Font** — Resolved via pivot to Open Source (Nunito)
- [x] Asset paths converted to relative where needed
- [x] Case sensitivity verified
- [x] CSS variables correct
- [x] Viewport meta updated
