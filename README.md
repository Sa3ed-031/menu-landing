# Landing Template

A reusable landing page template built with **Next.js**, **TypeScript** and **Tailwind CSS**.
Change three config files — theme, fonts and content — and you have a brand-new landing page, ready to deploy.

![Preview](docs/preview.png)

🔗 **Live demo:** [sa3ed-031.github.io/landing-template](https://sa3ed-031.github.io/landing-template/)

---

## ✨ Features

- **Config-driven** — no text, color or font is hard-coded inside components
- **Type-safe content** — TypeScript catches missing or invalid fields before the page breaks
- **Toggle & reorder sections** — enable, disable or reorder any section from the content file
- **Automatic background alternation** — sections alternate backgrounds based on their order
- **RTL & LTR** — switch direction with one field; layout flips automatically
- **Smooth animations** — scroll reveal, staggered lists and an accordion, powered by Motion
- **Respects reduced motion** — animations follow the user's system preference
- **Self-hosted fonts** — loaded with `next/font`, no requests to Google at runtime
- **SEO ready** — title and description come from the content file
- **Static export** — deploys to GitHub Pages automatically on every push

## 🧱 Sections

`Header` · `Hero` · `Problem` · `Steps` · `Features` · `FAQ` · `Final CTA` · `Footer`

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Static Export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/)

---

## 🚀 Getting Started

### 1. Create your project

Click **Use this template** on GitHub to create a new repository, then clone it:

```bash
git clone https://github.com/Sa3ed-031/landing-template.git
cd landing-template
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 2. Make it yours

Everything you need to change lives in `src/config`:

| File         | What it controls                                                        |
| ------------ | ----------------------------------------------------------------------- |
| `theme.ts`   | Colors and border radius                                                |
| `fonts.ts`   | Heading and body fonts                                                  |
| `content.ts` | All texts, links, section order and visibility, page title and language |

Then replace the logo and images in `public/`.

### 3. Deploy

Push to `main` — GitHub Actions builds and deploys the site automatically.

> **First time only:** go to **Settings → Pages** and set **Source** to **GitHub Actions**.

The base path is taken from the repository name, so any repo created from this template deploys correctly without extra setup.

---

## 🎨 Customization

### Theme

```ts
// src/config/theme.ts
export const theme: Theme = {
  colors: {
    primary: "#EA580C",
    primaryForeground: "#FFFFFF",
    // ...
  },
  radius: "1rem",
};
```

Colors become CSS variables and Tailwind utilities: `bg-primary`, `text-muted`, `border-border`, `rounded-brand`…

### Fonts

```ts
// src/config/fonts.ts
import { Cairo, Tajawal } from "next/font/google";

export const headingFont = Cairo({
  /* ... */ variable: "--brand-font-heading",
});
export const bodyFont = Tajawal({ /* ... */ variable: "--brand-font-body" });
```

Headings use the heading font automatically; everything else uses the body font.

### Sections order & visibility

```ts
// src/config/content.ts
order: ["hero", "problem", "steps", "features", "faq", "cta"],

faq: {
  enabled: false, // hides the section
  // ...
},
```

### Language & direction

```ts
meta: {
  lang: "ar",
  dir: "rtl", // or "ltr"
  // ...
},
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # html, fonts, theme variables, metadata
│   ├── page.tsx            # renders sections from content order
│   └── globals.css         # Tailwind theme mapping
├── config/
│   ├── theme.ts            # colors & radius
│   ├── fonts.ts            # fonts
│   └── content.ts          # all page content
├── components/
│   ├── ui/                 # Button, Section, Reveal, PhoneFrame…
│   └── sections/           # Header, Hero, Problem, Steps, Features, Faq…
├── lib/                    # helpers (cn, theme-to-css)
└── types/                  # content, theme & section types
```

---

## 📄 License

Free to use for personal and client projects.

---

Built by [Sa3ed](https://sa3ed-031.github.io) · Saeed Al-Haj Hussein
