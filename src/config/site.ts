export const siteConfig = {
  businessName: 'Zack Projects & Trading',
  contactPerson: 'Zack Mawila',
  contactRole: 'Management',
  phoneDisplay: '+27 72 042 7322',
  phoneE164: '+27720427322',
  whatsappNumber: '27720427322',
  email: 'zackprojects1@gmail.com',
  emailStatus: 'TODO_CONFIRM: card shows zackprojects1@gmail.com; brief also references info@zackprojects.co.za.',
  address: '215 Howard St, Pretoria North, Pretoria, 0116',
  addressStructured: {
    streetAddress: '215 Howard St',
    addressLocality: 'Pretoria North',
    addressRegion: 'Gauteng',
    postalCode: '0116',
    addressCountry: 'ZA',
  },
  serviceArea: 'Pretoria and surrounds',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://example.invalid',
  domainStatus: 'TODO_CONFIRM: zackprojects.com vs zackprojects.co.za.',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
} as const;

export const contactLinks = {
  phone: `tel:${siteConfig.phoneE164}`,
  whatsapp: `https://wa.me/${siteConfig.whatsappNumber}`,
  email: `mailto:${siteConfig.email}`,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`,
} as const;
