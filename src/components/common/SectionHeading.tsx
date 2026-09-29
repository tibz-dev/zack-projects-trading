interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const titleColor = tone === 'dark' ? 'text-white' : 'text-ink';
  const introColor = tone === 'dark' ? 'text-lightgrey' : 'text-slate';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-base leading-7 sm:text-lg ${introColor}`}>{intro}</p>
      ) : null}
    </div>
  );
}
