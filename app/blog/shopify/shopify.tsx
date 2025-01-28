import React from 'react';
import Image from 'next/image';
import '../../BlogPostStyles.css';
import Link from 'next/link';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import '../../globals.css';

export default function Shopify() {
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
    <article className="blog-post">
      <div className="blog-header">
        <h1 style={{ color: "#7ed957" }}>Shopify</h1>
        <div className="blog-meta">
          <time>January 26, 2025</time>
          <span className="reading-time">5-10 min read</span>
        </div>
      </div>

      <div className="blog-content">
        <div className="blog-image-container">
          <Image
          src="/shopify-logo-final.png"
          alt="Shopify Logo"
          width={400}
          height={280}
          className="blog-hero-image"
          />
        </div>

        <p>Today we&apos;re doing something a little different than the past. Today we&apos;re examining the user experience of Shopify&apos;s landing page and product page. As you may know, Shopify is a web app, so we won&apos;t be analyzing similar things as we did in the past like the app store search and notifications. Though, we certainly analyze the visual design how Shopify, how they make their users feel through their homepage design, and how they could improve the onboarding experience for new users.</p>

        <h6 style={{ 
          fontStyle: 'italic', 
          fontSize: '0.9rem',
          color: '#666',
          margin: '1rem 0',
          textAlign: 'center'
        }}>
          Note: This is made with Claude summarizing{' '}
          <a 
            href="https://youtu.be/kVEqaM-foyI" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#59B6F2', textDecoration: 'underline' }}
          >
            my YouTube video
          </a>
          {' '}transcript with slight editing and organization from me, so don&apos;t expect beautiful writing. This is intended to be a short and snappy summary of the video. Therefore, I reccomend you watch the video first and come back here for review. 
        </h6>
<section>
  <h2>First Impression:</h2>
  <div className="section-content">
        <p>Now, I normally put in little screen recordings of the sections I am talking about, but you can just go to Shpoify.com to see for yourself, so I reccommend just doing that. </p>
    <h3>What I Like:</h3>
        <p>I love the intro video, and I love how it takes up basically the whole page is. I am a big fan of opaque images or videos in the background of a landing page with header text in front of it. I suggested this for Strava&apos;s homepage to give it a little more pop and excitement.</p>
        <p>The video itself is great because it is a collage of people either just starting out or having success, showing visitors that anyone can start and anyone can break out. </p>
        <p>The revolving header text follows the same vibe of inspiring newcomers to reach their full potential.</p>
        <p>The two start free trial buttons are in traditional positions at the top right and at or near the center. They aren&apos;t too large but visible and eye-catching with the bright white on the opaque background. I prefer this layout to a large &quot;Get Started&quot; button in the center, like every AI-generated website. </p>
        <p>A great landing page is memorable, often because it is unique. Shopify is certainly unique here, and I will remember it. </p>
        <p>I love the &quot;Why we build Shopify&quot; (I&apos;m a little confused why it says build and not built; that&apos;s a little odd, but I guess it&apos;s to say how they&apos;re still building Shopify). I love companies that don&apos;t just sell a product to customers but instead bring them into the community. Here, you learn Shopify&apos;s origin story and why they care for and respect their users so deeply. I think way more companies should do this, no matter how big or small they are.</p>
    <h3>What I Question:</h3>
        <p>The Winter &apos;25 Edition button prominently stands out, which we will discuss in more detail later. I actually don&apos;t think this button should be so prominently displayed as it draws the user away from the Start Free Trial page a bit. While I love the Winter Updates page, as I&apos;ll talk more about later, it&apos;s pretty confusing for new users and takes the focus away from starting a store a little bit. Anyway, I&apos;d maybe make the button slightly more subtle to keep the free trial buttons the most prominent. </p>
        <p>Anyway, I would love to know why they want to draw new users (as returning users just go to their own store dashboard) to this updates screen if they haven&apos;t even used the product yet.</p>
    </div>
</section>
<section>
  <h2>The Tabs:</h2>
  <div className="section-content">
    <h3>What I Like:</h3>
    <p>
      The four tabs are great header tabs: Solutions, Pricing, Resources, and Enterprise. It is simple and encapsulates all of the important information.
    </p>
    <h3>What I Recommend:</h3>
    <p>
      Unfortunately, as expected with a massive product like Shopify, the Solutions tab is quite overwhelming for a new user, as there are about 30 links a user could click on. As we continue to live in a ChatGPT world, people are getting used to typing a specific question to be answered rather than having to click through various links and search for themselves.
    </p>
    <p>
      Now, this isn&apos;t a Shopify problem, necessarily, but I think more websites in general should adopt a design like this on their tabs page. It would help people find the answers to their questions quicker, therefore getting them to sign up for the product quicker.
    </p>
    <Image src="/Shopify-plus-box.png" alt="Shopify Plus Box" width={720} height={280} style={{ margin: '1rem 0', alignSelf: 'center', justifySelf: 'center' }} />
    <Image src="/shopify-box-expanded.png" alt="Shopify Box Expanded" width={720} height={280} style={{ margin: '1rem 0', alignSelf: 'center', justifySelf: 'center' }} />
    <p>
      Again, this is not a Shopify problem, but I think this would be a great feature to adopt to help their visitors get their questions answered and sign up for a free trial quicker.
    </p>
  </div>
</section>

<section>
  <h2>The Rest of the Landing Page:</h2>
  <div className="section-content">
    <h3>What I Like:</h3>
    <p>
      Again, it&apos;s beautiful. It showcases all that a Shopify store can be and everything that a solopreneur can create without drowning the user in dozens of features. Instead, Shopify only shows a few core features with excellent gif-like demos, some even being interactive, which I absolutely love.
    </p>
    <p>
      For example, in the “sell here, there, and everywhere" section, you can actually click the “Pay Now” button, showing the user how quick and easy Shop Checkout is. I have never seen an interactive demo like that on a landing page before, and I love it. I highly recommend trying to build that in a prominent place on your landing page if you have a core feature that is simple and delightful to use.
    </p>
    <p>
      These high-quality gifs show some of Shopify&apos;s features but also continue the message of &quot;look what you can do and look how we can help,&quot; which is the core theme of the landing page.
    </p>
    <p>
      I also like how there are many features on the landing page, which at times can be overwhelming, but in Shopify&apos;s case, it is simply entertaining. They rely on one big headline of a few words and then show the product&apos;s features in these short and snappy demos. There is some subtitle text that&apos;s a sentence or two if you&apos;re interested, but the videos speak thousands of words in just a few seconds. It makes the site much more engaging and less overwhelming.
    </p>
    <p>I wouldn&apos;t change a thing!</p>
    <h3>What I Love but also Don&apos;t Like:</h3>
    <p>
      Click on the Winter &apos;25 Edition and see what happens. You teleport to a &apos;90s website with the option to watch a bizarre compilation of AI-generated videos explaining new Shopify features in a hilarious and fun way. As a product design enthusiast, I love this page, and it fits right into Shopify&apos;s unique, builder-first culture.
    </p>
    <Image src="/shopify-winter-page.png" alt="Shopify Winter 25 Edition" width={720} height={280} style={{ margin: '1rem 0', alignSelf: 'center', justifySelf: 'center' }} />
    <p>
      BUT, it seems weird to have this as a prominent button on the landing page. As I said, the landing page is for new users, and you want to keep them focused on the life-changing opportunity that starting a business on Shopify presents. First, a new user wouldn&apos;t understand the benefit of new features, and second, the page is such a stark contrast in design that it might confuse some new users as to what is going on with the website.
    </p>
    <p>
      Maybe I&apos;m overthinking, and again, I love the page; I would rather place it on the store dashboard for signed-in users. Those users would be more likely to interact with the new features page, and since they&apos;re drinking the Shopify Kool-aid, they would probably love the quirkiness.
    </p>
    <p>
      This page may drive conversions somehow, and I would love to know the reasons behind their decisions to place this button where they did, but for me, it seems a little distracting.
    </p>
  </div>
</section>

<section>
  <h2>Onboarding:</h2>
  <div className="section-content">
    <h3>What I Like:</h3>
    <p>
      This point I&apos;m about to make is subtle but a really important feature of good onboarding. First, the colors on the page are really nice; I love them, but what&apos;s great about this page is how there are three card components stacked on top of one another, and you can see all of them.
    </p>
    <Image src="/shopify-onboarding-cards.png" alt="Shopify Onboarding Page" width={720} height={280} style={{ margin: '1rem 0', alignSelf: 'center', justifySelf: 'center' }} />
    <p>
      This is important because it tells the user how long onboarding is going to be. Humans are impatient, but we also have a delta of impatience that rises as our expectations don&apos;t meet our reality.
    </p>
    <p>
      If your onboarding process takes five minutes but the user expects it to take 30 seconds, they might get frustrated and/or bored and decide this effort isn&apos;t worth it, thus leaving the app. Similarly, your onboarding process could only take 35 seconds, but again, if the user expects it to take 30 seconds, they might get frustrated and/or bored and decide this effort isn&apos;t worth it, thus leaving the app.
    </p>
    <p>
      This is why you must tell your users in some way how long onboarding will take. If it takes five minutes because you have to collect a lot of health information for a wellness tracking app, let the user know that and why so that their expectations meet that reality. Some companies also have progress bars at the top of the screen as a fun way to keep the user going and show them how close they are to the end. You could even add milestone moments on the progress bar. You can see how Duolingo uses the progress bar, which fits their gamification theme.
    </p>
    <Image src="/duolingo-onboarding.png" alt="Duolingo Onboarding Page" width={280} height={280} style={{ margin: '1rem 0', alignSelf: 'center', justifySelf: 'center' }} />
    <p>
      Shopify doesn&apos;t have a progress bar, but it does have a subtle design feature that tells the user that onboarding won&apos;t take too long. There are only three cards, and the first card is a simple checkbox answer to a question. Therefore, you can suspect the next two cards will be similar and will likely take less than a minute in total.
    </p>
    <p>
      This stacked card style is a great way to frame the length of onboarding and encourage the user to continue. Although this isn&apos;t very significant in Shopify&apos;s case, since it&apos;s a very short onboarding process, it&apos;s still an important design feature to understand.
    </p>
    <p>
      There isn&apos;t much guidance inside the actual product, where you edit and view information for your store. There is a brief and bland-looking setup guide to tell you about the important things to set up before selling a product, which is helpful, but it&apos;s all pretty vague. I&apos;ll talk more about the visual design in the product page section, but I think Shopify should add some more detail and guidance here.
    </p>
    <p>
      What I do like is when you click on the get started part of the startup guide, like Add Your First Product, you get this nice page on the right side of your screen that has a lot of concise information and tips for you to sift through. It&apos;s not overbearing, and it&apos;s enough information.
    </p>
    <Image src="/shopify-setup-guide.png" alt="Shopify setup Guide" width={720} height={280} style={{ margin: '1rem 0', alignSelf: 'center', justifySelf: 'center' }} />
    <h3>What I Recommend:</h3>
    <p>
      I would have that setup guide on the right side of the page everywhere. For example, there are only nine tasks in the Setup Guide, and many features like marketing, finance, and analytics are not highlighted; that seems to be left to the user to learn. I suppose it&apos;s ok because it&apos;s not core to starting your store (though maybe finances are), but add a little more guidance to these pages.
    </p>
    <p>
      I think each page having its own setup guide for that specific page would be really helpful. Yes, you can find more information on the help screen and read through the documents, but I think giving the user this brief overview of all of the most important features would be really helpful.
    </p>
    <Image src="/shopify-page.png" alt="Shopify setup page" width={720} height={280} style={{ margin: '1rem 0', alignSelf: 'center', justifySelf: 'center' }} />
    <p>
      I thought this could be a brief video since Shopify is so great at making demos, but I think the setup guide is perfect, so I would recommend creating one for each page, not just the core setup features.
    </p>
  </div>
</section>

<section>
  <h2>The Product:</h2>
  <div className="section-content">
    <h3>What I Like:</h3>
    <p>
      The simplicity is helpful. I like that the left-side menu has keywords that, when clicked on, open a mini-menu under each keyword. While there is a lot, finding whatever you&apos;   re looking for is fairly simple. I won&apos;t go into every single feature one by one, but they all seem to be simple and easy to use for the most part.
    </p>
    <p>
      The website builder feature is great. The pre-made themes are beautiful and easy to customize by just clicking and dragging components or changing sizes from medium to large.
    </p>
    <Image src="/shopify-website.png" alt="Shopify Website Builder" width={720} height={280} style={{ margin: '1rem 0', alignSelf: 'center', justifySelf: 'center' }} />
    <h3>What I Recommend:</h3>
    <p>
      The product page is kind of a whimper after a bang of a landing page. The off-whites and grays don&apos;t really spark the inspiration that the landing page did. I would do one of three visual design changes to add a little more spark and alleviate the letdown that I, and maybe some other users, felt.
    </p>
    <ol style={{
  listStyleType: 'decimal',
  paddingLeft: '2rem',
  marginBottom: '1rem'
}}>
  <li>They could show a background similar to how it looked on the onboarding page with the green and purple blobs of light; I thought that looked really nice.</li>
  <li>They could have some type of light green or opaque darker Shopify green as the background, which changes once you pick the theme and colors for your store. Then, the background colors remind you of your store and instill that inspiration.</li>
  <li>They could have an opaque image of the user&apos;s store as the background, again instilling that feeling of inspiration.</li>
    </ol>
    <p>
      Every section has white card components, so these changes shouldn&apos;t visually impair the page much, if at all, and I think any of these three changes would just add a little more pop to this otherwise fairly dull page.
    </p>
    <p>
      Next, the app store feels abandoned. I&apos;m sure Shopify prompts users to add apps at certain organic moments, but it&apos;s unclear for new users why they would use apps as their value isn&apos;t explained at all.
    </p>
    <Image src="/shopify-app-store.png" alt="Shopify App Store" width={720} height={280} style={{ margin: '1rem 0', alignSelf: 'center', justifySelf: 'center' }} />
    <p>
      Instead, I would have some type of video, just 30 seconds or so, that tells users why they should use apps to elevate their e-commerce business when they first click on the apps tab. Otherwise, it feels like a tab that is kind of overwhelming for a new user, and one they likely won&apos;t explore for a while.
    </p>
    <p>
      There is so much value in the Shopify app store, so Shopify should immediately convey that value to their new users and get them excited about the superpowers they could unlock through the app store.
    </p>
  </div>
</section>

<section>
  <h2>Overall:</h2>
  <div className="section-content">
    <p>
      It would be hard to find a better landing page than Shopify, both in beauty and effectiveness. Again, I would copy as much as possible. What&apos;s fun about analyzing these design-focused companies is that you can find new features you hadn&apos;t seen before, like the interactive demos, quirky pages, like the Winter &apos;25 Update page, and opportunities for improvement, such as the visual layout of the store dashboard page.
    </p>
    <p>
      This analysis really had it all, and I hope you look as intensely as I did at Shopify if you&apos;re looking to enhance the UX and UI of your website and product.
    </p>
    <YouTubeEmbed videoId="kVEqaM-foyI" />
  </div>
</section>
    </div>    
  </article>
  </div>
  );
}