import Calm from './calm';

export const metadata = {
  title: 'Calm App Review',
  description: 'You&apos;ve probably have had many moments in your life where you wanted to start a conversation with someone but were too scared or just didn&apos;t know what to say. This has happened to me countless times, but then I started using this little trick that has helped me start conversations with anyone at any time.',
  openGraph: {
    title: 'Calm',
    description: 'You&apos;ve probably have had many moments in your life where you wanted to start a conversation with someone but were too scared or just didn&apos;t know what to say. This has happened to me countless times, but then I started using this little trick that has helped me start conversations with anyone at any time.',
    url: 'https://userjourney.blog/blog/calm',
    type: 'article',
    publishedTime: '2024-12-15T00:00:00.000Z',
  },
}

export default function Page() {
  return <Calm />;
}