import { ArrowRight } from 'lucide-react';
import { content } from '../../data/content';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '../../types/content';
import { Icon } from './Icon';

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-lightgrey bg-white p-6 shadow-card">
      <div className="mb-5 flex size-12 items-center justify-center rounded-md bg-offwhite text-maroon">
        <Icon name={service.icon} />
      </div>
      <h3 className="text-2xl font-bold text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate">{service.shortDescription}</p>
      <Link
        to={`/contact?service=${encodeURIComponent(service.slug)}`}
        className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-maroon hover:underline"
      >
        {content.common.requestQuote} <ArrowRight aria-hidden="true" size={18} />
      </Link>
    </article>
  );
}
