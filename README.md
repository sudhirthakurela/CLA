# Creative Learning Academy — Website

Multi-center website for Creative Learning Academy, Inc. Built with **React + Vite + Tailwind CSS**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
CLA/
├── index.html
├── src/
│   ├── main.jsx          # Entry point
│   ├── App.jsx           # Router setup
│   ├── index.css         # Global styles + Tailwind
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── EnrollModal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Centers.jsx
│   │   ├── CenterDetail.jsx
│   │   ├── Programs.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   └── data/
│       ├── centers.js    # ← Update center names/addresses here
│       └── programs.js
└── public/
    ├── favicon.svg
    └── logo.svg          # ← Drop in real logo here
```

## ✏️ Customizing Center Info

Edit `src/data/centers.js` to update addresses, phone numbers, hours, and staff for each location.

## 🖼️ Adding the Logo

Replace `public/logo.svg` with your actual logo file. The Navbar references `/logo.svg` — update the `<img>` tag in `src/components/Navbar.jsx` if your filename differs.

## 🌐 Deployment

This site is a static build and can be deployed to:
- **GitHub Pages** — push to `gh-pages` branch, set `base` in `vite.config.js`
- **Netlify** — connect repo, build command `npm run build`, publish dir `dist`
- **Vercel** — import repo, auto-detected as Vite project

## 📝 Adding a 4th Center

1. Add a new entry to the `centers` array in `src/data/centers.js`
2. The Centers page and navigation update automatically — no other changes needed.
