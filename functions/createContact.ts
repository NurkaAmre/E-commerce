'use server'

import SanityClient from "@/sanity/client";

export default async function createContact(
  name: string,
  phoneNumber: number
) {
  // Define default status data (failure is default case)
  let status = {code: 500, message: 'Something went wrong!', data: {}};
  // Add the new contact to the database
  const contact = await SanityClient.create({
    _type: 'contact',
    name,
    phoneNumber
  })

  // Change status data if the contact has been added successfully
  if (contact) {
    status.code = 200;
    status.message = 'Contact created successfully';
    status.data = contact;
  }

  return status;
}