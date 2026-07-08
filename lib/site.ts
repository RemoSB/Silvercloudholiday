// Shared site-wide constants + settings shape.
// SETTINGS_DEFAULTS are the fallback values used when Sanity has no
// siteSettings doc (or Sanity isn't configured). getSettings() in
// sanity/queries.ts merges the CMS doc on top of these.
export const SITE_URL = "https://silvercloudsholiday.com";
export const COMPANY = "Silver Clouds Holiday";

export type SiteStat = { value: string; label: string };
export type SiteSocials = {
  instagram?: string;
  facebook?: string;
  youtube?: string;
};

export type IconItem = { icon: string; title: string };
export type UspItem = IconItem & { sub: string };
export type WhyItem = IconItem & { text: string };
export type AboutSection = {
  founderName: string;
  founderRole: string;
  yearsBadge: string;
  portrait?: string;
  quote: string;
  story: string;
  stats: SiteStat[];
};

export type SiteSettings = {
  phone: string; // display, e.g. "+91 98765 43210"
  phoneTel: string; // tel: value, e.g. "+919876543210"
  whatsappNumber: string; // digits only, e.g. "919876543210"
  email: string;
  address: string;
  heroHeading: string;
  heroSubheading: string;
  stats: SiteStat[];
  about: AboutSection;
  usps: UspItem[];
  whyItems: WhyItem[];
  socials: SiteSocials;
};

export const SETTINGS_DEFAULTS: SiteSettings = {
  phone: "+91 98765 43210",
  phoneTel: "+919876543210",
  whatsappNumber: "919876543210",
  email: "info@silvercloudsholiday.in",
  address: "Connaught Place, New Delhi",
  heroHeading: "Explore India with Premium Chauffeur Services",
  heroSubheading:
    "From the snow-peaks of Himachal to the beaches of Goa — travel in comfort, safety and style with our expert drivers and well-maintained fleet.",
  stats: [
    { value: "10K+", label: "Happy Travellers" },
    { value: "8", label: "States Covered" },
    { value: "5", label: "Vehicle Types" },
  ],
  about: {
    founderName: "Akshoy",
    founderRole: "Founder & CEO",
    yearsBadge: "15+",
    portrait: "/images/akshoy.webp",
    quote:
      "Every journey we plan, I plan it like it's for my own family — that's the Silver Clouds Holiday promise.",
    story:
      "What started as a single Innova Crysta and one chauffeur in 2018 has grown into a fleet of 50+ premium vehicles serving travellers across 8 Indian states. We're a family-run business that treats every customer like a guest in our home.",
    stats: [
      { value: "50+", label: "Vehicles" },
      { value: "10K+", label: "Trips Done" },
      { value: "4.9★", label: "Rating" },
    ],
  },
  usps: [
    { icon: "shield", title: "Verified Drivers", sub: "Background-checked & licensed" },
    { icon: "car", title: "Well-Maintained Fleet", sub: "Serviced before every trip" },
    { icon: "tag", title: "Transparent Pricing", sub: "No hidden charges, ever" },
    { icon: "headset", title: "24/7 Support", sub: "Always reachable on WhatsApp" },
  ],
  whyItems: [
    { icon: "award", title: "Professional Chauffeurs", text: "All drivers are police-verified, licensed for inter-state travel, and trained in customer service and mountain driving." },
    { icon: "map", title: "Custom Itineraries", text: "We build your trip around your schedule — not ours. Fixed departures or fully flexible; your call." },
    { icon: "wrench", title: "Pre-Trip Vehicle Check", text: "Every vehicle undergoes a full inspection before every journey — tyres, engine, AC, music system." },
    { icon: "card", title: "Pay Your Way", text: "UPI, bank transfer, or cash — we're flexible. Pay a small advance to confirm, rest at completion." },
  ],
  socials: {},
};

/* ---------------- Footer link columns (client-managed) ---------------- */
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };

export const FOOTER_DEFAULTS: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "Outstation Tours", href: "/services" },
      { label: "Airport Transfers", href: "/services" },
      { label: "Corporate Travel", href: "/services" },
      { label: "Group Tours", href: "/services" },
      { label: "Wedding Transport", href: "/services" },
    ],
  },
  {
    heading: "Destinations",
    links: [
      { label: "Himachal Pradesh", href: "/destinations/himachal-pradesh" },
      { label: "Kashmir", href: "/destinations/kashmir" },
      { label: "Uttarakhand", href: "/destinations/uttarakhand" },
      { label: "Rajasthan", href: "/destinations/rajasthan" },
      { label: "Kerala", href: "/destinations/kerala" },
      { label: "All Tour Packages", href: "/tours" },
    ],
  },
];

/* ---------------- Navigation (client-managed menus) ---------------- */
export type NavLink = { icon?: string; title: string; sub?: string; href: string };
export type NavGroup = { heading?: string; links: NavLink[] };
export type NavMenu = {
  label: string;
  href: string;
  mega?: boolean;
  groups?: NavGroup[];
  footerTitle?: string;
  footerSub?: string;
  footerHref?: string;
};

export const NAV_DEFAULTS: NavMenu[] = [
  {
    label: "Fleet",
    href: "/fleet",
    groups: [
      {
        links: [
          { icon: "car", title: "Toyota Innova Crysta", sub: "6–7 Seats · Premium SUV", href: "/fleet/toyota-innova-crysta" },
          { icon: "bus", title: "Force Tempo Traveller", sub: "12–17 Seats · Group Travel", href: "/fleet/force-tempo-traveller" },
          { icon: "car", title: "Maruti Swift Dzire", sub: "4 Seats · Budget Sedan", href: "/fleet/maruti-swift-dzire" },
          { icon: "car", title: "Honda Amaze", sub: "4 Seats · Highway Sedan", href: "/fleet/honda-amaze" },
          { icon: "car", title: "Maruti Ertiga", sub: "6–7 Seats · Family MUV", href: "/fleet/maruti-suzuki-ertiga" },
          { icon: "bus", title: "Buses & Coaches", sub: "20+ Seats · Custom Hire", href: "/fleet" },
        ],
      },
    ],
    footerTitle: "View Full Fleet",
    footerSub: "5 Vehicle Types",
    footerHref: "/fleet",
  },
  {
    label: "Destinations",
    href: "/destinations",
    mega: true,
    groups: [
      {
        heading: "Hill Stations & Pilgrimage",
        links: [
          { icon: "mountain", title: "Himachal Pradesh", sub: "Manali · Spiti · Dharamshala", href: "/destinations/himachal-pradesh" },
          { icon: "mountain", title: "Kashmir", sub: "Dal Lake · Gulmarg · Pahalgam", href: "/destinations/kashmir" },
          { icon: "mountain", title: "Uttarakhand", sub: "Rishikesh · Haridwar · Kedarnath", href: "/destinations/uttarakhand" },
          { icon: "mappin", title: "Rajasthan", sub: "Jaipur · Udaipur · Jodhpur", href: "/destinations/rajasthan" },
        ],
      },
      {
        heading: "Beaches, Heritage & City",
        links: [
          { icon: "mappin", title: "Kerala", sub: "Munnar · Alleppey · Wayanad", href: "/destinations/kerala" },
          { icon: "mappin", title: "Goa", sub: "North Goa · South Goa", href: "/destinations/goa" },
          { icon: "mappin", title: "Mumbai", sub: "City Tours · Airport Transfers", href: "/destinations/mumbai" },
          { icon: "mappin", title: "Gujarat", sub: "Rann of Kutch · Somnath · Dwarka", href: "/destinations/gujarat" },
        ],
      },
    ],
    footerTitle: "Explore All Destinations",
    footerSub: "8 States · 30+ Cities",
    footerHref: "/destinations",
  },
  {
    label: "Services",
    href: "/services",
    groups: [
      {
        links: [
          { icon: "road", title: "Outstation Tours", sub: "Multi-day journeys across India", href: "/services" },
          { icon: "nav", title: "Airport Transfers", sub: "On-time pickup & drop", href: "/services" },
          { icon: "briefcase", title: "Corporate Travel", sub: "Employee & executive transport", href: "/services" },
          { icon: "users", title: "Group Tours", sub: "Family & friends · 12+ pax", href: "/services" },
          { icon: "sparkle", title: "Wedding Transport", sub: "Decorated cars & fleets", href: "/services" },
        ],
      },
    ],
    footerTitle: "Get Custom Quote",
    footerSub: "Tailored to your trip",
    footerHref: "/contact",
  },
  { label: "Tours", href: "/tours" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Back-compat constants (default values). Prefer getSettings() in server code.
export const WHATSAPP_NUMBER = SETTINGS_DEFAULTS.whatsappNumber;
export const PHONE_TEL = SETTINGS_DEFAULTS.phoneTel;
export const PHONE_DISPLAY = SETTINGS_DEFAULTS.phone;
export const EMAIL = SETTINGS_DEFAULTS.email;

export const waLink = (message: string, number: string = WHATSAPP_NUMBER) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
