import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'axis-platform',
  title: 'AXIS — Sacred Intelligence Platform',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',

  plugins: [
    structureTool(),
    visionTool(), // GROQ query playground — useful for agent query dev
  ],

  schema: {
    types: schemaTypes,
  },
});
