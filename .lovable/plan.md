

# Dortmund City Services Website with AI Agent

A clean, official-looking municipal website for the City of Dortmund where the **AI City Assistant** is the primary feature. All other pages/sections serve as realistic visual context but are static placeholders.

---

## 🤖 Core Feature: AI City Assistant ("Dortmund Digital Assistant")

### Chat Interface
- **Floating chat widget** (bottom-right) available on every page — click to expand into a conversation panel
- **Dedicated chat page** accessible from the main navigation for a full-screen experience
- Streaming responses rendered with markdown support
- Suggested starter questions (e.g., "How do I register my residence?", "What events are happening this week?", "I'm a new international student — where do I start?")

### Agent Capabilities (via system prompt)
The AI will be prompted to act as a knowledgeable Dortmund city government assistant that helps with:
- City services (registration, permits, taxes, waste management)
- Immigration & expat guidance (visa, residence permits, integration courses)
- International student support (enrollment, housing, student visa)
- Events, holidays, public transport, and general city information
- Directing users to the right department or office

### Technical Approach
- Powered by **Lovable AI** (Gemini model) via a Supabase edge function
- Streaming responses for real-time feel
- Backend system prompt defines the assistant's persona and knowledge
- Error handling for rate limits and payment issues

---

## 📄 Placeholder Pages (Static, Non-functional)

### Homepage
- Hero banner with Dortmund branding and a prominent "Ask our Digital Assistant" CTA
- Quick-access service category cards (visual only)
- Upcoming events preview section
- City contact info footer

### Services Page
- Grid of service cards organized by audience (Citizens, Immigrants, Students, All Residents)
- Each card has an icon, title, and short description — clicking does nothing

### Events Page
- Static list of sample city events with dates, locations, and descriptions
- Category filter buttons (visual only)

### About / Contact Page
- City overview, administration info, and contact details
- Static content, no forms

### Navigation & Footer
- Top navbar with Dortmund logo, page links, and a language selector (decorative)
- Comprehensive footer with links and legal info

---

## 🎨 Design
- **Colors**: Official navy blue and white with subtle gray accents — trustworthy government aesthetic
- **Layout**: Clean, spacious, high readability
- **Responsive**: Mobile-friendly with hamburger menu
- **Chat widget**: Branded with city colors, clear and inviting

