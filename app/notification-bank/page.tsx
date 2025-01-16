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
    <Link href="/submit-your-app">Submit Your App</Link>
    </div>
    </div>

    <div className="blog-container">
      <h6 style={{ 
        fontSize: '1.1rem',
        color: '#666',
        margin: '0 auto 4rem auto', 
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'Raleway, sans-serif',
        maxWidth: '80vw',
      }}>
Here is a catalog of all of the notifications I have collected from various popular apps like Calm, Strava, and Duolingo to inspire you to perfect your own notifications. Pay attention to the wording, intention, and tone of each notification to see how they fit the brand of the app and why they were sent by the team. 
      </h6>
      <h1 style={{ 
  fontSize: '2.25rem',
  color: '#333',
  fontFamily: 'Suez One, serif',
  margin: '1rem 0',
  textAlign: 'center',
  fontWeight: '200'
}}>NOTIFICATION BANK</h1>
    </div>

    <h2 style={{ 
  fontSize: '2rem',
  color: '#59B6F2',
  fontFamily: 'Suez One, serif',
  margin: '1rem 0',
  textAlign: 'center',
  fontWeight: '200'
}}>Calm</h2>

    <h3 className="notification-type">Notifications regarding limited time premium offers</h3>
    <div className="notification-container">
    <Image 
  src="/calm-notification-9.jpg" 
  alt="Calm Notification Premium Offer" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<h6 style={{ 
        fontSize: '1.1rem',
        color: '#666',
        margin: '0 auto 4rem auto', 
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'Raleway, sans-serif',
        maxWidth: '80vw',
      }}>
A pretty standard flash-sale notification to try to get a user in the app to jump on a premium offer. Classic scarcity tactic, and I wonder how effective these notifcations are at getting a user to sign up then and there for a premium subscription. If anyone has data, I would love to know!      </h6>
    <h3 className="notification-type">Notifications about reccomended content</h3>
    <div className="notification-container">
    <Image 
  src="/calm-notification-6.png" 
  alt="Calm Notification Premium Offer" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<div className="notification-container">
<Image 
  src="/calm-notification-7.jpg" 
  alt="Calm Notification Premium Offer" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<h6 style={{ 
        fontSize: '1.1rem',
        color: '#666',
        margin: '0 auto 4rem auto', 
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'Raleway, sans-serif',
        maxWidth: '80vw',
      }}>
These are likely their most effective notifications, especially as they get to know the user better. Both of these seem to be begginer-style content, which as a new user, is a great way to guide me into how to get the most out of Calm. I said on the app how certain begginer-like content was hidden in the vast content library, and that having them in a more accessible place would be great for new users. These notifications are in a way serving as that role of helping new users find great content to begin with. Also, showcasing a 7-day program is a great way to lock in a DAU. These are both very strong notifications to get me into the app right now. 
</h6>
    <h3 className="notification-type">Reminders to check in, which I requested</h3>
    <div className="notification-container">
    <Image 
  src="/calm-notification-15.png" 
  alt="Calm Notification Premium Offer" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<h6 style={{ 
        fontSize: '1.1rem',
        color: '#666',
        margin: '0 auto 4rem auto', 
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'Raleway, sans-serif',
        maxWidth: '80vw',
      }}>
If you watched my YouTube review, these are the notifications that come as a result of me asking Calm to remind me to check in to use the app, of which I requested to be sent at 10:00pm, before my hypothetical bedtime. Nothing too special here, but they sent this same notification every day, and I wonder if they could do more. Maybe suggest a specific piece of sleep or relaxation content for me to try. Now, I had not really used the app much, so it would be hard for them to make accurate suggestions, but I got this same notification daily, and I think it could be a little more unique and dynamic, and therefore enticing to click on.</h6>

    <h3 className="notification-type">Notifications not neccessarily to get me in the app at that moment, but to cement in my mind that Calm is my go-to app for meditation and sleep; like an influencer</h3>
    <div className="notification-container">
    <Image 
  src="/calm-notification-10.png" 
  alt="Calm Notification Premium Offer" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<div className="notification-container">
<Image 
  src="/calm-notification-8.jpg" 
  alt="Calm Notification Premium Offer" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<div className="notification-container">
<Image 
  src="/calm-notification-16.jpeg" 
  alt="Calm Notification Premium Offer" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<h6 style={{ 
        fontSize: '1.1rem',
        color: '#666',
        margin: '0 auto 4rem auto', 
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'Raleway, sans-serif',
        maxWidth: '80vw',
      }}>
I thought this was a really unique notification strategy, and one I appreciated. These notifications are not necessarily trying to get me to go into Calm right now, but, at least in my interpretation, made me feel like Calm is my trusted anxiety-relieving influencer. By sending these simple, yet calming notifications, I am reminded that Calm really does make me feel better, and how I should continue to use the app. I think this is a unique and likely effective strategy.</h6>
    
<h2 style={{ 
  fontSize: '2rem',
  color: '#FC4C02',
  fontFamily: 'Suez One, serif',
  margin: '2rem 2rem',
  textAlign: 'center',
  fontWeight: '200'
}}>Strava</h2>
<h3 className="notification-type">The Only Notifications I Have Receieved In The Last Two Weeks</h3>
    <div className="notification-container">
    <Image 
  src="/Strava-notification1.png" 
  alt="Strava Notification" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<div className="notification-container">
<Image 
  src="/Strava-notifications2.png" 
  alt="Strava Notification" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<div className="notification-container">
<Image 
  src="/Strava-notification3.png" 
  alt="Strava Notification" 
  width={400} 
  height={400}
  className="notification-image"
/>
</div>
<h6 style={{ 
        fontSize: '1.1rem',
        color: '#666',
        margin: '0 auto 4rem auto', 
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'Raleway, sans-serif',
        maxWidth: '80vw',
      }}>
First, it&apos;s odd how few notifications I have received from Strava. It has been about one per week, which is very infrequent. I like the Day 1 notification a lot, including the use of the emoji, as it encourages the user to get started and feel the value proposition. The other two frankly aren&apos;t very good. I would learn more into the fitness influener pal like Calm did and send more Monday motivation like messages, but making them better. Something like, even a 30-minute walk once per day can help you lost 10 lbs. in a year. More actionable fitness data like that would be far more engaging. I also expected notifications regarding my challenges such as only two weeks left to earn a free month at Planet Fitness! Let&apos;s start that workout! I just feel like they are severely underutilizing their notifications.
</h6>    
    </div>
  );
}