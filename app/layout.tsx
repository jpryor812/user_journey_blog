import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";


export const metadata: Metadata = {
  title: "User Journeys | Analyzing the User Experience of Popular Apps",
  description: "Whether you are a developer, designer, or just curious about the user experience of popular apps, User Journeys is the place to be. We analyze the user experience of popular apps and provide insights on how to improve them. Learn from the best, submit your own apps for review, and get feedback from the community.",
  keywords: ["app design", "app development", "app review", "app analysis", "app user experience", "app user journey", "user experience design", "user experience analysis", "user experience review", "user experience design review", "user experience design analysis", "user experience design analysis review", "user experience design analysis review"],
  icons: {
    icon: 'UJ.png', // 16x16 or 32x32 px
  },
  openGraph: {
  title: "User Journeys | Analyzing the User Experience of Popular Apps",
    description: "Learn from the most popular apps, submit your own apps for review, and get feedback from me and the community.",
    url: 'https://www.userjourneys.blog',
    siteName: 'User Journeys',
    images: [
      {
        url: 'https://www.userjourneys.blog/UJ.png', // Add your OG image if you have one
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-QZ6ZB2B8Z0`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QZ6ZB2B8Z0');
          `}
        </Script>
      </head>
      <body
      >
        <main>      {/* Wrap children in main tag */}
          {children}
        </main>
      </body>
    </html>
  );
}
