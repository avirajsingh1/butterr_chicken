import { Link } from "react-router-dom";
import { MessageCircle, Building2, GraduationCap, Globe2, CalendarDays, Bus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const services = [
  { icon: Building2, title: "Registration & Permits", desc: "Register your address, apply for permits" },
  { icon: Globe2, title: "Immigration Services", desc: "Visa, residence permits, integration" },
  { icon: GraduationCap, title: "Student Services", desc: "Enrollment, housing, student life" },
  { icon: Bus, title: "Public Transport", desc: "Routes, tickets, schedules" },
  { icon: CalendarDays, title: "Events & Culture", desc: "Festivals, museums, concerts" },
  { icon: Trash2, title: "Waste & Recycling", desc: "Collection schedules, disposal" },
];

const events = [
  { date: "Mar 15", title: "International Food Festival", location: "Westfalenpark" },
  { date: "Mar 22", title: "City Administration Open Day", location: "Rathaus" },
  { date: "Apr 5", title: "Spring Market", location: "Alter Markt" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Welcome to Dortmund
            </h1>
            <p className="mt-4 text-lg opacity-80 leading-relaxed md:text-xl">
              Your digital gateway to city services, events, and everything you need as a resident, newcomer, or visitor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/chat">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ask Anna
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/services">Browse Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </section>

      {/* Service Cards */}
      <section className="container py-16">
        <h2 className="font-display text-3xl font-bold text-center mb-2">City Services</h2>
        <p className="text-center text-muted-foreground mb-10">Quick access to the services you need</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group cursor-default transition-shadow hover:shadow-md">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold font-sans text-sm">{s.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Events Preview */}
      <section className="bg-secondary/50">
        <div className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold">Upcoming Events</h2>
              <p className="text-muted-foreground mt-1">What's happening in Dortmund</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/events">View All</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {events.map((e) => (
              <Card key={e.title}>
                <CardContent className="p-5">
                  <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground mb-3">
                    {e.date}
                  </span>
                  <h3 className="font-semibold font-sans">{e.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">📍 {e.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h2 className="font-display text-3xl font-bold">Need Help?</h2>
          <p className="mt-3 text-muted-foreground">
            Anna is available 24/7 to answer your questions about city services, immigration, events, and more.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link to="/chat">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start a Conversation
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
