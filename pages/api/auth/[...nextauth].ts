import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Stripe from "stripe"

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  events: {
    createUser: async ({ user })  => {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: '2022-11-15',
      })
      //LETS CREATE STRIPE CUSTOMER
      if(user.name && user.email){
      const costumer = await stripe.customers.create({
        email: user.email || undefined,
        name: user.name || undefined,
      })
      //Update our prisma user with the stripeCustemerId
      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId: costumer.id },
      })
    }
    },
  },
  callbacks: {
    async session({session, token, user}){
      session.user = user
      return session
    }
  }
}

export default NextAuth(authOptions);