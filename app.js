(async function () {
  // Fetch markdown from a file (avoids inline templates)
  const res = await fetch('./mindmap.md', { cache: 'no-store' });
  const markdown = await res.text();

  // Markmap globals provided by markmap-lib view bundle
  const { Markmap } = window.markmap;

  // Render
  Markmap.create('#mm', {
    color: () => '#ffffff',
    nodeFont: 'Inter, Arial, sans-serif'
  }, markdown);
})();
