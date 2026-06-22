import { Clock, Instagram, MapPin, Navigation, Phone } from "lucide-react";

import { site } from "@/data/site";

export function LocationPanel() {
  return (
    <div className="grid gap-6 rounded-brand bg-white p-5 shadow-soft lg:grid-cols-[1fr_1.1fr] lg:p-6">
      <div className="grid gap-4">
        <div className="rounded-brand bg-cream p-5">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-chilli">
            Lovely Bitez Kundrathur
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-[0] text-charcoal">
            Visit us at Kavarai Street
          </h2>
          <p className="mt-3 text-sm leading-7 text-charcoal/70">
            {site.business.address.display}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={site.business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-brand bg-chilli px-4 py-3 text-sm font-black text-white transition hover:bg-charcoal"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href={site.business.links.maps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-brand bg-charcoal px-4 py-3 text-sm font-black text-white transition hover:bg-chilli"
          >
            <Navigation className="h-4 w-4" />
            Directions
          </a>
          <a
            href={site.business.links.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-brand border border-charcoal/14 bg-white px-4 py-3 text-sm font-black text-charcoal transition hover:border-chilli hover:text-chilli"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
          <div className="inline-flex items-center justify-center gap-2 rounded-brand border border-charcoal/14 bg-white px-4 py-3 text-center text-sm font-black text-charcoal">
            <Clock className="h-4 w-4 text-chilli" />
            {site.business.openingHoursText}
          </div>
        </div>
      </div>
      <div className="min-h-[320px] overflow-hidden rounded-brand bg-charcoal">
        <iframe
          title="Map to Lovely Bitez Kundrathur"
          src={site.business.links.mapsEmbed}
          className="h-full min-h-[320px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
