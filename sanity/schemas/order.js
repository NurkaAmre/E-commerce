export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'status',
        title: 'Status',
        type: 'string',
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{type: 'user'}]
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'product'}]}]
      },
      {
        name: 'address',
        title: 'Address',
        type: 'reference',
        to: [{type: 'address'}]
      }
    ]
}