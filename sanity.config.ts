"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";
import { dataset, projectId } from "./sanity/env";

export default defineConfig({
  name: "silverclouds",
  title: "Silver Clouds Holiday CMS",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool()],
});
