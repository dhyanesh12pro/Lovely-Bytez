import Link from "next/link";
import { Heart } from "lucide-react";

type LogoProps = {
  inverse?: boolean;
};

export function Logo({ inverse = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-brand"
      aria-label="Lovely Bitez home"
    >
      <span
        className={`relative grid h-11 w-11 place-items-center rounded-brand ${
          inverse ? "bg-cream text-chilli" : "bg-chilli text-cream"
        } shadow-glow`}
        aria-hidden="true"
      >
        <Heart className="h-5 w-5 fill-current" strokeWidth={2.6} />
        <span className="absolute -right-1 top-2 h-3 w-3 rounded-full bg-crunch shadow-[0_0_0_4px_rgba(22,22,22,0.18)]" />
      </span>
      <span className="leading-none">
        <span
          className={`block text-[1.05rem] font-black tracking-[0] ${
            inverse ? "text-cream" : "text-charcoal"
          }`}
        >
          Lovely
        </span>
        <span className="block text-[1.05rem] font-black tracking-[0] text-chilli">
          Bitez
        </span>
      </span>
    </Link>
  );
}
