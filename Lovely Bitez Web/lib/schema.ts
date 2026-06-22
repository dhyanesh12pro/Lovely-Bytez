import { galleryImages, imageAssets, menuItems, site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export function restaurantJsonLd() {
  const business = site.business;

  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "FastFoodRestaurant", "FoodEstablishment"],
    "@id": `${site.siteUrl}/#restaurant`,
    name: business.name,
    url: site.siteUrl,
    image: galleryImages.map((image) => absoluteUrl(image.src)),
    logo: absoluteUrl("/favicon.svg"),
    description: business.shortDescription,
    slogan: site.tagline,
    telephone: business.phoneDisplay,
    priceRange: business.approxPriceText,
    servesCuisine: business.cuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.area,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.countryCode
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Kundrathur"
      },
      {
        "@type": "Place",
        name: "Thirumudivakkam"
      },
      {
        "@type": "City",
        name: "Chennai"
      }
    ],
    hasMap: business.links.maps,
    sameAs: [business.links.instagram, business.links.zomato, business.links.swiggy],
    acceptsReservations: false,
    hasMenu: absoluteUrl("/menu"),
    potentialAction: {
      "@type": "OrderAction",
      target: business.links.swiggy,
      name: "Order online from Lovely Bitez"
    },
    ...(business.schemaOpeningHours
      ? { openingHours: business.schemaOpeningHours }
      : {})
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.siteUrl}/#website`,
    name: site.name,
    url: site.siteUrl,
    publisher: {
      "@id": `${site.siteUrl}/#restaurant`
    },
    inLanguage: site.defaultLocale.replace("_", "-")
  };
}

export function menuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${absoluteUrl("/menu")}#menu`,
    name: "Lovely Bitez Menu",
    hasMenuItem: menuItems.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      image: absoluteUrl(imageAssets[item.image].src),
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStoreOnly",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "INR",
          description: "Please confirm current price before ordering."
        }
      }
    }))
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
