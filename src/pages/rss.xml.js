import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Campbell Turner | Blog',
    description: 'Where my musings on creativity, notes on process, and progress updates live',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/blog/*.md')),
    customData: `<language>en-us</language>`,
  });
}