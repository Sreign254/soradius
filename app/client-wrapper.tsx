// app/client-wrapper.tsx
"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Super from "./Super";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Super>{children}</Super>
    </ThemeProvider>
  );
}
