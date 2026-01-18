# Vapourbit | Innovative Software Solutions & Web Development

![Vapourbit Banner](https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop)

**Vapourbit** is a cutting-edge digital agency specializing in high-performance web applications, bespoke software solutions, and premium UI/UX design. This repository hosts our official website, a showcase of our technical prowess and design philosophy.

## 🚀 Live Demo
**[vapourbit-website.vercel.app](https://vapourbit-website.vercel.app)**

---

## ✨ Key Features

- **Premium Aesthetic**: A "Deep Blue & Cyan" dark mode design with glassmorphism, noise textures, and vibrant gradients.
- **Advanced Animations**: Powered by **Framer Motion** and **GSAP**, featuring staggered reveals, parallax scrolling, and magnetic interactions.
- **Smooth Scrolling**: Integrated **Lenis** for a butter-smooth, luxurious scroll experience.
- **Interactive Portfolio**: A dynamic showcase of our masterpieces with category filtering and immersive hover effects.
- **Custom Cursor**: A physics-based fluid cursor that enhances interactivity on desktop devices.
- **Responsive Design**: Flawless experience across all devices, from 4K desktops to mobile phones.
- **High Performance**: Built on Next.js 14 with Server Components for lightning-fast load times and SEO optimization.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Smooth Scroll**: [Lenis](https://lenisFile.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```bash
vapourbit/
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   ├── layout.tsx      # Root layout with fonts and providers
│   │   └── page.tsx        # Main landing page composition
│   ├── components/         # Modular React components
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, Portfolio, Services, etc.
│   │   └── ui/             # Reusable UI elements (Code, MagneticButton)
│   └── lib/                # Utility functions (cn, etc.)
├── public/                 # Static assets (images, icons)
├── _legacy/                # Archived static HTML version
└── next.config.mjs         # Next.js configuration
```

---

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vapourbit/vapourbit-website.git
    cd vapourbit-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `.next` folder. You can start the production server with:

```bash
npm start
```

---

## 🚢 Deployment

The project is optimized for deployment on **Vercel**.

1.  Connect your GitHub repository to Vercel.
2.  Ensure the **Framework Preset** is set to **Next.js**.
3.  Deploy! Vercel will automatically detect the build settings.

---

## 📄 License

© 2026 **Vapourbit**. All rights reserved.
This project is proprietary and confidential.

---

Built with ❤️ by [The Vapourbit Team](mailto:hello@vapourbit.com).
