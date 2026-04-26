import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  ImageIcon,
  Phone,
  Tag,
} from "lucide-react";
import { SERVICES, getServiceById } from "../data/services";

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card aspect-video flex flex-col items-center justify-center gap-2 text-muted-foreground shadow-md">
      <div className="w-12 h-12 rounded-xl bg-muted/60 border border-border flex items-center justify-center">
        <ImageIcon className="w-5 h-5 opacity-40" />
      </div>
      <span className="text-sm font-semibold tracking-wide">{label}</span>
    </div>
  );
}

export function ServiceDetailPage() {
  const { serviceId } = useParams({ from: "/services/$serviceId" });
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <div className="text-5xl">🔍</div>
        <h1 className="text-2xl font-bold text-foreground">
          Service not found
        </h1>
        <p className="text-muted-foreground">
          The service you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="btn-primary mt-2"
          data-ocid="service_detail.back_home_button"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  // Other services (excluding current)
  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <section
        className="relative py-16 md:py-24 bg-muted/20 border-b border-border overflow-hidden"
        data-ocid="service_detail.hero"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Back */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-smooth mb-6"
            data-ocid="service_detail.back_button"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <div className="max-w-3xl">
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
              <Tag className="w-3.5 h-3.5 text-primary" />
              <span className="text-label text-primary text-xs">
                {service.category}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl shrink-0">
                {service.icon}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-3">
                  {service.title}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                  {service.tagline}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>
                Duration:{" "}
                <strong className="text-foreground">{service.duration}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="py-14 md:py-20 bg-background"
        data-ocid="service_detail.content"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {/* Left: description + details */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              {/* Description */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  About this service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image placeholders */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Gallery
                </h2>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  data-ocid="service_detail.gallery"
                >
                  <ImagePlaceholder label="Image 1" />
                  <ImagePlaceholder label="Image 2" />
                  <ImagePlaceholder label="Image 3" />
                </div>
              </div>

              {/* Service details list */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  What's included
                </h2>
                <ul
                  className="flex flex-col gap-3"
                  data-ocid="service_detail.details_list"
                >
                  {service.details.map((detail, i) => (
                    <li
                      key={`detail-${i}-${detail.slice(0, 10)}`}
                      className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border"
                      data-ocid={`service_detail.detail.${i + 1}`}
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-primary mt-0.5 shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: sticky CTA card */}
            <div className="lg:col-span-2">
              <div className="card-elevated p-6 flex flex-col gap-5 lg:sticky lg:top-24">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Book This Service
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Call us to schedule an appointment or ask any questions.
                  </p>
                </div>

                <div className="flex flex-col gap-2 p-4 rounded-xl bg-muted/40 border border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-semibold text-foreground truncate max-w-[180px]">
                      {service.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold text-foreground">
                      {service.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-semibold text-primary">
                      {service.category}
                    </span>
                  </div>
                </div>

                <a
                  href="tel:+918977041344"
                  className="btn-primary justify-center w-full"
                  data-ocid="service_detail.book_button"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Book Now — Call Us
                </a>
                <a
                  href="tel:+918977041344"
                  className="btn-outline justify-center w-full"
                  data-ocid="service_detail.call_button"
                >
                  <Phone className="w-4 h-4" strokeWidth={2} />
                  089770 41344
                </a>

                <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Mon–Sat: 9 AM – 7 PM · By appointment Sundays
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      {otherServices.length > 0 && (
        <section
          className="py-14 md:py-20 bg-muted/20 border-t border-border"
          data-ocid="service_detail.related"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Other Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherServices.map((s, i) => (
                <Link
                  key={s.id}
                  to="/services/$serviceId"
                  params={{ serviceId: s.id }}
                  className="card-elevated p-5 flex flex-col gap-3 group"
                  data-ocid={`service_detail.related.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl group-hover:bg-primary/20 transition-smooth">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-label text-primary text-xs mb-1">
                      {s.category}
                    </div>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-smooth leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {s.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
