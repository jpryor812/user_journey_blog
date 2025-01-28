import React from 'react';
import Link from 'next/link';
import Image from 'next/image';  
import '../../app/BlogPreviewGrid.css';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  titleColor: string;
}

const BlogPreviewGrid: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Strava",
      date: "January 11, 2025",
      excerpt: "It is no wonder Strava is loved by millions of users. It is perhaps the most feature-rich app I have ever seen, that aligns exactly with what runners, bikers, and so on need in an exercise tracker. While there are certainly some areas for improvement in the visual design and some optimizations, it is hard not to call this an excellently designed app.",
      slug: "strava",
      image: "/strava-logo.png",
      titleColor: "#FC4C02"
    },
    {
      title: "Calm",
      date: "January 4, 2025",
      excerpt: "A visually beautiful app plagued by poor optimizations and underrepresented features. Somehow an app like this still has so much potential to be better.",
      slug: "calm",
      image: "/calm-logo.png",
      titleColor: "#4C4DF8"
    },
    {
      title: "Shopify",
      date: "January 26, 2025",
      excerpt: "One of the most beautiful landing page I have ever seen, but with a product page that leaves a lot to be desired.",
      slug: "shopify",
      image: "/shopify-logo-final.png",
      titleColor: "#7ed957"
    }
  ];

  return (
    <div className="blog-container">
      <h6 style={{ 
        fontStyle: 'italic', 
        fontSize: '1rem',
        color: '#666',
        margin: '1rem 0',
        textAlign: 'center',
        fontWeight: '200',
        fontFamily: 'Suez One, serif'
      }}>
        Welcome to userjourneys.blog, the companion site to the <a 
          href="https://www.youtube.com/channel/UC_bS1W9O8jpTE6gG9wss1rg" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#59B6F2', textDecoration: 'underline' }}
        >User Journeys YouTube channel</a>. Here you can find slightly modified Claude summaries of my videos in quick 5-10 minute reads. You can also check out all of the notifications I have collected from various apps, my X account, or reach out to submit your app for my review! I also welcome any comments regarding my analysis. Talk soon!
      </h6>
      <h1 className="blog-title">RECENT BLOG POSTS</h1>
      
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <article className="blog-card">
              <div className="blog-card-content">
                <h2 className="blog-card-title" style={{ color: post.titleColor }}>
                  {post.title}
                </h2>
                <time className="blog-card-date">
                  {post.date}
                </time>
                <div className="blog-card-image">
                  <Image
                    src={post.image || "/blog/placeholder.jpg"}
                    alt={post.title}
                    width={200}
                    height={140}
                    className="blog-image"
                  />
                </div>
                <p className="blog-card-excerpt">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPreviewGrid;