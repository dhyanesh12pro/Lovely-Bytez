"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { site } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = pathname === "/";
  const solid = isScrolled || isOpen || !isHome;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300",
        solid
          ? "border-charcoal/10 bg-cream/95 text-charcoal shadow-[0_8px_30px_rgba(22,22,22,0.08)] backdrop-blur-xl"
          : "border-white/10 bg-transparent text-cream"
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo inverse={!solid} />

        <div className="hidden items-center gap-2 lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-brand px-3 py-2 text-sm font-bold transition hover:bg-crunch/20",
                  active && "bg-crunch/25 text-chilli"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.business.phoneHref}
            className="inline-flex items-center gap-2 rounded-brand border border-current/20 px-4 py-2 text-sm font-black transition hover:border-chilli hover:text-chilli"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href={site.business.links.swiggy}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-brand bg-chilli px-4 py-2 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-charcoal"
          >
            <ShoppingBag className="h-4 w-4" />
            Order
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-brand border border-current/20 lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={clsx(
          "overflow-hidden border-t border-charcoal/10 bg-cream transition-all duration-300 lg:hidden",
          isOpen ? "max-h-[420px]" : "max-h-0 border-transparent"
        )}
      >
        <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-brand px-4 py-3 text-base font-black text-charcoal",
                pathname === item.href ? "bg-crunch/30 text-chilli" : "bg-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={site.business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-brand bg-charcoal px-4 py-3 text-sm font-black text-white"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <a
              href={site.business.links.swiggy}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-brand bg-chilli px-4 py-3 text-sm font-black text-white"
            >
              <ShoppingBag className="h-4 w-4" />
              Order
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
