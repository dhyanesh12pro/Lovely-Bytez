import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { MenuClient } from "@/components/MenuClient";
import { Reveal } from "@/components/Motion";
import { menuItems, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, menuJsonLd } from "@/lib/schema";

export const metadata = pageMetadata("menu");

export default function MenuPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" }
          ]),
          menuJsonLd()
        ]}
      />
      <section className="bg-charcoal pb-14 pt-32 text-cream sm:pb-18 sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-crunch">
            Lovely Bitez Menu
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[0] sm:text-6xl">
            Fried chicken, burgers, desserts, and fast food in Kundrathur.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/75">
            Browse public menu highlights for Lovely Bitez Kundrathur. Prices
            are not invented here, so unknown prices display as current-price
            enquiries.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-brand bg-chilli px-5 py-3 text-sm font-black text-white transition hover:bg-tomato"
            >
              <Phone className="h-4 w-4" />
              Call to Enquire
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-brand bg-cream px-5 py-3 text-sm font-black text-charcoal transition hover:bg-crunch"
            >
              Order Options
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8 rounded-brand border border-crunch/50 bg-white p-4 text-sm font-bold leading-7 text-charcoal shadow-[0_12px_28px_rgba(22,22,22,0.06)]">
              Menu and prices may vary. Please confirm before ordering.
            </div>
          </Reveal>
          <MenuClient items={menuItems} />
        </div>
      </section>
    </>
  );
}
