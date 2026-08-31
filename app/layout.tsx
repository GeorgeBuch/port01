import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Wisit Prasinthong — Junior Full-Stack Developer";
  const description = "Portfolio of Wisit Prasinthong, a junior full-stack developer in Bangkok building useful web products with React, Node.js, Express, and modern databases.";
  const socialImage = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    authors: [{ name: "Wisit Prasinthong" }],
    keywords: ["Wisit Prasinthong", "Full-Stack Developer", "React Developer", "Node.js Developer", "Bangkok"],
    openGraph: {
      title,
      description: "A curious builder creating useful things for the web from Bangkok, Thailand.",
      type: "website",
      locale: "en_US",
      images: [{ url: socialImage, width: 1536, height: 1024, alt: "Wisit Prasinthong — Junior Full-Stack Developer" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "A curious builder creating useful things for the web from Bangkok, Thailand.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
