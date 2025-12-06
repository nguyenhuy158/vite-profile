# Modern Personal Portfolio with Vite, React & Tailwind CSS

A high-performance, responsive personal portfolio website built with modern web technologies.

## 🚀 Tech Stack

- **Build Tool:** [Vite](https://vitejs.dev/) - Blazing fast build tool
- **Framework:** [React](https://react.dev/) - JS library for user interfaces
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Animations/Scroll:** `react-scroll` - Smooth scrolling functionality

## 🛠️ Project Initialization & Setup

### 1. Installation

Ideally, you would create this project using `pnpm create vite@latest`, but since the files are already provided here, you just need to install dependencies:

```bash
pnpm install
```

### 2. Development

Start the local development server:

```bash
pnpm run dev
```

The site will be available at `http://localhost:5173`.

### 3. Build for Production

Create an optimized production build:

```bash
pnpm run build
```

This will create a `dist` folder containing your static assets.

## 📂 Code Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Responsive navigation with mobile menu
│   ├── Hero.jsx        # Hero section with introduction & CTA
│   ├── Skills.jsx      # Technical skills grid
│   ├── Projects.jsx    # Project showcase cards
│   └── Footer.jsx      # Contact links & copyright
├── App.jsx             # Main application layout
├── main.jsx            # Entry point
└── index.css           # Global styles & Tailwind directives
```

## 🌐 Deployment Guide: Cloudflare Pages

Cloudflare Pages is an excellent choice for deploying Vite apps due to its speed, free tier, and easy integration.

### Method 1: Connect via Git (Recommended)

1.  **Push your code** to a GitHub/GitLab repository.
2.  Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
3.  Go to **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
4.  Select your repository.
5.  **Configure the build settings:**
    *   **Framework Preset:** Select `Vite` (or `React` if Vite isn't listed, usually Vite is preferred).
    *   **Build command:** `pnpm run build`
    *   **Build output directory:** `dist`
6.  Click **Save and Deploy**.

Cloudflare will automatically rebuild and deploy your site whenever you push changes to your repository.

### Method 2: Direct Upload (Manual)

1.  Run `pnpm run build` locally.
2.  Go to Cloudflare Pages dashboard.
3.  Select "Direct Upload" instead of Git.
4.  Drag and drop the contents of your `dist` folder.
5.  Deploy.

## 📱 Features & Best Practices

- **Responsive Design:** Mobile-first approach using Tailwind's breakpoints (`md:`, `lg:`).
- **Accessibility:** Semantic HTML elements (`nav`, `main`, `section`, `footer`) and proper ARIA labels.
- **Performance:** Vite's optimized bundling and Tailwind's purge functionality ensure a small bundle size.
- **Smooth Scrolling:** Integrated via `react-scroll` for a polished single-page experience.

## 🎨 Customization

- **Colors:** Edit `tailwind.config.js` to change the `primary` and `secondary` color palette.
- **Content:** Update the component files (`src/components/`) with your own text, images, and links.
- **Images:** Replace the placeholder images in `Hero.jsx` and `Projects.jsx` with your own assets.