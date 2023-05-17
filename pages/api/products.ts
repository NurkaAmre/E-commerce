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
      image: body.image,
      colours: body.colours,
      category: body.category,
      set: body.set,
    }
  })
  createProduct
    .then((data) => {
      res.status(200).json({ response: 'success', data: data})
    })
    .catch((err) => {
      console.log('Error Message:', err);
      
      res.status(400).json('Something went wrong')
    });

  
}