import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './schemas';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'change-me';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_TITLE || 'Sanity Studio Title',
  projectId,
  dataset,
  basePath: '/',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
