"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PAGE_ACCENTS, SERVICE_DETAIL_ACCENT } from '@/lib/data';

const AccentContext = createContext<string>('#C9A84C');

export function useAccent() {
  return useContext(AccentContext);
}

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [accent, setAccent] = useState('#C9A84C');

  useEffect(() => {
    let color = PAGE_ACCENTS[pathname ?? '/'] ?? '#C9A84C';
    if ((pathname ?? '').startsWith('/services/')) {
      color = SERVICE_DETAIL_ACCENT;
    }
    setAccent(color);
    document.documentElement.style.setProperty('--page-accent', color);
  }, [pathname]);

  return (
    <AccentContext.Provider value={accent}>
      {children}
    </AccentContext.Provider>
  );
}
