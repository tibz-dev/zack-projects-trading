import { useEffect } from 'react';
import { siteConfig } from '../../config/site';

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(property ? 'property' : 'name', name);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${siteConfig.businessName}`;
    const canonicalUrl = `${siteConfig.siteUrl.replace(/\/$/, '')}${path}`;
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonicalUrl, true);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const existing = document.getElementById('local-business-jsonld');
    existing?.remove();

    const structuredData = document.createElement('script');
    structuredData.id = 'local-business-jsonld';
    structuredData.type = 'application/ld+json';
    structuredData.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.addressStructured,
      },
      areaServed: siteConfig.serviceArea,
    });
    document.head.appendChild(structuredData);

    return () => {
      structuredData.remove();
    };
  }, [description, path, title]);

  return null;
}
