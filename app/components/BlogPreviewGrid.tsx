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
}

const BlogPreviewGrid: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Calm",
      date: "January 1, 2025",
      excerpt: "A beautiful app plagued by lazy optimization and underrepreented features. ",
      slug: "calm",
      image: "/calm-logo.png"
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">RECENT BLOG POSTS</h1>
      
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <article className="blog-card">
              <div className="blog-card-content">
                <h2 className="blog-card-title">
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