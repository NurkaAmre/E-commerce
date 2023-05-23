import { createClient } from "next-sanity";

const SanityClient = createClient({
  projectId: "mp896dw0",
  dataset: "production",
  useCdn: true,
})

export default SanityClient;