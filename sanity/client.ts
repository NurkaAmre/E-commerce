import { createClient } from "next-sanity";

const SanityClient = createClient({
  projectId: "mp896dw0",
  dataset: "production",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2023-05-25",
})

export default SanityClient;