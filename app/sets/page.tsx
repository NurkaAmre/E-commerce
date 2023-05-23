import { createClient } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Sets () {
  const client = createClient({
    projectId: "mp896dw0",
    dataset: "production",
    useCdn: true,
  })
  const query = `*[_type == "set"]
                {_id, name, slug, price, description, "imageUrl": image.asset->url}`
  const sets = await client.fetch(query);
  return (
      <div>
        {/* {console.log(sets)} */}
          <h1>Sets</h1>
          <div className="flex flex-wrap">
            {sets.map((set: any) => (
              <Link href={`/sets/${set.slug.current}`} key={set._id}>
                <div className="p-4">
                  <h2>{set.name}</h2>
                  <Image src={set.imageUrl} alt={set.name} width={200} height={200} />
                </div>
              </Link>
            ))}
          </div>
      </div>
  )
}