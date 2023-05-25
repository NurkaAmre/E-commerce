import SanityClient from "@/sanity/client";
import { SetType } from "@/types/SetType";
import Image from "next/image";
import Link from "next/link";

export default async function Sets () {
  const query = `*[_type == "set"]
                {_id, name, slug, price, description, "imageUrl": image.asset->url}`
  const sets = await SanityClient.fetch(query);
  return (
      <div>
        {/* {console.log(sets)} */}
          <h1>Sets</h1>
          <div className="flex flex-wrap">
            {sets.map((set: SetType) => (
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