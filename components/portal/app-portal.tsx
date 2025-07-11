"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavPortal } from "@/components/portal/nav-portal"
import { PortalSwither } from "@/components/portal/portal-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { UserPortal } from "./user-portal"

// This is sample data.
const data = {

  
  navMain: [
    {
      title: "Home",
      url: "/portal/customer/",
      icon: SquareTerminal,
      isActive: true,
    
    },
    {
      title: "Projects",
      url: "/portal/customer/projects",
      icon: Bot,
    
    },
    {
      title: "Tickets",
      url: "/portal/customer/tickets",
      icon: BookOpen,
     
    },
    {
      title: "Settings",
      url: "/portal/customer/",
      icon: Settings2,
   
    },
  ],
 
}

export function AppPortal({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="bg-yellow-300">
      <SidebarHeader>
        <img  src="/img/favicon.png"
        className="w-15 h-15"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavPortal items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <UserPortal  />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
