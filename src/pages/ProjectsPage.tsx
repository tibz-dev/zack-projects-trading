import { useMemo, useState } from 'react';
import { ProjectCard } from '../components/common/ProjectCard';
import { PageHero } from '../components/common/PageHero';
import { BeforeAfterSlider } from '../components/media/BeforeAfterSlider';
import { Seo } from '../components/seo/Seo';
import { content } from '../data/content';
import { projects } from '../data/projects';
import { services } from '../data/services';
import type { ServiceSlug } from '../types/content';

type ProjectFilter = 'all' | ServiceSlug;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const availableFilters = useMemo(() => {
    const used = new Set(projects.map((project) => project.serviceType));
    return services.filter((service) => used.has(service.slug));
  }, []);

  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === 'all' || project.serviceType === filter),
    [filter],
  );

  return (
    <>
      <Seo title={content.seo.projects.title} description={content.seo.projects.description} path="/projects" />
      <PageHero eyebrow={content.projects.eyebrow} title={content.projects.title} intro={content.projects.intro} />

      <section className="section-spacing bg-offwhite">
        <div className="site-container">
          {availableFilters.length > 0 ? (
            <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label={content.common.filterProjects}>
              <button type="button" onClick={() => setFilter('all')} className={`min-h-11 rounded-md border px-4 py-2 text-sm font-bold ${filter === 'all' ? 'border-maroon bg-maroon text-white' : 'border-lightgrey bg-white text-slate hover:border-maroon'}`}>
                {content.projects.allFilter}
              </button>
              {availableFilters.map((service) => (
                <button key={service.slug} type="button" onClick={() => setFilter(service.slug)} className={`min-h-11 rounded-md border px-4 py-2 text-sm font-bold ${filter === service.slug ? 'border-maroon bg-maroon text-white' : 'border-lightgrey bg-white text-slate hover:border-maroon'}`}>
                  {service.title}
                </button>
              ))}
            </div>
          ) : null}

          {visibleProjects.length > 0 ? (
            <div className="grid gap-7 lg:grid-cols-2">
              {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <BeforeAfterSlider />
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold">{content.projects.emptyTitle}</h2>
                <p className="mt-4 leading-7 text-slate">{content.projects.emptyBody}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
