'use server'

import SanityClient from "@/sanity/client"

export default async function updateUserData(userData: any) {
  // Check if address field is empty
  if (Object.keys(userData.address).length === 0) {
    SanityClient.patch(userData.id).set({
      phone: userData.phone,
      email: userData.email,
    }).commit()
      .then((res: any) => console.log('res', res))
      .catch((err: any) => console.log('err', err))
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
      SanityClient.patch(userData.id).set({
        phone: userData.phone,
        email: userData.email,
        address: {
          _type: 'reference',
          _ref: updatedAddress._id
        }
      }).commit()
        .then((res: any) => console.log('res', res))
        .catch((err: any) => console.log('err', err))
      return
    }

    // Create new address
    const address = await SanityClient.create({
      _type: 'address',
      street: userData.address.street,
      city: userData.address.city,
      zip: userData.address.zip,
    })

    // Update user data
    SanityClient.patch(userData.id).set({
      phone: userData.phone,
      email: userData.email,
      address: {
        _type: 'reference',
        _ref: address._id
      }
    }).commit()
      .then((res: any) => console.log('res', res))
      .catch((err: any) => console.log('err', err))
  }
}