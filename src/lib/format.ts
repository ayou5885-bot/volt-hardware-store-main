export function formatPrice(value: number): string {
  return (
    new Intl.NumberFormat('en-DZ', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value) + ' DA'
  );
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
