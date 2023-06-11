import { NextResponse } from "next/server";
import SanityClient from "@/sanity/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  try {
    const response = await SanityClient.fetch(
      `*[_type == "product" && name match "${query}"]{
      "id": _id,
      name,
      price,
      quantity,
      details,
      type,
      description,
      discount,
      slug,
      "imagesURL": images[].asset -> url
    }`);
    // Do something with the search results
    return NextResponse.json({ response })
  } catch (error) {
    // Handle error
    console.error(error);
  }
}