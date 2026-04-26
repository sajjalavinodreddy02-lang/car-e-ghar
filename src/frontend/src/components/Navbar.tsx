import { Link } from "@tanstack/react-router";
import { Car, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }); // runs every render — cheap noop when already false

  const handleHashLink = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/90 navbar-blur border-b border-border shadow-md"
          : "bg-transparent"
      }`}
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="navbar.logo_link"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-smooth">
              <Car
                className="w-4 h-4 text-primary-foreground"
                strokeWidth={2.5}
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-smooth">
              Car-e-Ghar
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleHashLink(link.href)}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-smooth"
                  data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-smooth [&.active]:text-primary"
                  data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+918977041344"
              className="btn-primary text-sm py-2 px-4 glow-primary"
              data-ocid="navbar.call_button"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            data-ocid="navbar.hamburger_toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden bg-card/95 navbar-blur border-b border-border animate-slide-down"
          data-ocid="navbar.mobile_menu"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleHashLink(link.href)}
                  className="text-left py-3 px-3 rounded-lg text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth"
                  data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="py-3 px-3 rounded-lg text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-muted/50 transition-smooth"
                  data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href="tel:+918977041344"
              className="mt-2 btn-primary text-sm justify-center"
              data-ocid="navbar.mobile_call_button"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Call Now — 089770 41344
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
