import { Images, MapPin } from 'lucide-react';
import { useMemo, useState } from 'react';
import { content } from '../../data/content';
import { services } from '../../data/services';
import type { ProjectItem } from '../../types/content';
import { BeforeAfterSlider } from '../media/BeforeAfterSlider';
import { Lightbox, type LightboxImage } from '../media/Lightbox';
import { ResponsiveImage } from '../media/ResponsiveImage';

interface ProjectCardProps {
  project: ProjectItem;
  headingLevel?: 'h2' | 'h3';
}

export function ProjectCard({ project, headingLevel = 'h2' }: ProjectCardProps) {
  const Heading = headingLevel;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const service = services.find((item) => item.slug === project.serviceType);

  const gallery = useMemo<readonly LightboxImage[]>(() => {
    const items: LightboxImage[] = [];
    items.push({ path: project.images.before, alt: project.alt.before });
    items.push({ path: project.images.after, alt: project.alt.after });
    project.images.gallery?.forEach((path, index) => {
      items.push({ path, alt: project.alt.gallery?.[index] ?? `${project.title} ${content.common.galleryImageFallback} ${index + 1}` });
    });
    return items;
  }, [project]);

  return (
    <article className="overflow-hidden rounded-lg border border-lightgrey bg-white shadow-card">
      <BeforeAfterSlider
        beforePath={project.images.before}
        afterPath={project.images.after}
        beforeAlt={project.alt.before}
        afterAlt={project.alt.after}
      />

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-maroon">
          <span>{service?.title ?? project.serviceType}</span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1 text-slate">
            <MapPin aria-hidden="true" size={14} /> {project.location}
          </span>
        </div>
        <Heading className="mt-3 text-2xl font-bold">{project.title}</Heading>
        <p className="mt-3 leading-7 text-slate">{project.description}</p>

        {project.images.gallery && project.images.gallery.length > 0 ? (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {project.images.gallery.slice(0, 3).map((path, index) => (
              <button
                type="button"
                key={path}
                className="relative overflow-hidden rounded-md"
                onClick={() => {
                  setInitialIndex(2 + index);
                  setLightboxOpen(true);
                }}
                aria-label={`${content.common.openGalleryImage}: ${project.title} ${index + 1}`}
              >
                <ResponsiveImage
                  path={path}
                  alt=""
                  aspectClass="aspect-square"
                  sizes="160px"
                  placeholderLabel={content.common.galleryPending}
                />
              </button>
            ))}
          </div>
        ) : null}

        {gallery.length > 0 ? (
          <button
            type="button"
            className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-maroon hover:underline"
            onClick={() => {
              setInitialIndex(0);
              setLightboxOpen(true);
            }}
          >
            <Images aria-hidden="true" size={18} /> {content.common.viewImages}
          </button>
        ) : null}
      </div>

      <Lightbox images={gallery} initialIndex={initialIndex} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </article>
  );
}
