import SanityClient from "@/sanity/client"

export async function GET(request: Request) {
  await SanityClient.patch('user.f96da416-a07b-457a-a3db-9d66c755c963').set({
    phone: '12345',
  }).commit()
  .then((res: any) => res)
  .catch((err: any) => err)
}