import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'nakshatraProfile',
  title: 'Nakshatra Profile',
  type: 'document',
  description: 'Evergreen reference pages for each nakshatra. 27 total. SEO authority content.',
  fields: [
    defineField({ name: 'name', title: 'Nakshatra Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'number', title: 'Number (1–27)', type: 'number', validation: (R) => R.required().min(1).max(27) }),
    defineField({ name: 'ruler', title: 'Planetary Ruler', type: 'string', validation: (R) => R.required() }),
    defineField({
      name: 'pada',
      title: 'Pada (Quarter)',
      type: 'number',
      description: '1–4 — which quarter is currently active or most significant',
    }),
    defineField({ name: 'sign', title: 'Sign(s)', type: 'string', description: 'e.g. Aries (pada 1-4), Taurus (pada 1)' }),
    defineField({ name: 'degreeRange', title: 'Sidereal Degree Range', type: 'string', description: "e.g. 0°00' — 13°20' Aries" }),
    defineField({ name: 'deity', title: 'Presiding Deity', type: 'string' }),
    defineField({ name: 'symbol', title: 'Symbol', type: 'string' }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Core themes, qualities, manifestations',
    }),
    defineField({
      name: 'kpSignificators',
      title: 'KP House Significators',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. 8th house, 12th house',
    }),
    defineField({
      name: 'ancestralRef',
      title: 'Ancestral Cosmology Parallel',
      type: 'text',
      rows: 3,
      description: 'Dogon / Ifá / Vodou / Khemetic parallel or correspondence',
    }),
    defineField({
      name: 'rosicrucianRef',
      title: 'Rosicrucian / Hermetic Reference',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'body',
      title: 'Full Profile Body',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The Axis pillar deep-dive content for this nakshatra',
    }),
    defineField({
      name: 'fixedStars',
      title: 'Fixed Stars in Range',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'ruler', number: 'number' },
    prepare({ title, subtitle, number }) {
      return { title: `${number}. ${title}`, subtitle: `Ruler: ${subtitle}` };
    },
  },
});
