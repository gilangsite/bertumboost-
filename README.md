# Bertumboost Website

A Next.js frontend implementation for Bertumboost, a mental health support platform for Gen-Z in Indonesia. Features AI-powered consultations, community programs, and empathetic support services.

## Features

- **AI Consultation**: 3-minute anonymous AI chat for initial support and micro-actions
- **Responsive Design**: Mobile-first design with glassmorphism effects
- **Localization**: Full Bahasa Indonesia support
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Analytics**: GA4 integration for user behavior tracking
- **Safety Features**: Emergency keyword detection and escalation protocols

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Language**: TypeScript
- **API**: Next.js API Routes (Chatbase proxy)
- **Testing**: Playwright (E2E), Jest (Unit)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/bertumboost-website.git
cd bertumboost-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Configure environment variables:
```env
CHATBASE_API_KEY=your_chatbase_api_key
CHATBASE_API_URL=https://api.chatbase.com/v1
NEXT_PUBLIC_ANALYTICS_ID=your_ga4_id
```

5. Run development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── ai/page.tsx          # AI consultation page
│   ├── api/chat/            # Chat API routes
│   ├── globals.css          # Global styles & design tokens
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   └── [Component].tsx      # Page-specific components
├── lib/
│   ├── api.ts               # API client utilities
│   └── analytics.ts         # Analytics utilities
├── LOCALE.id.json           # Bahasa Indonesia translations
└── tailwind.config.js       # Tailwind configuration
```

## Design System

### Colors
- Primary: `#f4f4ee` (Light yellow)
- Secondary: `#0e0e0e` (Dark gray)
- White: `#ffffff`
- Black: `#000000`

### Typography
- Font: DM Sans (Google Fonts)
- Scale: Responsive with proper line heights

### Components
- Glassmorphism effects with backdrop blur
- Rounded corners (`--radius-soft`, `--radius-pill`)
- Subtle shadows and hover effects

## API Integration

### Chatbase Proxy
The app includes API routes that proxy requests to Chatbase for AI conversations:

- `POST /api/chat/session` - Create new session
- `POST /api/chat/message` - Send message and get response
- `POST /api/chat/escalate` - Handle emergency escalations

## Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Manual QA Checklist
See `TESTS.md` for comprehensive testing procedures.

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Build
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Support

For support or questions, contact the development team or create an issue in this repository.
