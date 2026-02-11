import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="font-display text-4xl font-bold mb-6">About Dortmund</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Our City</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dortmund is the largest city in the Ruhr area and the eighth-largest city in Germany with over 600,000 residents. 
                Once known for its steel industry and coal mining, Dortmund has transformed into a modern hub for technology, 
                education, and culture. Home to TU Dortmund and Fachhochschule Dortmund, the city welcomes thousands of 
                international students every year.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">City Administration</h2>
              <p className="text-muted-foreground leading-relaxed">
                The City of Dortmund administration serves residents through various departments and citizen service offices 
                (*Bürgerdienste*) located throughout the city. Our digital portal and AI assistant aim to make city services 
                more accessible to everyone, including international residents.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-3">Digital Transformation</h2>
              <p className="text-muted-foreground leading-relaxed">
                As part of our commitment to digital innovation, we've introduced the Dortmund Digital Assistant — an AI-powered 
                tool to help residents find information about city services, immigration procedures, events, and daily life in 
                Dortmund. Available 24/7 in multiple languages.
              </p>
            </section>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold font-sans mb-4">Contact Information</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    <span>Friedensplatz 1<br />44135 Dortmund</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <span>+49 231 50-0</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <span>info@dortmund.de</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold font-sans mb-4">Office Hours</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Mon–Fri</p>
                      <p>8:00 – 16:00</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Thursday</p>
                      <p>8:00 – 18:00 (extended)</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
