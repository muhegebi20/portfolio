# Muhammedamin Gebi Sinkero — Portfolio
Personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Showcases skills, projects, experience, and a contact form powered by Web3Forms.
## Tech Stack
- **React 19** + **TypeScript**
- **Vite** (bundler & dev server)
- **Tailwind CSS 4** (with `@theme` custom design tokens)
- **Web3Forms** (contact form API)
## Project Structure
```
src/
├── assets/                 # Images, PDFs
│   ├── myphoto.jpeg
│   └── Muhammedamin_Gebi Sinkero_Resume1.pdf
├── components/
│   ├── ui/                 # Reusable UI primitives (empty, ready for expansion)
│   └── layout/
│       ├── Navbar.tsx      # Sticky nav + mobile hamburger menu
│       └── Footer.tsx      # 3-column footer with social icons (inline SVGs)
├── sections/
│   ├── home/
│   │   └── Hero.tsx        # Hero with profile photo, tech stack badges, CTA buttons
│   ├── skills/
│   │   └── Skills.tsx      # 4-column grid: Languages, Frameworks, Databases, Tools
│   ├── projects/
│   │   └── Projects.tsx    # Project cards with tech badges and view links
│   ├── experience/
│   │   └── Experience.tsx  # Experience cards with role, company, responsibilities
│   └── contact/
│       └── Contact.tsx     # Web3Forms contact form with loading/success/error states
├── data/
│   └── portfolio.json      # All content data (single source of truth)
├── types/
│   └── index.ts            # TypeScript interfaces matching portfolio.json
├── hooks/                  # (empty, ready for custom hooks)
├── utils/                  # (empty, ready for utility functions)
├── App.tsx                 # Root component — assembles all sections
├── main.tsx                # Entry point
├── index.css               # Tailwind + @theme + global component classes
└── App.css                 # Default Vite scaffold styles (unused)
```
## Getting Started
### Prerequisites
- Node.js 18+
- npm (or your preferred package manager)
### Install & Run
```bash
# Install dependencies
npm install
# Start dev server
npm run dev
# Build for production
npm run build
# Preview production build
npm run preview


Configuration
Content
All content is driven by src/data/portfolio.json. Edit it directly to update names, descriptions, skills, projects, etc. TypeScript types in src/types/index.ts ensure type safety.
Contact Form
The contact form uses Web3Forms. To update the access key, change the access_key value in src/sections/contact/Contact.tsx:
formData.append('access_key', 'YOUR_ACCESS_KEY_HERE')
Social Links
Update GitHub, LinkedIn, and Twitter URLs in src/data/portfolio.json under header.links and footer.socials.
Resume
Place your resume PDF in src/assets/ and update the import in src/sections/home/Hero.tsx.
Design
- Theme: Dark background (#0a0a0a) with neon-lime accent (#bfff00)
- Responsive: Mobile-first with breakpoints at md (768px) and lg (1024px)
- Smooth scrolling enabled via CSS
- Navbar: Sticky with backdrop blur, animated hamburger menu on mobile
```