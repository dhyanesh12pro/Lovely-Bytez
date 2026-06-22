type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-black uppercase tracking-[0.18em] text-chilli">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-black tracking-[0] text-charcoal sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-8 text-charcoal/70">{text}</p> : null}
    </div>
  );
}
