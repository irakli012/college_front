# College Ilia — Academic Excellence

A modern, bilingual (Georgian 🇬🇪 / English 🇺🇸) college website built with **React**, **TypeScript**, and **Vite**. The UI is styled with **Tailwind CSS v4** and supports dark mode out of the box.

> [!NOTE]
> 🚧 **Coming soon:** Backend REST API and database integration will be added later

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌐 Bilingual UI | Full Georgian & English localization via `i18next` |
| 🎓 Academic Programs | Dedicated pages for each study program with details |
| 📋 Strategic Documents | Embedded Google Docs/Sheets for Action Plans, Reports & Financial Indicators |
| 📰 News | Dynamic news feed with individual article pages |
| 📩 Registration | Student registration form powered by **EmailJS** |
| 🔐 Admin Panel | Protected admin page with JWT authentication |
| 🖼️ Gallery & Library | Media gallery and document library pages |
| 📱 Responsive Design | Mobile-first layout across all screen sizes |
| ⚡ Code Splitting | All pages are lazy-loaded for fast initial loads |

---

## 🗂️ Project Structure

```
src/
├── components/       # Navbar, Footer, ScrollToTop
├── pages/
│   ├── programs/     # Individual program pages (IT, Pharmacy, etc.)
│   └── strategic/    # Strategic development sub-pages
├── locales/          # ka.json & en.json translation files
├── App.tsx           # Router & lazy-loaded page imports
├── constants.ts      # Shared data (programs, news, etc.)
├── i18n.ts           # i18next configuration
└── types.ts          # Shared TypeScript types
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- An [EmailJS](https://www.emailjs.com/) account (for the registration form)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root (or edit the existing one):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Run the development server

Frontend only:
```bash
npm run dev
```

Frontend + Admin API server together:
```bash
npm run admin-dev
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run server` | Run only the Express admin API server |
| `npm run admin-dev` | Run Vite + Express concurrently (for admin work) |
| `npm start` | Run the Express server in production mode |

---

## 🌍 Internationalization

Translations live in `src/locales/`:
- `ka.json` — Georgian
- `en.json` — English

Language is auto-detected from the browser and can be toggled from the **Navbar**. To add a new key, add it to **both** files.

---

## 🚢 Deployment (Vercel)

1. Push to your GitHub repository.
2. Import the project in [Vercel](https://vercel.com).
3. Add the three `VITE_EMAILJS_*` environment variables in **Project Settings → Environment Variables**.
4. Deploy — Vercel will run `npm run build` automatically.

> The `vercel.json` includes a rewrite rule to support client-side routing.

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS v4**
- **React Router v7**
- **i18next** / **react-i18next**
- **EmailJS** (`@emailjs/browser`)
- **Express** (admin API server)
- **JWT** + **bcryptjs** (admin authentication)
