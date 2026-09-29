const assetModules = import.meta.glob<string>('/src/assets/**/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function resolveAsset(path?: string): string | undefined {
  if (!path) return undefined;
  return assetModules[path];
}

export function responsiveVariants(path?: string): {
  avif?: string;
  webp?: string;
} {
  if (!path) return {};

  const slashIndex = path.lastIndexOf('/');
  const dotIndex = path.lastIndexOf('.');
  if (slashIndex < 0 || dotIndex <= slashIndex) return {};

  const directory = path.slice(0, slashIndex);
  const baseName = path.slice(slashIndex + 1, dotIndex);
  const widths = [480, 768, 1280] as const;

  const makeSet = (format: 'avif' | 'webp') => {
    const entries = widths
      .map((width) => {
        const variantPath = `${directory}/generated/${baseName}-${width}.${format}`;
        const url = assetModules[variantPath];
        return url ? `${url} ${width}w` : undefined;
      })
      .filter((entry): entry is string => Boolean(entry));

    return entries.length > 0 ? entries.join(', ') : undefined;
  };

  return {
    avif: makeSet('avif'),
    webp: makeSet('webp'),
  };
}
