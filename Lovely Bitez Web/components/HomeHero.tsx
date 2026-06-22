"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ShoppingBag } from "lucide-react";

import { imageAssets, site } from "@/data/site";

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="grain relative min-h-[760px] overflow-hidden bg-charcoal pb-20 pt-28 text-cream sm:pt-32 lg:min-h-screen lg:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(213,30,42,0.34),transparent_28%),radial-gradient(circle_at_84%_16%,rgba(246,183,60,0.24),transparent_26%),linear-gradient(135deg,rgba(22,22,22,0.98),rgba(22,22,22,0.82))]" />
      <span className="steam absolute left-[12%] top-[28%] h-24 w-8 animate-steam" />
      <span className="steam absolute right-[18%] top-[20%] h-28 w-10 animate-steam [animation-delay:1.2s]" />
      <span className="steam absolute right-[44%] top-[38%] h-20 w-8 animate-steam [animation-delay:2.4s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="inline-flex rounded-full border border-cream/15 bg-cream/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-crunch backdrop-blur">
              Kundrathur - Dine-in - Takeaway - Delivery
            </p>
            <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.96] tracking-[0] text-cream sm:text-7xl lg:text-8xl">
              {site.business.heroHeadline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/75 sm:text-xl">
              {site.business.heroCopy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-brand bg-chilli px-6 py-4 text-base font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-tomato"
              >
                <ShoppingBag className="h-5 w-5" />
                Order Now
              </Link>
              <a
                href={site.business.links.maps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-brand border border-cream/20 bg-cream/10 px-6 py-4 text-base font-black text-cream backdrop-blur transition hover:-translate-y-0.5 hover:bg-cream hover:text-charcoal"
              >
                <MapPin className="h-5 w-5" />
                Find Us
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative min-h-[520px] lg:min-h-[650px]" aria-label="Lovely Bitez food collage">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, rotate: -4, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, rotate: -2, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="absolute left-0 top-10 h-[320px] w-[66%] overflow-hidden rounded-brand border border-white/12 bg-white shadow-soft sm:h-[420px]"
          >
            <Image
              src={imageAssets.icecreamChicken.src}
              alt={imageAssets.icecreamChicken.alt}
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 80vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, rotate: 6, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, rotate: 3, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: "easeOut" }}
            className="absolute right-0 top-0 h-[260px] w-[48%] overflow-hidden rounded-brand border border-white/12 bg-white shadow-soft sm:h-[320px]"
          >
            <Image
              src={imageAssets.burger.src}
              alt={imageAssets.burger.alt}
              fill
              priority
              sizes="(min-width: 1024px) 30vw, 54vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, rotate: -2, y: 34 }}
            animate={reduceMotion ? undefined : { opacity: 1, rotate: 2, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32, ease: "easeOut" }}
            className="absolute bottom-8 right-5 h-[280px] w-[68%] overflow-hidden rounded-brand border border-white/12 bg-white shadow-soft sm:h-[360px]"
          >
            <Image
              src={imageAssets.desserts.src}
              alt={imageAssets.desserts.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 78vw"
              className="object-cover"
            />
          </motion.div>

          {["left-[14%] top-[8%]", "right-[10%] top-[48%]", "left-[26%] bottom-[8%]"].map(
            (position) => (
              <span
                key={position}
                className={`absolute ${position} h-3 w-3 rounded-[3px] bg-crunch shadow-glow motion-safe:animate-float`}
                aria-hidden="true"
              />
            )
          )}
          <span
            className="absolute bottom-20 left-4 rounded-full border border-crunch/40 bg-charcoal/80 px-4 py-3 text-sm font-black text-crunch shadow-glow backdrop-blur"
            aria-hidden="true"
          >
            Crunch & Cream
          </span>
        </div>
      </div>
    </section>
  );
}
