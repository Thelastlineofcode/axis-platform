import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'transitEvent',
  title: 'Transit Event',
  type: 'document',
  description: 'A discrete astrological event — ingress, station, conjunction, aspect. Machine-readable signal layer.',
  fields: [
    defineField({ name: 'title', title: 'Event Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'planet', title: 'Planet', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'secondPlanet', title: 'Second Planet (for aspects)', type: 'string' }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: ['Ingress', 'Station Retrograde', 'Station Direct', 'Conjunction', 'Opposition', 'Square', 'Trine', 'Eclipse', 'Lunation'],
        layout: 'dropdown',
      },
    }),
    defineField({ name: 'date', title: 'Event Date', type: 'datetime', validation: (R) => R.required() }),
    defineField({ name: 'sign', title: 'Sign', type: 'string' }),
    defineField({ name: 'degree', title: 'Degree', type: 'string', description: "e.g. 8°15'" }),
    defineField({ name: 'nakshatra', title: 'Nakshatra', type: 'string' }),
    defineField({ name: 'subLord', title: 'KP Sub-Lord', type: 'string' }),
    defineField({ name: 'ayanamsa', title: 'Ayanamsa', type: 'string', initialValue: 'Lahiri' }),
    defineField({
      name: 'significance',
      title: 'Significance / Interpretation',
      type: 'text',
      rows: 4,
      description: 'Agent-generated or Travone-written interpretation of the event',
    }),
    defineField({
      name: 'fixedStars',
      title: 'Fixed Star Conjunctions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Antares, Algol, Spica',
    }),
    defineField({ name: 'source', title: 'Calculation Source', type: 'string', initialValue: 'Levite astro-calc-api' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', planet: 'planet' },
    prepare({ title, subtitle, planet }) {
      return { title: `${planet ? planet + ' — ' : ''}${title}`, subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : '' };
    },
  },
});
