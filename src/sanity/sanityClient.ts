// // sanityClient.ts
// import { createClient } from '@sanity/client';

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
//   dataset: 'production',        // Or your dataset name
//   apiVersion: '2024-01-04',     // Today's date or latest API version
//   useCdn: false,                // Disable CDN for real-time updates
//   token: process.env.SANITY_API_TOKEN,
// });


import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2024-01-04',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});