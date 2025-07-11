"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { useAuth, base_url } from "@/context/AuthContext";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
const { user, token, logout, refreshUser } = useAuth();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  // useEffect(() => {
  //   const checkLoginCodeStatus = async () => {
  //     if (!user || !token) {
  //       // logout();
  //       return;
  //     }
  //     if (user?.role !== 'admin') {
  //     router.push('/login')
  //   }

  //     try {
  //       const res = await fetch(
  //         `${base_url}auth/check-login-code?userId=${user._id}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       const data = await res.json();

  //       if (!res.ok || !data.isValid) {
  //         // logout();
  //       }
  //     } catch (err) {
  //       console.error("Login code validation failed:", err);
  //       // logout();
  //     } finally {
  //       setChecking(false);
  //     }
  //   };

  //   refreshUser().then(checkLoginCodeStatus);
  // }, [user, token, refreshUser, logout]);

  // if (checking) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="flex flex-col items-center gap-4">
  //         <LoaderCircle className="animate-spin text-green-600 w-8 h-8" />
  //         <p className="text-gray-600 font-medium">Validating session...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
