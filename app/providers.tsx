'use client';

import { AppProvider } from './context/AppContext';
import { PortingProvider } from './context/PortingContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <PortingProvider>
        {children}
      </PortingProvider>
    </AppProvider>
  );
}