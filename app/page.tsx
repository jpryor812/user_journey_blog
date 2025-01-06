import Link from 'next/link';
import BlogPreviewGrid from './components/BlogPreviewGrid';
import Image from 'next/image';
export default function BlogPage() {
  return (
    <main>
      <div className="header-container">
        <div className="header-left">
          <Image src="/UJ.png" alt="Header Image" width={60} height={60} />
        </div>
        <div className="header-links">
    <Link href="/">Home</Link>
    <Link href="/notification-bank">Notification Bank</Link>
    <Link href="https://www.youtube.com/channel/UC_bS1W9O8jpTE6gG9wss1rg">YouTube</Link>
    <Link href="https://x.com/Justin_Pryor_">Twitter</Link>
    <Link href="/submit-your-app">Submit Your App</Link>
    </div>
      </div>
      <BlogPreviewGrid />
    </main>
  );
}