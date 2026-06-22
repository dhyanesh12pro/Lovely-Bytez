"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

import type { GalleryGroup, ImageKey } from "@/data/site";

type GalleryImage = {
  key: ImageKey;
  src: string;
  alt: string;
  group: GalleryGroup;
  credit: string;
};

const groups: GalleryGroup[] = [
  "Food",
  "Desserts & Drinks",
  "Inside Lovely Bitez",
  "Storefront"
];

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [activeGroup, setActiveGroup] = useState<GalleryGroup | "All">("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const showCredit = process.env.NODE_ENV !== "production";

  const visible = useMemo(() => {
    if (activeGroup === "All") return images;
    return images.filter((image) => image.group === activeGroup);
  }, [activeGroup, images]);

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {(["All", ...groups] as const).map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setActiveGroup(group)}
            className={clsx(
              "min-w-max rounded-brand px-4 py-3 text-sm font-black transition",
              activeGroup === group
                ? "bg-chilli text-white shadow-glow"
                : "bg-white text-charcoal hover:bg-crunch/25"
            )}
          >
            {group}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="masonry">
          {visible.map((image, index) => (
            <button
              key={`${image.key}-${index}`}
              type="button"
              onClick={() => setSelected(image)}
              className="masonry-item group block w-full overflow-hidden rounded-brand bg-white text-left shadow-[0_16px_42px_rgba(22,22,22,0.08)] transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span
                className={clsx(
                  "relative block overflow-hidden",
                  index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1080px) 31vw, (min-width: 720px) 46vw, 94vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </span>
              <span className="block p-4">
                <span className="block text-sm font-black uppercase tracking-[0.12em] text-chilli">
                  {image.group}
                </span>
                <span className="mt-2 block text-sm leading-6 text-charcoal/70">
                  {image.alt}
                </span>
                {showCredit ? (
                  <span className="mt-2 block text-xs leading-5 text-charcoal/50">
                    {image.credit}. Replace with owner-approved originals before public launch.
                  </span>
                ) : null}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-brand border border-dashed border-charcoal/18 bg-white p-8 text-center">
          <h2 className="text-xl font-black text-charcoal">No photos in this group yet</h2>
          <p className="mt-2 text-sm text-charcoal/70">
            Add approved shop or food photos in the central data file.
          </p>
        </div>
      )}

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          className="fixed inset-0 z-[80] grid place-items-center bg-charcoal/90 p-4 backdrop-blur"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-brand bg-charcoal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close gallery image"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-brand bg-cream text-charcoal shadow-soft"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[4/3] max-h-[78vh]">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="92vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
