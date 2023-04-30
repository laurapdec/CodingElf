import { regenerate } from 'next/dist/build/webpack/plugins/next-client-pages-plugin/lib';

export default async function handler(req, res) {
  // Handle the webhook payload from Sanity
  const payload = req.body;

  // Determine which pages need to be rebuilt with ISR enabled
  const relevantPages = determineRelevantPages(payload);

  // Rebuild the relevant pages with ISR enabled
  await Promise.all(relevantPages.map((page) => regenerate(page)));

  // Send a response to Sanity indicating that the webhook was received successfully
  res.status(200).json({ message: 'Webhook received and processed' });
}

function determineRelevantPages(payload) {
  // Determine which pages need to be rebuilt with ISR enabled based on the payload from Sanity
  // For example, you might check which documents were published/unpublished and which pages they are related to
  // Return an array of page paths that need to be rebuilt
}
