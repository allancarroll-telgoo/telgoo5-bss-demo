// 'use client' directive ensures client-only behavior
'use client';

import Header from "./components/Header";
import { usePathname } from "next/navigation";
import { SubscriptionProvider } from "@/context/SubscriptionContext";

export default function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <SubscriptionProvider>
      {pathname !== '/' && <Header />}
      <main>
        {children}
      </main>
    </SubscriptionProvider>
  );
}