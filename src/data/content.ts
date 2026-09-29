import type { ValueItem } from '../types/content';

export const content = {
  seo: {
    home: {
      title: 'Construction & Building Materials in Pretoria',
      description: 'Zack Projects & Trading provides construction, renovations, specialist building services, transport and building material supply in Pretoria and surrounds.',
    },
    services: {
      title: 'Services',
      description: 'Construction, renovation, tiling, paving, electrical, plumbing, carpentry, transport and building material supply services in Pretoria.',
    },
    materials: {
      title: 'Building Materials',
      description: 'Browse building material categories supplied by Zack Projects & Trading and request a tailored price enquiry in Pretoria.',
    },
    projects: {
      title: 'Projects',
      description: 'View real Zack Projects & Trading project galleries and before-and-after comparisons as client project media is added.',
    },
    about: {
      title: 'About',
      description: 'Learn about Zack Projects & Trading, a Pretoria-based construction and building material supply business serving Pretoria and surrounds.',
    },
    contact: {
      title: 'Contact & Request a Quote',
      description: 'Contact Zack Projects & Trading for construction services, building material enquiries and quotations in Pretoria and surrounding areas.',
    },
    notFound: {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    },
  },
  home: {
    eyebrow: 'Pretoria construction & building material supply',
    title: 'Build, renovate and source materials through one local team.',
    intro:
      'Zack Projects & Trading provides construction services, renovations, specialist building work, transport and building material supply in Pretoria and surrounding areas.',
    primaryCta: 'Request a Quote',
    secondaryCta: 'Browse Building Materials',
    heroFeatures: [
      { title: 'Construction services', description: 'New builds, renovations and specialist trade work.' },
      { title: 'Material supply', description: 'Enquire across major building and housing material categories.' },
      { title: 'Transport support', description: 'Discuss delivery and project-related hauling requirements.' },
    ],
    servicesTitle: 'Construction services for complete and focused jobs',
    servicesIntro:
      'From a new house build to a single trade requirement, choose the service that matches your project and request a tailored quotation.',
    allServicesLink: 'View all services',
    materialsTitle: 'Building materials are a core part of the business',
    materialsIntro:
      'Browse the main supply categories, then request a price for exactly what you need. There is no online checkout and no invented price list.',
    allMaterialsLink: 'Browse all material categories',
    whyTitle: 'A practical way to move your project forward',
    whyItems: [
      {
        title: 'Services and materials together',
        description: 'Discuss building work and the materials required for the same project in one enquiry.',
      },
      {
        title: 'Quote-based pricing',
        description: 'Pricing is provided against the real scope, quantities, location and material requirements.',
      },
      {
        title: 'Pretoria-based',
        description: 'The business is based in Pretoria North and serves Pretoria and surrounding areas.',
      },
    ] satisfies readonly ValueItem[],
    projectsTitle: 'Project work',
    projectsPending:
      'Real client project photos will appear here once the before, after and gallery images are supplied.',
    projectsLink: 'View project section',
    quoteTitle: 'Tell us what you need built, repaired or supplied.',
    quoteBody:
      'Send the project location, service or material category and a short description. Zack Projects & Trading can then respond with the next step for a quotation.',
  },
  common: {
    call: 'Call',
    whatsapp: 'WhatsApp',
    requestQuote: 'Request a quote',
    loadingPage: 'Loading page…',
    skipToContent: 'Skip to content',
    before: 'BEFORE',
    after: 'AFTER',
    beforePending: 'BEFORE image pending',
    afterPending: 'AFTER image pending',
    galleryPending: 'Gallery image pending',
    clientImagePending: 'Client image pending',
    viewImages: 'View images',
    closeViewer: 'Close image viewer',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    primaryNavigation: 'Primary navigation',
    mobileNavigation: 'Mobile navigation',
    projectViewer: 'Project image viewer',
    adjustComparison: 'Adjust before and after comparison',
    servicesGroup: 'Services',
    materialsGroup: 'Building materials',
    filterProjects: 'Filter projects by service type',
    companyWebsite: 'Company website',
    afterVisible: 'after image visible',
    openGalleryImage: 'Open project gallery image',
    galleryImageFallback: 'project gallery image',
  },
  services: {
    eyebrow: 'Services',
    title: 'Construction and property services',
    intro:
      'Review each service below, then request a quotation with your location and project requirements.',
  },
  materials: {
    eyebrow: 'Building Materials',
    title: 'Request building materials by category',
    intro:
      'Select a category to pre-fill the quote form. Quantities, brands, specifications and delivery requirements can be confirmed in the enquiry.',
    action: 'Enquire / Request a price',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Completed work and project galleries',
    intro:
      'Only real client project images will be published here. Projects can be filtered by service type and can include accessible before-and-after comparisons.',
    emptyTitle: 'Project photos pending',
    emptyBody:
      'The project system is ready. Add a real project to src/data/projects.ts and place its images in the matching src/assets/projects/<project-slug>/ folder.',
    allFilter: 'All projects',
  },
  about: {
    eyebrow: 'About',
    title: 'Zack Projects & Trading',
    intro:
      'A Pretoria-based construction and building material supply business serving residential and general building requirements.',
    storyTitle: 'Company story',
    story:
      'Zack Projects & Trading brings construction services and material supply into one practical offering. The company handles new builds, renovations, specialist trade work, transport and enquiries for a broad range of building and housing materials.',
    serviceAreaTitle: 'Service area',
    serviceAreaBody:
      'Based in Pretoria North and available for enquiries across Pretoria and surrounding areas. Project location is confirmed during the quotation process.',
    valuesTitle: 'How we approach enquiries',
    values: [
      {
        title: 'Start with the real scope',
        description: 'Quotations should be based on the actual work, quantity, specification and project location.',
      },
      {
        title: 'Keep communication clear',
        description: 'Clients should know what information is needed before work or supply can be priced accurately.',
      },
      {
        title: 'Keep the offering practical',
        description: 'Construction, trade services, transport and materials can be discussed according to what the project needs.',
      },
    ] satisfies readonly ValueItem[],
    managementTitle: 'Management',
  },
  contact: {
    eyebrow: 'Contact / Request a Quote',
    title: 'Tell us about your project or material requirement',
    intro:
      'Complete the form with enough detail for the team to understand the work, material category and location.',
    detailsTitle: 'Contact details',
    mapTitle: 'Pretoria North location',
    formTitle: 'Request a quote',
    fields: {
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      need: 'Service or material needed',
      location: 'Project / delivery location',
      message: 'Message',
      needPlaceholder: 'Select a service or material category',
      messagePlaceholder: 'Tell us about the work, quantities, specifications or delivery requirements.',
    },
    validation: {
      name: 'Enter your name.',
      phone: 'Enter a valid phone number.',
      phoneTooLong: 'Phone number is too long.',
      email: 'Enter a valid email address.',
      need: 'Select a service or material category.',
      location: 'Enter the project or delivery location.',
      message: 'Please add a little more detail.',
      messageTooLong: 'Message is too long.',
      spam: 'Spam detected.',
    },
    submitLabel: 'Send Request',
    submittingLabel: 'Sending…',
    successTitle: 'Request sent',
    successBody: 'Thank you. Your enquiry has been submitted successfully.',
    configError:
      'The contact form delivery endpoint is not configured yet. Use the phone, WhatsApp or email details while VITE_FORM_ENDPOINT is being set.',
    errorTitle: 'Could not send request',
    errorBody: 'Please try again or use WhatsApp, phone or email instead.',
  },
  credentials: {
    title: 'Registrations & credentials',
    pending:
      'Credentials will be displayed here only after the client supplies the actual registration or certificate files.',
    placeholderLabel: 'Credential document pending',
  },
  notFound: {
    eyebrow: '404',
    title: 'Page not found',
    body: 'The page you requested does not exist or has moved.',
    action: 'Return home',
  },
  footer: {
    description:
      'Construction, renovations, specialist building services, transport and building material supply in Pretoria and surrounding areas.',
    quickLinksTitle: 'Quick links',
    contactTitle: 'Contact',
    materialsLink: 'Building Materials',
    quoteLink: 'Request a Quote',
    rights: 'All rights reserved.',
  },
} as const;
