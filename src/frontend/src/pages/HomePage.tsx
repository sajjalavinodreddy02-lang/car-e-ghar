import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  MapPin,
  Navigation,
  Phone,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import { SERVICES } from "../data/services";

const REVIEWS = [
  {
    id: "r1",
    author: "Rahul M.",
    rating: 5,
    text: "Friendly staff and they give best service at reasonable price. My car looks absolutely brand new after the ceramic coating!",
    date: "2 weeks ago",
  },
  {
    id: "r2",
    author: "Priya K.",
    rating: 5,
    text: "Very good work and reasonable prices. Went for interior detailing and was blown away — every corner of the car was spotless.",
    date: "1 month ago",
  },
  {
    id: "r3",
    author: "Sanjay R.",
    rating: 5,
    text: "Did my car wash after dark and the place is well lit. Quick, professional and the foam wash left my car gleaming.",
    date: "3 weeks ago",
  },
  {
    id: "r4",
    author: "Anitha D.",
    rating: 5,
    text: "Best PPF installation in Secunderabad. The team was thorough and the film is completely invisible. Highly recommended!",
    date: "2 months ago",
  },
];

export function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
        data-ocid="hero.section"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="text-center lg:text-left fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-label text-primary text-xs">
                  Secunderabad's Premium Car Care
                </span>
              </div>

              <h1 className="text-hero text-foreground mb-4">
                Complete Car Care{" "}
                <span className="text-gradient-cyan">Solution</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 max-w-lg mx-auto lg:mx-0">
                Experience precision detailing, protective coatings, and premium
                wash services at Car-e-Ghar — trusted by 130+ happy customers.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">4.8</span>
                <span className="text-sm text-muted-foreground">
                  130+ Google Reviews
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => scrollTo("services")}
                  className="btn-outline"
                  data-ocid="hero.view_services_button"
                >
                  View Services
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+918977041344"
                  className="btn-primary animate-pulseGlow"
                  data-ocid="hero.call_button"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Book Now
                </a>
              </div>
            </div>

            {/* Hero visual / placeholder */}
            <div className="fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3] flex flex-col items-center justify-center gap-3 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative z-10 flex flex-col items-center gap-2 text-muted-foreground">
                  <div className="w-16 h-16 rounded-2xl bg-muted/50 border border-border flex items-center justify-center text-3xl">
                    🚗
                  </div>
                  <span className="text-sm font-semibold tracking-wide">
                    Image 1
                  </span>
                  <span className="text-xs opacity-60">Car Wash Facility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overview bar */}
          <div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            {[
              { icon: "🧴", label: "Category", value: "Car Wash & Detailing" },
              { icon: "🕘", label: "Hours", value: "Opens 9 AM Mon–Sat" },
              {
                icon: "✅",
                label: "Products",
                value: "Branded Quality Products",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card-elevated p-4 flex items-center gap-3"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-label text-muted-foreground text-xs">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground mt-0.5">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 md:py-28 bg-muted/20"
        data-ocid="services.section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-label text-primary text-xs">
                Our Services
              </span>
            </div>
            <h2 className="text-section-title text-foreground mb-3">
              Premium Car Care Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From a quick foam wash to full ceramic coating — every service is
              delivered with precision and branded quality products.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            data-ocid="services.list"
          >
            {SERVICES.map((service, index) => (
              <Link
                key={service.id}
                to="/services/$serviceId"
                params={{ serviceId: service.id }}
                className="card-elevated p-5 flex flex-col gap-3 group cursor-pointer"
                style={{ animationDelay: `${index * 0.07}s` }}
                data-ocid={`services.item.${index + 1}`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl group-hover:bg-primary/20 transition-smooth">
                  {service.icon}
                </div>
                <div>
                  <div className="text-label text-primary text-xs mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-smooth leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {service.tagline}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  {service.duration}
                  <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-smooth" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="py-20 md:py-28 bg-background"
        data-ocid="reviews.section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-label text-primary text-xs">
                Customer Reviews
              </span>
            </div>
            <h2 className="text-section-title text-foreground mb-3">
              What Our Customers Say
            </h2>
            <div className="flex items-center gap-2 justify-center">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xl font-bold text-foreground">4.8</span>
              <span className="text-sm text-muted-foreground">
                / 5 · 130+ Reviews
              </span>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            data-ocid="reviews.list"
          >
            {REVIEWS.map((review, index) => (
              <div
                key={review.id}
                className="card-elevated p-5 flex flex-col gap-3 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-ocid={`reviews.item.${index + 1}`}
              >
                <div className="flex items-center gap-1">
                  {Array.from(
                    { length: review.rating },
                    (_, i) => `star-${review.id}-${i}`,
                  ).map((key) => (
                    <Star
                      key={key}
                      className="w-3.5 h-3.5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed flex-1">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-border">
                  <span className="text-sm font-bold text-foreground">
                    {review.author}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 md:py-28 bg-muted/20"
        data-ocid="contact.section"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-label text-primary text-xs">Find Us</span>
            </div>
            <h2 className="text-section-title text-foreground mb-3">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Visit us or give us a call. We're ready to give your car the care
              it deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-video flex flex-col items-center justify-center gap-3 relative shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative z-10 flex flex-col items-center gap-2 text-muted-foreground">
                <MapPin className="w-10 h-10 text-primary opacity-60" />
                <span className="text-sm font-semibold">Map Placeholder</span>
                <span className="text-xs opacity-60 text-center px-8">
                  28, Lakshmipuram Colony, Sainikpuri, Secunderabad
                </span>
              </div>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-5">
              <div className="card-elevated p-6 flex flex-col gap-5">
                <h3 className="text-lg font-bold text-foreground">
                  Contact Details
                </h3>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-label text-muted-foreground text-xs mb-0.5">
                      Phone
                    </div>
                    <a
                      href="tel:+918977041344"
                      className="text-base font-bold text-foreground hover:text-primary transition-smooth"
                      data-ocid="contact.phone_link"
                    >
                      089770 41344
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-label text-muted-foreground text-xs mb-0.5">
                      Address
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-relaxed">
                      28, Lakshmipuram Colony, Sainikpuri,
                      <br />
                      Secunderabad, Telangana – 500094
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-label text-muted-foreground text-xs mb-0.5">
                      Hours
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      Mon – Sat: 9:00 AM – 7:00 PM
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+918977041344"
                  className="btn-primary flex-1 justify-center"
                  data-ocid="contact.call_button"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=28+Lakshmipuram+Colony+Sainikpuri+Secunderabad+Telangana+500094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 justify-center"
                  data-ocid="contact.directions_button"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section
        className="py-14 bg-primary/10 border-t border-border"
        data-ocid="cta.section"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to give your car the care it deserves?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Call us now to book your appointment or walk in anytime during
            business hours.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+918977041344"
              className="btn-primary"
              data-ocid="cta.call_button"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Book Now — 089770 41344
            </a>
            <button
              type="button"
              onClick={() => scrollTo("services")}
              className="btn-outline"
              data-ocid="cta.view_services_button"
            >
              <CheckCircle2 className="w-4 h-4" />
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
