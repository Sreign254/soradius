import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { defaultMetadata } from "@/lib/meta";
import ClientWrapper from "./client-wrapper"; 
import {AuthProvider} from '@/context/AuthContext'
import { Toaster } from "@/components/ui/sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider> 
          <Toaster />
          <ClientWrapper>{children}</ClientWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
