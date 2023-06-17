import SanityClient from "@/sanity/client"
import { NextResponse } from "next/server"
import xml2js from 'xml2js'

export async function POST(request: Request) {
  const response = await request.text()
  const parser = new xml2js.Parser()
  const test = await parser.parseStringPromise(response)
  await SanityClient.patch('00675708-865c-4187-88dd-de3bce751590').set({
    title: `${test.pg_result}`,
  }).commit()
  return NextResponse.json({ message: 'Hello world!' })
}