"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Phone, Star } from "lucide-react";
import clsx from "clsx";

import {
  imageAssets,
  menuCategories,
  type MenuCategory,
  type MenuItem,
  site
} from "@/data/site";
import { slugFromCategory } from "@/lib/seo";

type Filter = "All" | MenuCategory;

export function MenuClient({ items }: { items: MenuItem[] }) {
  const [active, setActive] = useState<Filter>("All");
  const tabs: Filter[] = ["All", ...menuCategories];

  const grouped = useMemo(() => {
    return menuCategories.map((category) => ({
      category,
      items: items.filter((item) => item.category === category)
    }));
  }, [items]);

  const visibleGroups =
    active === "All" ? grouped : grouped.filter((group) => group.category === active);

  return (
    <div>
      <div
        className="sticky top-20 z-20 -mx-4 overflow-x-auto border-y border-charcoal/10 bg-cream/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-brand sm:border"
        aria-label="Menu categories"
      >
        <div className="flex min-w-max gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={clsx(
                "rounded-brand px-4 py-3 text-sm font-black transition",
                active === tab
                  ? "bg-chilli text-white shadow-glow"
                  : "bg-white text-charcoal hover:bg-crunch/25"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-10">
        {visibleGroups.map((group) => (
          <section key={group.category} id={slugFromCategory(group.category)}>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-chilli">
                  Menu
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-[0] text-charcoal sm:text-3xl">
                  {group.category}
                </h2>
              </div>
              <p className="rounded-full bg-white px-4 py-2 text-sm font-bold text-charcoal/60">
                {group.items.length} item{group.items.length === 1 ? "" : "s"}
              </p>
            </div>

            {group.items.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => {
                  const image = imageAssets[item.image];
                  return (
                    <article
                      key={`${group.category}-${item.name}`}
                      className="group overflow-hidden rounded-brand border border-charcoal/10 bg-white shadow-[0_18px_45px_rgba(22,22,22,0.08)] transition hover:-translate-y-1 hover:shadow-soft"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                        <Image
                          src={image.src}
                          alt={`${item.name} reference image at Lovely Bitez Kundrathur`}
                          fill
                          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        {item.featured ? (
                          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-charcoal/80 px-3 py-1 text-xs font-black text-crunch backdrop-blur">
                            <Star className="h-3.5 w-3.5 fill-current" />
                            Featured
                          </span>
                        ) : null}
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xl font-black tracking-[0] text-charcoal">
                            {item.name}
                          </h3>
                          <p className="shrink-0 rounded-full bg-cream px-3 py-1 text-xs font-black text-chilli">
                            {item.price === null ? "See current price" : `Rs. ${item.price}`}
                          </p>
                        </div>
                        <p className="mt-3 min-h-14 text-sm leading-6 text-charcoal/70">
                          {item.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-charcoal/10 px-3 py-1 text-xs font-bold text-charcoal/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={site.business.phoneHref}
                          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-brand bg-charcoal px-4 py-3 text-sm font-black text-white transition hover:bg-chilli"
                        >
                          <Phone className="h-4 w-4" />
                          Order / Enquire
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-brand border border-dashed border-charcoal/18 bg-white p-8 text-center">
                <h3 className="text-xl font-black text-charcoal">No items added yet</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/70">
                  This category is ready for verified items when the owner updates
                  the central data file.
                </p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
