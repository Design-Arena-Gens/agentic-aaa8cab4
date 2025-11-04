# Glassmorphism Experience

Responsive single-page experience built with Next.js 14 and Tailwind CSS. The layout embraces glassmorphism aesthetics with layered blur, translucent gradients, and subtle motion accents while remaining fully responsive from mobile to desktop.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the site locally.

### Production Build

```bash
npm run build
npm start
```

## Architecture

- Next.js App Router (`app/`) for layouts and routing
- Tailwind CSS for utility-first styling with custom glass utilities
- Google Fonts via `next/font`

Key files:

- `app/page.js` – Landing page with hero, stats, services, testimonials, and CTA sections
- `app/layout.js` – Root layout wiring global styles and typography
- `app/globals.css` – Tailwind directives and global background styling

## Deploying to Vercel

```bash
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-aaa8cab4
```

Then verify:

```bash
curl https://agentic-aaa8cab4.vercel.app
```

## License

Released under the [MIT License](LICENSE).
