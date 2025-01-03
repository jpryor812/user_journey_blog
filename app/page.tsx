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
          <Link href="/blog">Home</Link>
          <Link href="/blog">Notification Bank</Link>
          <Link href="/about">YouTube</Link>
          <Link href="/about">Twitter</Link>
          <Link href="/about">Submit Your App</Link>
        </div>
      </div>
      <BlogPreviewGrid />
    </main>
  );
}