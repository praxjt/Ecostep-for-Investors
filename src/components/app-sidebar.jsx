import * as React from "react"
import { Link } from "react-router-dom";
import lightLogo from '/lightmodelogopng.png'
import darkLogo from '/darkmodelogo.png'
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
 IconLayoutDashboard,
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
      url: "/dashboard",
      icon:IconLayoutDashboard,
    },
    {
      title: "Create Campaign",
      url: "/dashboard/create-campaign",
      icon: IconCirclePlus,
    },
    // {
    //   title: "Active Campaigns",
    //   url: "/dashboard/active-campaigns",
    //   icon: IconLayoutGrid,
    // },
    // {
    //   title: "Certificates",
    //   url: "/dashboard/certificates",
    //   icon: IconCertificate,
    // },
    // {
    //   title: "Profile",
    //   url: "/dashboard/users",
    //   icon: IconUsers,
    // },
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
             <Link to="/dashboard">
          <img src={lightLogo} className="block dark:hidden w-8 min-w-7" alt="light logo" />
          <img src={darkLogo} className="hidden dark:block w-8 min-w-7" alt="dark logo" />
          <span className="text-lg font-semibold">Ecostep</span>
        </Link>
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
