// Hardcoded content — mirrors the legacy site. In phase 5 these arrays are
// replaced by Sanity CMS fetches; components consume the same shapes.

export type FleetMeta = { icon: string; label: string };
export type FleetBadge = { icon: string; label: string; filled?: boolean };
export type Vehicle = {
  name: string;
  image: string;
  alt: string;
  badge?: FleetBadge;
  meta: FleetMeta[];
  tags: string[];
  price: string;
};

export const fleet: Vehicle[] = [
  {
    name: "Toyota Innova Crysta",
    image: "/images/Toyota Innova Crysta.webp",
    alt: "Toyota Innova Crysta",
    badge: { icon: "star", label: "Most Popular", filled: true },
    meta: [
      { icon: "users", label: "6–7 Seats" },
      { icon: "briefcase", label: "Spacious Boot" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Hill Trips", "Family Tours", "Outstation"],
    price: "₹14/km",
  },
  {
    name: "Force Tempo Traveller",
    image: "/images/Force Tempo Traveller1.webp",
    alt: "Force Tempo Traveller",
    badge: { icon: "users", label: "Group Travel" },
    meta: [
      { icon: "users", label: "12–17 Seats" },
      { icon: "music", label: "Music System" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Group Tours", "Pilgrimage", "Corporate"],
    price: "₹22/km",
  },
  {
    name: "Maruti Swift Dzire",
    image: "/images/Maruti Suzuki Swift Dzire.webp",
    alt: "Maruti Swift Dzire",
    badge: { icon: "tag", label: "Budget Pick" },
    meta: [
      { icon: "users", label: "4 Seats" },
      { icon: "fuel", label: "Fuel Efficient" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Airport Transfers", "City Rides", "Solo"],
    price: "₹10/km",
  },
  {
    name: "Honda Amaze",
    image: "/images/Honda Amaze.webp",
    alt: "Honda Amaze",
    meta: [
      { icon: "users", label: "4 Seats" },
      { icon: "road", label: "Highway Ready" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Outstation", "Business Travel"],
    price: "₹11/km",
  },
  {
    name: "Maruti Suzuki Ertiga",
    image: "/images/Maruti Suzuki Ertiga.webp",
    alt: "Maruti Suzuki Ertiga",
    meta: [
      { icon: "users", label: "6–7 Seats" },
      { icon: "mountain", label: "Hill Ready" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Family", "Hills", "Outstation"],
    price: "₹12/km",
  },
];

export type Destination = {
  name: string;
  image: string;
  sub: string;
  pill?: { label: string; star?: boolean };
  wide?: boolean;
};

export const destinations: Destination[] = [
  {
    name: "Kashmir",
    image: "/images/Kashmir.webp",
    sub: "Dal Lake · Gulmarg · Pahalgam",
    pill: { label: "Top Rated", star: true },
    wide: true,
  },
  {
    name: "Himachal Pradesh",
    image: "/images/Himachal.webp",
    sub: "Manali · Spiti · Dharamshala",
    pill: { label: "Trending" },
  },
  {
    name: "Uttarakhand",
    image: "/images/Uttarakhand.webp",
    sub: "Rishikesh · Haridwar · Kedarnath",
    pill: { label: "Pilgrimage" },
  },
  {
    name: "Rajasthan",
    image: "/images/Rajasthan.webp",
    sub: "Jaipur · Udaipur · Jodhpur",
    pill: { label: "Heritage" },
  },
  {
    name: "Kerala",
    image: "/images/Kerala.webp",
    sub: "Munnar · Alleppey · Wayanad",
    pill: { label: "Nature" },
  },
  {
    name: "Goa",
    image: "/images/Goa.webp",
    sub: "North Goa · South Goa",
    pill: { label: "Beaches" },
  },
  {
    name: "Mumbai",
    image: "/images/Mumbai.webp",
    sub: "City Tours · Airport Transfers",
  },
  {
    name: "Gujarat",
    image: "/images/Gujrat.webp",
    sub: "Rann of Kutch · Somnath · Dwarka",
  },
];

export type Package = {
  name: string;
  image: string;
  tag: string;
  route: string;
  feats: string[];
  price: string;
};

export const packages: Package[] = [
  { name: "Manali", image: "/images/pkg-manali.webp", tag: "Hill Station", route: "Solang · Rohtang · Old Manali", feats: ["Himalayan views", "Adventure", "Customizable"], price: "₹7,200" },
  { name: "Goa", image: "/images/pkg-goa.webp", tag: "Beaches", route: "North & South Goa", feats: ["Beaches", "Nightlife", "Water sports"], price: "₹7,200" },
  { name: "Kerala", image: "/images/pkg-kerala.webp", tag: "Backwaters", route: "Backwaters · Hill stations · Beaches", feats: ["Houseboat", "Munnar", "Ayurveda"], price: "₹14,400" },
  { name: "Darjeeling", image: "/images/pkg-darjeeling.webp", tag: "Hills", route: "Tiger Hill · Tea Gardens", feats: ["Toy train", "Kanchenjunga", "Tea estates"], price: "₹8,100" },
  { name: "Ladakh", image: "/images/pkg-ladakh.webp", tag: "Adventure", route: "Leh · Pangong · Nubra", feats: ["Monasteries", "High passes", "Landscapes"], price: "₹22,500" },
  { name: "Himachal Pradesh", image: "/images/pkg-himachal.webp", tag: "Hill Station", route: "Shimla · Manali · Dharamshala", feats: ["Snow peaks", "Pine forests", "Rivers"], price: "₹10,800" },
  { name: "Munnar", image: "/images/pkg-munnar.webp", tag: "Nature", route: "Tea Country · Eravikulam", feats: ["Tea plantations", "Misty hills", "Wildlife"], price: "₹6,300" },
  { name: "Uttarakhand", image: "/images/pkg-uttarakhand.webp", tag: "Mountains", route: "Nainital · Rishikesh · Mussoorie", feats: ["Lakes", "Pilgrimage", "Forests"], price: "₹9,000" },
  { name: "Jaipur", image: "/images/pkg-jaipur.webp", tag: "Heritage", route: "Amber Fort · Hawa Mahal · City Palace", feats: ["Pink City", "Forts", "Bazaars"], price: "₹7,200" },
  { name: "Ooty", image: "/images/pkg-ooty.webp", tag: "Hills", route: "Nilgiris · Botanical Gardens", feats: ["Tea gardens", "Toy train", "Lakes"], price: "₹6,300" },
  { name: "Kedarnath", image: "/images/pkg-kedarnath.webp", tag: "Pilgrimage", route: "Kedarnath Dham · Himalaya", feats: ["Char Dham", "Guided yatra", "Stay incl."], price: "₹13,500" },
  { name: "Udaipur", image: "/images/pkg-udaipur.webp", tag: "Heritage", route: "City of Lakes · Palaces", feats: ["Lake Pichola", "City Palace", "Boat ride"], price: "₹7,200" },
  { name: "Coorg", image: "/images/pkg-coorg.webp", tag: "Nature", route: "Coffee Hills · Abbey Falls", feats: ["Scotland of India", "Coffee estates", "Waterfalls"], price: "₹6,300" },
  { name: "Mysore", image: "/images/pkg-mysore.webp", tag: "Heritage", route: "Mysore Palace · Chamundi Hill", feats: ["Royal palace", "Heritage", "Gardens"], price: "₹5,400" },
  { name: "Lakshadweep", image: "/images/pkg-lakshadweep.webp", tag: "Islands", route: "Coral Islands · Lagoons", feats: ["Island hopping", "Snorkelling", "Beaches"], price: "₹22,500" },
];

export type Testimonial = {
  rating: number;
  text: string;
  name: string;
  avatar: string;
  trip: string;
};

export const testimonials: Testimonial[] = [
  {
    rating: 5,
    text:
      "Took the Innova Crysta for a Manali trip with family. Driver Ravi ji was excellent — punctual, knew every mountain road, and kept the kids entertained. Will book again!",
    name: "Anita Sharma",
    avatar: "A",
    trip: "Himachal Trip · March 2026",
  },
  {
    rating: 5,
    text:
      "Booked a Tempo Traveller for our office retreat to Rishikesh. Everything was spotless, pricing was exactly as quoted, and the driver was super friendly. 10/10.",
    name: "Rohit Mehta",
    avatar: "R",
    trip: "Corporate Trip · February 2026",
  },
  {
    rating: 4,
    text:
      "Great service for our Rajasthan circuit — Jaipur, Jodhpur, Udaipur in 7 days. The car was comfortable and the route planning was excellent. Highly recommended!",
    name: "Priya Nair",
    avatar: "P",
    trip: "Rajasthan Tour · January 2026",
  },
];

export const uspItems: { icon: string; title: string; sub: string }[] = [
  { icon: "shield", title: "Verified Drivers", sub: "Background-checked & licensed" },
  { icon: "car", title: "Well-Maintained Fleet", sub: "Serviced before every trip" },
  { icon: "tag", title: "Transparent Pricing", sub: "No hidden charges, ever" },
  { icon: "headset", title: "24/7 Support", sub: "Always reachable on WhatsApp" },
];

export type Service = { icon: string; title: string; description: string };

export const services: Service[] = [
  { icon: "road", title: "Outstation Tours", description: "Multi-day journeys across India with experienced hill and highway chauffeurs. Fixed or flexible itineraries, tolls and parking handled." },
  { icon: "nav", title: "Airport Transfers", description: "On-time pickup and drop for every major Indian airport. Flight tracking, meet-and-greet, and clean, sanitised vehicles." },
  { icon: "briefcase", title: "Corporate Travel", description: "Employee and executive transport with GST invoicing, dedicated account managers, and monthly billing for businesses." },
  { icon: "users", title: "Group Tours", description: "Tempo Travellers and buses for families, friends and pilgrimage groups of 12+ — comfortable, spacious and music-ready." },
  { icon: "sparkle", title: "Wedding Transport", description: "Decorated cars and coordinated fleets for baraats, guest movement and the couple's send-off. Punctual and elegant." },
  { icon: "plane", title: "Custom Packages", description: "Tailor-made holidays combining vehicle, hotels and sightseeing — planned end-to-end around your dates and budget." },
];

export const whyItems: { icon: string; title: string; text: string }[] = [
  { icon: "award", title: "Professional Chauffeurs", text: "All drivers are police-verified, licensed for inter-state travel, and trained in customer service and mountain driving." },
  { icon: "map", title: "Custom Itineraries", text: "We build your trip around your schedule — not ours. Fixed departures or fully flexible; your call." },
  { icon: "wrench", title: "Pre-Trip Vehicle Check", text: "Every vehicle undergoes a full inspection before every journey — tyres, engine, AC, music system." },
  { icon: "card", title: "Pay Your Way", text: "UPI, bank transfer, or cash — we're flexible. Pay a small advance to confirm, rest at completion." },
];
