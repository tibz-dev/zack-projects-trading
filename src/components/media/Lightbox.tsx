import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { content } from '../../data/content';
import { resolveAsset } from '../../utils/assets';

export interface LightboxImage {
  path: string;
  alt: string;
}

interface LightboxProps {
  images: readonly LightboxImage[];
  initialIndex: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, open, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, open]);

  useEffect(() => {
    if (!open || images.length === 0) return undefined;

    openerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + images.length) % images.length);
      }

      if (event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % images.length);
      }

      if (event.key === 'Tab') {
        const focusable = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ) ?? [],
        ).filter((element) => !element.hasAttribute('disabled'));

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      openerRef.current?.focus();
    };
  }, [images.length, onClose, open]);

  if (!open || images.length === 0) return null;

  const image = images[index];
  if (!image) return null;
  const src = resolveAsset(image.path);

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={content.common.projectViewer}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full bg-white text-ink"
        onClick={onClose}
        aria-label={content.common.closeViewer}
        autoFocus
      >
        <X aria-hidden="true" />
      </button>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            className="absolute left-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink sm:left-6"
            onClick={() => setIndex((current) => (current - 1 + images.length) % images.length)}
            aria-label={content.common.previousImage}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink sm:right-6"
            onClick={() => setIndex((current) => (current + 1) % images.length)}
            aria-label={content.common.nextImage}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </>
      ) : null}

      <figure className="max-h-[85vh] max-w-6xl">
        {src ? (
          <img src={src} alt={image.alt} className="max-h-[78vh] max-w-full object-contain" />
        ) : (
          <div className="flex aspect-[4/3] w-[min(80vw,900px)] items-center justify-center bg-lightgrey p-8 text-center font-semibold text-slate">
            {content.common.clientImagePending}
          </div>
        )}
        <figcaption className="mt-3 text-center text-sm text-white">{image.alt}</figcaption>
      </figure>
    </div>
  );
}
