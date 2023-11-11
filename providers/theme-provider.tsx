"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";

// export default function NextThemeProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
//       {children}
//     </ThemeProvider>
//   );
// }

// ... (your existing imports)

import { useEffect, useState } from 'react';

export default function NextThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {mounted && children}
    </ThemeProvider>
  );
}
