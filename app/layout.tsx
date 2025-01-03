import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "User Journeys | Analyzing the User Experience of Popular Apps",
  description: "Whether you are a developer, designer, or just curious about the user experience of popular apps, User Journeys is the place to be. We analyze the user experience of popular apps and provide insights on how to improve them. Learn from the best, submit your own apps for review, and get feedback from the community.",
  keywords: ["app design", "app development", "app review", "app analysis", "app user experience", "app user journey", "user experience design", "user experience analysis", "user experience review", "user experience design review", "user experience design analysis", "user experience design analysis review", "user experience design analysis review"],
  icons: {
    icon: 'https://www.userjourneys.blog/UJ.png', // 16x16 or 32x32 px
  },
  openGraph: {
  title: "User Journeys | Analyzing the User Experience of Popular Apps",
    description: "Learn from the most popular apps, submit your own apps for review, and get feedback from me and the community.",
    url: 'https://www.userjourneys.blog',
    siteName: 'User Journeys',
    images: [
      {
        url: 'https://www.userjourneys.blog/UJ.png', // Add your OG image if you have one
        width: 120,
        height: 120,
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
      <body
      >
        <main>      {/* Wrap children in main tag */}
          {children}
        </main>
\      </body>
    </html>
  );
}