import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import { Analytics } from "@vercel/analytics/react"

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
        <SubscriptionProvider>
          <Header />
          <main>
            {children}
          </main>
        </SubscriptionProvider>
        <Analytics />
      </body>
    </html>
  );
}
