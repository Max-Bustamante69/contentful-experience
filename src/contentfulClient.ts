// src/contentfulClient.ts

import { createClient } from "contentful";

export const client = createClient({
  // your space id
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  // your environment id
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
  // Supported values: 'preview.contentful.com' or 'cdn.contentful.com',
  //host: import.meta.env.VITE_CTFL_API_HOST,
  // needs to be access token if host = 'cdn.contentful.com' and preview token if 'preview.contentful.com'
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});
