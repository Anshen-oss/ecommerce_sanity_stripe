import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '4opncc64',
  dataset: 'production',
  apiVersion: '2022-04-28',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

// To use images
const builder = imageUrlBuilder(client);

// sanity is going to give us access to the urls where our images are stored
export const urlFor = (source) => builder.image(source);
