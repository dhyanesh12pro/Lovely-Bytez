import Link from "next/link";
import { ArrowRight, Clock, Instagram, MapPin, Phone, ShoppingBag } from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { LocationPanel } from "@/components/LocationPanel";
import { Reveal } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata("about");

const highlights = ["Chicken", "Burgers", "Snacks", "Desserts", "Shakes"];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
        ])}
      />
      <section className="bg-charcoal pb-14 pt-32 text-cream sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-crunch">
            About + Visit Us
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[0] sm:text-6xl">
            About Lovely Bitez Kundrathur.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
            {site.business.aboutCopy}
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Taste the freshness"
              title="A local quick-bites stop for everyday cravings."
              text={site.business.promise}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full bg-white px-4 py-2 text-sm font-black text-charcoal shadow-[0_10px_26px_rgba(22,22,22,0.06)]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-brand bg-white p-5 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-brand bg-cream p-5">
                  <MapPin className="h-6 w-6 text-chilli" />
                  <h2 className="mt-4 text-xl font-black text-charcoal">Address</h2>
                  <p className="mt-2 text-sm leading-7 text-charcoal/70">
                    {site.business.address.display}
                  </p>
                </div>
                <div className="rounded-brand bg-cream p-5">
                  <Clock className="h-6 w-6 text-chilli" />
                  <h2 className="mt-4 text-xl font-black text-charcoal">Open hours</h2>
                  <p className="mt-2 text-sm leading-7 text-charcoal/70">
                    {site.business.openingHoursText}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href={site.business.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-brand bg-chilli px-4 py-3 text-sm font-black text-white transition hover:bg-charcoal"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href={site.business.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-brand bg-charcoal px-4 py-3 text-sm font-black text-white transition hover:bg-chilli"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <LocationPanel />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-chilli">
              Plan a visit
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[0] text-charcoal">
              Find fast food, fried chicken, burgers, and desserts in Kundrathur.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-brand bg-charcoal px-6 py-4 text-base font-black text-white transition hover:bg-chilli"
          >
            <ShoppingBag className="h-5 w-5" />
            Order / Contact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
