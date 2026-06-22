import { Instagram, MapPin, Phone, ShoppingBag } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { LocationPanel } from "@/components/LocationPanel";
import { Reveal } from "@/components/Motion";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />
      <section className="bg-charcoal pb-14 pt-32 text-cream sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-crunch">
            Contact / Order
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[0] sm:text-6xl">
            Order or contact Lovely Bitez in Kundrathur.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
            Visit us at 10, Kavarai Street, Kundrathur, Thirumudivakkam,
            Chennai 600069. Call {site.business.phoneDisplay} for enquiries,
            takeaway, or availability.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <div className="rounded-brand bg-charcoal p-6 text-cream shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-crunch">
                {site.business.orderCta}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[0] sm:text-4xl">
                Call, find us, or order online.
              </h2>
              <p className="mt-4 text-base leading-8 text-cream/75">
                Current menu, prices, offers, and opening hours may change.
                Please confirm before ordering.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={site.business.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-brand bg-chilli px-5 py-4 text-sm font-black text-white transition hover:bg-tomato"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={site.business.links.swiggy}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-brand bg-cream px-5 py-4 text-sm font-black text-charcoal transition hover:bg-crunch"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Order Online
                </a>
                <a
                  href={site.business.links.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-brand border border-cream/15 bg-cream/10 px-5 py-4 text-sm font-black text-cream transition hover:bg-cream hover:text-charcoal"
                >
                  <MapPin className="h-4 w-4" />
                  Directions
                </a>
                <a
                  href={site.business.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-brand border border-cream/15 bg-cream/10 px-5 py-4 text-sm font-black text-cream transition hover:bg-cream hover:text-charcoal"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
              {site.business.whatsappHref ? (
                <a
                  href={site.business.whatsappHref}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-brand bg-leaf px-5 py-4 text-sm font-black text-white"
                >
                  WhatsApp
                </a>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LocationPanel />
        </div>
      </section>
    </>
  );
}
