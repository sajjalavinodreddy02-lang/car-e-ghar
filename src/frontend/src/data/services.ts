import type { Service } from "../types";

export const SERVICES: Service[] = [
  {
    id: "car-foam-wash",
    title: "Car Foam Wash",
    tagline: "Thorough foam wash for a sparkling exterior",
    description:
      "Our premium foam wash uses high-quality branded foam agents that gently lift dirt, grime, and road contaminants from your car's surface — leaving a spotless, showroom-fresh shine without scratching the paintwork.",
    icon: "🚿",
    details: [
      "High-pressure pre-rinse to loosen heavy dirt",
      "Active foam application using branded foam cannon",
      "Soft microfiber mitt hand wash on all panels",
      "Wheel and tyre cleaning with specialist degreaser",
      "Final rinse and squeegee dry",
      "Door jamb and mirror cleaning included",
    ],
    duration: "45–60 min",
    category: "Exterior",
  },
  {
    id: "interior-exterior-detailing",
    title: "Interior & Exterior Detailing",
    tagline: "Deep cleaning and rejuvenation inside and out",
    description:
      "A comprehensive detailing service that restores your car's interior freshness and exterior brilliance. From steam-cleaned upholstery to polished trim, we treat every surface with expert precision.",
    icon: "✨",
    details: [
      "Full exterior wash and clay bar decontamination",
      "Machine polish to remove light swirl marks",
      "Interior vacuum and steam-clean upholstery",
      "Dashboard, console, and door panel dressing",
      "Window cleaning (interior and exterior)",
      "Tyre shine and alloy wheel polish",
    ],
    duration: "3–5 hours",
    category: "Full Detail",
  },
  {
    id: "paint-protection-film",
    title: "Paint Protection Film (PPF)",
    tagline: "Durable, invisible armour for your paintwork",
    description:
      "PPF is the ultimate shield against stone chips, scratches, and road debris. Our trained technicians apply a crystal-clear urethane film that is virtually invisible and self-healing under heat — keeping your paint looking factory-fresh for years.",
    icon: "🛡️",
    details: [
      "High-clarity urethane film — invisible on paint",
      "Self-healing technology repairs minor scratches",
      "UV-resistant to prevent yellowing",
      "Available for full car, bonnet, bumper, or custom zones",
      "Precision cut using digital templates",
      "5-year manufacturer warranty on film",
    ],
    duration: "1–3 days",
    category: "Protection",
  },
  {
    id: "teflon-coating",
    title: "Teflon Coating",
    tagline: "Lasting shine and rust-free protection",
    description:
      "Teflon coating creates a protective polymer layer over your car's paintwork, offering resistance against minor scratches, UV rays, and environmental pollution while giving a deep, long-lasting gloss.",
    icon: "💎",
    details: [
      "Thorough wash and surface prep before application",
      "Teflon polymer applied by trained technicians",
      "Protects against UV fading and oxidation",
      "Adds depth and gloss to existing paint",
      "Repels water and dirt for easy future cleaning",
      "Typically lasts 6–12 months with proper care",
    ],
    duration: "4–6 hours",
    category: "Protection",
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    tagline: "Long-lasting nano protection and mirror finish",
    description:
      "Ceramic coating bonds to your paint at a nano level, creating a semi-permanent hydrophobic layer that resists contaminants, UV damage, and minor abrasions. The result is an intense mirror-like shine that lasts years.",
    icon: "🔷",
    details: [
      "Paint decontamination and machine correction pre-coat",
      "Professional-grade SiO₂ ceramic formula applied",
      "Extreme hydrophobic water-beading effect",
      "Resistant to chemical etching and bird droppings",
      "High-gloss finish that deepens paint colour",
      "Protection lasts 2–5 years with proper maintenance",
    ],
    duration: "1–2 days",
    category: "Protection",
  },
  {
    id: "sun-films-installation",
    title: "Sun Films Installation",
    tagline: "UV protection and privacy for your comfort",
    description:
      "Quality window tinting films reduce cabin heat, block harmful UV rays, and add privacy — all while enhancing the look of your vehicle. We use premium films that are scratch-resistant, optically clear, and legally compliant.",
    icon: "🌞",
    details: [
      "Premium heat-rejection window films",
      "Blocks up to 99% of harmful UV rays",
      "Reduces interior cabin temperature significantly",
      "Scratch-resistant hard-coat surface",
      "Available in multiple VLT% shades",
      "Professional installation with no bubbles or creases",
    ],
    duration: "2–3 hours",
    category: "Comfort",
  },
  {
    id: "full-matting",
    title: "Full Matting",
    tagline: "Custom floor mats for a clean, premium interior",
    description:
      "Protect your car's original carpet with precision-fitted floor mats that offer maximum coverage and easy maintenance. Available in 3D and 7D options for a perfect fit and luxury feel.",
    icon: "🧩",
    details: [
      "Custom-measured mats for exact vehicle fitment",
      "Choice of 3D, 5D, and 7D mat options",
      "Anti-slip base keeps mats securely in place",
      "Easy to remove and clean",
      "Available in black, beige, and dual-tone finishes",
      "Covers front, rear, and boot area",
    ],
    duration: "1–2 hours",
    category: "Interior",
  },
];

export const getServiceById = (id: string): Service | undefined =>
  SERVICES.find((s) => s.id === id);
