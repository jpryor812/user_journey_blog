import Shopify from './shopify';

export const metadata = {
  title: 'Shopify App Review',
  description: 'One of the most beautiful landing page I have ever seen, but with a product page that leaves a lot to be desired.',
  openGraph: {
    title: 'Shopify',
    description: 'One of the most beautiful landing page I have ever seen, but with a product page that leaves a lot to be desired.',
    url: 'https://www.userjourneys.blog/blog/shopify',
    type: 'article',
    publishedTime: '2025-01-26T00:00:00.000Z',
  },
}

export default function Page() {
  return <Shopify />;
}