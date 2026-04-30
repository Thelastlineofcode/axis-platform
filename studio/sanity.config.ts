import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const projectId = process.env.SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';

if (!projectId) {
  throw new Error('Missing SANITY_PROJECT_ID (or SANITY_STUDIO_PROJECT_ID) for AXIS Sanity Studio');
}

export default defineConfig({
  name: 'axis-platform',
  title: 'AXIS — Sacred Intelligence Platform',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(), // GROQ query playground — useful for agent query dev
  ],

  schema: {
    types: schemaTypes,
  },
});
