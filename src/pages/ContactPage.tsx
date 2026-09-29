import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { QuoteForm } from '../components/forms/QuoteForm';
import { Seo } from '../components/seo/Seo';
import { contactLinks, siteConfig } from '../config/site';
import { content } from '../data/content';

export default function ContactPage() {
  return (
    <>
      <Seo
        title={content.seo.contact.title}
        description={content.seo.contact.description}
        path="/contact"
      />
      <PageHero
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        intro={content.contact.intro}
      />

      <section className="section-spacing bg-offwhite">
        <div className="site-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <aside className="space-y-6">
            <div className="rounded-lg bg-slate p-6 text-white sm:p-8">
              <h2 className="text-3xl font-bold">{content.contact.detailsTitle}</h2>
              <address className="mt-6 space-y-4 not-italic">
                <a
                  href={contactLinks.phone}
                  className="flex min-h-11 items-start gap-3 text-lightgrey hover:text-white"
                >
                  <Phone className="mt-1 shrink-0 text-yellow" aria-hidden="true" size={20} />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-start gap-3 text-lightgrey hover:text-white"
                >
                  <MessageCircle
                    className="mt-1 shrink-0 text-yellow"
                    aria-hidden="true"
                    size={20}
                  />
                  <span>
                    {content.common.whatsapp} {siteConfig.phoneDisplay}
                  </span>
                </a>
                <a
                  href={contactLinks.email}
                  className="flex min-h-11 items-start gap-3 break-all text-lightgrey hover:text-white"
                >
                  <Mail className="mt-1 shrink-0 text-yellow" aria-hidden="true" size={20} />
                  <span>{siteConfig.email}</span>
                </a>
                <div className="flex items-start gap-3 text-lightgrey">
                  <MapPin className="mt-1 shrink-0 text-yellow" aria-hidden="true" size={20} />
                  <span>{siteConfig.address}</span>
                </div>
              </address>
            </div>

            <div className="overflow-hidden rounded-lg border border-lightgrey bg-white shadow-card">
              <div className="p-5">
                <h2 className="text-2xl font-bold">{content.contact.mapTitle}</h2>
              </div>
              <iframe
                title={`${siteConfig.businessName} map location`}
                src={contactLinks.mapEmbed}
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
