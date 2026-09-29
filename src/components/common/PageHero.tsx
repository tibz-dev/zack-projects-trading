interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
}

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-slate py-14 text-white sm:py-16 lg:py-20">
      <div className="site-container max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-yellow">{eyebrow}</p>
        <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-lightgrey sm:text-lg">{intro}</p>
      </div>
    </section>
  );
}
