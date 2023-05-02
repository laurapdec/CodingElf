// sanity.config.js
import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk';
import schemas from './schemas/schema';
import {codeInput} from '@sanity/code-input'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  title: "Coding Elf",
  projectId: "wnc03qhv",
  dataset: "production",
  plugins: [deskTool(),codeInput(),
            visionTool({
              // Note: These are both optional
              defaultApiVersion: 'v2021-10-21',
              defaultDataset: 'some-dataset',
            }),],
  schema: {
    types: schemas,
  },
});
