const responses: Record<string, string> = {
  register: `## Registering Your Residence in Dortmund

When moving to Dortmund, you must register your address within **14 days** of moving in.

**What you need:**
- Valid ID or passport
- Rental contract or landlord confirmation (*Wohnungsgeberbestätigung*)
- Completed registration form

**Where to go:**
Visit any *Bürgerdienste* (Citizens' Services) office. The main office is at **Südwall 2-4, 44137 Dortmund**.

**Tip:** Book an appointment online at [dortmund.de](https://www.dortmund.de) to avoid long wait times.`,

  student: `## Welcome, International Student! 🎓

Here's your quick-start guide for Dortmund:

1. **Register your address** at Bürgerdienste within 14 days
2. **Open a bank account** — most students use Sparkasse or N26
3. **Get health insurance** — mandatory for enrollment (TK, AOK, or private)
4. **Enroll at your university** — bring your admission letter, insurance, and passport
5. **Apply for a residence permit** at the Ausländerbehörde (Immigration Office)

**Helpful locations:**
- TU Dortmund International Office: Emil-Figge-Str. 61
- FH Dortmund International Office: Sonnenstr. 96

The Semesterticket in your student ID covers all public transport in NRW!`,

  visa: `## Visa & Residence Permits

**EU/EEA citizens** can live and work in Dortmund freely — just register your address.

**Non-EU citizens** typically need:
- A **national visa** (applied for at the German embassy in your home country)
- A **residence permit** (*Aufenthaltserlaubnis*) — apply at the Ausländerbehörde after arrival

**Ausländerbehörde (Immigration Office):**
📍 Leopoldstraße 50-58, 44147 Dortmund
📞 +49 231 50-24949

**Documents typically needed:**
- Passport with visa
- Biometric photos
- Proof of health insurance
- Proof of financial means
- Rental contract`,

  event: `## Upcoming Events in Dortmund 🎉

Here are some highlights:

- **Dortmunder Weihnachtsmarkt** — One of Germany's largest Christmas markets (Nov–Dec)
- **Juicy Beats Festival** — Music festival in Westfalenpark (July)
- **DORTBUNT!** — City festival celebrating diversity (May)
- **Museum Night** — All museums open late with special programs (September)
- **BVB Match Days** — Experience the famous Signal Iduna Park atmosphere

Check the Events page for the full calendar, or ask me about specific types of events!`,

  transport: `## Public Transport in Dortmund 🚌

Dortmund has an excellent public transport network operated by **DSW21**:

- **U-Bahn** (subway) — 8 lines covering the city
- **S-Bahn** — Regional trains connecting to the Ruhr area
- **Buses** — Extensive bus network
- **H-Bahn** — Unique suspended monorail at TU Dortmund

**Tickets:**
- Single ticket: ~€2.90
- Day ticket: ~€7.70
- Monthly pass: ~€95
- **Students:** Semesterticket covers all of NRW!

Download the **DSW21 app** for real-time schedules and mobile tickets.`,

  waste: `## Waste Management & Recycling ♻️

Dortmund uses a color-coded bin system:

- **🔵 Blue bin** — Paper and cardboard
- **🟡 Yellow bin/bag** — Packaging (plastic, metal, cartons)
- **🟤 Brown bin** — Organic/food waste
- **⚫ Black bin** — Residual waste

**Bulky waste:** Schedule a free pickup at EDG (max 2x per year)
**Hazardous waste:** Bring to recycling centers (Wertstoffhöfe)

**EDG Contact:** +49 231 9111-111 or [edg.de](https://www.edg.de)

Collection schedules vary by district — check EDG's online calendar for your address.`,
};

const defaultResponse = `I'd be happy to help you with information about Dortmund! I can assist with:

- 🏛️ **City services** — registration, permits, taxes
- 🌍 **Immigration** — visa, residence permits, integration
- 🎓 **Student life** — enrollment, housing, tips
- 🎉 **Events** — what's happening in the city
- 🚌 **Transport** — getting around Dortmund
- ♻️ **Waste management** — recycling and disposal

What would you like to know about?`;

export function getMockResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("register") || lower.includes("anmeld") || lower.includes("residence")) return responses.register;
  if (lower.includes("student") || lower.includes("university") || lower.includes("enroll")) return responses.student;
  if (lower.includes("visa") || lower.includes("permit") || lower.includes("immigra") || lower.includes("ausländ")) return responses.visa;
  if (lower.includes("event") || lower.includes("festival") || lower.includes("concert") || lower.includes("happening")) return responses.event;
  if (lower.includes("transport") || lower.includes("bus") || lower.includes("train") || lower.includes("u-bahn")) return responses.transport;
  if (lower.includes("waste") || lower.includes("recycl") || lower.includes("garbage") || lower.includes("müll")) return responses.waste;
  return defaultResponse;
}

export function simulateStream(text: string, onChunk: (chunk: string) => void, onDone: () => void) {
  let i = 0;
  const words = text.split(" ");
  const interval = setInterval(() => {
    if (i < words.length) {
      onChunk(words[i] + (i < words.length - 1 ? " " : ""));
      i++;
    } else {
      clearInterval(interval);
      onDone();
    }
  }, 30);
  return () => clearInterval(interval);
}
