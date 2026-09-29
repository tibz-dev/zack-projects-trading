import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactLinks, siteConfig } from '../../config/site';
import { content } from '../../data/content';
import { navigation } from '../../data/navigation';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-slate pb-20 text-white lg:pb-0">
      <div className="site-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-3 lg:py-14">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-6 text-lightgrey">{content.footer.description}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold">{content.footer.quickLinksTitle}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex min-h-10 items-center text-lightgrey hover:text-white hover:underline" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">{content.footer.contactTitle}</h2>
          <address className="mt-4 space-y-3 not-italic text-sm text-lightgrey">
            <a className="flex min-h-10 items-start gap-3 hover:text-white" href={contactLinks.phone}>
              <Phone className="mt-1 shrink-0" aria-hidden="true" size={18} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a className="flex min-h-10 items-start gap-3 break-all hover:text-white" href={contactLinks.email}>
              <Mail className="mt-1 shrink-0" aria-hidden="true" size={18} />
              <span>{siteConfig.email}</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0" aria-hidden="true" size={18} />
              <span>{siteConfig.address}</span>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-2 py-5 text-xs text-lightgrey sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.businessName}. {content.footer.rights}</span>
          <span>{siteConfig.serviceArea}</span>
        </div>
      </div>
    </footer>
  );
}
