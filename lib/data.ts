// Hardcoded content — mirrors the legacy site and powers detail pages.
// sanity/queries.ts fetches from the CMS and falls back to these arrays when
// Sanity is unconfigured or empty. Components consume the same shapes.

export type FAQ = { q: string; a: string };
export type Fact = { label: string; value: string };
export type Attraction = { name: string; blurb: string };
export type ItineraryDay = { day: number; title: string; detail: string };

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ------------------------------------------------------------------ */
/* Fleet                                                               */
/* ------------------------------------------------------------------ */

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
  // Detail-page fields (optional so card-only CMS queries still type-check).
  slug?: string;
  category?: "sedan" | "suv" | "tempo" | "bus";
  overview?: string;
  specs?: Fact[];
  idealFor?: string[];
  gallery?: string[];
  pricing?: Fact[];
  faqs?: FAQ[];
};

export const fleet: Vehicle[] = [
  {
    name: "Toyota Innova Crysta",
    slug: "toyota-innova-crysta",
    image: "/images/Toyota Innova Crysta.webp",
    alt: "Toyota Innova Crysta",
    category: "suv",
    badge: { icon: "star", label: "Most Popular", filled: true },
    meta: [
      { icon: "users", label: "6–7 Seats" },
      { icon: "briefcase", label: "Spacious Boot" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Hill Trips", "Family Tours", "Outstation"],
    price: "₹14/km",
    overview:
      "The Innova Crysta is the workhorse of premium Indian road travel — and our most-booked vehicle for a reason. Its high ground clearance and torquey diesel engine eat up hill climbs to Manali, Gulmarg and Kedarnath without a shudder, while captain seats and generous legroom keep families and small groups fresh across 10-hour driving days. If comfort, safety and reliability top your list, start here.",
    specs: [
      { label: "Seating", value: "6–7 passengers" },
      { label: "Luggage", value: "4–5 large bags" },
      { label: "Air Conditioning", value: "Dual-zone climate" },
      { label: "Transmission", value: "Manual / Automatic" },
      { label: "Best for terrain", value: "Hills, highways, city" },
    ],
    idealFor: [
      "Families of 4–6 with luggage",
      "Multi-day hill and outstation tours",
      "Airport transfers with comfort",
      "Senior citizens and pilgrimage trips",
    ],
    gallery: ["/images/Toyota Innova Crysta.webp"],
    pricing: [
      { label: "Per km (outstation)", value: "₹14/km" },
      { label: "Minimum billing", value: "250 km/day" },
      { label: "Driver allowance", value: "₹400/night" },
      { label: "Hill charges", value: "As applicable, quoted upfront" },
    ],
    faqs: [
      { q: "How many people can travel comfortably in an Innova Crysta?", a: "Comfortably 6 adults with luggage, or 7 for shorter city and airport runs. For hill trips with heavy bags we recommend keeping it to 6." },
      { q: "Is the Innova Crysta good for mountain roads?", a: "Yes — it's our top pick for Himachal, Kashmir, Uttarakhand and Ladakh. High clearance and a strong diesel engine make steep, winding roads safe and smooth." },
      { q: "Are tolls, parking and driver stay included?", a: "Toll, parking, state permits and driver night allowance are billed as per actuals and shown transparently in your quote — no hidden charges." },
    ],
  },
  {
    name: "Force Tempo Traveller",
    slug: "force-tempo-traveller",
    image: "/images/Force Tempo Traveller1.webp",
    alt: "Force Tempo Traveller",
    category: "tempo",
    badge: { icon: "users", label: "Group Travel" },
    meta: [
      { icon: "users", label: "12–17 Seats" },
      { icon: "music", label: "Music System" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Group Tours", "Pilgrimage", "Corporate"],
    price: "₹22/km",
    overview:
      "When the whole family, friend circle or office team is travelling together, the Tempo Traveller keeps everyone in one vehicle — and one mood. Push-back seats, a music system and plenty of luggage space make it the default choice for pilgrimage yatras, group holidays and corporate offsites. Available in 12, 15 and 17-seat layouts with an experienced group-travel chauffeur.",
    specs: [
      { label: "Seating", value: "12 / 15 / 17 passengers" },
      { label: "Luggage", value: "Rear boot + overhead" },
      { label: "Air Conditioning", value: "Roof-mounted AC" },
      { label: "Seating type", value: "Push-back / recliner" },
      { label: "Best for terrain", value: "Highways, hills, pilgrimage" },
    ],
    idealFor: [
      "Groups of 10–17 travelling together",
      "Pilgrimage yatras (Chardham, Vaishno Devi)",
      "Corporate offsites and team outings",
      "Large family holidays",
    ],
    gallery: [
      "/images/Force Tempo Traveller1.webp",
      "/images/Force Tempo Traveller2.webp",
      "/images/Force Tempo Traveller3.webp",
    ],
    pricing: [
      { label: "Per km (outstation)", value: "₹22/km" },
      { label: "Minimum billing", value: "250 km/day" },
      { label: "Driver allowance", value: "₹500/night" },
      { label: "Seater options", value: "12 / 15 / 17 — quoted to fit" },
    ],
    faqs: [
      { q: "Which seat layout should we choose?", a: "For 10–12 travellers the 12-seater keeps things roomy with luggage. For 13–17 we recommend the 17-seater. Tell us your group size and we'll suggest the right fit." },
      { q: "Can the Tempo Traveller handle hill routes?", a: "Yes. Our Tempo Travellers regularly run Manali, Mussoorie, Chardham and Kashmir routes with drivers trained for mountain driving." },
      { q: "Is there a music system and charging?", a: "Yes — roof AC, a music system and charging points come standard so long-haul group journeys stay comfortable." },
    ],
  },
  {
    name: "Maruti Swift Dzire",
    slug: "maruti-swift-dzire",
    image: "/images/Maruti Suzuki Swift Dzire.webp",
    alt: "Maruti Swift Dzire",
    category: "sedan",
    badge: { icon: "tag", label: "Budget Pick" },
    meta: [
      { icon: "users", label: "4 Seats" },
      { icon: "fuel", label: "Fuel Efficient" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Airport Transfers", "City Rides", "Solo"],
    price: "₹10/km",
    overview:
      "Light on the wallet, easy on every road — the Swift Dzire is our value champion for airport transfers, city sightseeing and couple getaways. It's nimble in traffic, frugal on fuel and comfortable for four, making it the smart pick when you want a clean, air-conditioned sedan without paying SUV rates.",
    specs: [
      { label: "Seating", value: "4 passengers" },
      { label: "Luggage", value: "2 medium bags" },
      { label: "Air Conditioning", value: "Standard AC" },
      { label: "Fuel", value: "Petrol / CNG — very economical" },
      { label: "Best for terrain", value: "City, airport, plains" },
    ],
    idealFor: [
      "Couples and solo travellers",
      "Airport pickups and drops",
      "City tours and day trips",
      "Budget-conscious outstation runs",
    ],
    gallery: ["/images/Maruti Suzuki Swift Dzire.webp"],
    pricing: [
      { label: "Per km (outstation)", value: "₹10/km" },
      { label: "Minimum billing", value: "250 km/day" },
      { label: "Driver allowance", value: "₹300/night" },
      { label: "Airport transfer", value: "Fixed fare, quoted upfront" },
    ],
    faqs: [
      { q: "Is the Dzire good for a long outstation trip?", a: "For 2–3 people on plains and highway routes, yes — it's comfortable and very economical. For hills or 4 passengers with luggage we'd suggest the Ertiga or Innova." },
      { q: "How much luggage fits?", a: "Two medium suitcases plus cabin bags fit comfortably. For more, consider the Ertiga." },
      { q: "Is it available on fixed airport fares?", a: "Yes — we offer fixed, all-inclusive airport transfer fares so you know the price before you book." },
    ],
  },
  {
    name: "Honda Amaze",
    slug: "honda-amaze",
    image: "/images/Honda Amaze.webp",
    alt: "Honda Amaze",
    category: "sedan",
    meta: [
      { icon: "users", label: "4 Seats" },
      { icon: "road", label: "Highway Ready" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Outstation", "Business Travel"],
    price: "₹11/km",
    overview:
      "The Honda Amaze is our quietly refined sedan — a notch above the Dzire in ride comfort and cabin polish, and a favourite for business travel and executive airport transfers. Smooth on the highway and understated in the city, it's the right call when you want a professional, comfortable ride for up to four.",
    specs: [
      { label: "Seating", value: "4 passengers" },
      { label: "Luggage", value: "2–3 medium bags" },
      { label: "Air Conditioning", value: "Climate control" },
      { label: "Ride", value: "Refined, quiet cabin" },
      { label: "Best for terrain", value: "Highways, city, plains" },
    ],
    idealFor: [
      "Executive and business travel",
      "Airport transfers with a premium feel",
      "Couples and small families",
      "Highway outstation trips",
    ],
    gallery: ["/images/Honda Amaze.webp"],
    pricing: [
      { label: "Per km (outstation)", value: "₹11/km" },
      { label: "Minimum billing", value: "250 km/day" },
      { label: "Driver allowance", value: "₹300/night" },
      { label: "Corporate billing", value: "GST invoice available" },
    ],
    faqs: [
      { q: "How is the Amaze different from the Dzire?", a: "Both seat four, but the Amaze offers a slightly quieter, more refined cabin — a popular upgrade for business travel and executive transfers." },
      { q: "Do you provide GST invoices for corporate travel?", a: "Yes. The Amaze is a common corporate pick; we provide GST invoicing and can set up monthly billing for businesses." },
      { q: "Is a child seat available?", a: "We can arrange a child seat on request — mention it at the time of booking." },
    ],
  },
  {
    name: "Maruti Suzuki Ertiga",
    slug: "maruti-suzuki-ertiga",
    image: "/images/Maruti Suzuki Ertiga.webp",
    alt: "Maruti Suzuki Ertiga",
    category: "suv",
    meta: [
      { icon: "users", label: "6–7 Seats" },
      { icon: "mountain", label: "Hill Ready" },
      { icon: "snow", label: "AC" },
    ],
    tags: ["Family", "Hills", "Outstation"],
    price: "₹12/km",
    overview:
      "The Ertiga hits the sweet spot between space and economy — a 7-seat MUV that carries a small family and their bags without the running cost of a full SUV. It's comfortable on hill roads, easy to board for seniors and kids, and a smart value pick for family holidays and group day trips.",
    specs: [
      { label: "Seating", value: "6–7 passengers" },
      { label: "Luggage", value: "3 medium bags (with 7 seats)" },
      { label: "Air Conditioning", value: "Rear AC vents" },
      { label: "Fuel", value: "Petrol / CNG — economical MUV" },
      { label: "Best for terrain", value: "Hills, highways, city" },
    ],
    idealFor: [
      "Families of 5–7",
      "Value-focused hill and outstation trips",
      "Group day tours and sightseeing",
      "Senior-friendly, easy-boarding travel",
    ],
    gallery: ["/images/Maruti Suzuki Ertiga.webp"],
    pricing: [
      { label: "Per km (outstation)", value: "₹12/km" },
      { label: "Minimum billing", value: "250 km/day" },
      { label: "Driver allowance", value: "₹350/night" },
      { label: "Hill charges", value: "As applicable, quoted upfront" },
    ],
    faqs: [
      { q: "Is the Ertiga a good middle ground between a sedan and an Innova?", a: "Exactly that. It seats up to 7, handles hills well and costs less to run than an Innova — ideal for families who want space on a sensible budget." },
      { q: "Can 7 people travel with luggage?", a: "Seven passengers fit, but luggage space is limited with all seats up. For 7 with full luggage we suggest the Innova Crysta or a Tempo Traveller." },
      { q: "Is it suitable for hill stations?", a: "Yes — the Ertiga handles Shimla, Nainital, Mussoorie and similar routes comfortably." },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Destinations                                                        */
/* ------------------------------------------------------------------ */

export type Destination = {
  name: string;
  image: string;
  sub: string;
  pill?: { label: string; star?: boolean };
  wide?: boolean;
  // Detail-page fields (optional so card-only CMS queries still type-check).
  slug?: string;
  region?: string;
  tagline?: string;
  overview?: string[];
  bestTime?: string;
  idealDuration?: string;
  whyVisit?: string[];
  attractions?: Attraction[];
  fastFacts?: Fact[];
  gallery?: string[];
  faqs?: FAQ[];
  tourSlugs?: string[];
  vehicleSlugs?: string[];
  seoDesc?: string;
};

export const destinations: Destination[] = [
  {
    name: "Kashmir",
    slug: "kashmir",
    image: "/images/Kashmir.webp",
    sub: "Dal Lake · Gulmarg · Pahalgam",
    pill: { label: "Top Rated", star: true },
    wide: true,
    region: "North India",
    tagline: "Paradise on earth — shikaras, snow and saffron meadows",
    overview: [
      "There's a reason the Mughals called Kashmir 'paradise on earth'. A Kashmir tour by road wraps you in still lakes dotted with shikaras, deodar-lined valleys, gondola rides above the snowline at Gulmarg, and pine-scented meadows at Pahalgam that feel lifted from a painting.",
      "We handle the driving so you can simply look out of the window. Our Kashmir-trained chauffeurs know the Srinagar–Gulmarg–Pahalgam–Sonamarg circuit intimately — the best photo stops, the safest snow-route timings, and the warmest kahwa on the way.",
    ],
    bestTime: "March–October (tulips in April; snow Dec–Feb)",
    idealDuration: "5–7 days",
    whyVisit: [
      "Stay overnight on a Dal Lake houseboat",
      "Gondola ride to Apharwat Peak in Gulmarg",
      "Meadows and pony rides at Pahalgam & Betaab Valley",
      "Saffron fields, Mughal gardens and warm Kashmiri hospitality",
      "Snow at Sonamarg even in early summer",
    ],
    attractions: [
      { name: "Dal Lake & Shikara Ride", blurb: "Glide past floating gardens and houseboats at sunrise — the quintessential Kashmir experience." },
      { name: "Gulmarg Gondola", blurb: "One of the world's highest cable cars, climbing to Apharwat Peak for snow and Himalayan views." },
      { name: "Pahalgam & Betaab Valley", blurb: "Pine meadows along the Lidder river — trekking, pony rides and river picnics." },
      { name: "Sonamarg", blurb: "The 'meadow of gold', gateway to Thajiwas Glacier and stunning alpine drives." },
      { name: "Mughal Gardens", blurb: "Nishat, Shalimar and Chashme Shahi — terraced Mughal gardens above Dal Lake." },
      { name: "Doodhpathri", blurb: "A quieter, greener meadow escape away from the crowds, ideal for a relaxed day." },
    ],
    fastFacts: [
      { label: "Best season", value: "March–October" },
      { label: "Nearest airport", value: "Srinagar (SXR)" },
      { label: "Ideal trip length", value: "5–7 days" },
      { label: "Languages", value: "Kashmiri, Urdu, Hindi" },
      { label: "Recommended vehicle", value: "Innova Crysta / Tempo Traveller" },
    ],
    gallery: ["/images/Kashmir.webp"],
    faqs: [
      { q: "Is Kashmir safe for tourists and families?", a: "Yes. The tourist circuit — Srinagar, Gulmarg, Pahalgam, Sonamarg — is well travelled and popular with families. Our local chauffeurs stay updated on road conditions and plan the day accordingly." },
      { q: "When can I see snow in Kashmir?", a: "For heavy snow, visit December–February. Gulmarg and Sonamarg often hold snow into March–April, and you can reach year-round snow points by gondola." },
      { q: "How many days do I need for Kashmir?", a: "5–7 days is ideal to cover Srinagar, Gulmarg, Pahalgam and Sonamarg without rushing. A 4-day weekend covers Srinagar plus one or two day trips." },
      { q: "Which vehicle is best for Kashmir?", a: "The Innova Crysta for families, or a Tempo Traveller for groups. Both handle the valley roads and snow-route timings comfortably with our trained drivers." },
    ],
    tourSlugs: ["kashmir-valley-escape", "srinagar-gulmarg-weekend"],
    vehicleSlugs: ["toyota-innova-crysta", "force-tempo-traveller"],
    seoDesc:
      "Kashmir tour packages by road with chauffeur-driven cars. Dal Lake, Gulmarg gondola, Pahalgam & Sonamarg. Transparent pricing, verified drivers, 24/7 support.",
  },
  {
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    image: "/images/Himachal.webp",
    sub: "Manali · Spiti · Dharamshala",
    pill: { label: "Trending" },
    region: "North India",
    tagline: "Snow peaks, pine forests and river valleys",
    overview: [
      "Himachal is India's mountain playground — apple orchards and colonial charm in Shimla, adventure and snow in Manali, monasteries and moonscapes in Spiti, and the Dalai Lama's serene home at Dharamshala. It's the classic hill-station escape, and it's brilliant by road.",
      "Our chauffeurs are Himachal specialists who know when Rohtang and the high passes open, where the roads narrow, and how to time your drive so you arrive relaxed — not rattled. Whether it's a family holiday or a snow-chasing adventure, we build the pace around you.",
    ],
    bestTime: "March–June & October–February (snow Dec–Feb)",
    idealDuration: "5–7 days",
    whyVisit: [
      "Snow and adventure sports at Solang & Rohtang",
      "Colonial Shimla and the Kalka toy train",
      "Buddhist Dharamshala & McLeodganj",
      "Dramatic high-altitude Spiti Valley circuit",
      "Riverside cafés and pine-forest walks",
    ],
    attractions: [
      { name: "Solang Valley", blurb: "Paragliding, zorbing and winter snow just above Manali — the adventure hub of Himachal." },
      { name: "Rohtang Pass", blurb: "A high mountain pass (seasonal) with snow year-round and jaw-dropping Himalayan panoramas." },
      { name: "Old Manali & Mall Road", blurb: "Riverside cafés, artisan shops and the buzzing heart of Manali." },
      { name: "Shimla & Kufri", blurb: "The 'Queen of Hill Stations' — Ridge, Mall Road and the UNESCO toy train." },
      { name: "McLeodganj & Dharamshala", blurb: "Tibetan monasteries, prayer flags and the peaceful home of the Dalai Lama." },
      { name: "Spiti Valley", blurb: "Stark high-altitude desert, ancient monasteries and some of India's most surreal landscapes." },
    ],
    fastFacts: [
      { label: "Best season", value: "March–June, Oct–Feb" },
      { label: "Nearest airports", value: "Bhuntar (Kullu), Chandigarh" },
      { label: "Ideal trip length", value: "5–7 days" },
      { label: "Languages", value: "Hindi, Pahari" },
      { label: "Recommended vehicle", value: "Innova Crysta / Ertiga" },
    ],
    gallery: ["/images/Himachal.webp", "/images/pkg-himachal.webp", "/images/pkg-manali.webp"],
    faqs: [
      { q: "When does it snow in Manali?", a: "Snowfall is common from late December to February. For guaranteed snow you can drive up to Solang or Rohtang (when open), which hold snow well into spring." },
      { q: "Is Rohtang Pass always open?", a: "No — Rohtang is seasonal and requires a permit, which we arrange. When it's closed, Solang and Atal Tunnel to Sissu make excellent snow alternatives." },
      { q: "How many days for a Himachal trip?", a: "5–7 days covers Shimla and Manali comfortably. Add 2–3 days for Dharamshala, or plan 7+ days for the Spiti circuit." },
      { q: "Do I need a special vehicle for the hills?", a: "We use hill-ready vehicles with experienced mountain drivers. The Innova Crysta is our top pick; the Ertiga is a great-value alternative for smaller families." },
    ],
    tourSlugs: ["shimla-manali-classic", "manali-adventure", "spiti-valley-circuit"],
    vehicleSlugs: ["toyota-innova-crysta", "maruti-suzuki-ertiga", "force-tempo-traveller"],
    seoDesc:
      "Himachal Pradesh tour packages by road — Shimla, Manali, Dharamshala & Spiti. Chauffeur-driven hill-ready cars, transparent pricing and 24/7 support.",
  },
  {
    name: "Uttarakhand",
    slug: "uttarakhand",
    image: "/images/Uttarakhand.webp",
    sub: "Rishikesh · Haridwar · Kedarnath",
    pill: { label: "Pilgrimage" },
    region: "North India",
    tagline: "Devbhoomi — the land of the gods, lakes and Himalaya",
    overview: [
      "Uttarakhand is two holidays in one: the spiritual heart of India at Haridwar, Rishikesh and the Chardham, and the lake-and-mountain charm of Nainital, Mussoorie and the Kumaon hills. From Ganga aartis to Himalayan sunrises, it moves at exactly the pace you want.",
      "Our drivers run these routes constantly — the Char Dham circuit, the Nainital lakes, the Rishikesh riverside — and they know the early-start timings that beat the crowds to the temples and the viewpoints.",
    ],
    bestTime: "March–June & Sept–Nov (Chardham: May–Oct)",
    idealDuration: "4–10 days",
    whyVisit: [
      "Ganga aarti at Har Ki Pauri, Haridwar",
      "Yoga, rafting and riverside cafés in Rishikesh",
      "Boating on Naini Lake and Kumaon hill views",
      "The revered Char Dham pilgrimage by road",
      "Colonial Mussoorie, 'Queen of the Hills'",
    ],
    attractions: [
      { name: "Rishikesh", blurb: "Yoga capital of the world — Laxman Jhula, the evening Ganga aarti and white-water rafting." },
      { name: "Haridwar", blurb: "One of Hinduism's holiest cities; the Har Ki Pauri aarti is unforgettable." },
      { name: "Nainital", blurb: "A charming lake town ringed by hills — boating, the Mall Road and Snow View Point." },
      { name: "Mussoorie", blurb: "Colonial-era hill station with Camel's Back Road, Kempty Falls and valley views." },
      { name: "Kedarnath & Badrinath", blurb: "Two of the four Char Dham shrines, set dramatically in the high Himalaya." },
      { name: "Auli", blurb: "India's premier ski slope with sweeping Nanda Devi views and a scenic ropeway." },
    ],
    fastFacts: [
      { label: "Best season", value: "March–June, Sept–Nov" },
      { label: "Nearest airport", value: "Dehradun (DED)" },
      { label: "Ideal trip length", value: "4–10 days" },
      { label: "Languages", value: "Hindi, Garhwali, Kumaoni" },
      { label: "Recommended vehicle", value: "Innova Crysta / Tempo Traveller" },
    ],
    gallery: ["/images/Uttarakhand.webp", "/images/pkg-uttarakhand.webp", "/images/pkg-kedarnath.webp"],
    faqs: [
      { q: "When is the Char Dham Yatra open?", a: "The Char Dham shrines open around late April/May and close by October/November with the first heavy snow. We plan yatra trips within this window and arrange permits and stays." },
      { q: "Is the Char Dham trip physically demanding?", a: "Kedarnath involves a trek (or pony/palki/helicopter); the others are largely accessible by road. We tailor the pace and options to suit seniors and families." },
      { q: "Can I combine a spiritual and a hill-station trip?", a: "Absolutely — a popular route pairs Haridwar–Rishikesh with Nainital or Mussoorie for a mix of pilgrimage and relaxation." },
      { q: "How many days do I need?", a: "Rishikesh–Haridwar in 3–4 days; Nainital–Mussoorie in 5–6; the full Char Dham yatra typically runs 10–11 days by road." },
    ],
    tourSlugs: ["nainital-mussoorie-getaway", "chardham-yatra-by-road", "rishikesh-haridwar-spiritual"],
    vehicleSlugs: ["toyota-innova-crysta", "force-tempo-traveller", "maruti-suzuki-ertiga"],
    seoDesc:
      "Uttarakhand tour & Char Dham yatra packages by road. Rishikesh, Haridwar, Nainital, Mussoorie & Kedarnath. Chauffeur-driven cars, transparent pricing, 24/7 support.",
  },
  {
    name: "Rajasthan",
    slug: "rajasthan",
    image: "/images/Rajasthan.webp",
    sub: "Jaipur · Udaipur · Jodhpur",
    pill: { label: "Heritage" },
    region: "North India",
    tagline: "Forts, palaces and desert colour — royal India by road",
    overview: [
      "Rajasthan is India at its most cinematic: honey-gold forts, mirror-worked palaces, blue and pink cities, camel-dotted dunes and bazaars bursting with colour. A road trip through the land of kings is the best way to feel its scale — from Jaipur's Amber Fort to Udaipur's lakes to the sands of Jaisalmer.",
      "Our chauffeurs know the royal circuit end to end — the heritage-hotel entrances, the golden-hour fort viewpoints, and the artisan workshops worth the stop. You get the freedom of your own vehicle with a driver who doubles as a local guide.",
    ],
    bestTime: "October–March (pleasant, festival season)",
    idealDuration: "5–8 days",
    whyVisit: [
      "Amber Fort and the Pink City of Jaipur",
      "Lake Pichola and the palaces of Udaipur",
      "The blue city and mighty Mehrangarh, Jodhpur",
      "Golden Jaisalmer and a Thar Desert camel safari",
      "Colourful bazaars, handicrafts and Rajasthani cuisine",
    ],
    attractions: [
      { name: "Amber Fort, Jaipur", blurb: "A hilltop fort-palace of ramparts and mirrored halls above Maota Lake." },
      { name: "City Palace & Lake Pichola, Udaipur", blurb: "The romantic 'City of Lakes' — palace complexes and sunset boat rides." },
      { name: "Mehrangarh Fort, Jodhpur", blurb: "One of India's grandest forts, towering over the indigo blue city." },
      { name: "Jaisalmer & Sam Dunes", blurb: "A golden sandstone city and Thar Desert camel safaris under starry skies." },
      { name: "Hawa Mahal & City Palace, Jaipur", blurb: "The iconic 'Palace of Winds' and Jaipur's royal heart amid buzzing bazaars." },
      { name: "Pushkar", blurb: "A sacred lake town famous for its temple, ghats and legendary camel fair." },
    ],
    fastFacts: [
      { label: "Best season", value: "October–March" },
      { label: "Nearest airports", value: "Jaipur, Udaipur, Jodhpur" },
      { label: "Ideal trip length", value: "5–8 days" },
      { label: "Languages", value: "Hindi, Rajasthani, Marwari" },
      { label: "Recommended vehicle", value: "Innova Crysta / Dzire" },
    ],
    gallery: ["/images/Rajasthan.webp", "/images/pkg-jaipur.webp", "/images/pkg-udaipur.webp"],
    faqs: [
      { q: "What is the best time to visit Rajasthan?", a: "October to March, when the desert climate is pleasant and the festival calendar (Pushkar Fair, Diwali) is in full swing. Summers are very hot." },
      { q: "How many days for the Golden Triangle?", a: "Delhi–Agra–Jaipur is a comfortable 5–6 day trip. Extend to 7–8 days to add Udaipur or Jodhpur for a fuller Rajasthan experience." },
      { q: "Can you arrange a desert camel safari and stay?", a: "Yes — we arrange Sam Dunes camel safaris and desert-camp stays near Jaisalmer as part of your itinerary." },
      { q: "Is it comfortable to travel Rajasthan by car?", a: "Very — roads between the major cities are good. We recommend the Innova Crysta for comfort, or a Dzire for couples on a budget." },
    ],
    tourSlugs: ["golden-triangle", "royal-rajasthan", "udaipur-lake-city"],
    vehicleSlugs: ["toyota-innova-crysta", "maruti-swift-dzire", "force-tempo-traveller"],
    seoDesc:
      "Rajasthan tour packages by road — Golden Triangle, Jaipur, Udaipur, Jodhpur & Jaisalmer. Chauffeur-driven cars, transparent pricing and 24/7 support.",
  },
  {
    name: "Kerala",
    slug: "kerala",
    image: "/images/Kerala.webp",
    sub: "Munnar · Alleppey · Wayanad",
    pill: { label: "Nature" },
    region: "South India",
    tagline: "God's own country — backwaters, tea hills and beaches",
    overview: [
      "Kerala unfolds slowly and beautifully: emerald tea terraces in Munnar, a houseboat drifting through Alleppey's palm-fringed backwaters, spice plantations in Thekkady, and the calm of Ayurvedic retreats. It's the antidote to a rushed holiday.",
      "Our South-India chauffeurs know the ghat roads to Munnar, the best houseboat jetties in Alleppey, and the quiet beaches worth the detour — so your only job is to slow down and soak it in.",
    ],
    bestTime: "September–March (cool & dry; monsoon lush Jun–Aug)",
    idealDuration: "5–7 days",
    whyVisit: [
      "Overnight houseboat on the Alleppey backwaters",
      "Tea gardens and misty hills of Munnar",
      "Spice plantations and wildlife at Thekkady",
      "Ayurvedic spa and wellness retreats",
      "Palm-lined beaches at Kovalam and Varkala",
    ],
    attractions: [
      { name: "Alleppey Backwaters", blurb: "A private houseboat cruise through palm-lined canals, paddy fields and village life." },
      { name: "Munnar", blurb: "Rolling tea plantations, misty viewpoints and the Eravikulam National Park." },
      { name: "Thekkady (Periyar)", blurb: "Spice gardens and a wildlife reserve with boat safaris on Periyar Lake." },
      { name: "Kovalam & Varkala", blurb: "Kerala's signature beaches — lighthouse coves and dramatic cliff-top sunsets." },
      { name: "Fort Kochi", blurb: "Chinese fishing nets, colonial streets and a lively arts and café scene." },
      { name: "Wayanad", blurb: "Green highlands of waterfalls, caves and plantations, off the busier trail." },
    ],
    fastFacts: [
      { label: "Best season", value: "September–March" },
      { label: "Nearest airports", value: "Kochi, Trivandrum, Calicut" },
      { label: "Ideal trip length", value: "5–7 days" },
      { label: "Languages", value: "Malayalam, English, Hindi" },
      { label: "Recommended vehicle", value: "Innova Crysta / Ertiga" },
    ],
    gallery: ["/images/Kerala.webp", "/images/pkg-kerala.webp", "/images/pkg-munnar.webp"],
    faqs: [
      { q: "Is one night on a houseboat enough?", a: "One night on the Alleppey backwaters is the classic experience and enough for most travellers. We book the houseboat, meals and cruise as part of your package." },
      { q: "When is the best time to visit Kerala?", a: "September to March offers cool, dry weather. The monsoon (June–August) is lush and green and ideal for Ayurvedic treatments, with fewer crowds." },
      { q: "How many days do I need for Kerala?", a: "5–7 days covers Munnar, Thekkady, Alleppey and Kochi comfortably. Add days for beaches (Kovalam/Varkala) or Wayanad." },
      { q: "Which vehicle suits the Kerala hills?", a: "The Innova Crysta or Ertiga handle the winding ghat roads to Munnar and Wayanad comfortably. Tempo Travellers suit larger groups." },
    ],
    tourSlugs: ["kerala-backwaters-hills", "munnar-alleppey-escape"],
    vehicleSlugs: ["toyota-innova-crysta", "maruti-suzuki-ertiga", "force-tempo-traveller"],
    seoDesc:
      "Kerala tour packages by road — Munnar, Alleppey houseboats, Thekkady & beaches. Chauffeur-driven cars, transparent pricing and 24/7 support.",
  },
  {
    name: "Goa",
    slug: "goa",
    image: "/images/Goa.webp",
    sub: "North Goa · South Goa",
    pill: { label: "Beaches" },
    region: "West India",
    tagline: "Beaches, nightlife and easy Portuguese charm",
    overview: [
      "Goa is India's holiday state — golden beaches, palm groves, whitewashed churches and a laid-back rhythm all its own. Buzzing North Goa for nightlife and water sports, serene South Goa for quiet sands and boutique stays; a car and driver let you enjoy both without haggling for a scooter or a cab.",
      "Our local chauffeurs know the beach shacks worth stopping at, the sunset points, and the quickest way around Goa's narrow lanes — so you spend more time on the sand and less in traffic.",
    ],
    bestTime: "November–February (peak season & festivals)",
    idealDuration: "3–5 days",
    whyVisit: [
      "Lively North Goa beaches and nightlife",
      "Quiet, scenic South Goa sands",
      "Water sports, cruises and beach shacks",
      "Old Goa churches and Latin Quarter charm",
      "Spice farms, Dudhsagar Falls and markets",
    ],
    attractions: [
      { name: "North Goa Beaches", blurb: "Baga, Calangute and Anjuna — water sports, shacks, flea markets and nightlife." },
      { name: "South Goa Beaches", blurb: "Palolem, Colva and Agonda — quieter, cleaner sands for a relaxed escape." },
      { name: "Old Goa Churches", blurb: "The UNESCO Basilica of Bom Jesus and Se Cathedral, echoes of Portuguese Goa." },
      { name: "Fontainhas, Panaji", blurb: "The colourful Latin Quarter of narrow lanes and heritage cafés." },
      { name: "Dudhsagar Falls", blurb: "A spectacular four-tiered waterfall on the Goa–Karnataka border." },
      { name: "Mandovi River Cruise", blurb: "Sunset cruises with music, dance and views of Panaji's waterfront." },
    ],
    fastFacts: [
      { label: "Best season", value: "November–February" },
      { label: "Nearest airport", value: "Goa (GOI / GOX Mopa)" },
      { label: "Ideal trip length", value: "3–5 days" },
      { label: "Languages", value: "Konkani, English, Hindi" },
      { label: "Recommended vehicle", value: "Dzire / Ertiga" },
    ],
    gallery: ["/images/Goa.webp", "/images/pkg-goa.webp"],
    faqs: [
      { q: "North Goa or South Goa — which should I choose?", a: "North Goa for nightlife, markets and water sports; South Goa for quiet, cleaner beaches. Many travellers split their stay, and a car makes moving between them easy." },
      { q: "Is a car worth it in Goa over renting a scooter?", a: "For families, groups or anyone carrying luggage, a chauffeured car is far more comfortable and safer — especially at night and in peak-season traffic." },
      { q: "When is Goa at its best?", a: "November to February is peak season with perfect weather and festivals (including Christmas and New Year). Book early for those dates." },
      { q: "How many days for Goa?", a: "3–4 days covers the highlights; 5 days lets you enjoy both North and South at a relaxed pace." },
    ],
    tourSlugs: ["goa-beach-holiday", "goa-weekend-getaway"],
    vehicleSlugs: ["maruti-swift-dzire", "maruti-suzuki-ertiga", "toyota-innova-crysta"],
    seoDesc:
      "Goa tour packages with chauffeur-driven cars — North & South Goa beaches, nightlife, cruises and sightseeing. Transparent pricing and 24/7 support.",
  },
  {
    name: "Mumbai",
    slug: "mumbai",
    image: "/images/Mumbai.webp",
    sub: "City Tours · Airport Transfers",
    region: "West India",
    tagline: "The city that never sleeps — and the gateway to the West",
    overview: [
      "Mumbai runs on energy — colonial-era landmarks, Bollywood glamour, seaside promenades and the best street food in the country. Whether you're here for business, a quick city tour, or as a launchpad to Lonavala and Pune, a chauffeured car cuts through the chaos and keeps you on schedule.",
      "Our Mumbai drivers know the city's moods — the fastest routes around peak-hour gridlock, the timing for the Elephanta ferry, and the classic Marine Drive-to-Bandra sightseeing loop.",
    ],
    bestTime: "October–February (pleasant, dry)",
    idealDuration: "2–4 days",
    whyVisit: [
      "Gateway of India and Elephanta Caves",
      "Marine Drive and Chowpatty at sunset",
      "Colonial architecture and heritage walks",
      "Bollywood, shopping and street food",
      "Easy weekend hop to Lonavala & Pune",
    ],
    attractions: [
      { name: "Gateway of India", blurb: "Mumbai's iconic arch on the harbour, and the jetty for Elephanta ferries." },
      { name: "Elephanta Caves", blurb: "A UNESCO island of rock-cut cave temples, a short ferry from the Gateway." },
      { name: "Marine Drive", blurb: "The 'Queen's Necklace' — a sweeping seaside promenade, best at sunset." },
      { name: "Chhatrapati Shivaji Terminus", blurb: "A UNESCO-listed Victorian Gothic railway station, floodlit at night." },
      { name: "Colaba & Kala Ghoda", blurb: "Heritage streets, art galleries, cafés and Mumbai's best browsing." },
      { name: "Bandra–Worli Sea Link", blurb: "A dramatic cable-stayed bridge and one of the city's best drives." },
    ],
    fastFacts: [
      { label: "Best season", value: "October–February" },
      { label: "Nearest airport", value: "Mumbai (BOM)" },
      { label: "Ideal trip length", value: "2–4 days" },
      { label: "Languages", value: "Marathi, Hindi, English" },
      { label: "Recommended vehicle", value: "Dzire / Amaze / Innova" },
    ],
    gallery: ["/images/Mumbai.webp"],
    faqs: [
      { q: "Do you offer airport transfers in Mumbai?", a: "Yes — on-time airport pickups and drops with flight tracking and fixed, all-inclusive fares. A popular choice for both leisure and corporate travellers." },
      { q: "Can I do a full-day Mumbai city tour?", a: "Yes. A classic day covers the Gateway of India, Marine Drive, CST, Dhobi Ghat, Bandra and more, with your driver handling parking and routes." },
      { q: "Can I combine Mumbai with Lonavala or Pune?", a: "Absolutely — a 3–4 day trip pairs Mumbai sightseeing with the hill escapes of Lonavala and Khandala, and the city of Pune." },
      { q: "Which vehicle is best for Mumbai?", a: "For city tours and transfers the Dzire or Amaze are economical; for families or Lonavala day trips, the Innova or Ertiga are more comfortable." },
    ],
    tourSlugs: ["mumbai-city-elephanta", "mumbai-lonavala-pune"],
    vehicleSlugs: ["maruti-swift-dzire", "honda-amaze", "toyota-innova-crysta"],
    seoDesc:
      "Mumbai city tours and airport transfers with chauffeur-driven cars — Gateway of India, Elephanta, Marine Drive and Lonavala day trips. Transparent pricing.",
  },
  {
    name: "Gujarat",
    slug: "gujarat",
    image: "/images/Gujrat.webp",
    sub: "Rann of Kutch · Somnath · Dwarka",
    region: "West India",
    tagline: "White desert, lions and Devbhoomi coastline",
    overview: [
      "Gujarat surprises everyone who visits: the surreal white salt desert of the Rann of Kutch, Asiatic lions at Gir, the sacred coast of Somnath and Dwarka, and the vibrant crafts and cuisine of a proud, welcoming state. It's one of India's most rewarding road trips.",
      "Our chauffeurs cover the long, well-built Gujarat highways and the temple-town circuits with ease — timing your Somnath aarti, your Gir safari slot and your Rann sunset just right.",
    ],
    bestTime: "October–March (Rann Utsav Nov–Feb)",
    idealDuration: "5–7 days",
    whyVisit: [
      "The white salt desert & Rann Utsav festival",
      "Asiatic lion safari at Gir National Park",
      "Sacred Somnath and Dwarka temples",
      "Statue of Unity, the world's tallest statue",
      "Rich handicrafts, textiles and Gujarati thali",
    ],
    attractions: [
      { name: "Rann of Kutch", blurb: "An endless white salt desert, magical under a full moon and alive during Rann Utsav." },
      { name: "Gir National Park", blurb: "The last home of the Asiatic lion — jeep safaris through dry teak forest." },
      { name: "Somnath Temple", blurb: "One of the twelve Jyotirlingas, set dramatically on the Arabian Sea coast." },
      { name: "Dwarka", blurb: "The revered city of Lord Krishna, with the Dwarkadhish Temple and Bet Dwarka." },
      { name: "Statue of Unity", blurb: "The world's tallest statue (182 m) honouring Sardar Patel, beside the Narmada dam." },
      { name: "Kutch Handicraft Villages", blurb: "Bhuj and surrounding villages famed for embroidery, mirror-work and Ajrakh prints." },
    ],
    fastFacts: [
      { label: "Best season", value: "October–March" },
      { label: "Nearest airports", value: "Ahmedabad, Rajkot, Bhuj" },
      { label: "Ideal trip length", value: "5–7 days" },
      { label: "Languages", value: "Gujarati, Hindi, English" },
      { label: "Recommended vehicle", value: "Innova Crysta / Tempo Traveller" },
    ],
    gallery: ["/images/Gujrat.webp"],
    faqs: [
      { q: "When is the best time to see the Rann of Kutch?", a: "November to February, during Rann Utsav, when the white desert is at its most spectacular and the weather is pleasant. Full-moon nights are magical." },
      { q: "Can you arrange a Gir lion safari?", a: "Yes — Gir safari permits are limited and time-slotted, so we book them in advance as part of your itinerary." },
      { q: "How many days do I need for Gujarat?", a: "5–7 days covers a Saurashtra circuit of Somnath, Gir, Dwarka and Dwarka, or a Kutch-focused trip with the Rann and Bhuj." },
      { q: "Are the roads good for a Gujarat road trip?", a: "Gujarat has some of India's best highways, making it very comfortable by car. We recommend the Innova Crysta, or a Tempo Traveller for groups." },
    ],
    tourSlugs: ["rann-of-kutch-somnath", "dwarka-somnath-devbhoomi"],
    vehicleSlugs: ["toyota-innova-crysta", "force-tempo-traveller", "maruti-suzuki-ertiga"],
    seoDesc:
      "Gujarat tour packages by road — Rann of Kutch, Gir lions, Somnath, Dwarka & Statue of Unity. Chauffeur-driven cars, transparent pricing and 24/7 support.",
  },
];

/* ------------------------------------------------------------------ */
/* Tours (canonical) — supersedes flat packages; cards + detail pages  */
/* ------------------------------------------------------------------ */

export type Tour = {
  // Card fields (also used by home/listing package grids).
  name: string;
  tag: string;
  image: string;
  route: string;
  price: string;
  feats: string[];
  // Detail-page fields (optional so card-only CMS queries still type-check).
  slug?: string;
  destinationSlug?: string;
  heroImage?: string;
  duration?: string;
  priceNote?: string;
  overview?: string[];
  highlights?: string[];
  itinerary?: ItineraryDay[];
  inclusions?: string[];
  exclusions?: string[];
  vehicleSlug?: string;
  faqs?: FAQ[];
};

// Package remains an alias so existing card components keep working.
export type Package = Tour;

const COMMON_INCLUSIONS = [
  "Chauffeur-driven vehicle for the entire trip",
  "Fuel, driver allowance, tolls, parking & state taxes",
  "Pickup and drop as per itinerary",
  "All sightseeing transfers by road",
  "24/7 on-trip support on WhatsApp",
];

const COMMON_EXCLUSIONS = [
  "Hotel stay & meals (arranged on request)",
  "Monument, park and activity entry fees",
  "Flights and train tickets",
  "Personal expenses, tips and shopping",
  "Anything not listed under inclusions",
];

const COMMON_TOUR_FAQS: FAQ[] = [
  { q: "Is this package customisable?", a: "Completely. Change the duration, add or drop stops, adjust the pace for seniors or kids, or upgrade the vehicle — we build the trip around you." },
  { q: "Is the price per person or per vehicle?", a: "Our transport pricing is per vehicle, so it gets more economical the more you travel together. We share a clear, itemised quote before you confirm." },
  { q: "How do I book and how much advance is needed?", a: "Share your dates on WhatsApp or the enquiry form. A small advance confirms the booking; the balance is payable as agreed, by UPI, bank transfer or cash." },
];

export const tours: Tour[] = [
  /* ---- Kashmir ---- */
  {
    slug: "kashmir-valley-escape",
    destinationSlug: "kashmir",
    name: "Kashmir Valley Escape",
    tag: "Hill Station",
    image: "/images/Kashmir.webp",
    heroImage: "/images/Kashmir.webp",
    route: "Srinagar · Gulmarg · Pahalgam · Sonamarg",
    duration: "6 Days / 5 Nights",
    price: "₹18,500",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Dal Lake houseboat", "Gulmarg gondola", "Pahalgam meadows"],
    overview: [
      "The complete Kashmir circuit at an unhurried pace — a Dal Lake houseboat night, the Gulmarg gondola, the meadows of Pahalgam and the glaciers of Sonamarg. A chauffeur who knows the valley handles every drive, so you simply enjoy the view.",
      "Ideal for families and couples who want to see the best of Kashmir comfortably in under a week.",
    ],
    highlights: ["Overnight on a Dal Lake houseboat", "Gondola to Apharwat Peak, Gulmarg", "Betaab & Aru Valley, Pahalgam", "Thajiwas Glacier day at Sonamarg", "Mughal Gardens & Shankaracharya Temple"],
    itinerary: [
      { day: 1, title: "Arrive Srinagar · Houseboat & Shikara", detail: "Airport pickup, check in to a Dal Lake houseboat, and an evening shikara ride past floating gardens. Overnight on the houseboat." },
      { day: 2, title: "Srinagar Sightseeing", detail: "Mughal Gardens (Nishat, Shalimar, Chashme Shahi), Shankaracharya Temple and the local markets. Overnight in Srinagar." },
      { day: 3, title: "Gulmarg Day Trip", detail: "Drive to Gulmarg, ride the gondola towards Apharwat Peak for snow and views, and enjoy the meadows before returning to Srinagar." },
      { day: 4, title: "Srinagar to Pahalgam", detail: "Scenic drive via saffron fields and Awantipora ruins to Pahalgam. Visit Betaab and Aru valleys. Overnight in Pahalgam." },
      { day: 5, title: "Sonamarg Excursion", detail: "Day trip to Sonamarg, the 'meadow of gold', and the Thajiwas Glacier area, then back toward Srinagar. Overnight in Srinagar." },
      { day: 6, title: "Departure", detail: "Leisurely breakfast and transfer to Srinagar airport for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "srinagar-gulmarg-weekend",
    destinationSlug: "kashmir",
    name: "Srinagar & Gulmarg Weekend",
    tag: "Weekend",
    image: "/images/Kashmir.webp",
    heroImage: "/images/Kashmir.webp",
    route: "Srinagar · Gulmarg",
    duration: "4 Days / 3 Nights",
    price: "₹11,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Shikara ride", "Gulmarg gondola", "Mughal Gardens"],
    overview: [
      "Short on time? This long-weekend escape captures the essence of Kashmir — a Dal Lake shikara, the Gulmarg gondola and Srinagar's Mughal Gardens — in a relaxed four days.",
      "Perfect for a quick getaway from the city heat or a first taste of the valley.",
    ],
    highlights: ["Dal Lake shikara ride", "Gulmarg gondola & snow", "Mughal Gardens tour", "Local Kashmiri cuisine"],
    itinerary: [
      { day: 1, title: "Arrive Srinagar", detail: "Airport pickup, check in, and an evening shikara ride on Dal Lake. Overnight in Srinagar / houseboat." },
      { day: 2, title: "Gulmarg Day Trip", detail: "Drive to Gulmarg for the gondola ride, snow points and meadow walks. Return to Srinagar for the night." },
      { day: 3, title: "Srinagar Sightseeing", detail: "Mughal Gardens, Shankaracharya Temple, Hazratbal and the old-city markets. Overnight in Srinagar." },
      { day: 4, title: "Departure", detail: "Transfer to Srinagar airport for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },

  /* ---- Himachal ---- */
  {
    slug: "shimla-manali-classic",
    destinationSlug: "himachal-pradesh",
    name: "Shimla–Manali Classic",
    tag: "Hill Station",
    image: "/images/pkg-himachal.webp",
    heroImage: "/images/pkg-himachal.webp",
    route: "Shimla · Kufri · Manali · Solang",
    duration: "7 Days / 6 Nights",
    price: "₹16,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Shimla Mall Road", "Solang Valley", "Atal Tunnel"],
    overview: [
      "The definitive Himachal holiday — colonial Shimla, the snow and adventure of Solang, Old Manali's riverside cafés and a drive through the Atal Tunnel. A week of mountains at a comfortable pace.",
      "A family favourite that balances sightseeing, snow and relaxation.",
    ],
    highlights: ["Shimla Ridge & Mall Road", "Kufri views & activities", "Solang Valley adventure", "Atal Tunnel to Sissu", "Hadimba Temple & Old Manali"],
    itinerary: [
      { day: 1, title: "Chandigarh / Delhi to Shimla", detail: "Scenic drive up to Shimla via Kalka. Evening at the Ridge and Mall Road. Overnight in Shimla." },
      { day: 2, title: "Shimla & Kufri", detail: "Excursion to Kufri for views and activities, plus Jakhoo Temple and Christ Church. Overnight in Shimla." },
      { day: 3, title: "Shimla to Manali", detail: "Full-day scenic drive along the Beas river to Manali, stopping en route. Overnight in Manali." },
      { day: 4, title: "Solang Valley & Atal Tunnel", detail: "Solang Valley for snow and adventure sports, then through the Atal Tunnel to Sissu. Overnight in Manali." },
      { day: 5, title: "Manali Local", detail: "Hadimba Temple, Old Manali, Vashisht hot springs and the Mall Road. Overnight in Manali." },
      { day: 6, title: "Manali to Chandigarh / Delhi", detail: "Drive down to the plains, arriving by evening. Overnight en route or drop." },
      { day: 7, title: "Departure", detail: "Transfer to airport / railway station for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "manali-adventure",
    destinationSlug: "himachal-pradesh",
    name: "Manali Adventure",
    tag: "Adventure",
    image: "/images/pkg-manali.webp",
    heroImage: "/images/pkg-manali.webp",
    route: "Manali · Solang · Sissu · Old Manali",
    duration: "5 Days / 4 Nights",
    price: "₹12,500",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Solang adventure sports", "Atal Tunnel", "Riverside cafés"],
    overview: [
      "A snow-and-adventure-focused Manali trip — paragliding and snow at Solang, the Atal Tunnel drive to Sissu, and the laid-back café culture of Old Manali.",
      "Great for couples, friends and young families chasing the mountains.",
    ],
    highlights: ["Solang Valley adventure sports", "Atal Tunnel & Sissu", "Hadimba Temple", "Old Manali cafés", "Vashisht hot springs"],
    itinerary: [
      { day: 1, title: "Arrive Manali", detail: "Pickup and drive to Manali. Evening free at Mall Road and Old Manali. Overnight in Manali." },
      { day: 2, title: "Solang Valley", detail: "A day of adventure at Solang — paragliding, zorbing, ropeway and snow (seasonal). Overnight in Manali." },
      { day: 3, title: "Atal Tunnel & Sissu", detail: "Drive through the Atal Tunnel to Sissu and the Lahaul valley. Overnight in Manali." },
      { day: 4, title: "Manali Local & Naggar", detail: "Hadimba Temple, Vashisht springs, Old Manali and optional Naggar Castle. Overnight in Manali." },
      { day: 5, title: "Departure", detail: "Drive down to the plains for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "maruti-suzuki-ertiga",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "spiti-valley-circuit",
    destinationSlug: "himachal-pradesh",
    name: "Spiti Valley Circuit",
    tag: "Adventure",
    image: "/images/Himachal.webp",
    heroImage: "/images/Himachal.webp",
    route: "Shimla · Kalpa · Kaza · Chandratal",
    duration: "7 Days / 6 Nights",
    price: "₹24,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["High-altitude monasteries", "Chandratal Lake", "Moonscape valleys"],
    overview: [
      "One of India's great road trips — the high-altitude desert of Spiti, ancient monasteries at Key and Tabo, the world's highest villages and the surreal Chandratal Lake. This is a driving adventure for those who want the extraordinary.",
      "Run only in the summer window with experienced high-altitude drivers and a carefully paced acclimatisation route.",
    ],
    highlights: ["Kalpa & Kinnaur views", "Key & Tabo monasteries", "Hikkim, Komic & Langza villages", "Chandratal Lake", "Kunzum Pass"],
    itinerary: [
      { day: 1, title: "Shimla to Sangla / Kalpa", detail: "Drive through the Kinnaur valley along the Sutlej to Sangla or Kalpa. Overnight in Kalpa." },
      { day: 2, title: "Kalpa to Tabo", detail: "Cross into Spiti via Nako to the ancient Tabo Monastery, the 'Ajanta of the Himalayas'. Overnight in Tabo." },
      { day: 3, title: "Tabo to Kaza", detail: "Visit Dhankar Monastery and Pin Valley en route to Kaza, Spiti's hub. Overnight in Kaza." },
      { day: 4, title: "Key, Kibber & the high villages", detail: "Key Monastery, Kibber, and the world's highest villages — Hikkim, Komic and Langza. Overnight in Kaza." },
      { day: 5, title: "Kaza to Chandratal", detail: "Over Kunzum Pass to the stunning Chandratal Lake. Camp / stay near Chandratal." },
      { day: 6, title: "Chandratal to Manali", detail: "Drive over Atal Tunnel to Manali. Overnight in Manali." },
      { day: 7, title: "Departure", detail: "Drive down to the plains for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },

  /* ---- Uttarakhand ---- */
  {
    slug: "nainital-mussoorie-getaway",
    destinationSlug: "uttarakhand",
    name: "Nainital–Mussoorie Getaway",
    tag: "Hill Station",
    image: "/images/pkg-uttarakhand.webp",
    heroImage: "/images/pkg-uttarakhand.webp",
    route: "Nainital · Mussoorie · Rishikesh",
    duration: "6 Days / 5 Nights",
    price: "₹14,400",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Naini Lake boating", "Kempty Falls", "Ganga aarti"],
    overview: [
      "A relaxed tour of Uttarakhand's two favourite hill stations — lake-town Nainital and colonial Mussoorie — rounded off with the riverside calm of Rishikesh.",
      "Lakes, viewpoints, cable cars and an evening Ganga aarti; an easy, scenic family holiday.",
    ],
    highlights: ["Naini Lake boating", "Snow View & Tiffin Top", "Kempty Falls & Camel's Back Road", "Mussoorie Mall Road", "Rishikesh Ganga aarti"],
    itinerary: [
      { day: 1, title: "Arrive Nainital", detail: "Drive from Delhi/Kathgodam to Nainital. Evening at the Mall Road and Naini Lake. Overnight in Nainital." },
      { day: 2, title: "Nainital Sightseeing", detail: "Naini Lake boating, Snow View Point by cable car, Tiffin Top and the seven lakes. Overnight in Nainital." },
      { day: 3, title: "Nainital to Mussoorie", detail: "Long scenic drive across to Mussoorie. Evening at the Mall Road. Overnight in Mussoorie." },
      { day: 4, title: "Mussoorie Sightseeing", detail: "Kempty Falls, Gun Hill ropeway, Camel's Back Road and Lal Tibba. Overnight in Mussoorie." },
      { day: 5, title: "Mussoorie to Rishikesh", detail: "Drive to Rishikesh via Dehradun. Evening Ganga aarti at Triveni Ghat. Overnight in Rishikesh." },
      { day: 6, title: "Rishikesh & Departure", detail: "Laxman Jhula and Ram Jhula, then transfer for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "chardham-yatra-by-road",
    destinationSlug: "uttarakhand",
    name: "Char Dham Yatra by Road",
    tag: "Pilgrimage",
    image: "/images/pkg-kedarnath.webp",
    heroImage: "/images/pkg-kedarnath.webp",
    route: "Yamunotri · Gangotri · Kedarnath · Badrinath",
    duration: "11 Days / 10 Nights",
    price: "₹32,500",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["All four Dhams", "Guided yatra", "Assisted logistics"],
    overview: [
      "The complete Char Dham pilgrimage by road — Yamunotri, Gangotri, Kedarnath and Badrinath — with an experienced yatra chauffeur, carefully paced drives and assistance at every shrine.",
      "We handle permits, the demanding mountain logistics and comfortable stays so you can focus on the journey of faith.",
    ],
    highlights: ["Yamunotri & Gangotri darshan", "Kedarnath trek / helicopter option", "Badrinath & Mana village", "Ganga aarti at Haridwar", "Experienced yatra driver"],
    itinerary: [
      { day: 1, title: "Haridwar Arrival", detail: "Pickup and transfer to Haridwar. Evening Ganga aarti at Har Ki Pauri. Overnight in Haridwar." },
      { day: 2, title: "Haridwar to Barkot", detail: "Drive to Barkot via Mussoorie. Overnight in Barkot." },
      { day: 3, title: "Yamunotri Darshan", detail: "Drive to Janki Chatti and trek/pony to Yamunotri. Return to Barkot. Overnight in Barkot." },
      { day: 4, title: "Barkot to Uttarkashi", detail: "Drive to Uttarkashi, visit Vishwanath Temple. Overnight in Uttarkashi." },
      { day: 5, title: "Gangotri Darshan", detail: "Drive to Gangotri for darshan at the source of the Ganga. Return to Uttarkashi. Overnight in Uttarkashi." },
      { day: 6, title: "Uttarkashi to Guptkashi", detail: "Long scenic drive to Guptkashi. Overnight in Guptkashi." },
      { day: 7, title: "Kedarnath", detail: "Drive to Sonprayag and trek/pony/helicopter to Kedarnath for darshan. Overnight near Kedarnath / Guptkashi." },
      { day: 8, title: "Guptkashi to Badrinath", detail: "Drive to Badrinath via Joshimath. Evening darshan. Overnight in Badrinath." },
      { day: 9, title: "Badrinath & Mana", detail: "Morning darshan, Mana village (India's last village) and Vasudhara. Drive to Rudraprayag. Overnight in Rudraprayag." },
      { day: 10, title: "Rudraprayag to Haridwar", detail: "Drive down to Haridwar/Rishikesh. Overnight in Haridwar." },
      { day: 11, title: "Departure", detail: "Transfer for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "force-tempo-traveller",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "rishikesh-haridwar-spiritual",
    destinationSlug: "uttarakhand",
    name: "Rishikesh & Haridwar Spiritual",
    tag: "Spiritual",
    image: "/images/Uttarakhand.webp",
    heroImage: "/images/Uttarakhand.webp",
    route: "Haridwar · Rishikesh",
    duration: "4 Days / 3 Nights",
    price: "₹9,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Ganga aarti", "Yoga & rafting", "Riverside cafés"],
    overview: [
      "A short, soulful escape to the twin spiritual towns on the Ganga — the grand aarti at Haridwar, and the yoga, rafting and riverside calm of Rishikesh.",
      "Ideal for a rejuvenating long weekend from Delhi.",
    ],
    highlights: ["Har Ki Pauri Ganga aarti", "Laxman Jhula & Ram Jhula", "Beatles Ashram", "Optional white-water rafting", "Riverside cafés"],
    itinerary: [
      { day: 1, title: "Arrive Haridwar", detail: "Drive from Delhi to Haridwar. Evening Ganga aarti at Har Ki Pauri. Overnight in Haridwar." },
      { day: 2, title: "Haridwar to Rishikesh", detail: "Chandi Devi & Mansa Devi temples, then to Rishikesh. Evening aarti at Triveni/Parmarth. Overnight in Rishikesh." },
      { day: 3, title: "Rishikesh Sightseeing", detail: "Laxman Jhula, Ram Jhula, Beatles Ashram and optional rafting. Overnight in Rishikesh." },
      { day: 4, title: "Departure", detail: "Morning by the river, then transfer for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "maruti-suzuki-ertiga",
    faqs: COMMON_TOUR_FAQS,
  },

  /* ---- Rajasthan ---- */
  {
    slug: "golden-triangle",
    destinationSlug: "rajasthan",
    name: "Golden Triangle",
    tag: "Heritage",
    image: "/images/pkg-jaipur.webp",
    heroImage: "/images/pkg-jaipur.webp",
    route: "Delhi · Agra · Jaipur",
    duration: "6 Days / 5 Nights",
    price: "₹15,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Taj Mahal", "Amber Fort", "Pink City"],
    overview: [
      "India's most iconic circuit — the capital's landmarks, the Taj Mahal at Agra and the royal Pink City of Jaipur. The perfect introduction to India's history and grandeur.",
      "A smooth, well-paced road trip on excellent highways, ideal for first-time visitors and families.",
    ],
    highlights: ["Taj Mahal & Agra Fort", "Amber Fort & Jal Mahal", "Hawa Mahal & City Palace", "Fatehpur Sikri", "Delhi's heritage landmarks"],
    itinerary: [
      { day: 1, title: "Delhi Arrival & Tour", detail: "Pickup and a tour of Old & New Delhi — Qutub Minar, India Gate, Humayun's Tomb. Overnight in Delhi." },
      { day: 2, title: "Delhi to Agra", detail: "Drive to Agra. Visit the Taj Mahal at sunset and Agra Fort. Overnight in Agra." },
      { day: 3, title: "Agra to Jaipur via Fatehpur Sikri", detail: "Sunrise Taj (optional), then drive to Jaipur via Fatehpur Sikri. Overnight in Jaipur." },
      { day: 4, title: "Jaipur Sightseeing", detail: "Amber Fort, Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal. Overnight in Jaipur." },
      { day: 5, title: "Jaipur Leisure & Bazaars", detail: "Nahargarh Fort views and the colourful bazaars for handicrafts and textiles. Overnight in Jaipur." },
      { day: 6, title: "Jaipur to Delhi & Departure", detail: "Drive back to Delhi and transfer for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "royal-rajasthan",
    destinationSlug: "rajasthan",
    name: "Royal Rajasthan",
    tag: "Heritage",
    image: "/images/Rajasthan.webp",
    heroImage: "/images/Rajasthan.webp",
    route: "Jaipur · Jodhpur · Jaisalmer · Udaipur",
    duration: "8 Days / 7 Nights",
    price: "₹26,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Four royal cities", "Thar desert safari", "Lake Pichola"],
    overview: [
      "The grand tour of the land of kings — the Pink City, the blue city and its mighty Mehrangarh, golden Jaisalmer with a desert safari, and the lakes and palaces of romantic Udaipur.",
      "A rich, week-long heritage journey through Rajasthan's finest forts, palaces and dunes.",
    ],
    highlights: ["Amber Fort, Jaipur", "Mehrangarh Fort, Jodhpur", "Sam Dunes camel safari", "Lake Pichola boat ride", "City Palace, Udaipur"],
    itinerary: [
      { day: 1, title: "Arrive Jaipur", detail: "Pickup and evening at leisure. Overnight in Jaipur." },
      { day: 2, title: "Jaipur Sightseeing", detail: "Amber Fort, City Palace, Hawa Mahal, Jantar Mantar and bazaars. Overnight in Jaipur." },
      { day: 3, title: "Jaipur to Jodhpur", detail: "Drive to the blue city of Jodhpur. Overnight in Jodhpur." },
      { day: 4, title: "Jodhpur to Jaisalmer", detail: "Mehrangarh Fort and Jaswant Thada, then drive to Jaisalmer. Overnight in Jaisalmer." },
      { day: 5, title: "Jaisalmer & Sam Dunes", detail: "Jaisalmer Fort and havelis; evening camel safari and cultural night at the Sam Dunes. Overnight in a desert camp / Jaisalmer." },
      { day: 6, title: "Jaisalmer to Udaipur", detail: "Long scenic drive to Udaipur via Ranakpur (optional Jain temples). Overnight in Udaipur." },
      { day: 7, title: "Udaipur Sightseeing", detail: "City Palace, Lake Pichola boat ride, Jagdish Temple and Saheliyon Ki Bari. Overnight in Udaipur." },
      { day: 8, title: "Departure", detail: "Transfer to Udaipur airport for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "udaipur-lake-city",
    destinationSlug: "rajasthan",
    name: "Udaipur Lake City",
    tag: "Heritage",
    image: "/images/pkg-udaipur.webp",
    heroImage: "/images/pkg-udaipur.webp",
    route: "Udaipur · Kumbhalgarh · Ranakpur",
    duration: "4 Days / 3 Nights",
    price: "₹12,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Lake Pichola", "City Palace", "Kumbhalgarh Fort"],
    overview: [
      "A romantic short break in India's 'City of Lakes' — palace complexes, a sunset boat ride on Lake Pichola, and a day trip to the great wall of Kumbhalgarh and the marble temples of Ranakpur.",
      "Ideal for couples and a relaxed heritage weekend.",
    ],
    highlights: ["Lake Pichola boat ride", "City Palace complex", "Kumbhalgarh Fort", "Ranakpur Jain Temples", "Saheliyon Ki Bari"],
    itinerary: [
      { day: 1, title: "Arrive Udaipur", detail: "Pickup and an evening Lake Pichola boat ride at sunset. Overnight in Udaipur." },
      { day: 2, title: "Udaipur Sightseeing", detail: "City Palace, Jagdish Temple, Saheliyon Ki Bari and Fateh Sagar Lake. Overnight in Udaipur." },
      { day: 3, title: "Kumbhalgarh & Ranakpur", detail: "Day trip to Kumbhalgarh Fort (the second-longest wall in the world) and the Ranakpur Jain temples. Overnight in Udaipur." },
      { day: 4, title: "Departure", detail: "Transfer to Udaipur airport for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "maruti-swift-dzire",
    faqs: COMMON_TOUR_FAQS,
  },

  /* ---- Kerala ---- */
  {
    slug: "kerala-backwaters-hills",
    destinationSlug: "kerala",
    name: "Kerala Backwaters & Hills",
    tag: "Nature",
    image: "/images/pkg-kerala.webp",
    heroImage: "/images/pkg-kerala.webp",
    route: "Kochi · Munnar · Thekkady · Alleppey",
    duration: "7 Days / 6 Nights",
    price: "₹19,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Alleppey houseboat", "Munnar tea hills", "Periyar wildlife"],
    overview: [
      "The complete Kerala experience — historic Kochi, the tea hills of Munnar, the spice gardens and wildlife of Thekkady, and an overnight houseboat on the Alleppey backwaters.",
      "A gentle, scenic week that shows why Kerala is called God's own country.",
    ],
    highlights: ["Fort Kochi & Chinese nets", "Munnar tea plantations", "Periyar boat safari", "Overnight houseboat, Alleppey", "Spice plantation walk"],
    itinerary: [
      { day: 1, title: "Arrive Kochi", detail: "Pickup and a tour of Fort Kochi — Chinese fishing nets, St. Francis Church and the Jew Town. Overnight in Kochi." },
      { day: 2, title: "Kochi to Munnar", detail: "Scenic drive to Munnar via waterfalls and spice gardens. Overnight in Munnar." },
      { day: 3, title: "Munnar Sightseeing", detail: "Tea plantations, Eravikulam National Park, Mattupetty Dam and Echo Point. Overnight in Munnar." },
      { day: 4, title: "Munnar to Thekkady", detail: "Drive to Thekkady. Periyar Lake boat safari and a spice plantation walk. Overnight in Thekkady." },
      { day: 5, title: "Thekkady to Alleppey", detail: "Drive to Alleppey and board a private houseboat. Cruise the backwaters. Overnight on the houseboat." },
      { day: 6, title: "Alleppey to Kochi", detail: "Disembark after breakfast and drive to Kochi for last-minute leisure. Overnight in Kochi." },
      { day: 7, title: "Departure", detail: "Transfer to Kochi airport for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "munnar-alleppey-escape",
    destinationSlug: "kerala",
    name: "Munnar–Alleppey Escape",
    tag: "Nature",
    image: "/images/pkg-munnar.webp",
    heroImage: "/images/pkg-munnar.webp",
    route: "Kochi · Munnar · Alleppey",
    duration: "5 Days / 4 Nights",
    price: "₹14,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Tea hills", "Houseboat night", "Fort Kochi"],
    overview: [
      "A shorter Kerala highlight reel — the tea hills of Munnar and an overnight houseboat on the Alleppey backwaters, bookended by charming Fort Kochi.",
      "Perfect when you want the essence of Kerala in under a week.",
    ],
    highlights: ["Munnar tea gardens", "Overnight houseboat", "Fort Kochi walk", "Backwater village life"],
    itinerary: [
      { day: 1, title: "Arrive Kochi", detail: "Pickup and Fort Kochi sightseeing. Overnight in Kochi." },
      { day: 2, title: "Kochi to Munnar", detail: "Scenic drive to Munnar via waterfalls. Overnight in Munnar." },
      { day: 3, title: "Munnar Sightseeing", detail: "Tea plantations, Eravikulam Park, Mattupetty Dam and Echo Point. Overnight in Munnar." },
      { day: 4, title: "Munnar to Alleppey", detail: "Drive to Alleppey and board a private houseboat. Overnight on the houseboat." },
      { day: 5, title: "Departure", detail: "Disembark after breakfast and transfer to Kochi airport." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "maruti-suzuki-ertiga",
    faqs: COMMON_TOUR_FAQS,
  },

  /* ---- Goa ---- */
  {
    slug: "goa-beach-holiday",
    destinationSlug: "goa",
    name: "Goa Beach Holiday",
    tag: "Beaches",
    image: "/images/pkg-goa.webp",
    heroImage: "/images/pkg-goa.webp",
    route: "North Goa · South Goa · Old Goa",
    duration: "5 Days / 4 Nights",
    price: "₹13,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["North & South beaches", "Mandovi cruise", "Old Goa churches"],
    overview: [
      "The full Goa experience — the lively beaches and nightlife of the north, the calm sands of the south, a sunset river cruise and the heritage of Old Goa.",
      "A car and driver make hopping between Goa's best spots effortless.",
    ],
    highlights: ["Baga, Calangute & Anjuna", "Palolem & South Goa", "Mandovi sunset cruise", "Basilica of Bom Jesus", "Fontainhas Latin Quarter"],
    itinerary: [
      { day: 1, title: "Arrive Goa", detail: "Pickup and transfer to your hotel. Evening at a North Goa beach. Overnight in Goa." },
      { day: 2, title: "North Goa", detail: "Baga, Calangute, Anjuna and Fort Aguada, plus optional water sports. Evening Mandovi cruise. Overnight in Goa." },
      { day: 3, title: "South Goa", detail: "Colva, Palolem and Agonda beaches, and the Old Goa churches en route. Overnight in Goa." },
      { day: 4, title: "Leisure & Heritage", detail: "Fontainhas, Panaji, spice farm or Dudhsagar Falls (optional). Overnight in Goa." },
      { day: 5, title: "Departure", detail: "Transfer to Goa airport for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "maruti-suzuki-ertiga",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "goa-weekend-getaway",
    destinationSlug: "goa",
    name: "Goa Weekend Getaway",
    tag: "Weekend",
    image: "/images/Goa.webp",
    heroImage: "/images/Goa.webp",
    route: "North Goa · Panaji",
    duration: "3 Days / 2 Nights",
    price: "₹8,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Beach hopping", "Nightlife", "River cruise"],
    overview: [
      "A quick, breezy Goa weekend — the best North Goa beaches, a sunset cruise and a taste of the nightlife, all wrapped up in a relaxed three days.",
      "The easy escape when you just need sand, sea and sun.",
    ],
    highlights: ["North Goa beaches", "Mandovi sunset cruise", "Fort Aguada", "Beach shacks & nightlife"],
    itinerary: [
      { day: 1, title: "Arrive Goa", detail: "Pickup and check in. Evening at Baga/Calangute and a beach-shack dinner. Overnight in Goa." },
      { day: 2, title: "North Goa & Cruise", detail: "Beach hopping, Fort Aguada and optional water sports; evening Mandovi River cruise. Overnight in Goa." },
      { day: 3, title: "Departure", detail: "Panaji / Fontainhas stroll, then transfer to the airport." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "maruti-swift-dzire",
    faqs: COMMON_TOUR_FAQS,
  },

  /* ---- Mumbai ---- */
  {
    slug: "mumbai-city-elephanta",
    destinationSlug: "mumbai",
    name: "Mumbai City & Elephanta",
    tag: "City Tour",
    image: "/images/Mumbai.webp",
    heroImage: "/images/Mumbai.webp",
    route: "South Mumbai · Elephanta · Bandra",
    duration: "3 Days / 2 Nights",
    price: "₹9,500",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Gateway of India", "Elephanta Caves", "Marine Drive"],
    overview: [
      "A compact tour of the maximum city — colonial South Mumbai, the Elephanta Caves by ferry, Marine Drive at sunset and the buzz of Bandra.",
      "A chauffeured car keeps you moving smoothly through Mumbai's famous traffic.",
    ],
    highlights: ["Gateway of India", "Elephanta Caves ferry", "Marine Drive & Chowpatty", "CST & heritage walk", "Bandra & Sea Link"],
    itinerary: [
      { day: 1, title: "Arrive Mumbai", detail: "Pickup and a South Mumbai heritage drive — Gateway of India, CST, Colaba and Marine Drive at sunset. Overnight in Mumbai." },
      { day: 2, title: "Elephanta & City", detail: "Ferry to the Elephanta Caves, then Dhobi Ghat, Hanging Gardens and Bandra. Overnight in Mumbai." },
      { day: 3, title: "Departure", detail: "Optional shopping or Film City, then transfer to the airport." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "maruti-swift-dzire",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "mumbai-lonavala-pune",
    destinationSlug: "mumbai",
    name: "Mumbai–Lonavala–Pune",
    tag: "Getaway",
    image: "/images/Mumbai.webp",
    heroImage: "/images/Mumbai.webp",
    route: "Mumbai · Lonavala · Khandala · Pune",
    duration: "4 Days / 3 Nights",
    price: "₹12,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Hill escapes", "Karla Caves", "Pune sightseeing"],
    overview: [
      "Pair Mumbai's landmarks with the green hill escapes of Lonavala and Khandala and the culture of Pune — a varied four-day road trip through Maharashtra.",
      "Great for families wanting city, hills and heritage in one loop.",
    ],
    highlights: ["Mumbai landmarks", "Lonavala & Khandala viewpoints", "Karla & Bhaja Caves", "Pune's Shaniwar Wada & Aga Khan Palace", "Bushi Dam"],
    itinerary: [
      { day: 1, title: "Arrive Mumbai", detail: "Pickup and South Mumbai sightseeing — Gateway, Marine Drive, CST. Overnight in Mumbai." },
      { day: 2, title: "Mumbai to Lonavala", detail: "Drive to Lonavala. Tiger's Leap, Bhushi Dam, Karla & Bhaja Caves. Overnight in Lonavala." },
      { day: 3, title: "Lonavala to Pune", detail: "Drive to Pune. Shaniwar Wada, Aga Khan Palace and Dagdusheth Temple. Overnight in Pune." },
      { day: 4, title: "Departure", detail: "Transfer to Pune/Mumbai airport for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },

  /* ---- Gujarat ---- */
  {
    slug: "rann-of-kutch-somnath",
    destinationSlug: "gujarat",
    name: "Rann of Kutch & Somnath",
    tag: "Heritage",
    image: "/images/Gujrat.webp",
    heroImage: "/images/Gujrat.webp",
    route: "Ahmedabad · Bhuj · Rann · Somnath",
    duration: "6 Days / 5 Nights",
    price: "₹18,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["White Rann sunset", "Kutch crafts", "Somnath aarti"],
    overview: [
      "Gujarat's signature circuit — the surreal white desert of Kutch, the craft villages around Bhuj, and the sacred sea-side temple of Somnath.",
      "Best experienced in the cool winter months around Rann Utsav.",
    ],
    highlights: ["White Rann of Kutch", "Kutch handicraft villages", "Bhuj heritage", "Somnath Temple & aarti", "Gujarati thali"],
    itinerary: [
      { day: 1, title: "Arrive Ahmedabad", detail: "Pickup and a heritage tour — Sabarmati Ashram, Adalaj Stepwell. Overnight in Ahmedabad." },
      { day: 2, title: "Ahmedabad to Bhuj", detail: "Drive to Bhuj. Visit Aina Mahal and the local markets. Overnight in Bhuj." },
      { day: 3, title: "Rann of Kutch", detail: "Craft villages (Nirona, Hodka), then the White Rann for a magical sunset. Overnight near Bhuj / tent city." },
      { day: 4, title: "Bhuj to Somnath", detail: "Long scenic drive to Somnath. Evening aarti and light show at the temple. Overnight in Somnath." },
      { day: 5, title: "Somnath & Diu (optional)", detail: "Somnath darshan and an optional trip to Diu's beaches and fort. Overnight in Somnath / Diu." },
      { day: 6, title: "Departure", detail: "Transfer to the nearest airport for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "toyota-innova-crysta",
    faqs: COMMON_TOUR_FAQS,
  },
  {
    slug: "dwarka-somnath-devbhoomi",
    destinationSlug: "gujarat",
    name: "Dwarka–Somnath Devbhoomi",
    tag: "Pilgrimage",
    image: "/images/Gujrat.webp",
    heroImage: "/images/Gujrat.webp",
    route: "Ahmedabad · Dwarka · Somnath · Gir",
    duration: "7 Days / 6 Nights",
    price: "₹21,900",
    priceNote: "per person (on twin sharing, land only)",
    feats: ["Dwarkadhish Temple", "Gir lion safari", "Somnath aarti"],
    overview: [
      "A pilgrimage-and-wildlife journey through Gujarat's holy west coast — the Krishna city of Dwarka, the Jyotirlinga at Somnath, and a lion safari at Gir National Park.",
      "A meaningful, well-rounded week blending faith, history and nature.",
    ],
    highlights: ["Dwarkadhish Temple & Bet Dwarka", "Nageshwar Jyotirlinga", "Somnath Temple & aarti", "Gir Asiatic lion safari", "Junagadh heritage"],
    itinerary: [
      { day: 1, title: "Arrive Ahmedabad", detail: "Pickup and city heritage tour. Overnight in Ahmedabad." },
      { day: 2, title: "Ahmedabad to Dwarka", detail: "Long drive to Dwarka. Evening Dwarkadhish Temple aarti. Overnight in Dwarka." },
      { day: 3, title: "Dwarka & Bet Dwarka", detail: "Bet Dwarka by boat, Nageshwar Jyotirlinga and Rukmini Temple. Overnight in Dwarka." },
      { day: 4, title: "Dwarka to Somnath", detail: "Drive to Somnath via Porbandar (Kirti Mandir). Evening Somnath aarti. Overnight in Somnath." },
      { day: 5, title: "Somnath to Gir", detail: "Somnath darshan, then drive to Gir/Sasan. Overnight near Gir." },
      { day: 6, title: "Gir Lion Safari", detail: "Morning jeep safari in Gir National Park, then drive toward Junagadh/Rajkot. Overnight en route." },
      { day: 7, title: "Departure", detail: "Transfer to Rajkot/Ahmedabad airport for your onward journey." },
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    vehicleSlug: "force-tempo-traveller",
    faqs: COMMON_TOUR_FAQS,
  },
];

// Backward-compatible alias: home/listing card grids and the getPackages
// fallback consume the same shape.
export const packages: Tour[] = tours;

/* ------------------------------------------------------------------ */
/* Lookup helpers                                                      */
/* ------------------------------------------------------------------ */

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);
export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
export const getVehicle = (slug: string) => fleet.find((v) => v.slug === slug);
export const toursForDestination = (destSlug: string) =>
  tours.filter((t) => t.destinationSlug === destSlug);

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

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
