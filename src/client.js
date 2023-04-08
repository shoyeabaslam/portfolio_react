import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'by2p3c47',
  dataset: 'production',
  apiVersion: '2023-04-02',
  useCdn: true,
  token: 'skB5vN9NL5Arsp56opCZOb2xW38Ds3SxlXuEFZQb9ZILnvbgNceHa1Z3d6hOllogE9NjPwhVqFK9wSL6HpVaeyDXOOKOzzCc7poO9VAOcOiMHFy21gdN3gM1Iex6rvsbXUoCSbbTfEudKVOh2R1OOkqio3szQRlGJmoxFNBS0uYPmGtG0SKT',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);