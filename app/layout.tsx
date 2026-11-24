import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Under Scheduled Maintenance | TravelOne",
  description:
    "TravelOne is currently upgrading its Traveler DNA intelligence platform to engineer even more refined, bespoke travel experiences. We will be back online shortly.",
  icons: {
    icon: "https://ik.imagekit.io/288weifiq/nextjs/to-favicon.png",
  },
  openGraph: {
    title: "Scheduled Maintenance | TravelOne",
    description: "Upgrading our systems to elevate your personalized travel journeys.",
    siteName: "TravelOne",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F6EFE6] text-[#1E1E1E] antialiased selection:bg-[#C46A3A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
