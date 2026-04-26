import { Link } from "@tanstack/react-router";
import { Car, ExternalLink, MapPin, Phone } from "lucide-react";
import { SERVICES } from "../data/services";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const handleHashLink = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Car
                  className="w-4 h-4 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Car-e-Ghar
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Complete Car Care Solution in Secunderabad. Premium services using
              top-grade branded products.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>4.8 ★ · 130+ Google Reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services/$serviceId"
                    params={{ serviceId: s.id }}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    data-ocid={`footer.service_link.${SERVICES.indexOf(s) + 1}`}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", action: () => handleHashLink("hero") },
                { label: "Services", action: () => handleHashLink("services") },
                { label: "Reviews", action: () => handleHashLink("reviews") },
                { label: "Contact", action: () => handleHashLink("contact") },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={link.action}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918977041344"
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                  data-ocid="footer.call_link"
                >
                  <Phone
                    className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                    strokeWidth={2}
                  />
                  089770 41344
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=28+Lakshmipuram+Colony+Sainikpuri+Secunderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                  data-ocid="footer.directions_link"
                >
                  <MapPin
                    className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                    strokeWidth={2}
                  />
                  28, Lakshmipuram Colony, Sainikpuri, Secunderabad — 500094
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            © {year}. Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth inline-flex items-center gap-1"
            >
              caffeine.ai <ExternalLink className="w-3 h-3" />
            </a>
          </span>
          <span>Car-e-Ghar · Secunderabad, Telangana</span>
        </div>
      </div>
    </footer>
  );
}
