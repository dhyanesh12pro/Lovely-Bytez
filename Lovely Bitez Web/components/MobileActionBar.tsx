import { MapPin, Phone, ShoppingBag } from "lucide-react";

import { site } from "@/data/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-cream/95 px-3 py-2 shadow-[0_-12px_32px_rgba(22,22,22,0.14)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={site.business.phoneHref}
          className="inline-flex items-center justify-center gap-1 rounded-brand bg-charcoal px-2 py-3 text-xs font-black text-white"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={site.business.links.maps}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1 rounded-brand bg-white px-2 py-3 text-xs font-black text-charcoal"
        >
          <MapPin className="h-4 w-4" />
          Directions
        </a>
        <a
          href={site.business.links.swiggy}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1 rounded-brand bg-chilli px-2 py-3 text-xs font-black text-white"
        >
          <ShoppingBag className="h-4 w-4" />
          Order
        </a>
      </div>
    </div>
  );
}
