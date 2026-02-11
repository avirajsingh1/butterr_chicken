import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
  { to: "/chat", label: "Digital Assistant", icon: MessageCircle },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
            DO
          </div>
          <div className="leading-tight">
            <span className="font-display text-lg font-bold">Dortmund</span>
            <span className="ml-1 hidden text-xs opacity-80 sm:inline">City Portal</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10",
                location.pathname === link.to && "bg-primary-foreground/15"
              )}
            >
              {link.icon && <link.icon className="h-4 w-4" />}
              {link.label}
            </Link>
          ))}
          <button className="ml-2 flex items-center gap-1 rounded-md px-2 py-1.5 text-xs opacity-70 hover:opacity-100 transition-opacity">
            <Globe className="h-3.5 w-3.5" />
            EN
          </button>
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-primary-foreground/10 bg-primary pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10",
                location.pathname === link.to && "bg-primary-foreground/15"
              )}
            >
              {link.icon && <link.icon className="h-4 w-4" />}
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
