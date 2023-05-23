import { createClient } from "next-sanity";

export default async function Sets () {
  const client = createClient({
    projectId: "mp896dw0",
    dataset: "production",
    useCdn: true,
  })
  const query = `*[_type == "set"]`
  const sets = await client.fetch(query);
  return (
      <div>
        {/* {console.log(sets)} */}
          <h1>Sets</h1>
      </div>
  )
}