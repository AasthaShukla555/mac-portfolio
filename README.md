
# Mac OS Portfolio

An interactive, macOS-inspired portfolio built to showcase my projects, technical skills, and personality through a familiar desktop experience. Explore interactive windows, a dock-style launcher, and a clean interface inspired by the macOS environment.

## Features

- **macOS-Inspired UI:** A desktop-style interface with a dock and interactive windows.
- **Window Management:** Explore different sections of the portfolio through individual windows.
- **Interactive Dock:** Quick access to different sections with smooth animations.
- **Resume Viewer:** View and download my resume directly from the portfolio.
- **Image Viewer:** Browse images in a dedicated window.
- **Finder Experience:** Explore portfolio content through a desktop-inspired file browser.
- **Responsive Interface:** A user-friendly experience across different screen sizes.

## Tech Stack

- **Frontend:** React, JavaScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Animations:** GSAP
- **Icons:** Lucide React
- **PDF Rendering:** React PDF

## Project Structure

```text
portfolio/
├── public/
│   ├── files/
│   │   └── Resumeaastha.pdf
│   └── images/
├── src/
│   ├── components/
│   ├── hoc/
│   ├── store/
│   ├── windows/
│   ├── constants/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AasthaShukla555/mac-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mac-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Production Build

To create a production-ready build, run:

```bash
npm run build
```

The optimized production files will be generated in the `dist` directory.

To preview the production build locally, run:

```bash
npm run preview
```

## Deployment

This project can be deployed using platforms such as Netlify or Vercel.

**Netlify configuration:**
- Build command: `npm run build`
- Publish directory: `dist`

## Author

**Aastha Shukla**

Computer Science Engineering student interested in software development, interactive web experiences, and building practical projects.

- **GitHub:** [AasthaShukla555](https://github.com/AasthaShukla555)

## License

This project is intended for personal portfolio and educational purposes.
