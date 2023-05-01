// sanity.config.js
import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk';
import schemas from './schemas/schema';
import {codeInput} from '@sanity/code-input'
export default defineConfig({
  title: "Coding Elf",
  projectId: "wnc03qhv",
  dataset: "production",
  plugins: [deskTool(),codeInput()],
  schema: {
    types: schemas,
  },
});
