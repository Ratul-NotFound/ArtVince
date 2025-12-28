# Image Organization Guide

## 📁 Folder Structure

```
public/images/
├── services/
│   ├── 3d-product-animation/      # Product animation showcase images
│   ├── 3d-industrial-design/      # Industrial design portfolio
│   ├── character-modeling/        # Character model samples
│   ├── game-assets/               # Game asset examples
│   ├── game-environment/          # Environment design
│   └── concept-art/               # Concept art & sketches
├── team/                          # Team member photos
├── testimonials/                  # Client/testimonial photos
├── portfolio/                     # Complete portfolio cases
├── hero/                          # Hero section images
└── branding/                      # Logo & branding assets
```

---

## 📸 Image Guidelines

### Service Cards (`services/` folders)

**Location:** `public/images/services/[service-name]/`

**Recommended:**
- 2-4 high-quality images per service
- Size: 1200x800px (16:9 aspect ratio)
- Format: WebP or JPG (compressed)
- Naming: `01-product-render.webp`, `02-animation-frame.webp`

**Example files:**
```
3d-product-animation/
  ├── 01-product-render.webp
  ├── 02-animation-frame.webp
  ├── 03-detail-shot.webp
  └── 04-showcase.webp
```

---

### Team Members (`team/`)

**Location:** `public/images/team/`

**Recommended:**
- 1 photo per team member
- Size: 400x400px (square)
- Format: WebP or JPG
- Naming: `[firstname-lastname].webp`

**Example files:**
```
team/
  ├── tanvir-rokon.webp
  ├── imtiaz-ahamed.webp
  └── s-a-mithila.webp
```

---

### Testimonials (`testimonials/`)

**Location:** `public/images/testimonials/`

**Recommended:**
- Company logos or client photos
- Size: 150x150px (square)
- Format: PNG (for logos) or WebP
- Naming: `[company-name]-logo.png`

**Example files:**
```
testimonials/
  ├── company-a-logo.png
  ├── company-b-logo.png
  └── company-c-logo.png
```

---

### Portfolio (`portfolio/`)

**Location:** `public/images/portfolio/`

**Recommended:**
- Complete project case studies
- Size: 1200x800px or 1600x900px
- Format: WebP (optimized)
- Naming: `[project-name]-[type].webp`

**Example files:**
```
portfolio/
  ├── game-project-01-hero.webp
  ├── game-project-01-detail.webp
  ├── animation-project-01-hero.webp
  └── animation-project-01-detail.webp
```

---

### Hero Section (`hero/`)

**Location:** `public/images/hero/`

**Recommended:**
- Large background/showcase images
- Size: 1920x1080px minimum
- Format: WebP
- Naming: `hero-[type].webp`

**Example files:**
```
hero/
  ├── hero-main.webp
  ├── hero-carousel-01.webp
  ├── hero-carousel-02.webp
  └── hero-carousel-03.webp
```

---

### Branding (`branding/`)

**Location:** `public/images/branding/`

**Files to include:**
- Logo (light & dark versions)
- Favicon
- Social media assets
- Brand assets

**Example files:**
```
branding/
  ├── logo-light.png
  ├── logo-dark.png
  ├── favicon.ico
  └── social-og-image.png
```

---

## 🔗 How to Use Images in Components

### Service Cards

```tsx
// In ServiceCard.tsx or services page
const serviceImages = {
  "3D PRODUCT ANIMATION": [
    "/images/services/3d-product-animation/01-product-render.webp",
    "/images/services/3d-product-animation/02-animation-frame.webp"
  ],
  "3D INDUSTRIAL DESIGN": [
    "/images/services/3d-industrial-design/01-design.webp"
  ],
  // ... more services
}
```

### Team Member Photos

```tsx
// In team page or component
const teamMembers = [
  {
    name: "Tanvir Rokon",
    title: "Founder & MD",
    image: "/images/team/tanvir-rokon.webp"
  },
  // ... more members
]
```

### Hero Section

```tsx
// In Hero.tsx
const heroImages = [
  "/images/hero/hero-carousel-01.webp",
  "/images/hero/hero-carousel-02.webp",
  "/images/hero/hero-carousel-03.webp"
]
```

---

## 📤 Uploading Images

### Steps:

1. **Prepare Image**
   - Compress with TinyPNG or similar
   - Convert to WebP format (recommended)
   - Check file size (< 500KB for web)

2. **Place in Correct Folder**
   - Match service name to folder
   - Use consistent naming convention

3. **Update Component Code**
   - Add image path to component
   - Add alt text for accessibility
   - Test responsive display

4. **Commit to Git**
   ```bash
   git add public/images/
   git commit -m "Add service images for [service-name]"
   git push
   ```

---

## 📋 Image Optimization Tips

### Format Selection:
- **WebP** - Best for most images (smaller file size)
- **JPG** - Photos with many colors
- **PNG** - Logos, icons, transparency needed
- **SVG** - Icons, logos, graphics

### File Size Goals:
- Service cards: 80-200KB each
- Team photos: 20-50KB each
- Hero images: 150-300KB each
- Testimonial logos: 5-20KB each

### Compression Tools:
- TinyPNG (https://tinypng.com)
- ImageOptim (https://imageoptim.com)
- FFmpeg for WebP conversion

```bash
# Convert JPG to WebP
ffmpeg -i input.jpg -c:v libwebp -quality 80 output.webp
```

---

## 🎯 Image Naming Convention

**Pattern:** `[type]-[number]-[description].webp`

**Examples:**
```
01-product-render.webp          # Service image #1
02-animation-frame.webp         # Service image #2
tanvir-rokon.webp              # Team member
game-project-01-hero.webp      # Portfolio project
hero-carousel-01.webp          # Hero carousel
```

**Benefits:**
- Easy to identify images
- Organized numbering
- Clear description
- Consistent across project

---

## ✅ Checklist Before Using Images

- [ ] Image is optimized (< 200KB)
- [ ] File format is WebP or JPG
- [ ] Image is placed in correct folder
- [ ] Naming follows convention
- [ ] Alt text is descriptive
- [ ] Image path is correct
- [ ] Responsive display tested
- [ ] File is committed to Git

---

## 📱 Responsive Image Sizes

For Next.js Image component optimization:

```tsx
import Image from 'next/image'

<Image
  src="/images/services/3d-product-animation/01-product-render.webp"
  alt="3D Product Animation Example"
  width={1200}
  height={800}
  responsive
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
/>
```

**Recommended Sizes:**
- Mobile: 300-500px width
- Tablet: 600-800px width
- Desktop: 1000-1200px width

---

## 🆘 Troubleshooting

### Image not displaying?
1. Check file path (case-sensitive on Linux)
2. Verify file exists in folder
3. Check filename spelling
4. Reload browser cache (Ctrl+Shift+R)

### Image looks blurry?
1. Image resolution too low
2. Scaled up too much in CSS
3. WebP compression too aggressive
4. Try re-exporting from source

### Large file size?
1. Compress with TinyPNG
2. Reduce resolution
3. Convert to WebP format
4. Use CSS to set max-width

---

## 📞 Support

For issues with images:
1. Check this guide
2. Verify file location and naming
3. Test in multiple browsers
4. Check browser console for errors

---

*Last Updated: December 28, 2025*  
*ArtVince Image Organization System v1.0*
