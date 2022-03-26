import 'svelte/register';

export function svelteTemplateEngine(filepath: string, options: any, next) {
  const Component = require(filepath).default;
  const { html } = Component.render(options);
  next(null, html);
}
