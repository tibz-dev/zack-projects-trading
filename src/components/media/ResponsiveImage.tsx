import { ImageOff } from 'lucide-react';
import { content } from '../../data/content';
import { resolveAsset, responsiveVariants } from '../../utils/assets';

interface ResponsiveImageProps {
  path?: string;
  alt: string;
  className?: string;
  sizes?: string;
  aspectClass?: string;
  placeholderLabel?: string;
  eager?: boolean;
}

export function ResponsiveImage({
  path,
  alt,
  className = '',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  aspectClass = 'aspect-[4/3]',
  placeholderLabel = content.common.clientImagePending,
  eager = false,
}: ResponsiveImageProps) {
  const src = resolveAsset(path);
  const variants = responsiveVariants(path);

  if (!src) {
    return (
      <div
        className={`flex ${aspectClass} w-full flex-col items-center justify-center gap-3 overflow-hidden bg-lightgrey p-6 text-center text-slate ${className}`}
        role="img"
        aria-label={placeholderLabel}
      >
        <ImageOff aria-hidden="true" size={32} strokeWidth={1.5} />
        <span className="text-sm font-semibold">{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <picture>
      {variants.avif ? <source type="image/avif" srcSet={variants.avif} sizes={sizes} /> : null}
      {variants.webp ? <source type="image/webp" srcSet={variants.webp} sizes={sizes} /> : null}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`block ${aspectClass} w-full object-cover ${className}`}
      />
    </picture>
  );
}
