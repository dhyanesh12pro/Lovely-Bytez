import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";

import { site } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal pb-24 pt-14 text-cream md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        <div>
          <Logo inverse />
          <p className="mt-6 max-w-xl text-base leading-8 text-cream/75">
            {site.business.promise} Visit Lovely Bitez in Kundrathur for fried
            chicken, burgers, desserts, shakes, wraps, and quick bites.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-crunch">
            Pages
          </h2>
          <div className="mt-4 grid gap-3">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-cream/75 transition hover:text-crunch"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-crunch">
            Visit
          </h2>
          <div className="mt-4 grid gap-4 text-sm text-cream/75">
            <a
              href={site.business.links.maps}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 transition hover:text-crunch"
            >
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              <span>{site.business.address.display}</span>
            </a>
            <a
              href={site.business.phoneHref}
              className="flex items-center gap-3 transition hover:text-crunch"
            >
              <Phone className="h-4 w-4" />
              {site.business.phoneDisplay}
            </a>
            <a
              href={site.business.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-crunch"
            >
              <Instagram className="h-4 w-4" />
              @lovely_bitez_official
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs leading-6 text-cream/60 sm:px-6 lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} Lovely Bitez. All rights reserved.
          Menu, prices, offers, and opening hours may change without notice.
        </p>
      </div>
    </footer>
  );
}
