import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 font-display text-lg font-bold">City of Dortmund</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Official portal for city services, information, and digital assistance for all residents and visitors.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-sm uppercase tracking-wider opacity-70">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/events" className="hover:opacity-100 transition-opacity">Events</Link></li>
              <li><Link to="/chat" className="hover:opacity-100 transition-opacity">Ask Anna</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-sm uppercase tracking-wider opacity-70">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +49 231 50-0</li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> info@dortmund.de</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Friedensplatz 1, 44135</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-sm uppercase tracking-wider opacity-70">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><span className="cursor-default">Privacy Policy</span></li>
              <li><span className="cursor-default">Imprint</span></li>
              <li><span className="cursor-default">Accessibility</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-60">
          © 2026 City of Dortmund. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
