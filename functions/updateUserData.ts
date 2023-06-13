'use server'

import SanityClient from "@/sanity/client"

export default async function updateUserData(userData: any) {
  let status = {code: 0, message: '', data: null};
  // Check if address field is empty
  if (Object.keys(userData.address).length === 0) {
    await SanityClient.patch(userData.id).set({
      phone: userData.phone,
      email: userData.email,
    }).commit()
      .then((res: any) => status = {code: 200, message: 'Data has been updated successfully', data: res})
      .catch((err: any) => status = {code: 500, message: err, data: null })

    return status
  } else {
    // Check if address already exists
    if (userData.address.id) {
      // Update existing address
      const updatedAddress = await SanityClient.patch(userData.address.id).set({
        street: userData.address.street,
        city: userData.address.city,
        zip: userData.address.zip,
      }).commit()
        .then((res: any) => res)

      // Update user data
      await SanityClient.patch(userData.id).set({
        phone: userData.phone,
        email: userData.email,
        address: {
          _type: 'reference',
          _ref: updatedAddress._id
        }
      }).commit()
      .then((res: any) => status = {code: 200, message: 'Data has been updated successfully', data: res})
      .catch((err: any) => status = {code: 500, message: err, data: null })
      return status
    }

    // Create new address
    const address = await SanityClient.create({
      _type: 'address',
      street: userData.address.street,
      city: userData.address.city,
      zip: userData.address.zip,
    })

    // Update user data
    await SanityClient.patch(userData.id).set({
      phone: userData.phone,
      email: userData.email,
      address: {
        _type: 'reference',
        _ref: address._id
      }
    }).commit()
    .then((res: any) => status = {code: 200, message: 'Data has been updated successfully', data: res})
    .catch((err: any) => status = {code: 500, message: err, data: null })
  }

  return status
}