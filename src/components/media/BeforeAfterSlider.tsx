import { MoveHorizontal } from 'lucide-react';
import { useId, useState } from 'react';
import { content } from '../../data/content';
import { ResponsiveImage } from './ResponsiveImage';

interface BeforeAfterSliderProps {
  beforePath?: string;
  afterPath?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforePath,
  afterPath,
  beforeAlt = content.common.before,
  afterAlt = content.common.after,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const sliderId = useId();

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-lightgrey">
      <span className="sr-only">
        {beforeAlt}. {afterAlt}.
      </span>
      <div className="absolute inset-0">
        <ResponsiveImage
          path={beforePath}
          alt=""
          aspectClass="h-full"
          className="h-full w-full object-cover"
          placeholderLabel={content.common.beforePending}
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <ResponsiveImage
          path={afterPath}
          alt=""
          aspectClass="h-full"
          className="h-full w-full object-cover"
          placeholderLabel={content.common.afterPending}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-slate text-white">
          <MoveHorizontal aria-hidden="true" size={18} />
        </span>
      </div>

      <span className="absolute left-3 top-3 rounded bg-slate px-2 py-1 text-xs font-bold text-white">
        {content.common.before}
      </span>
      <span className="absolute right-3 top-3 rounded bg-slate px-2 py-1 text-xs font-bold text-white">
        {content.common.after}
      </span>

      <label htmlFor={sliderId} className="sr-only">
        {content.common.adjustComparison}
      </label>
      <input
        id={sliderId}
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-x-4 bottom-4 z-10 h-11 cursor-ew-resize opacity-0"
        aria-valuetext={`${position}% ${content.common.afterVisible}`}
      />
    </div>
  );
}
