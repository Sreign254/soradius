"use client";
import { AppPortal } from "@/components/portal/app-portal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuth, base_url } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

export default function PortalLayout({ children }) {
  // const { user, token, logout, refreshUser } = useAuth();
  // const router = useRouter();
  // const [checking, setChecking] = useState(true);

  // useEffect(() => {
  //   const checkLoginCodeStatus = async () => {
  //     if (!user || !token) {
  //       logout();
  //       return;
  //     }

  //   if (user?.role !== 'user') {
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
  //         logout();
  //       }
  //     } catch (err) {
  //       console.error("Login code validation failed:", err);
  //       logout();
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
    <SidebarProvider>
      <AppPortal />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* {user?.role} */}
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
