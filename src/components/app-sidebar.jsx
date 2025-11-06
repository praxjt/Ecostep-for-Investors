import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconCirclePlus,
 IconCertificate,
 IconLayoutGrid,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
 
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Create Campaign",
      url: "#",
      icon: IconCirclePlus,
    },
    {
      title: "Active Campaigns",
      url: "#",
      icon: IconLayoutGrid,
    },
    {
      title: "Certificates",
      url: "#",
      icon: IconCertificate,
    },
    {
      title: "Profile",
      url: "#",
      icon: IconUsers,
    },
  ],
 
}

export function AppSidebar({
  ...props
}) {
  return (


    <Sidebar   collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                 <img src="./lightmodelogopng.png" className="block dark:hidden w-8 min-w-7" alt="light logo" />
      <img src="./darkmodelogo.png" className="hidden dark:block w-8 min-w-7 " alt="dark logo" />

      
                <span className="text-lg font-semibold">Ecostep</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent >
        <NavMain items={data.navMain} />
       
      </SidebarContent>
    
    </Sidebar>
  );
}
