# Production Audit Report — d-d-s.ch

**Date:** February 2026  
**Scope:** Font loading, asset paths, case sensitivity, CSS variables, viewport meta

---

## 1. Font Fix — Urbane Rounded Light

### Status: ⚠️ ACTION REQUIRED

**Current setup:** The `@font-face` in `assets/css/dds.css` references:
- `../fonts/UrbaneRounded-Light.woff2`
- `../fonts/UrbaneRounded-Light.woff`

**Issue:** The `assets/fonts/` folder exists but the font files are **not in the repository**. Without them, the browser falls back to system fonts (Inter, etc.), which can look different on production vs. local.

**Action:** Upload these files to the `assets/fonts/` folder:
1. **UrbaneRounded-Light.woff2** (preferred for modern browsers)
2. **UrbaneRounded-Light.woff** (fallback)

**@font-face code (already in dds.css):**
```css
@font-face {
  font-family: 'Urbane Rounded Light';
  src: url('../fonts/UrbaneRounded-Light.woff2') format('woff2'),
       url('../fonts/UrbaneRounded-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
```

---

## 2. Asset Paths — Fixed

**Structure:** All static assets are organized under `assets/`:
- `assets/css/` — stylesheets
- `assets/js/` — scripts
- `assets/images/` — images, logos, favicons
- `assets/fonts/` — web fonts

**Note:** `schools/feb-25` references `pexels-willianjusten-22484277.jpg` — this file is **not present** in `assets/images/`. Add it or update the reference to an existing image.

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

- [ ] **Upload font files** to `assets/fonts/` (UrbaneRounded-Light.woff2, UrbaneRounded-Light.woff)
- [ ] **Add pexels-willianjusten-22484277.jpg** to `assets/images/` for schools/feb-25, or update the reference
- [x] Asset paths converted to relative where needed
- [x] Case sensitivity verified
- [x] CSS variables correct
- [x] Viewport meta updated
