import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'nakshatraProfile',
  title: 'Lunar Mansion Profile',
  type: 'document',
  description: 'Reference pages for each of the 27 lunar mansions (nakshatras) — the finer segments of the sky that give planets additional meaning. 27 total. These are evergreen SEO pages.',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of this lunar mansion. e.g. Rohini, Ashwini, Revati',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'number',
      title: 'Number (1–27)',
      type: 'number',
      description: 'Position in the sequence of 27 lunar mansions.',
      validation: (R) => R.required().min(1).max(27),
    }),
    defineField({
      name: 'ruler',
      title: 'Planetary Ruler',
      type: 'string',
      description: 'Which planet governs this lunar mansion. e.g. Moon, Venus, Saturn',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'pada',
      title: 'Quarter (Pada)',
      type: 'number',
      description: 'Each lunar mansion is divided into 4 quarters (padas). Enter 1–4 for the most significant or currently active quarter.',
    }),
    defineField({
      name: 'sign',
      title: 'Zodiac Sign(s)',
      type: 'string',
      description: 'Which zodiac sign(s) this lunar mansion spans. e.g. Aries (padas 1–4), Taurus (pada 1)',
    }),
    defineField({
      name: 'degreeRange',
      title: 'Sky Degree Range',
      type: 'string',
      description: "The exact range of sky degrees this mansion covers. e.g. 0°00' — 13°20' Aries",
    }),
    defineField({
      name: 'deity',
      title: 'Presiding Deity',
      type: 'string',
      description: 'The deity or cosmic figure traditionally associated with this mansion.',
    }),
    defineField({
      name: 'symbol',
      title: 'Symbol',
      type: 'string',
      description: 'The visual symbol associated with this mansion. e.g. a horse\'s head, a teardrop, a drum',
    }),
    defineField({
      name: 'keywords',
      title: 'Core Themes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The main energies, qualities, and patterns this lunar mansion is associated with. Plain English.',
    }),
    defineField({
      name: 'kpSignificators',
      title: 'Life Areas This Mansion Influences (KP)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'In KP methodology, which areas of life (houses) does this mansion tend to activate? e.g. 8th house (transformation, crisis), 12th house (loss, release)',
    }),
    defineField({
      name: 'ancestralRef',
      title: 'Ancestral Tradition Parallel',
      type: 'text',
      rows: 3,
      description: 'How does this mansion map to Dogon, Ifá, Vodou, or Khemetic cosmology? What figures, stories, or principles correspond?',
    }),
    defineField({
      name: 'rosicrucianRef',
      title: 'Hermetic / Rosicrucian Reference',
      type: 'text',
      rows: 2,
      description: 'Correspondence within Western esoteric / Hermetic tradition, if relevant.',
    }),
    defineField({
      name: 'body',
      title: 'Full Profile',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The complete deep-dive article for this lunar mansion. Follow VOICE standard: plain English first, jargon translated on first use.',
    }),
    defineField({
      name: 'fixedStars',
      title: 'Fixed Stars in This Range',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Named fixed stars that fall within this mansion\'s degree range and color its meaning. e.g. Algol, Spica, Antares',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'ruler', number: 'number' },
    prepare({ title, subtitle, number }) {
      return { title: `${number}. ${title}`, subtitle: `Ruler: ${subtitle}` };
    },
  },
});
