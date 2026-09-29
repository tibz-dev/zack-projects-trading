export type ServiceSlug =
  | 'new-builds'
  | 'renovations'
  | 'tiling'
  | 'paving'
  | 'electrical'
  | 'plumbing'
  | 'carpentry'
  | 'transport-hauling'
  | 'building-materials';

export type IconName =
  | 'house'
  | 'hammer'
  | 'grid'
  | 'brick-wall'
  | 'zap'
  | 'wrench'
  | 'ruler'
  | 'truck'
  | 'package'
  | 'layers'
  | 'mountain'
  | 'roof'
  | 'trees'
  | 'construction'
  | 'paint-bucket'
  | 'door-open'
  | 'shield-check'
  | 'drill';

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  description: string;
  bullets: readonly string[];
  icon: IconName;
}

export interface MaterialCategory {
  slug: string;
  title: string;
  description: string;
  examples: readonly string[];
  icon: IconName;
}

export interface ProjectImageSet {
  before: string;
  after: string;
  gallery?: readonly string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  serviceType: ServiceSlug;
  location: string;
  description: string;
  featured: boolean;
  images: ProjectImageSet;
  alt: {
    before: string;
    after: string;
    gallery?: readonly string[];
  };
}

export interface CredentialItem {
  id: string;
  title: string;
  imagePath: string;
  alt: string;
  reference?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ValueItem {
  title: string;
  description: string;
}
