import { credentials } from '../../data/credentials';
import { content } from '../../data/content';
import { ResponsiveImage } from '../media/ResponsiveImage';

interface CredentialsStripProps {
  dark?: boolean;
}

export function CredentialsStrip({ dark = false }: CredentialsStripProps) {
  return (
    <section
      className={dark ? 'bg-slate text-white' : 'bg-white text-ink'}
      aria-labelledby="credentials-title"
    >
      <div className="site-container py-10">
        <h2 id="credentials-title" className="text-2xl font-bold">
          {content.credentials.title}
        </h2>
        {credentials.length === 0 ? (
          <div className="mt-5 grid max-w-3xl gap-4 sm:grid-cols-[180px_1fr] sm:items-center">
            <ResponsiveImage
              alt=""
              aspectClass="aspect-[4/3]"
              placeholderLabel={content.credentials.placeholderLabel}
              className="rounded-md"
            />
            <p className={`text-sm leading-6 ${dark ? 'text-lightgrey' : 'text-slate'}`}>
              {content.credentials.pending}
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {credentials.map((credential) => (
              <figure key={credential.id} className="rounded-lg bg-white p-3 text-ink">
                <ResponsiveImage
                  path={credential.imagePath}
                  alt={credential.alt}
                  aspectClass="aspect-[4/3]"
                  className="rounded object-contain"
                />
                <figcaption className="mt-2 text-sm font-semibold">{credential.title}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
