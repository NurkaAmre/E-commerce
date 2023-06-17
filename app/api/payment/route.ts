import SanityClient from "@/sanity/client"
import { NextResponse } from "next/server"

export async function POST() {
  await SanityClient.patch('user.f96da416-a07b-457a-a3db-9d66c755c963').set({
    phone: '123',
  }).commit()
  .then((res: any) => res)
  .catch((err: any) => err)
  return NextResponse.json({ message: 'Hello world!' })
}