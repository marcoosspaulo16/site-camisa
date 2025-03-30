import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medicina T126",
  description: "A modern website for sale",
  icons: {
    icon: [
      {url: "/favicon.ico"},
      {url: "./images/logomedicina.png", type: "image/png"},
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="" />
      <body className={inter.className}>
        {children}
        <TempoInit />
      </body>
    </html>
  );
}
