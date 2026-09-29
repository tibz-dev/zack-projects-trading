import type { ServiceItem } from '../types/content';

export const services: readonly ServiceItem[] = [
  {
    slug: 'new-builds',
    title: 'New House Builds',
    shortDescription: 'Residential construction from site preparation through the main building stages.',
    description:
      'Construction support for new residential builds, coordinated around the agreed scope, site requirements and material needs.',
    bullets: ['Site and build planning', 'Main construction works', 'Finishing coordination'],
    icon: 'house',
  },
  {
    slug: 'renovations',
    title: 'Renovations',
    shortDescription: 'Upgrades and alterations for homes and other existing spaces.',
    description:
      'Renovation work for clients who need to repair, improve, extend or modernise an existing building or room.',
    bullets: ['Interior upgrades', 'Alterations and repairs', 'Finishing work'],
    icon: 'hammer',
  },
  {
    slug: 'tiling',
    title: 'Tiling',
    shortDescription: 'Floor and wall tiling for residential and general building projects.',
    description:
      'Tile installation for floors, walls and selected wet or living areas, with material sourcing available when requested.',
    bullets: ['Floor tiling', 'Wall tiling', 'Tile and adhesive supply enquiries'],
    icon: 'grid',
  },
  {
    slug: 'paving',
    title: 'Paving',
    shortDescription: 'Pavement and paving installation for driveways, walkways and outdoor areas.',
    description:
      'Paving services for practical outdoor surfaces, including installation work and sourcing of relevant paving materials.',
    bullets: ['Driveways', 'Walkways', 'Yards and outdoor areas'],
    icon: 'brick-wall',
  },
  {
    slug: 'electrical',
    title: 'Electrical Work',
    shortDescription: 'Electrical work as part of construction, renovation and property improvement projects.',
    description:
      'Electrical work can be included within a broader project scope or discussed as a specific requirement for a property.',
    bullets: ['Construction-related electrical work', 'Renovation electrical work', 'Electrical supply enquiries'],
    icon: 'zap',
  },
  {
    slug: 'plumbing',
    title: 'Plumbing',
    shortDescription: 'Plumbing work for building, renovation and maintenance-related requirements.',
    description:
      'Plumbing services for residential and general building needs, with plumbing materials available to enquire about separately.',
    bullets: ['New-build plumbing', 'Renovation plumbing', 'Plumbing supply enquiries'],
    icon: 'wrench',
  },
  {
    slug: 'carpentry',
    title: 'Carpentry',
    shortDescription: 'Carpentry and timber-related building work for selected project requirements.',
    description:
      'Carpentry support for construction and renovation projects, including timber-related installation and finishing requirements.',
    bullets: ['Construction carpentry', 'Renovation carpentry', 'Timber and board supply enquiries'],
    icon: 'ruler',
  },
  {
    slug: 'transport-hauling',
    title: 'Transport & Hauling',
    shortDescription: 'Transport support for building materials and project-related loads.',
    description:
      'Transport and hauling services can be discussed for material deliveries and other project-related transport requirements.',
    bullets: ['Building material transport', 'Project-related hauling', 'Delivery coordination'],
    icon: 'truck',
  },
  {
    slug: 'building-materials',
    title: 'Building Material Supply',
    shortDescription: 'Enquiries for building and housing materials across a broad range of categories.',
    description:
      'A dedicated supply service for clients who need construction and housing materials without an online checkout or fixed public price list.',
    bullets: ['Multiple material categories', 'Price enquiries', 'Supply and delivery discussions'],
    icon: 'package',
  },
] as const;
