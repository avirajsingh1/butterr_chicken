const responses: Record<string, string> = {
  register: `## Registering Your Residence in Rheinstadt

When moving to Rheinstadt, you must register your address within **14 days** of moving in.

**What you need:**
- Valid ID or passport
- Rental contract or landlord confirmation (*Wohnungsgeberbestätigung*)
- Completed registration form

**Where to go:**
Visit any *Bürgerdienste* (Citizens' Services) office. The main office is at **Rathausplatz 1, 40100 Rheinstadt**.

**Tip:** Book an appointment online at [rheinstadt.de](https://www.rheinstadt.de) to avoid long wait times.`,

  student: `## Welcome, International Student! 🎓

Here's your quick-start guide for Rheinstadt:

1. **Register your address** at Bürgerdienste within 14 days
2. **Open a bank account** — most students use Sparkasse or N26
3. **Get health insurance** — mandatory for enrollment (TK, AOK, or private)
4. **Enroll at your university** — bring your admission letter, insurance, and passport
5. **Apply for a residence permit** at the Ausländerbehörde (Immigration Office)

**Helpful locations:**
- Universität Rheinstadt International Office: Universitätsstr. 61
- FH Rheinstadt International Office: Bergstr. 96

The Semesterticket in your student ID covers all public transport in the region!`,

  visa: `## Visa & Residence Permits

**EU/EEA citizens** can live and work in Rheinstadt freely — just register your address.

**Non-EU citizens** typically need:
- A **national visa** (applied for at the German embassy in your home country)
- A **residence permit** (*Aufenthaltserlaubnis*) — apply at the Ausländerbehörde after arrival

**Ausländerbehörde (Immigration Office):**
📍 Schillerstraße 50-58, 40102 Rheinstadt
📞 +49 211 50-24949

**Documents typically needed:**
- Passport with visa
- Biometric photos
- Proof of health insurance
- Proof of financial means
- Rental contract`,

  event: `## Upcoming Events in Rheinstadt 🎉

Here are some highlights:

- **Rheinstädter Weihnachtsmarkt** — One of the region's largest Christmas markets (Nov–Dec)
- **Parkfest** — Music festival in Stadtpark (July)
- **RHEINBUNT!** — City festival celebrating diversity (May)
- **Museum Night** — All museums open late with special programs (September)
- **FC Rheinstadt Match Days** — Experience the stadium atmosphere

Check the Events page for the full calendar, or ask me about specific types of events!`,

  transport: `## Public Transport in Rheinstadt 🚌

Rheinstadt has an excellent public transport network:

- **U-Bahn** (subway) — 6 lines covering the city
- **S-Bahn** — Regional trains connecting to neighboring cities
- **Buses** — Extensive bus network
- **Tram** — Modern tram lines through the city center

**Tickets:**
- Single ticket: ~€2.90
- Day ticket: ~€7.70
- Monthly pass: ~€95
- **Students:** Semesterticket covers regional transport!

Download the **RVR app** for real-time schedules and mobile tickets.`,

  waste: `## Waste Management & Recycling ♻️

Rheinstadt uses a color-coded bin system:

- **🔵 Blue bin** — Paper and cardboard
- **🟡 Yellow bin/bag** — Packaging (plastic, metal, cartons)
- **🟤 Brown bin** — Organic/food waste
- **⚫ Black bin** — Residual waste

**Bulky waste:** Schedule a free pickup (max 2x per year)
**Hazardous waste:** Bring to recycling centers (Wertstoffhöfe)

**City Waste Services:** +49 211 9111-111

Collection schedules vary by district — check the online calendar for your address.`,
};

const defaultResponse = `I'd be happy to help you with information about Rheinstadt! I can assist with:

- 🏛️ **City services** — registration, permits, taxes
- 🌍 **Immigration** — visa, residence permits, integration
- 🎓 **Student life** — enrollment, housing, tips
- 🎉 **Events** — what's happening in the city
- 🚌 **Transport** — getting around Rheinstadt
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
