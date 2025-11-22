# Polymarket UI Clone

A modern, responsive UI clone of Polymarket built with Next.js and Tailwind CSS. This is a static frontend demonstration featuring prediction markets on politics, sports, crypto, and more.

## Features

- 🎨 **Modern UI Design** - Clean, dark-themed interface inspired by Polymarket
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🔍 **Filtering & Sorting** - Filter markets by category, hide sports/crypto, sort by volume
- 🏷️ **Topic Tags** - Quick filtering by popular topics (Trump, Bitcoin, AI, etc.)
- 📊 **Market Types** - Binary, multiple choice, and live sports markets
- 🎯 **Market Detail Pages** - Individual pages with charts and outcome information
- ⚡ **Fast Performance** - Built with Next.js App Router for optimal speed

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Data**: Static JSON mock data

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
poly/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── learn/             # Learn page
│   ├── market/[id]/       # Dynamic market detail pages
│   ├── layout.js          # Root layout with Navigation and Footer
│   ├── page.js            # Homepage with market grid
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.js      # Top navigation bar
│   ├── Footer.js          # Footer component
│   ├── MarketCard.js      # Market card (binary, multiple, sports)
│   ├── FilterBar.js       # Filter and sort controls
│   └── TopicTags.js       # Topic tag buttons
├── data/                  # Mock data
│   └── markets.json       # 36 diverse mock markets
└── public/                # Static assets
```

## Market Types

### Binary Markets
Simple Yes/No questions with two possible outcomes:
- Large percentage display showing current odds
- Color-coded Yes (green) and No (red) buttons
- Volume indicator

### Multiple Choice Markets
Markets with 3+ possible outcomes:
- List of outcomes with percentage bars
- Supports collapsible views for many options
- Visual progress bars for each outcome

### Sports Markets
Live and upcoming sporting events:
- Team matchups with current scores (if live)
- Live indicator badge for ongoing games
- Category tags (NBA, NFL, UFC, etc.)
- Game time display

## Features Breakdown

### Homepage
- Grid layout of market cards (responsive: 1-3 columns)
- Filter bar with sort, frequency, and status options
- Topic tags for quick filtering
- Hide sports/crypto toggle switches
- Empty state when no markets match filters

### Market Detail Page
- Full market information and description
- Mock price chart with 7-day history
- Outcome panel with buy buttons
- Category badge and tags
- Similar markets section
- Back navigation

### Navigation
- Logo and branding
- Category links (Politics, Sports, Crypto, Tech, etc.)
- Search bar (UI only)
- Mobile hamburger menu
- Sticky positioning

### Responsive Design
- **Mobile** (< 768px): Single column, simplified filters, hamburger menu
- **Tablet** (768px - 1024px): Two column grid
- **Desktop** (> 1024px): Three column grid, full navigation

## Mock Data

The application includes 36 diverse mock markets covering:
- **Politics**: Elections, geopolitical events, government decisions
- **Sports**: NFL, NBA, UFC, Soccer (Premier League, Champions League)
- **Crypto**: Bitcoin, Ethereum price predictions
- **Tech**: AI bubble, tech companies, social media
- **Finance**: Fed decisions, economic indicators, stock market
- **Culture**: Time Person of the Year, Game of the Year, entertainment

## Customization

### Adding New Markets

Edit `data/markets.json` and add a new market object:

```json
{
  "id": "unique-market-id",
  "title": "Your Market Question?",
  "type": "binary|multiple|sports",
  "category": "Politics|Sports|Crypto|Tech|Finance|Culture",
  "outcomes": [
    { "name": "Option 1", "percentage": 50 },
    { "name": "Option 2", "percentage": 50 }
  ],
  "volume": "$1m Vol.",
  "endDate": "2025-12-31",
  "isLive": false,
  "tags": ["tag1", "tag2"],
  "icon": "card|repeat|sports"
}
```

### Styling

All colors and styles can be customized in:
- `app/globals.css` - Global CSS variables and theme
- Component files - Tailwind classes for specific components

## Notes

- This is a **static frontend only** - no backend or real trading functionality
- All market data is mock data from `data/markets.json`
- No authentication or user accounts
- No actual financial transactions
- Charts are SVG-based mock visualizations

## License

This is a demonstration project for educational purposes.

## Acknowledgments

Design inspired by [Polymarket](https://polymarket.com/)
