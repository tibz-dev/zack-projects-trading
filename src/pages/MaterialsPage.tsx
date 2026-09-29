import { MaterialCard } from '../components/common/MaterialCard';
import { PageHero } from '../components/common/PageHero';
import { Seo } from '../components/seo/Seo';
import { content } from '../data/content';
import { materialCategories } from '../data/materials';

export default function MaterialsPage() {
  return (
    <>
      <Seo title={content.seo.materials.title} description={content.seo.materials.description} path="/building-materials" />
      <PageHero eyebrow={content.materials.eyebrow} title={content.materials.title} intro={content.materials.intro} />
      <section className="section-spacing bg-offwhite">
        <div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {materialCategories.map((category) => <MaterialCard key={category.slug} category={category} headingLevel="h2" />)}
        </div>
      </section>
    </>
  );
}
