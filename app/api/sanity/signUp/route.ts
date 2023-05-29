import { signUpHandler } from 'next-auth-sanity';
import SanityClient from '@/sanity/client';

const handler = signUpHandler(SanityClient);

export { handler as POST };