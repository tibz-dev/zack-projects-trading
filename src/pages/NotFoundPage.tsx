import { ButtonLink } from '../components/common/ButtonLink';
import { Seo } from '../components/seo/Seo';
import { content } from '../data/content';

export default function NotFoundPage() {
  return (
    <section className="section-spacing bg-offwhite">
      <Seo
        title={content.seo.notFound.title}
        description={content.seo.notFound.description}
        path="/404"
      />
      <div className="site-container max-w-2xl text-center">
        <p className="eyebrow">{content.notFound.eyebrow}</p>
        <h1 className="section-title">{content.notFound.title}</h1>
        <p className="body-copy mt-5">{content.notFound.body}</p>
        <ButtonLink to="/" className="mt-7">
          {content.notFound.action}
        </ButtonLink>
      </div>
    </section>
  );
}
