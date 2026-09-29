import { MapPin, UserRound } from 'lucide-react';
import { CredentialsStrip } from '../components/common/CredentialsStrip';
import { PageHero } from '../components/common/PageHero';
import { Seo } from '../components/seo/Seo';
import { siteConfig } from '../config/site';
import { content } from '../data/content';

export default function AboutPage() {
  return (
    <>
      <Seo
        title={content.seo.about.title}
        description={content.seo.about.description}
        path="/about"
      />
      <PageHero
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        intro={content.about.intro}
      />

      <section className="section-spacing bg-offwhite">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <article>
            <h2 className="text-3xl font-bold sm:text-4xl">{content.about.storyTitle}</h2>
            <p className="mt-5 leading-8 text-slate">{content.about.story}</p>
          </article>
          <article className="border-l-4 border-maroon bg-white p-6 shadow-card sm:p-8">
            <MapPin className="text-maroon" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold">{content.about.serviceAreaTitle}</h2>
            <p className="mt-4 leading-7 text-slate">{content.about.serviceAreaBody}</p>
            <p className="mt-4 font-semibold text-ink">{siteConfig.address}</p>
          </article>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="site-container">
          <h2 className="section-title">{content.about.valuesTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {content.about.values.map((value) => (
              <article key={value.title} className="border-t-2 border-maroon pt-5">
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate py-12 text-white">
        <div className="site-container flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex size-12 items-center justify-center rounded-md bg-ink text-yellow">
            <UserRound aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-yellow">
              {content.about.managementTitle}
            </p>
            <h2 className="text-2xl font-bold">{siteConfig.contactPerson}</h2>
            <p className="text-lightgrey">{siteConfig.contactRole}</p>
          </div>
        </div>
      </section>

      <CredentialsStrip />
    </>
  );
}
