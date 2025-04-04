# SGT Learn - Learning Management System

A modern Learning Management System (LMS) for St. Gabriel's Technical Schools, built with Next.js 14, React, Tailwind CSS, and Shadcn UI.

## Features

- 🎨 Modern, responsive UI with Shadcn components
- 🌓 Light and dark mode support
- 📱 Mobile-first design
- 🎯 Course catalog with filtering and search
- 📚 Detailed course pages with curriculum
- 🔐 Authentication system (coming soon)
- 📹 Video content integration (coming soon)
- 💳 Payment processing (coming soon)

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Lucide Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sgt-learn.git
cd sgt-learn
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Color Palette

The application uses a custom color palette that reflects the SGT brand:

- Marian Blue (#424874) - Primary color
- Periwinkle (#dcd6f7) - Secondary color
- Light Periwinkle (#a6b1e1) - Accent color
- French Gray (#cacfd6) - Neutral color
- Azure Web (#d6e5e3) - Background color

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── courses/           # Course-related pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   └── layout/           # Layout components
├── lib/                  # Utility functions and configurations
└── styles/               # Global styles
```

## License

[MIT License](LICENSE)

## Acknowledgments

- UI Components by [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev) 