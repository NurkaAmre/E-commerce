'use server'

import SanityClient from "@/sanity/client";

export default async function getUser(userEmail: string | null | undefined) {
  const query = `*[_type == "user" && email == "${userEmail}"]
                {
                  "id": _id,
                  name,
                  image,
                  email,
                  "address": address->{"id": _id, street, city, zip},
                  phone
                }`;
  const data = await SanityClient.fetch(query);
  const user = data[0];
  return user
}