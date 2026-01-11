(async function () {
  // Load markdown
  const res = await fetch('./mindmap.md', { cache: 'no-store' });
  if (!res.ok) {
    console.error('Failed to load mindmap.md', res.status, res.statusText);
    return;
  }
  const markdown = await res.text();

  // Markmap globals
  const { Transformer, Markmap } = window.markmap;

  // Transform markdown -> tree
  const transformer = new Transformer();
  const { root } = transformer.transform(markdown);

  // Render tree -> SVG
  Markmap.create('#mm', {
    color: () => '#ffffff',
    nodeFont: 'Inter, Arial, sans-serif'
  }, root);
})();
