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
        name: 'paymentId',
        title: 'Payment Id',
        type: 'string',
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            name: 'order_product',
            title: 'Order Product',
            type: 'object',
            fields: [
              {
                name: 'product',
                title: 'Product',
                type: 'reference',
                to: [{type: 'product'}]
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
              }
            ]
          }
        ]
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{type: 'user'}]
      },
      {
        name: 'address',
        title: 'Address',
        type: 'reference',
        to: [{type: 'address'}]
      }
    ]
}