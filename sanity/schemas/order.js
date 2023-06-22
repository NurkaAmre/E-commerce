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
        name: 'deliveryDate',
        title: 'Delivery Date',
        type: 'date',
      },
      {
        name: 'deliveryAssembly',
        title: 'Delivery Assmebly',
        type: 'boolean',
      },
      {
        name: 'deliveryStatus',
        title: 'Delivery Status',
        type: 'string',
        initialValue: 'unconfirmed',
        options: {
          list: ['unconfirmed', 'processing', 'dispatched', 'delivered']
        }
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
      },
    ]
}