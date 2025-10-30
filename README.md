# Sketch & Search: Google DeepMind × Freepik × Qdrant Hackathon

Landing page for the Sketch & Search Hackathon - combining image/video generation and vector search.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **All Sections Included**:
  - Navigation header with sticky positioning
  - Hero section with hackathon details
  - Stats dashboard (kickoff, build window, demos)
  - Learn to Build section with three partner tools
  - Prizes & judging rubric (including Google DeepMind partner track)
  - Detailed event schedule with presentations
  - Hosted by section (Google DeepMind, Freepik, Qdrant)
  - Sponsors grid
  - Judges profiles with presenters
  - FAQ accordion
  - Comprehensive footer

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/Users/thierrydamiba/sxs/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Key Sections

- **Hero**: Event title, description, dates (Nov 22 - Dec 7), and CTAs
- **Stats**: Kickoff (Nov 22), Build Window (2 weeks), Demos (Dec 11)
- **Learn To**: Google DeepMind tools, Freepik Studio, Qdrant Vector Search
- **Prizes**: $500/$250/$100 prizes + Google DeepMind partner track (Nano Banana & Gemini)
- **Schedule**: Detailed agenda with presentations from Paige Bailey, Enrique Lopez, Thierry Damiba
- **Hosted By**: Google DeepMind, Freepik, Qdrant
- **Judges**: Expert panel including presenters and industry leaders
- **FAQ**: Common questions with accordion UI

## License

This is a recreation for educational purposes.

