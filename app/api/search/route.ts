import { NextResponse } from "next/server";
import SanityClient from "@/sanity/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  try {
    const response = await SanityClient.fetch(
      `*[_type == "product" && (category[]->name.current match "${query}*" || name match "${query}*" || details match "${query}*" || description match "${query}*" || type match "${query}*" || slug match "${query}*")]{
      "id": _id,
      name,
      price,
      quantity,
      details,
      type,
      category,
      description,
      discount,
      slug,
      "imagesURL": images[].asset -> url
    }`);
    return NextResponse.json({ response })
  } catch (error) {
    console.error(error);
  }
}