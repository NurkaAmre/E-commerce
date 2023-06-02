import { createClient } from "next-sanity";

const SanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET as string,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN as string,
  apiVersion: process.env.SANITY_API_VERSION as string,
})

export default SanityClient;