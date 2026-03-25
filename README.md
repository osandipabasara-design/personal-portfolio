# 🌟 Osandi Randeniya — Personal Portfolio

A professional, dark-themed portfolio website for a Computer Science undergraduate and aspiring Data Analyst.

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18 + TypeScript               |
| Routing    | React Router v6                     |
| Icons      | Lucide React                        |
| Fonts      | Syne (display) + DM Sans (body)     |
| Backend    | Node.js + Express                   |
| Email      | Nodemailer (via Gmail SMTP)         |
| Styling    | Pure CSS with CSS variables         |

## Pages

- **Home** — Hero, status badge, stats strip
- **About** — Bio, education, animated skill bars, certificates
- **Projects** — Filterable project cards with GitHub/Live links
- **Contact** — Contact form + direct contact info

## Getting Started

### 1. Clone & Install Frontend

```bash
cd portfolio
npm install
npm start
```

Frontend runs at http://localhost:3000

### 2. Install & Run Backend

```bash
npm install express cors nodemailer
```

Create a `.env` file in the root:
```
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_gmail_app_password
```

> **Gmail App Password**: Enable 2FA on your Gmail → Google Account → Security → App Passwords → Generate one for "Mail"

```bash
node server.js
```

Backend runs at http://localhost:5000

### 3. Connect Contact Form to Backend

In `src/pages/Contact.tsx`, replace the simulation in `handleSubmit`:

```typescript
const res = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (res.ok) {
  setStatus('success');
} else {
  setStatus('error');
}
```

## Customisation

All content is in `src/data/portfolio.ts` — edit projects, skills, certificates, and education there. No need to touch individual page files for content updates.

## Deployment

**Frontend** → Deploy to Vercel or Netlify (drag & drop `build/` folder after `npm run build`)

**Backend** → Deploy to Railway, Render, or Heroku

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts      ← Edit content here
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── server.js                 ← Node.js backend
├── package.json
└── tsconfig.json
```
# personal-portfolio
