import React from 'react';
import Image from 'next/image';
import '../BlogPostStyles.css';
import Link from 'next/link';
import '../globals.css';

export const metadata = {
    title: 'Notification Bank',
    description: 'See all of the notifications I have collected from various popular apps like Calm, Strava, and Duolingo to inspire you to perfect your own notifications.',
    openGraph: {
      title: 'Notification Bank',
      description: 'See all of the notifications I have collected from various popular apps like Calm, Strava, and Duolingo to inspire you to perfect your own notifications.',
      url: 'https://www.userjourneys.blog/notification-bank',
      type: 'website',
    },
  }

export default function NotificationBank() {
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
    <Link href="/about">Submit Your App</Link>
    </div>
    </div>

    <div className="blog-container">
      <h6 style={{ 
        fontStyle: 'italic', 
        fontSize: '1rem',
        color: '#666',
        margin: '1rem 6rem',
        textAlign: 'center',
        fontWeight: '200',
        fontFamily: 'Suez One, serif'
      }}>
Here is a catalog of all of the notifications I have collected from various popular apps like Calm, Strava, and Duolingo to inspire you to perfect your own notifications. Pay attention to the wording, intention, and tone of each notification to see how they fit the brand of the app and why they were sent by the team. 
      </h6>
      <h1 className="blog-title">NOTIFICATION BANK</h1>
    </div>
    <h2 className="blog-title">Calm</h2>
    <h3 className="blog-content">Notifications regarding limited time premium offers</h3>
    <h3 className="blog-content">Notifications about new content</h3>
    <h3 className="blog-content">Reminders to check in, which I requested</h3>
    <h3 className="blog-content">Notifications not neccessarily to get me in the app at that moment, but to cement in my mind that Calm is my go to app for meditation and sleep</h3>
    </div>
  );
}