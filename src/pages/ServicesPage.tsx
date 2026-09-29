import { CheckCircle2 } from 'lucide-react';
import { ButtonLink } from '../components/common/ButtonLink';
import { Icon } from '../components/common/Icon';
import { PageHero } from '../components/common/PageHero';
import { Seo } from '../components/seo/Seo';
import { content } from '../data/content';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <Seo title={content.seo.services.title} description={content.seo.services.description} path="/services" />
      <PageHero eyebrow={content.services.eyebrow} title={content.services.title} intro={content.services.intro} />

      <section className="section-spacing bg-offwhite">
        <div className="site-container space-y-6">
          {services.map((service, index) => (
            <article key={service.slug} id={service.slug} className="grid overflow-hidden rounded-lg border border-lightgrey bg-white shadow-card lg:grid-cols-[0.35fr_0.65fr]">
              <div className={`flex min-h-52 items-center justify-center p-8 ${index % 2 === 0 ? 'bg-slate' : 'bg-ink'}`}>
                <Icon name={service.icon} className="text-yellow" size={72} />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <h2 className="text-3xl font-bold sm:text-4xl">{service.title}</h2>
                <p className="mt-4 max-w-3xl leading-7 text-slate">{service.description}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-slate">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" size={18} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink to={`/contact?service=${encodeURIComponent(service.slug)}`} className="mt-7">{content.common.requestQuote}</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
