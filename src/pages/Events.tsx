import { CalendarDays, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const filters = ["All", "Culture", "Sports", "Community", "Markets", "Music"];

const events = [
  { date: "Mar 15, 2026", title: "International Food Festival", location: "Westfalenpark", category: "Culture", desc: "Taste cuisines from around the world with live music and cooking demos." },
  { date: "Mar 22, 2026", title: "City Administration Open Day", location: "Rathaus", category: "Community", desc: "Tour city hall, meet officials, and learn about municipal services." },
  { date: "Apr 5, 2026", title: "Spring Market", location: "Alter Markt", category: "Markets", desc: "Seasonal market with local produce, crafts, and street food." },
  { date: "Apr 18, 2026", title: "BVB Fan Day", location: "Signal Iduna Park", category: "Sports", desc: "Meet the players, stadium tours, and family activities." },
  { date: "May 2, 2026", title: "RHEINBUNT!", location: "City Center", category: "Culture", desc: "Rheinstadt's festival celebrating diversity with stages across the city." },
  { date: "May 16, 2026", title: "Museum Night", location: "Various Museums", category: "Culture", desc: "All museums open until midnight with special exhibitions and performances." },
  { date: "Jun 7, 2026", title: "Westfalenpark Summer Concert", location: "Westfalenpark", category: "Music", desc: "Open-air concert series featuring local and international artists." },
  { date: "Jul 11, 2026", title: "Juicy Beats Festival", location: "Westfalenpark", category: "Music", desc: "One of Germany's biggest indie and electronic music festivals." },
];

export default function Events() {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="font-display text-4xl font-bold mb-2">Events</h1>
        <p className="text-muted-foreground mb-6">Discover what's happening in Rheinstadt</p>

        {/* Filters (decorative) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f, i) => (
            <Button key={f} variant={i === 0 ? "default" : "outline"} size="sm" className="cursor-default">
              {f}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {events.map((e) => (
            <Card key={e.title} className="hover:shadow-md transition-shadow cursor-default">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CalendarDays className="h-5 w-5" />
                    <span className="text-[10px] font-semibold mt-0.5">{e.date.split(",")[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <span className="inline-block rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground mb-1">
                      {e.category}
                    </span>
                    <h3 className="font-semibold font-sans text-sm">{e.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{e.desc}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {e.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
