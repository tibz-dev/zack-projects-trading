import { ArrowRight, Check, PackageCheck, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/common/ButtonLink';
import { CredentialsStrip } from '../components/common/CredentialsStrip';
import { MaterialCard } from '../components/common/MaterialCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/common/ServiceCard';
import { BeforeAfterSlider } from '../components/media/BeforeAfterSlider';
import { Seo } from '../components/seo/Seo';
import { content } from '../data/content';
import { materialCategories } from '../data/materials';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { ProjectCard } from '../components/common/ProjectCard';

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <Seo
        title={content.seo.home.title}
        description={content.seo.home.description}
        path="/"
      />

      <section className="bg-slate text-white">
        <div className="site-container grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-yellow">{content.home.eyebrow}</p>
            <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-6xl xl:text-7xl">
              {content.home.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-lightgrey sm:text-lg">{content.home.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">{content.home.primaryCta}</ButtonLink>
              <ButtonLink to="/building-materials" variant="dark-outline">
                {content.home.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="border-l-4 border-yellow bg-ink p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {content.home.heroFeatures.map((feature, index) => {
                const FeatureIcon = [Wrench, PackageCheck, Truck][index] ?? Wrench;
                return (
                  <div className="flex gap-4" key={feature.title}>
                    <FeatureIcon className="shrink-0 text-yellow" aria-hidden="true" />
                    <div><h2 className="text-xl font-bold">{feature.title}</h2><p className="mt-1 text-sm leading-6 text-lightgrey">{feature.description}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-offwhite">
        <div className="site-container">
          <SectionHeading title={content.home.servicesTitle} intro={content.home.servicesIntro} />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
          <Link to="/services" className="mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-maroon hover:underline">
            {content.home.allServicesLink} <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="site-container">
          <SectionHeading title={content.home.materialsTitle} intro={content.home.materialsIntro} />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materialCategories.slice(0, 6).map((category) => <MaterialCard key={category.slug} category={category} />)}
          </div>
          <Link to="/building-materials" className="mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-maroon hover:underline">
            {content.home.allMaterialsLink} <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="section-spacing bg-slate text-white">
        <div className="site-container">
          <SectionHeading title={content.home.whyTitle} tone="dark" />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {content.home.whyItems.map((item) => (
              <article key={item.title} className="border-t-2 border-yellow pt-5">
                <div className="flex items-center gap-3"><Check className="text-yellow" aria-hidden="true" /><h3 className="text-2xl font-bold">{item.title}</h3></div>
                <p className="mt-3 leading-7 text-lightgrey">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-offwhite">
        <div className="site-container">
          <SectionHeading title={content.home.projectsTitle} />
          {featuredProjects.length > 0 ? (
            <div className="mt-9 grid gap-6 lg:grid-cols-3">
              {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} headingLevel="h3" />)}
            </div>
          ) : (
            <div className="mt-9 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <BeforeAfterSlider />
              <div>
                <p className="body-copy">{content.home.projectsPending}</p>
                <Link to="/projects" className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-maroon hover:underline">
                  {content.home.projectsLink} <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <CredentialsStrip dark />

      <section className="section-spacing bg-slate text-white">
        <div className="site-container flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{content.home.quoteTitle}</h2>
            <p className="mt-4 leading-7 text-white/85">{content.home.quoteBody}</p>
          </div>
          <ButtonLink to="/contact" className="shrink-0">{content.home.primaryCta}</ButtonLink>
        </div>
      </section>
    </>
  );
}
