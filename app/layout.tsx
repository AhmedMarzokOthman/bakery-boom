import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#885c4c",
};

export const metadata: Metadata = {
  title: "Bakery Boom - Fresh Artisanal Bread & Pastries",
  description: "Home bakery craft and bread. We specialize in fresh, artisanal bread and pastries made with natural ingredients and traditional baking methods.",
  keywords: "bakery, bread, pastries, fresh bread, artisanal bread",
  openGraph: {
    title: "Bakery Boom - Fresh Artisanal Bread & Pastries",
    description: "Fresh, artisanal bread and pastries made with natural ingredients.",
    images: ['/logo.png'],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
