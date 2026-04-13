import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'pillar',
      title: 'Content Pillar',
      type: 'string',
      options: {
        list: [
          { title: 'Mundane Mystic (Weekly)', value: 'MUNDANE_MYSTIC' },
          { title: 'The Axis (Deep Dives)', value: 'THE_AXIS' },
          { title: 'Timing Report (Paid)', value: 'TIMING_REPORT' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'isPaid',
      title: 'Members Only',
      type: 'boolean',
      description: 'Paid Beehiiv subscribers only. Timing Reports are always paid.',
      initialValue: false,
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', validation: (R) => R.required() }),
    defineField({ name: 'description', title: 'Description / SEO Summary', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    // Astrological metadata — machine-readable, queryable by agents
    defineField({ name: 'planet', title: 'Primary Planet', type: 'string', description: 'e.g. Mars, Jupiter' }),
    defineField({ name: 'degree', title: 'Degree', type: 'string', description: "e.g. 8°15'" }),
    defineField({ name: 'nakshatra', title: 'Nakshatra', type: 'string', description: 'e.g. Uttara Bhadrapada' }),
    defineField({ name: 'subLord', title: 'KP Sub-Lord', type: 'string' }),
    defineField({ name: 'ayanamsa', title: 'Ayanamsa', type: 'string', initialValue: 'Lahiri' }),
    defineField({ name: 'dasha', title: 'Current Dasha Period', type: 'string', description: 'e.g. Rahu-Jupiter' }),
    defineField({
      name: 'ancestralRef',
      title: 'Ancestral Cosmology Reference',
      type: 'string',
      description: 'e.g. Dogon — Nommo, Ifá — Ogun, Khemetic — Horus',
    }),
    defineField({
      name: 'gdeltCategories',
      title: 'GDELT Event Categories',
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
      description: 'OSINT categories this post cross-references',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'pillar', media: 'mainImage' },
    prepare({ title, subtitle }) {
      const label: Record<string, string> = {
        MUNDANE_MYSTIC: '🌟 Mundane Mystic',
        THE_AXIS: '✴️ The Axis',
        TIMING_REPORT: '📅 Timing Report',
      };
      return { title, subtitle: label[subtitle] ?? subtitle };
    },
  },
});
