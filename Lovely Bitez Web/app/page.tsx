import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Flame, MapPin, ShoppingBag, Sparkles } from "lucide-react";

import { HomeHero } from "@/components/HomeHero";
import { JsonLd } from "@/components/JsonLd";
import { LocationPanel } from "@/components/LocationPanel";
import { HoverLift, Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { foodCategories, galleryImages, imageAssets, site, whyItems } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata("home");

const whyIcons = [Flame, Sparkles, Clock3, ShoppingBag];

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <HomeHero />

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Craving map"
              title="Fried chicken, burgers, wraps, sides, desserts, and shakes."
              text="Start with the public menu highlights, then call or order online to confirm current availability and prices."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {foodCategories.map((category) => {
              const image = imageAssets[category.image];
              return (
                <HoverLift key={category.name}>
                  <Link
                    href={category.href}
                    className="group block overflow-hidden rounded-brand bg-white shadow-[0_18px_45px_rgba(22,22,22,0.08)]"
                  >
                    <span className="relative block aspect-[4/3] overflow-hidden bg-charcoal">
                      <Image
                        src={image.src}
                        alt={`${category.name} reference at Lovely Bitez Kundrathur`}
                        fill
                        sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </span>
                    <span className="block p-5">
                      <span className="flex items-center justify-between gap-4">
                        <span className="text-xl font-black tracking-[0] text-charcoal">
                          {category.name}
                        </span>
                        <ArrowRight className="h-5 w-5 text-chilli transition group-hover:translate-x-1" />
                      </span>
                      <span className="mt-3 block text-sm leading-6 text-charcoal/70">
                        {category.description}
                      </span>
                    </span>
                  </Link>
                </HoverLift>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why Lovely Bitez?"
              title="Quick bites with crunch, cream, and local comfort."
              text="Everything here stays grounded in public business details, with no invented ratings, awards, or ranking promises."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item, index) => {
              const Icon = whyIcons[index] ?? Sparkles;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="h-full rounded-brand border border-charcoal/10 bg-cream p-6 shadow-[0_14px_36px_rgba(22,22,22,0.06)]">
                    <div className="grid h-12 w-12 place-items-center rounded-brand bg-chilli text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-xl font-black tracking-[0] text-charcoal">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-charcoal/70">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Craving gallery"
                title="Food-first visuals, ready for owner-approved originals."
                text="The current images are temporary local copies from the supplied public references. Replace them before commercial launch."
              />
              <Link
                href="/gallery"
                className="mt-6 inline-flex items-center gap-2 rounded-brand bg-charcoal px-5 py-3 text-sm font-black text-white transition hover:bg-chilli"
              >
                View Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {galleryImages.slice(0, 3).map((image, index) => (
                <Reveal key={image.key} delay={index * 0.06}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-brand bg-charcoal shadow-soft">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 30vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Find us"
              title="Lovely Bitez in Kundrathur, Thirumudivakkam."
              text="Call ahead for current menu, prices, and opening hours before visiting or ordering."
            />
          </Reveal>
          <div className="mt-10">
            <LocationPanel />
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-crunch">
              {site.business.orderCta}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[0] sm:text-5xl">
              Fried chicken, burgers, and desserts in Kundrathur.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-brand bg-chilli px-6 py-4 text-base font-black text-white transition hover:bg-tomato"
            >
              <ShoppingBag className="h-5 w-5" />
              Order / Contact
            </Link>
            <a
              href={site.business.links.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-brand bg-cream px-6 py-4 text-base font-black text-charcoal transition hover:bg-crunch"
            >
              <MapPin className="h-5 w-5" />
              Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
