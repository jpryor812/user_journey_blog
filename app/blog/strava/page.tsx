import Strava from './strava';

export const metadata = {
  title: 'Strava App Review',
  description: 'It&apos;s no wonder Strava is loved by millions of users. It is perhaps the most feature-rich app I have ever seen, that aligns exactly with what runners, bikers, and so on need in an exercise tracker. While there are certainly some areas for improvement in the visual design and some optimizations, it is hard not to call this an excellently designed app.',
  openGraph: {
    title: 'Strava',
    description: 'It&apos;s no wonder Strava is loved by millions of users. It is perhaps the most feature-rich app I have ever seen, that aligns exactly with what runners, bikers, and so on need in an exercise tracker. While there are certainly some areas for improvement in the visual design and some optimizations, it is hard not to call this an excellently designed app.',
    url: 'https://www.userjourneys.blog/blog/strava',
    type: 'article',
    publishedTime: '2025-01-11T00:00:00.000Z',
  },
}

export default function Page() {
  return <Strava />;
}