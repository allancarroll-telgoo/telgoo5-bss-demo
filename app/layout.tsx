import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react"
import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telgoo5 BSS Demo",
  description: "A demo implementation of the Telgoo5 BSS API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-brand-navy text-white`}>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
