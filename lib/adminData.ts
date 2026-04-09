export const ADMIN_CONTENT_KEY = "dream-adventure-nepal-content";

export type BlogItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export type TourItem = {
  id: string;
  name: string;
  duration: string;
  difficulty: string;
  price: string;
  maxAltitude: string;
  bestSeason: string;
  description: string;
  imageUrl?: string;
};

export type CityItem = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  imageUrl?: string;
};

export type AttractionItem = {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  duration: string;
  price: string;
  imageUrl?: string;
  itinerary?: string[];
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

export type ContactInfo = {
  email: string;
  phone: string;
  location: string;
};

export type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroCtaHref: string;
  featureTitle: string;
  featureSubtitle: string;
};

export type AboutContent = {
  headline: string;
  description: string;
  cards: { title: string; text: string }[];
  promiseTitle: string;
  promiseText: string;
  promiseBullets: string[];
};

export type SiteContent = {
  logoBase64?: string;
  home: HomeContent;
  about: AboutContent;
  contact: ContactInfo;
  services: ServiceItem[];
  portfolio: TourItem[];
  cities: CityItem[];
  attractions: AttractionItem[];
  gallery: GalleryItem[];
  blog: BlogItem[];
};

export const defaultSiteContent: SiteContent = {
  logoBase64: undefined,
  home: {
    heroTitle: "Sacred Peaks. Authentic Trails. Unforgettable Moments.",
    heroSubtitle:
      "Discover unforgettable trekking experiences, cultural journeys, and custom adventures across Nepal with Dream Adventure Nepal. Your next adventure awaits!",
    heroCtaText: "Explore Tours",
    heroCtaHref: "/portfolio",
    featureTitle: "Featured Tours",
    featureSubtitle: "Handpicked adventures for unforgettable memories in the heart of the Himalayas.",
  },
  about: {
    headline: "We make Nepal adventures unforgettable.",
    description:
      "Dream Adventure Nepal combines passion, local expertise, and safety-first planning to craft treks, cultural tours, and custom journeys across the Himalayas.",
    cards: [
      {
        title: "Our Mission",
        text: "To connect travelers with real Nepal through mindful trekking, meaningful cultural experiences, and local guides who care about every detail.",
      },
      {
        title: "What We Offer",
        text: "From Everest and Annapurna treks to heritage tours in Kathmandu, we offer complete itineraries, private guides, permit support, and seamless logistics.",
      },
      {
        title: "Why Choose Us",
        text: "Local knowledge, trusted partners, safety-first operations, and personalized service make every journey memorable and stress-free.",
      },
    ],
    promiseTitle: "Authentic travel, guided by locals.",
    promiseText:
      "We are a Nepal-based team with deep experience in trekking, conservation, and hospitality. Every itinerary is built around local communities and natural beauty.",
    promiseBullets: [
      "Fully guided treks, tours, and cultural journeys.",
      "Transparent pricing, permits, and travel support.",
      "Small groups, private departures, and tailor-made options.",
    ],
  },
  contact: {
    email: "info@dreamadventure.com",
    phone: "+977 1 2345 6789",
    location: "Kathmandu, Nepal",
  },
  services: [
    {
      id: "service-1",
      title: "Guided Trekking Expeditions",
      description:
        "Professional guides for all difficulty levels from easy walks to challenging mountain peaks.",
      features: ["Expert guides", "Small groups", "All seasons"],
    },
    {
      id: "service-2",
      title: "Cultural Tours",
      description:
        "Immerse yourself in Nepali culture with our curated heritage and community experiences.",
      features: ["Local guides", "Authentic experiences", "Cultural events"],
    },
    {
      id: "service-3",
      title: "Adventure Sports",
      description:
        "Experience adrenaline-pumping activities like rock climbing, paragliding, and rafting.",
      features: ["Safety first", "Equipment provided", "Professional instructors"],
    },
  ],
  portfolio: [
    {
      id: "tour-1",
      name: "Everest Base Camp Trek",
      duration: "14 Days",
      difficulty: "Challenging",
      price: "$1,299",
      maxAltitude: "5,364m",
      bestSeason: "Sep-Oct, Mar-May",
      description: "The world's most iconic trek to the base of Mount Everest",
    },
    {
      id: "tour-2",
      name: "Annapurna Base Camp Trek",
      duration: "10 Days",
      difficulty: "Moderate",
      price: "$899",
      maxAltitude: "4,130m",
      bestSeason: "Oct-Nov, Mar-Apr",
      description: "A stunning circuit with diverse landscapes and mountain views",
    },
  ],
  cities: [
    {
      id: "city-1",
      name: "Kathmandu",
      description: "The vibrant capital city, a blend of ancient temples and modern culture.",
      highlights: ["Swayambhunath Stupa", "Kathmandu Durbar Square", "Pashupatinath Temple"],
      imageUrl: "https://images.unsplash.com/photo-1544008230-ac1e1fb4f4f4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "city-2",
      name: "Pokhara",
      description: "Gateway to the Annapurna region, known for lakes and mountain views.",
      highlights: ["Phewa Lake", "Davis Fall", "Sarangkot Sunrise"],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "city-3",
      name: "Lumbini",
      description: "Birthplace of Buddha, a UNESCO World Heritage site.",
      highlights: ["Maya Devi Temple", "Sacred Garden", "Monasteries"],
      imageUrl: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  attractions: [
    {
      id: "attraction-1",
      name: "Nagarkot Sunrise Trip & Day Hike with Lunch from Kathmandu",
      type: "Hiking Tour",
      location: "Nagarkot",
      description: "Experience breathtaking sunrise views over the Himalayas with a guided hike and traditional Nepali lunch.",
      duration: "1 Day",
      price: "$150",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "attraction-2",
      name: "Nature and Wildlife Tours",
      type: "Wildlife Tour",
      location: "Chitwan National Park",
      description: "Explore Nepal's wildlife in Chitwan, home to rhinos, tigers, and elephants.",
      duration: "2-3 Days",
      price: "$250",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "attraction-3",
      name: "Kathmandu to Annapurna Base Camp (ABC) 5-Day Trek",
      type: "Multi-day Trek",
      location: "Annapurna Region",
      description: "A condensed trek to Annapurna Base Camp, offering stunning views and cultural experiences.",
      duration: "5 Days",
      price: "$650",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      itinerary: [
        "Day 1: Drive from Kathmandu to Pokhara, then trek to Ghara (1,950m).",
        "Day 2: Trek to Shikha (1,930m) via Australian Camp.",
        "Day 3: Trek to Muktinath (3,800m), visit temples.",
        "Day 4: Trek to Marpha (2,670m), explore the village.",
        "Day 5: Trek to Tukuche (2,590m), drive back to Pokhara and Kathmandu.",
      ],
    },
    {
      id: "attraction-4",
      name: "Everest Base Camp Trek",
      type: "Multi-day Trek",
      location: "Everest Region",
      description: "The ultimate Himalayan adventure to the base of the world's highest peak.",
      duration: "14 Days",
      price: "$1,299",
      imageUrl: "https://images.unsplash.com/photo-1510889612012-6fa7f8d5e9ff?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "attraction-5",
      name: "Annapurna Circuit Trek",
      type: "Multi-day Trek",
      location: "Annapurna Region",
      description: "A classic trek around the Annapurna massif, showcasing diverse landscapes.",
      duration: "16-20 Days",
      price: "$1,499",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "attraction-6",
      name: "Manaslu Circuit Trek",
      type: "Multi-day Trek",
      location: "Manaslu Region",
      description: "A challenging trek around Manaslu, offering remote trails and cultural immersion.",
      duration: "14-16 Days",
      price: "$1,399",
      imageUrl: "https://images.unsplash.com/photo-1544008230-ac1e1fb4f4f4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "attraction-7",
      name: "Langtang Valley Trek",
      type: "Multi-day Trek",
      location: "Langtang Region",
      description: "A scenic trek through alpine meadows and traditional Tamang villages.",
      duration: "8-10 Days",
      price: "$799",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  gallery: [
    {
      id: "gallery-1",
      title: "Everest Summit View",
      description: "Breathtaking view from the top of the world",
      imageUrl:
        "https://images.unsplash.com/photo-1510889612012-6fa7f8d5e9ff?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gallery-2",
      title: "Mountain Sunrise",
      description: "Golden sunrise over the Himalayan peaks",
      imageUrl:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gallery-3",
      title: "Nepal Village Culture",
      description: "Local life and culture in a Himalayan village",
      imageUrl:
        "https://images.unsplash.com/photo-1544085311-4783d4bad56b?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  blog: [
    {
      id: "blog-1",
      title: "How to Prepare for Your First Trek",
      excerpt: "Essential tips and training advice for beginning your Himalayan adventure.",
      date: "March 15, 2026",
      category: "Tips & Advice",
    },
    {
      id: "blog-2",
      title: "Everest Trek: What to Expect",
      excerpt: "A detailed guide about what to expect on the world's most iconic trek.",
      date: "March 10, 2026",
      category: "Guides",
    },
  ],
};

export function loadSiteContent() {
  if (typeof window === "undefined") return defaultSiteContent;

  try {
    const stored = localStorage.getItem(ADMIN_CONTENT_KEY);
    if (!stored) return defaultSiteContent;
    const parsed = JSON.parse(stored) as SiteContent;
    return { ...defaultSiteContent, ...parsed };
  } catch {
    return defaultSiteContent;
  }
}

export function saveSiteContent(content: SiteContent) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ADMIN_CONTENT_KEY, JSON.stringify(content));
}
