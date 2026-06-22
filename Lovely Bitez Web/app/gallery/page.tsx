import { GalleryLightbox } from "@/components/GalleryLightbox";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Motion";
import { galleryImages } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata("gallery");

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" }
        ])}
      />
      <section className="bg-charcoal pb-14 pt-32 text-cream sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-crunch">
            Food photos
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[0] sm:text-6xl">
            Lovely Bitez gallery in Kundrathur.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
            Food, dessert, drink, inside, and storefront references for the
            Lovely Bitez website. Owner-approved originals should replace the
            temporary public references before launch.
          </p>
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <GalleryLightbox images={galleryImages} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
