import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../../data/content';
import type { MaterialCategory } from '../../types/content';
import { Icon } from './Icon';

interface MaterialCardProps {
  category: MaterialCategory;
  headingLevel?: 'h2' | 'h3';
}

export function MaterialCard({ category, headingLevel = 'h3' }: MaterialCardProps) {
  const Heading = headingLevel;

  return (
    <article className="flex h-full flex-col rounded-lg border border-lightgrey bg-white p-6 shadow-card">
      <div className="mb-5 flex size-12 items-center justify-center rounded-md bg-slate text-yellow">
        <Icon name={category.icon} />
      </div>
      <Heading className="text-2xl font-bold text-ink">{category.title}</Heading>
      <p className="mt-3 leading-7 text-slate">{category.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate">
        {category.examples.map((example) => (
          <li key={example} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-maroon" />
            <span>{example}</span>
          </li>
        ))}
      </ul>
      <Link
        to={`/contact?material=${encodeURIComponent(category.slug)}`}
        className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-maroon hover:underline"
      >
        {content.materials.action} <ArrowRight aria-hidden="true" size={18} />
      </Link>
    </article>
  );
}
