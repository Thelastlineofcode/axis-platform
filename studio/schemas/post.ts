import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      description: 'Write this for someone who has never read an astrology article. No jargon in the title.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Auto-generated from the title. This becomes the page URL.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'pillar',
      title: 'Content Series',
      type: 'string',
      description: 'Which series does this post belong to?',
      options: {
        list: [
          { title: 'This Week\'s Read — Weekly sky + world events (free)', value: 'MUNDANE_MYSTIC' },
          { title: 'Deep Dive — Bi-weekly ancestral cosmology and sky analysis', value: 'THE_AXIS' },
          { title: 'Timing Report — Monthly paid forecast', value: 'TIMING_REPORT' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'isPaid',
      title: 'Paid Subscribers Only?',
      type: 'boolean',
      description: 'Turn on for Timing Reports and any premium content. Free readers will see a paywall.',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Summary (SEO + preview)',
      type: 'text',
      rows: 3,
      description: 'One or two sentences. This shows in search results and link previews. Plain English — no jargon.',
    }),
    defineField({
      name: 'body',
      title: 'Post Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      description: 'Full article content. Follow the VOICE standard: translate every technical term on first use.',
    }),

    // --- Sky Data (machine-readable metadata, used by agents and API queries) ---
    defineField({
      name: 'planet',
      title: 'Primary Planet',
      type: 'string',
      description: 'The main planet this post is about. e.g. Mars, Jupiter, Saturn',
    }),
    defineField({
      name: 'degree',
      title: 'Planet Degree',
      type: 'string',
      description: "Where exactly the planet is in the sky at time of writing. e.g. 8°15'",
    }),
    defineField({
      name: 'nakshatra',
      title: 'Lunar Mansion',
      type: 'string',
      description: 'The lunar mansion (nakshatra) the planet occupies — a finer segment of the sky. e.g. Uttara Bhadrapada',
    }),
    defineField({
      name: 'subLord',
      title: 'Sub-Influence (KP Sub-Lord)',
      type: 'string',
      description: 'The planetary sub-ruler within the lunar mansion. Used in KP methodology for precision timing.',
    }),
    defineField({
      name: 'ayanamsa',
      title: 'Sky Calculation System',
      type: 'string',
      description: 'The correction system used to align calculations with the actual sky. Default: Lahiri (most accurate for sidereal work).',
      initialValue: 'Lahiri',
    }),
    defineField({
      name: 'dasha',
      title: 'Active Planetary Cycle',
      type: 'string',
      description: 'The current planetary time period active at time of writing. e.g. Rahu-Jupiter means the Rahu major period, Jupiter sub-period.',
    }),
    defineField({
      name: 'ancestralRef',
      title: 'Ancestral Tradition Reference',
      type: 'string',
      description: 'Which ancestral cosmology framework informs this post, and the specific figure or concept. e.g. Dogon — Nommo \ Ifá — Ogun \ Khemetic — Horus',
    }),
    defineField({
      name: 'gdeltCategories',
      title: 'Real-World Event Categories (OSINT)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Geopolitics / War',
          'Markets / Stocks',
          'Natural Events',
          'Social / Civil Unrest',
          'Energy / Commodities',
          'Crypto / Tech',
          'Religious / Cultural',
        ],
      },
      description: 'What real-world event categories does this post cross-reference? Used for filtering and OSINT queries.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'pillar', media: 'mainImage' },
    prepare({ title, subtitle }) {
      const label: Record<string, string> = {
        MUNDANE_MYSTIC: '🌟 This Week\'s Read',
        THE_AXIS: '✴️ Deep Dive',
        TIMING_REPORT: '📅 Timing Report',
      };
      return { title, subtitle: label[subtitle] ?? subtitle };
    },
  },
});
