import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "nufriends | Find Five New Friends in Five Minutes",
  description: "Use nufriends to find new meaningful friendships everyday with tools that help you start and continue conversations. No need to worry about the cold start to a conversation or not knowing what to say. Feel socially superpowered with nufriends, and never feel alone again.",
  keywords: ["make friends", "find friends", "friendship app", "social connection", "meet new people", "finding friends for socially anxious people", "finding friends for introverts", "finding friends for loners, making friends, making friends in a new city,"],
  icons: {
    icon: 'https://nufriends.app/nufriends_logo_favicon.png', // 16x16 or 32x32 px
  },
  openGraph: {
    title: "NuFriends | Find Five New Friends in Five Minutes",
    description: "Join our waitlist to be first to experience a new way of making friends",
    url: 'https://nufriends.app',
    siteName: 'NuFriends',
    images: [
      {
        url: 'https://nufriends.app/nufriends_logo_final.png', // Add your OG image if you have one
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
      <body
      >
        <main>      {/* Wrap children in main tag */}
          {children}
        </main>
\      </body>
    </html>
  );
}