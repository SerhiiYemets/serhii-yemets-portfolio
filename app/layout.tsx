import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://serhii-yemets.dev"),
  title: {
    default: "Serhii Yemets — Full Stack JavaScript Developer",
    template: "%s | Serhii Yemets",
  },
  description:
    "Full Stack JavaScript Developer specializing in React, Next.js, Node.js and TypeScript. Building scalable, production-ready web applications from idea to deployment.",
  keywords: [
    "Serhii Yemets",
    "Full Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Serhii Yemets" }],
  creator: "Serhii Yemets",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Serhii Yemets — Full Stack JavaScript Developer",
    description:
      "Full Stack JavaScript Developer specializing in React, Next.js, Node.js and TypeScript.",
    siteName: "Serhii Yemets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serhii Yemets — Full Stack JavaScript Developer",
    description:
      "Full Stack JavaScript Developer specializing in React, Next.js, Node.js and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
