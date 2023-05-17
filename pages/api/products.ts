import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const prisma = new PrismaClient();
 
  const createProduct = prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      price: body.price,
      quantity: body.quantity,
      images: body.images,
      colours: body.colours,
      category: body.category,
      set: body.set,
    }
  })
  createProduct
    .then((data) => {
      res.status(200).json({ response: 'Success', message: 'Product created successfully'})
    })
    .catch((err) => {
      console.log('Error Message:', err);
      
      res.status(400).json({ response: 'Failed', message: 'Something went wrong'})
    });

  
}