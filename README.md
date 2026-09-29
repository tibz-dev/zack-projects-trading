# Zack Projects & Trading Website

Production-ready multi-page React website for **Zack Projects & Trading**, a construction company and building material supplier in Pretoria, South Africa.

## Stack

- React 18 + TypeScript (strict mode)
- Vite
- React Router
- Tailwind CSS
- react-hook-form + Zod
- lucide-react
- ESLint + Prettier
- Sharp image-processing script

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Use Node.js 20 or newer. The site runs through Vite and uses client-side routing. `vercel.json` includes the SPA rewrite needed for direct page visits after deployment.

## Project structure

```text
src/
  assets/
    logo.svg                     # temporary placeholder; replace with client SVG
    credentials/                 # real registration/certificate files only
    projects/
      <project-slug>/
        before.jpg
        after.jpg
        gallery-1.jpg
        generated/               # created by npm run images; gitignored
  components/
    common/                      # buttons, cards, headings, credentials
    forms/                       # quote form
    layout/                      # header, footer, mobile contact bar
    media/                       # responsive images, lightbox, before/after slider
    seo/                         # per-route metadata + LocalBusiness JSON-LD
  config/
    site.ts                      # client contact details, domain, form endpoint
  data/
    content.ts                   # page copy
    credentials.ts              # typed credential records
    materials.ts                # editable material catalogue categories
    navigation.ts
    projects.ts                 # typed real-project records
    services.ts                 # editable service content
  pages/                         # lazy-loaded route pages
  theme/
    brand.ts                    # single source of truth for brand tokens
  types/
  utils/
scripts/
  generate-seo.mjs
  process-images.mjs
```

## Brand tokens

All brand colors and fonts are defined once in `src/theme/brand.ts` and consumed by `tailwind.config.ts`.

Current tokens:

- slate `#2F3640`
- maroon `#7A0C0C`
- yellow `#F2B705`
- offwhite `#F6F5F2`
- lightgrey `#E4E6E9`
- ink `#1B1F24`
- Headings: Barlow Semi Condensed
- Body: Open Sans

The fonts are loaded from Google Fonts in `index.html`, with fallbacks defined in the theme.

## Editing business details

Edit `src/config/site.ts` for the phone number, email, address, contact person and fallback site URL behavior.

Two details still require confirmation before production launch:

1. **Email:** the current config uses `zackprojects1@gmail.com`, because that appears on the supplied card. The alternative in the brief is `info@zackprojects.co.za`.
2. **Domain:** confirm whether production will use `zackprojects.com` or `zackprojects.co.za`.

For deployment, set:

```env
VITE_SITE_URL=https://confirmed-domain.example
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

Do not launch with `example.invalid` in `VITE_SITE_URL`.

## Editing services and building materials

- Services: `src/data/services.ts`
- Building material categories: `src/data/materials.ts`

The material catalogue has no checkout and no hard-coded prices. Each material card links to `/contact` with the relevant category pre-selected in the quote form.

## Adding a project

Only add real client work.

1. Create a folder:

```text
src/assets/projects/<project-slug>/
```

2. Add the supplied media using the expected names where available:

```text
before.jpg
after.jpg
gallery-1.jpg
gallery-2.jpg
```

3. Add a typed record to `src/data/projects.ts` using paths such as:

```ts
{
  slug: 'pretoria-north-renovation',
  title: 'TODO_REAL_PROJECT_TITLE',
  serviceType: 'renovations',
  location: 'TODO_REAL_LOCATION',
  description: 'TODO_CLIENT_APPROVED_DESCRIPTION',
  featured: true,
  images: {
    before: '/src/assets/projects/pretoria-north-renovation/before.jpg',
    after: '/src/assets/projects/pretoria-north-renovation/after.jpg',
    gallery: ['/src/assets/projects/pretoria-north-renovation/gallery-1.jpg'],
  },
  alt: {
    before: 'TODO_REAL_ALT_TEXT',
    after: 'TODO_REAL_ALT_TEXT',
    gallery: ['TODO_REAL_ALT_TEXT'],
  },
}
```

4. Generate responsive image formats:

```bash
npm run images
```

This creates AVIF and WebP versions at 480, 768 and 1280px where the source is large enough. Generated derivatives are intentionally gitignored and are recreated automatically by the `prebuild` step before every production build.

## Adding a credential

Only publish a credential that the client actually supplies.

1. Place its image in `src/assets/credentials/`.
2. Add the matching typed record to `src/data/credentials.ts`.
3. Run `npm run images` for JPG/PNG files.

No CIDB grade, registration, certificate, award or membership should be added without the supporting client document.

## Contact form delivery

The form uses `react-hook-form` + Zod and includes:

- required name, phone, service/material, location and message validation
- email validation when supplied
- success and failure states
- a honeypot field
- automatic service/material pre-selection from enquiry links

The recommended low-maintenance delivery option is **Formspree**:

1. Create a Formspree form owned by the client's chosen email account.
2. Copy the endpoint (`https://formspree.io/f/...`).
3. Set it as the Vercel environment variable `VITE_FORM_ENDPOINT`.
4. Redeploy.

If `VITE_FORM_ENDPOINT` is missing, the form does not pretend to send. It displays a configuration notice and directs users to the visible phone, WhatsApp and email contact methods.

## SEO

Each route sets its own title, description, Open Graph values and canonical URL. LocalBusiness JSON-LD includes the supplied Pretoria North address.

Before every production build, `scripts/generate-seo.mjs` creates `public/sitemap.xml` and `public/robots.txt` from `VITE_SITE_URL`. It reads the deployed environment first, then local `.env.local` / `.env` values for local builds.

## Accessibility and responsive behavior

The implementation includes semantic page structure, keyboard navigation, visible focus, a skip link, touch-size controls, accessible mobile navigation, labelled forms, a keyboard-operable before/after slider and an Escape/arrow-key lightbox.

Manually verify the final content/media at these widths before launch:

- 360px
- 768px
- 1024px
- 1280px
- 1920px

Also run Lighthouse after real images and the confirmed domain are installed. Image weight is client-media dependent, so the 90+ performance target should be verified again after `npm run images` has been run on the final photo set.

## CI

`.github/workflows/ci.yml` runs linting, formatting checks and a production build on pushes to `main` and pull requests.

## Vercel deployment

1. Push this repository to GitHub.
2. In Vercel, import the GitHub repository.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add `VITE_SITE_URL` and `VITE_FORM_ENDPOINT` in Vercel Environment Variables.
7. Deploy and attach the confirmed domain.

## Client items still needed

- Final SVG logo to replace `src/assets/logo.svg`
- Confirmation of the public email address
- Confirmation of the production domain
- Real project photos, including available before/after pairs
- Client-approved project titles, locations and short descriptions
- Registration/certificate documents that may be shown publicly
- Confirmation of any additional service areas beyond “Pretoria and surrounds”
- Form submission destination/account ownership confirmation

Until these are supplied, the website intentionally shows labelled placeholders rather than stock photos or fabricated business claims.
