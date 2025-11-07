import { IconCirclePlusFilled, IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
        
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} >
                  <Link to={item.url} className="flex items-center gap-2">
                {/* {item.icon && <item.icon  className="!w-6 !min-w-6 "/>} */}
                {item.icon && <item.icon className="!w-6 !h-6 min-w-[1.5rem] min-h-[1.5rem]" />}

                <span  >{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
