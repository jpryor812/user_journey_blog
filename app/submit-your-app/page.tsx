import React from 'react';
import '@/app/globals.css';
import '@/app/BlogPreviewGrid.css'
import Link from 'next/link';
import Image from 'next/image';


export const metadata = {
    title: 'Submit Your App',
    description: 'Submit your app for review on userjourneys.blog!',
    openGraph: {
      title: 'Submit Your App',
      description: 'Submit your app for review on userjourneys.blog!',
      url: 'https://www.userjourneys.blog/submit-your-app',
      type: 'website',
    },
}

export default function SubmitApp() {
  return (
    <div> 
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

      <div className="blog-container">
        <h6 style={{ 
          fontStyle: 'italic', 
          fontSize: '1.5rem',
          color: '#666',
          margin: '1rem 0',
          textAlign: 'center',
          fontWeight: '200',
          fontFamily: 'Suez One, serif'
        }}>
          I thought of making a form, but that seemed unneccesary. So instead, you can just email me at <a 
            href="mailto:jpryor812@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#59B6F2', textDecoration: 'underline' }}
          >jpryor812@gmail.com</a> a little bit about you and your app and we can get started! Talk soon!
        </h6>
      </div>
    </div>
  );
}
