import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-cream px-4 py-28">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-chilli">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-[0] text-charcoal sm:text-6xl">
          This bite is not on the menu.
        </h1>
        <p className="mt-5 text-base leading-8 text-charcoal/70">
          Head back to the Lovely Bitez home page or browse the menu for current
          food options.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-brand bg-chilli px-6 py-4 text-sm font-black text-white transition hover:bg-charcoal"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}
