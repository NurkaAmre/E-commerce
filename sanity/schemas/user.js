export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'url'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'reference',
      to: [{ type: 'address' }]
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    }
    // {
    //   // this is only if you use credentials provider
    //   name: 'password',
    //   type: 'string',
    //   hidden: true
    // },
    // {
    //   name: 'emailVerified',
    //   type: 'datetime',
    //   hidden: true,
    // }
  ]
};