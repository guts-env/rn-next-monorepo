import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "React Native + Next.js Monorepo Template",
  description: "A monorepo template combining React Native mobile and Next.js web development with shared packages, powered by Turborepo.",
  keywords: "React Native, Next.js, Monorepo, Turborepo, TypeScript, Template",
  authors: [{ name: "Guts" }],
  openGraph: {
    title: "React Native + Next.js Monorepo Template",
    description: "Monorepo for cross-platform development",
    type: "website",
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
