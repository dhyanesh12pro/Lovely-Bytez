const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const siteUrl = configuredSiteUrl || "https://www.lovelybitez.in";

export type ImageKey =
  | "meals"
  | "foodShopfront"
  | "burger"
  | "desserts"
  | "icecreamChicken";

export type MenuCategory =
  | "Fried Chicken"
  | "Burgers"
  | "Wraps & Sandwiches"
  | "Sides"
  | "Desserts"
  | "Drinks"
  | "Vegetarian";

export type MenuItem = {
  name: string;
  category: MenuCategory;
  description: string;
  price: number | null;
  tags: string[];
  featured?: boolean;
  image: ImageKey;
};

export type GalleryGroup =
  | "Food"
  | "Desserts & Drinks"
  | "Inside Lovely Bitez"
  | "Storefront";

export const site = {
  name: "Lovely Bitez",
  tagline: "Taste the freshness",
  siteUrl,
  defaultLocale: "en_IN",
  business: {
    name: "Lovely Bitez",
    primaryCategory:
      "Fast food, fried chicken, burgers, desserts, cafe-style snacks, shakes, and wraps.",
    shortDescription:
      "Lovely Bitez is a quick-bites outlet in Kundrathur for fried chicken, burgers, wraps, fries, desserts, shakes, and cafe favourites.",
    heroHeadline: "Fresh. Juicy. Crispy.",
    heroCopy:
      "Lovely Bitez brings together crispy chicken, loaded burgers, cafe favourites, desserts, shakes, and more for every kind of craving in Kundrathur.",
    aboutCopy:
      "Lovely Bitez is a quick-bites destination in Kundrathur for fried chicken, burgers, wraps, fries, desserts, shakes, and cafe favourites. Drop in for a quick snack, bring your friends, or order your comfort food to your door.",
    promise: "Made for the crunch. Built for the craving. Served with flavour.",
    orderCta: "Cravings do not wait. Call, find us, or order online.",
    phoneDisplay: "+91 74485 56600",
    phoneHref: "tel:+917448556600",
    whatsappHref: null as string | null,
    openingHoursText: "12:00 PM\u201310:00 PM (please call to confirm)",
    schemaOpeningHours: null as string[] | null,
    approxPriceText: "Approx. Rs. 350 for two. Please confirm current prices before ordering.",
    address: {
      streetAddress: "No. 10, Kavarai Street",
      area: "Kundrathur, Thirumudivakkam",
      city: "Chennai",
      region: "Tamil Nadu",
      postalCode: "600069",
      countryCode: "IN",
      display:
        "No. 10, Kavarai Street, Kundrathur, Thirumudivakkam, Chennai, Tamil Nadu 600069, India"
    },
    geo: {
      latitude: null as number | null,
      longitude: null as number | null
    },
    links: {
      maps:
        "https://www.google.com/maps/search/?api=1&query=Lovely%20Bitez%2C%2010%20Kavarai%20Street%2C%20Kundrathur%2C%20Chennai%20600069",
      mapsEmbed:
        "https://www.google.com/maps?q=Lovely%20Bitez%2C%2010%20Kavarai%20Street%2C%20Kundrathur%2C%20Chennai%20600069&output=embed",
      instagram: "https://www.instagram.com/lovely_bitez_official/",
      swiggy:
        "https://www.swiggy.com/city/chennai/lovely-bitez-kavarai-st-bazzar-street-rest761692",
      zomato: "https://www.zomato.com/chennai/lovely-bitez-thirumudivakkam"
    },
    serviceOptions: ["Dine-in indoor seating", "Takeaway", "Home delivery"],
    mealService: ["Lunch", "Dinner"],
    cuisine: [
      "Fried chicken",
      "Burgers",
      "Wraps",
      "Sandwiches",
      "Desserts",
      "Ice cream",
      "Shakes",
      "Cafe-style snacks"
    ]
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  pages: {
    home: {
      path: "/",
      title: "Lovely Bitez Kundrathur | Fried Chicken, Burgers, Desserts",
      description:
        "Visit Lovely Bitez in Kundrathur, Thirumudivakkam for fried chicken, burgers, wraps, fries, desserts, shakes, dine-in, takeaway, and delivery.",
      ogTitle: "Lovely Bitez Kundrathur",
      ogDescription:
        "Fresh, juicy, crispy bites in Kundrathur: fried chicken, burgers, desserts, shakes, wraps, and cafe favourites."
    },
    menu: {
      path: "/menu",
      title: "Lovely Bitez Menu | Fried Chicken, Burgers, Desserts in Kundrathur",
      description:
        "Explore the Lovely Bitez Kundrathur menu with fried chicken, burgers, wraps, sandwiches, sides, desserts, drinks, and vegetarian-friendly options.",
      ogTitle: "Lovely Bitez Menu",
      ogDescription:
        "Browse public menu highlights from Lovely Bitez Kundrathur. Current prices should be confirmed before ordering."
    },
    gallery: {
      path: "/gallery",
      title: "Lovely Bitez Gallery | Food Photos and Shopfront in Kundrathur",
      description:
        "See food, dessert, drink, inside, and storefront photos for Lovely Bitez in Kundrathur, Chennai.",
      ogTitle: "Lovely Bitez Gallery",
      ogDescription:
        "A visual look at Lovely Bitez food, desserts, drinks, and Kundrathur outlet references."
    },
    about: {
      path: "/about",
      title: "About Lovely Bitez Kundrathur | Visit Us in Thirumudivakkam",
      description:
        "Learn about Lovely Bitez, a quick-bites destination in Kundrathur, Thirumudivakkam for chicken, burgers, snacks, desserts, and shakes.",
      ogTitle: "About Lovely Bitez Kundrathur",
      ogDescription:
        "Plan your visit to Lovely Bitez at No. 10, Kavarai Street, Kundrathur, Thirumudivakkam, Chennai 600069."
    },
    contact: {
      path: "/contact",
      title: "Contact Lovely Bitez | Order Food in Kundrathur",
      description:
        "Call Lovely Bitez Kundrathur, get directions, order online through the supplied listing, or connect on Instagram.",
      ogTitle: "Contact Lovely Bitez",
      ogDescription:
        "Call, find, or order from Lovely Bitez in Kundrathur, Thirumudivakkam."
    }
  }
} as const;

export const imageAssets: Record<
  ImageKey,
  {
    src: string;
    alt: string;
    group: GalleryGroup;
    credit: string;
  }
> = {
  // TODO: Replace temporary public-reference images with owner-approved original photos before final launch.
  meals: {
    src: "/images/lovely-bitez-meals.jpg",
    alt: "Food and meal collage for Lovely Bitez Kundrathur",
    group: "Food",
    credit: "Temporary public reference image from Restaurant Guru"
  },
  foodShopfront: {
    src: "/images/lovely-bitez-food-shopfront.jpg",
    alt: "Food collage with a Lovely Bitez shopfront reference",
    group: "Storefront",
    credit: "Temporary public reference image from Restaurant Guru"
  },
  burger: {
    src: "/images/lovely-bitez-burger.jpg",
    alt: "Burger collage and promotional food reference for Lovely Bitez",
    group: "Food",
    credit: "Temporary public reference image from Restaurant Guru"
  },
  desserts: {
    src: "/images/lovely-bitez-desserts.jpg",
    alt: "Waffle, mojito, and sizzling brownie dessert collage",
    group: "Desserts & Drinks",
    credit: "Temporary public reference image from Restaurant Guru"
  },
  icecreamChicken: {
    src: "/images/lovely-bitez-icecream-chicken.jpg",
    alt: "Ice cream, burger, and fried chicken food collage",
    group: "Food",
    credit: "Temporary public reference image from Restaurant Guru"
  }
};

export const foodCategories = [
  {
    name: "Fried Chicken",
    href: "/menu#fried-chicken",
    image: "icecreamChicken" as ImageKey,
    description: "Crispy chicken favourites for quick cravings."
  },
  {
    name: "Burgers",
    href: "/menu#burgers",
    image: "burger" as ImageKey,
    description: "Chicken burgers and big burger bites."
  },
  {
    name: "Wraps",
    href: "/menu#wraps-sandwiches",
    image: "meals" as ImageKey,
    description: "Wraps and sandwiches for on-the-go meals."
  },
  {
    name: "Sides",
    href: "/menu#sides",
    image: "meals" as ImageKey,
    description: "Fries, onion rings, cheese balls, and more."
  },
  {
    name: "Desserts",
    href: "/menu#desserts",
    image: "desserts" as ImageKey,
    description: "Waffles, sizzling brownie, and ice cream."
  },
  {
    name: "Shakes",
    href: "/menu#drinks",
    image: "desserts" as ImageKey,
    description: "Mojitos, shakes, and cool sips."
  }
];

export const whyItems = [
  {
    title: "Crispy favourites",
    text: "Fried chicken, popcorn, fries, and crunchy sides for snack plans."
  },
  {
    title: "Big flavours",
    text: "Burgers, wraps, sandwiches, and loaded bites built for cravings."
  },
  {
    title: "Quick bites",
    text: "Cafe-style snacks, desserts, shakes, and ice cream in one place."
  },
  {
    title: "Dine-in & takeaway",
    text: "Visit the Kundrathur outlet, pick up food, or use the supplied ordering listing."
  }
];

export const menuCategories: MenuCategory[] = [
  "Fried Chicken",
  "Burgers",
  "Wraps & Sandwiches",
  "Sides",
  "Desserts",
  "Drinks",
  "Vegetarian"
];

export const menuItems: MenuItem[] = [
  {
    name: "Fried chicken",
    category: "Fried Chicken",
    description: "Crispy chicken bites made for the crunch and the craving.",
    price: null,
    tags: ["Non-veg", "Publicly mentioned"],
    featured: true,
    image: "icecreamChicken"
  },
  {
    name: "Chicken leg piece / chicken bucket",
    category: "Fried Chicken",
    description: "Chicken pieces and bucket-style portions for sharing or solo cravings.",
    price: null,
    tags: ["Non-veg", "Publicly mentioned"],
    featured: true,
    image: "meals"
  },
  {
    name: "Chicken popcorn",
    category: "Fried Chicken",
    description: "Small crispy chicken bites for snacking.",
    price: null,
    tags: ["Non-veg", "Publicly mentioned"],
    image: "icecreamChicken"
  },
  {
    name: "Chicken burger / big burger",
    category: "Burgers",
    description: "A chicken burger option for fast-food cravings in Kundrathur.",
    price: null,
    tags: ["Non-veg", "Publicly mentioned"],
    featured: true,
    image: "burger"
  },
  {
    name: "Chicken wrap",
    category: "Wraps & Sandwiches",
    description: "A wrapped chicken bite for quick lunch, dinner, or takeaway.",
    price: null,
    tags: ["Non-veg", "Publicly mentioned"],
    image: "meals"
  },
  {
    name: "Chicken sandwiches",
    category: "Wraps & Sandwiches",
    description: "Cafe-style chicken sandwiches listed among public menu references.",
    price: null,
    tags: ["Non-veg", "Publicly mentioned"],
    image: "foodShopfront"
  },
  {
    name: "Chicken loaded fries",
    category: "Sides",
    description: "Fries with chicken-style loaded toppings noted in public references.",
    price: null,
    tags: ["Non-veg", "Publicly mentioned"],
    featured: true,
    image: "meals"
  },
  {
    name: "French fries",
    category: "Sides",
    description: "A classic side for burgers, wraps, and fried chicken orders.",
    price: null,
    tags: ["Vegetarian-friendly option", "Publicly mentioned"],
    image: "meals"
  },
  {
    name: "Cheese balls",
    category: "Vegetarian",
    description: "A cheesy snack option listed in public Lovely Bitez references.",
    price: null,
    tags: ["Vegetarian-friendly option", "Publicly mentioned"],
    image: "foodShopfront"
  },
  {
    name: "Onion rings",
    category: "Vegetarian",
    description: "Crispy rings for a crunchy side order.",
    price: null,
    tags: ["Vegetarian-friendly option", "Publicly mentioned"],
    image: "meals"
  },
  {
    name: "Momos / dumplings",
    category: "Sides",
    description: "Dumpling-style snack bites included in public item references.",
    price: null,
    tags: ["Publicly mentioned"],
    image: "foodShopfront"
  },
  {
    name: "Waffles",
    category: "Desserts",
    description: "A dessert option shown in public visual references.",
    price: null,
    tags: ["Dessert", "Publicly mentioned"],
    featured: true,
    image: "desserts"
  },
  {
    name: "Sizzling brownie",
    category: "Desserts",
    description: "A warm dessert favourite from the public menu references.",
    price: null,
    tags: ["Dessert", "Publicly mentioned"],
    featured: true,
    image: "desserts"
  },
  {
    name: "Ice cream",
    category: "Desserts",
    description: "Cool scoops for a dessert finish.",
    price: null,
    tags: ["Dessert", "Publicly mentioned"],
    image: "icecreamChicken"
  },
  {
    name: "Mojitos",
    category: "Drinks",
    description: "A cool drink option from the public Lovely Bitez references.",
    price: null,
    tags: ["Drink", "Publicly mentioned"],
    image: "desserts"
  },
  {
    name: "Shakes",
    category: "Drinks",
    description: "Shake options for dessert-style refreshment.",
    price: null,
    tags: ["Drink", "Publicly mentioned"],
    featured: true,
    image: "desserts"
  }
];

export const galleryImages = Object.entries(imageAssets).map(([key, image]) => ({
  key: key as ImageKey,
  ...image
}));
