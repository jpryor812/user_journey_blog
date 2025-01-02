import React from 'react';
import Image from 'next/image';
import '../../BlogPostStyles.css';
import Link from 'next/link';
import YouTubeEmbed from '../../components/YouTubeEmbed';

export default function Calm() {
  return (
    <div className="header-container">
    <div className="header-links" >
      <Link href="/blog">Home</Link>
      <Link href="/blog">Notification Bank</Link>
      <Link href="/about">YouTube</Link>
      <Link href="/about">Twitter</Link>
      <Link href="/about">Submit Your App</Link>
    </div>
    <article className="blog-post">
      <div className="blog-header">
        <h1>Calm</h1>
        <div className="blog-meta">
          <time>January 4, 2025</time>
          <span className="reading-time">5-10 min read</span>
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-image-container">
          <Image
          src="/calm-logo.png"
          alt="Calm Logo"
          width={400}
          height={280}
          className="blog-hero-image"
          />
        </div>

        <p>Today we&apos;re examining Calm&apos;s user experience and interface design from the perspective of a new user seeking help with sleep. We&apos;ll follow the journey from app store discovery to regular usage, analyzing every touchpoint and interaction along the way.</p>

        <h6 style={{ 
          fontStyle: 'italic', 
          fontSize: '0.9rem',
          color: '#666',
          margin: '1rem 0',
          textAlign: 'center'
        }}>
          Note: This is made with Claude summarizing{' '}
          <a 
            href="https://youtube.com/your-video-url" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#59B6F2', textDecoration: 'underline' }}
          >
            my YouTube video
          </a>
          {' '}transcript with slight editing and organization from me, so don&apos;t expect beautiful writing. This is intended to be a short and snappy summary of the video. Therefore, I reccomend you watch the video first and come back here for review. 
        </h6>
<section>
  <h2>App Store Presence</h2>
  <div className="section-content">
    <p>The app store serves as a critical first impression for potential users. According to research, approximately 48% of users discover apps through app store browsing, while only 33% find apps through social media or search engines. This makes the app store presence a crucial marketing channel that deserves significant attention.</p>

    <h3>What I Don&apos;t Like:</h3>
    <ul>
      <li>
        <strong>Outdated Preview Page:</strong> Comparing Calm to competitors like BetterSleep reveals a stark contrast in app store presentation. While Better Sleep offers an engaging video preview showing product features, holiday references, and clear value propositions, Calm relies on static images that barely show the app interface. The preview feels like it hasn&apos;t been updated since their 2017 App of the Year award.
      </li>
      <li>
        <strong>Poor Visual Clarity:</strong> The current preview images make it difficult to see the actual app interface. The tagline &quot;sleep more and stress less live better&quot; is particularly hard to read due to small text size and poor contrast. This crucial messaging gets lost in the presentation.
      </li>
      <li>
        <strong>Missing Video Preview:</strong> The app store now supports brief preview videos, but Calm hasn&apos;t taken advantage of this feature. Competitors are using 10-15 second demos that effectively showcase their features and benefits, creating a more engaging first impression.
      </li>
      <li>
        <strong>Dated Achievement Focus:</strong> Calm prominently displays its &quot;App of the Year 2017&quot; achievement, which feels increasingly irrelevant in 2024. This valuable space could better serve users by highlighting current features and benefits.
      </li>
      <li>
        <strong>Lack of Visual Impact:</strong> The current design fails to leverage the Von Restoff effect, where distinctive elements naturally catch the eye. BetterSleep&apos;s video preview immediately stands out and creates interest, while Calm&apos;s static blue background with small images fails to capture attention.
      </li>
    </ul>
    <YouTubeEmbed 
  videoId="mrZ5LZ2WxX0" 
  title="Calm App Store Page"
/>

    <h3>What I Recommend:</h3>
    <ul>
      <li>
        <strong>Create Engaging Video Content:</strong> Develop a 10-15 second video demo that shows the app in action, including features like meditation interfaces, sleep stories, and the calming visual design. This would help potential users better understand what they&apos;re downloading.
      </li>
      <li>
        <strong>Update Visual Assets:</strong> The preview images need a complete overhaul with clearer, more visible content. Text should be easily readable, and screenshots should better demonstrate the app&apos;s functionality and design.
      </li>
      <li>
        <strong>Modernize Presentation:</strong> Take full advantage of current app store capabilities. This is a relatively low-effort, high-impact investment compared to ongoing marketing efforts like social media and SEO. A well-designed app store page serves as a permanent digital billboard.
      </li>
      <li>
        <strong>Regular Updates:</strong> Implement a system for regular app store presence updates, perhaps every six months or when Apple releases new preview features. This ensures the store presence stays current and effective.
      </li>
    </ul>
    <YouTubeEmbed 
  videoId="gsnaN7ha3tU" 
  title="BetterSleep App Store Page"
/>
  </div>
</section>
<section>
  <h2>Initial Onboarding</h2>
  <div className="section-content">
    <p>The onboarding experience critically influences user retention and engagement. Here&apos;s a detailed look at Calm&apos;s current approach:</p>

    <h3>What I Don&apos;t Like:</h3>
    <ul>
      <li>
        <strong>Premature Notification Requests:</strong> Immediately upon opening the app, users face a notification permission request. This comes before they understand why they might want notifications or what value the app provides. According to various sources:
        <ul>
          <li></li>
          <li>Push notifications can boost engagement by <strong>88%</strong></li>
          <li><strong>65%</strong> of users return within 30 days when notifications are enabled</li>
          <li>Users with notifications enabled show <strong>4x</strong> better retention after three months (<strong>16%</strong> vs <strong>4%</strong>)</li>
          <li><strong>60%</strong> of users say push notifications increase their app usage</li>
        </ul>
        Given these statistics, the timing of this request is crucial and currently suboptimal. It should be done as organic as possible, likely after the user has an ah ha moment with the app.
      </li>
            <li>
        <strong>Permission Overload:</strong> Following the notification request, users immediately face a tracking permissions popup. This rapid succession of permission requests creates unnecessary friction and potential privacy concerns before establishing any trust with the user.
      </li>
      <li>
        <strong>Early Premium Push:</strong> The app quickly presents a premium subscription offer showing &quot;50,000 minutes of audio designed to relieve anxiety, stress and more&quot; without users understanding what this means or experiencing any content. The exit button is subtly placed in the top left corner, making it easy to miss.
      </li>
      <li>
        <strong>Stressful First Experience:</strong> After the initial &quot;take a deep breath&quot; message, users face multiple popup requests for permissions and subscriptions. This creates a stressful environment that contradicts Calm&apos;s core purpose. For an app focused on reducing stress, this aggressive approach feels particularly misaligned.
      </li>
    </ul>
    <YouTubeEmbed 
  videoId="RD3UOoWI4g0" 
  title="Calm Popup Overload"
/>

    <h3>What I Like:</h3>
    <ul>
      <li>
        <strong>Initial Question:</strong> The &quot;What brings you to Calm?&quot; question effectively gathers user intent while demonstrating a commitment to personalization. The app promises to &quot;personalize recommendations based on your goals,&quot; making the data collection feel beneficial to the user.
      </li>
      <li>
        <strong>Clear Value Communication:</strong> The app effectively communicates how it will use responses to customize the experience, creating anticipation for personalized content.
      </li>
      <li>
        <strong>Thoughtful Follow-up:</strong> The promise of personalized recommendations creates a clear value proposition for sharing preferences.
      </li>
    </ul>
    <YouTubeEmbed 
  videoId="NRTL8o9cbwI" 
  title="Calm Popup Overload"
/>

    <h3>What I Recommend:</h3>
    <ul>
      <li>
        <strong>Delay Permission Requests:</strong> Wait to request notifications until after users have experienced value. A natural moment would be after completing their first meditation or when setting up daily check-in reminders.
      </li>
      <li>
        <strong>Streamline Initial Experience:</strong> Start with the personalization questionnaire before any permission requests or premium offers. This establishes value and trust first.
      </li>
      <li>
        <strong>Natural Permission Integration:</strong> Integrate permission requests into relevant features. For example, ask for notification permissions when a user sets up their first daily reminder or meditation schedule.
      </li>
      <li>
        <strong>Demonstrate Before Selling:</strong> Hold premium offers until users have experienced core features. Consider showing the premium offer after users complete their first free session and express satisfaction with the experience.
      </li>
    </ul>
  </div>
</section>

<section>
  <h2>Main App Interface</h2>
  <div className="section-content">
    <h3>What I Like:</h3>
    <ul>
      <li>
        <strong>Ambient Audio:</strong> The app includes subtle cricket sounds in the background while browsing, creating an immediately calming atmosphere that reinforces the app&apos;s purpose.
      </li>
      <li>
        <strong>Scene Customization:</strong> Users can choose from various background scenes like Yosemite, Jasper Lake, and others, with different color schemes for different times of day. This allows for a personalized, calming environment.
      </li>
      <li>
        <strong>Mood-Based Content:</strong> The app offers content recommendations based on current mood, making suggestions more relevant and personal. For example, if a user indicates they&apos;re feeling tired, they might see videos and lo-fi beats designed to help reset attention.
      </li>
      <li>
        <strong>Daily Gift Feature:</strong> The interactive sound bowl feature serves as an engaging daily gift, encouraging regular app visits. The interactive nature of tracing the sound bowl creates an engaging experience rather than just opening a static reward.
      </li>
    </ul>
    <YouTubeEmbed 
  videoId="S0wh32sTPq8" 
  title="Calm Popup Overload"
/>
<YouTubeEmbed 
  videoId="PJpYZobrf-Q" 
  title="Calm Popup Overload"
/>
<YouTubeEmbed 
  videoId="cVyIxbshn8g" 
  title="Calm Popup Overload"
/>

    <h3>What I Recommend:</h3>
    <ul>
      <li>
        <strong>Dynamic Backgrounds:</strong> Implement auto-updating backgrounds based on time of day. For example, showing Denali or Yosemite in the morning and afternoon, then transitioning to Jasper Lake or waterfall scenes at night. Include a toggle option for users who prefer manual control.
      </li>
      <li>
        <strong>Optimize Content Discovery:</strong> Move personalized recommendations higher in the interface hierarchy, making them more accessible. The current placement at the bottom of the page reduces their visibility and utility. 
      </li>
      <li>
        <strong>Highlight Key Features:</strong> Make meditation for beginners more prominent, possibly featuring it on the homepage rather than burying it in the discover section.
      </li>
    </ul>
  </div>
</section>

<section>
  <h2>Re-aligning Content and Increasing Conversions</h2>
  <div className="section-content">
    <h3>What I Like:</h3>
    <ul>
      <li>
        <strong>Celebrity Narrators:</strong> The app features an impressive roster of celebrity narrators, including Harry Styles, Cillian Murphy, and Matthew McConaughey. These high-profile collaborations add significant value and appeal to the content library.
      </li>
      <li>
        <strong>Content Organization:</strong> The sleep content is thoughtfully organized into distinct categories:
        <ul>
        <li></li>
          <li>Train journeys (like the Darjeeling Himalayan Railway and Amsterdam canals)</li>
          <li>Nature stories</li>
          <li>Fictional sleep stories</li>
          <li>ASMR content</li>
        </ul>
        This clear categorization helps users quickly find their preferred type of content.
      </li>
      <li>
        <strong>Visual Quality:</strong> The thumbnails are particularly well-executed. For example, the Glacier Express thumbnail transforms what could be a simple train journey into an evocative &quot;Train to the North Pole&quot; experience. These high-quality visuals help users better understand and connect with the content.
      </li>
      <li>
        <strong>Content Variety:</strong> The range of content types effectively addresses different preferences for falling asleep, from ambient sounds to storytelling to guided experiences.
      </li>
    </ul>
    <YouTubeEmbed 
  videoId="VS08NSPAiOw" 
  title="Calm Popup Overload"
/>

    <h3>What I Don&apos;t Like:</h3>
    <ul>
      <li>
        <strong>Hidden Premium Content:</strong> Users can&apos;t preview any of the celebrity-narrated content before committing to a subscription. If someone is excited to try a Harry Styles narration, they must commit to a free trial without hearing even a sample.
      </li>
      <li>
        <strong>Buried Popular Content:</strong> Celebrity-narrated stories, which could be a major draw for new users, are placed below &quot;Featured&quot; content rather than at the top where they might have more impact. These videos are much more intriguing to click on than general sleep content.
      </li>
      <li>
        <strong>Underutilized Kids Content:</strong> The children&apos;s sleep stories section is buried several rows down, despite potentially being one of the most valuable features for parents. This content could be a significant driver of subscriptions, as parents might subscribe simply to help their children sleep better.
      </li>
    </ul>
    <YouTubeEmbed 
  videoId="bGeQ8PbwS5g" 
  title="Calm Popup Overload"
/>
    <YouTubeEmbed 
  videoId="dNhq4T921ck" 
  title="Calm Popup Overload"
/>

    <h3>What I Recommend:</h3>
    <ul>
      <li>
        <strong>Preview System:</strong> Implement a freemium model where users can experience 2 minutes of any sleep story. This gives users a taste of premium content without giving everything away in a free trial. Users will start a 20 minute sleep story with Harry Styles and then be asked to sign up for premium to continue, which I suspect would have high conversion as many users will wannt to finish the story they&apos;re currently enjoying. Also, it limits the risk of users listening to all of the most interesting content during the free trial and not seeing the benefit of converting to a paid subscription.
      </li>
      <li>
        <strong>Content Hierarchy:</strong> Move popular sleep stories, especially celebrity-narrated content, to the top for new users. This immediately showcases high-value content that might drive conversion.
      </li>
      <li>
        <strong>Kids Content Focus:</strong> Create a dedicated bottom navigation tab for children&apos;s content, replacing the redundant Premium tab (since premium promotions appear throughout the app anyway). This could include:
        <ul>
        <li></li>
          <li>Age-appropriate content categories</li>
          <li>Mood-based recommendations for children</li>
          <li>Parent-focused features and tracking</li>
        </ul>
      </li>
      <li>
        <strong>Parent-Focused Marketing:</strong> Develop stronger marketing messaging around the app&apos;s value for families. Parents might subscribe not just for themselves but for a solution that helps their children sleep better, potentially making this a stronger value proposition than individual use cases.
      </li>
    </ul>
  </div>
</section>

<section>
  <h2>Profile and Statistics</h2>
  <div className="section-content">
    <h3>What I Don&apos;t Like:</h3>
    <ul>
      <li>
        <strong>Surface-Level Metrics:</strong> The current statistics show total sessions, mindful minutes, and streaks, but these numbers don&apos;t provide meaningful insight into the app&apos;s impact on wellbeing or sleep quality.
      </li>
      <li>
        <strong>Basic Calendar View:</strong> The calendar shows activity days but doesn&apos;t connect this activity to outcomes or benefits, making it less meaningful for users.
      </li>
      <li>
        <strong>Limited Retention Mechanics:</strong> The streak feature feels like a shallow attempt at gamification without providing real value or motivation.
      </li>
    </ul>

    <h3>What I Recommend:</h3>
    <ul>
      <li>
        <strong>Wearable Integration:</strong> Partner with devices like Oura Ring to provide concrete data on how Calm usage impacts sleep and stress levels. This could include:
        <ul>
        <li></li>
          <li>Before/after heart rate comparisons for meditation sessions</li>
          <li>Sleep quality scores on nights with/without using Calm</li>
          <li>Weekly and monthly trends in sleep and stress metrics</li>
        </ul>
      </li>
      <li>
        <strong>Impact Visualization:</strong> Create a more meaningful calendar view that shows:
        <ul>
        <li></li>
          <li>Pre-session vs. post-session mood/stress levels</li>
          <li>Sleep quality on nights when Calm is used</li>
          <li>Correlation between consistent app usage and improved metrics</li>
        </ul>
      </li>
      <li>
        <strong>Meaningful Insights:</strong> Replace basic usage statistics with impact metrics that help users understand how the app is improving their wellbeing.
      </li>
    </ul>
  </div>
</section>

<section>
  <h2>Premium Features</h2>
  <div className="section-content">
    <h3>What I Don&apos;t Like:</h3>
    <ul>
      <li>
        <strong>Inconsistent Pricing:</strong> The app shows different pricing offers at different times - offering 50% off initially but then showing full price later in the same session. This creates confusion and potential frustration.
      </li>
      <li>
        <strong>Limited Preview Access:</strong> The complete lockout of premium content makes it difficult for users to assess value before committing.
      </li>
      <li>
        <strong>Referral Imbalance:</strong> The referral program offers 30 days free to new users while current users only get 7-day trials, which could feel unfair to existing users.
      </li>
    </ul>
    <YouTubeEmbed 
  videoId="3HkXgf7fh4w" 
  title="Calm Popup Overload"
/>

    <h3>What I Recommend:</h3>
    <ul>
      <li>
        <strong>Consistent Pricing:</strong> Maintain consistent pricing offers throughout a user&apos;s session. If a discount is offered, honor it throughout that session.
      </li>
      <li>
        <strong>Preview Model:</strong> Instead of a complete free trial, offer preview access to premium content:
        <ul>
        <li></li>
          <li>2-minute previews of any sleep story</li>
          <li>Sample meditations from different categories</li>
          <li>Limited access to popular features</li>
        </ul>
      </li>
      <li>
        <strong>Balanced Referral Program:</strong> Create a more equitable referral system that rewards both parties equally and clearly communicates the benefits to the referrer.
      </li>
    </ul>
  </div>
</section>

<section>
  <h2>Biggest Questions I&apos;d Love to Ask the Calm Team</h2>
  <div className="section-content">
    <p>Calm has built an impressive foundation with high-quality content and a generally well-designed interface. However, several opportunities exist to enhance both user experience and business outcomes:</p>

    <ul>
      <li>
        <strong>Why Go with a Full-Access Free Trial rather than Previews?</strong> 
      </li>
      <li>
        <strong>Why Not Showcase Kids Content More?</strong> 
      </li>
      <li>
        <strong>Have You Looked into Partnerships with Wearables like Oura Ring?</strong>
      </li>
      <li>
        <strong>Why Bombard Users with Pop-ups Immediately rather than Organically</strong>
      </li>
    </ul>

    <p>Overall, Calm is a beautiful app visually, but I think there&apos;s a lot of room for improvement for user experience, content discoverability, and revene generation.</p>
  </div>
</section>
    </div>    
  </article>
  </div>
  );
}