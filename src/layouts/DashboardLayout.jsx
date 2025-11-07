import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { IconWallet, IconLogout } from "@tabler/icons-react"
import { useUserStore } from "@/store/WalletAdress"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  const { address } = useUserStore()

  return (
    <div className="flex h-screen w-full">
      <AppSidebar />

      <main className="flex flex-col flex-1">
        <header className="flex items-center justify-between h-14 px-4 border-b">
          <SidebarTrigger />
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <IconWallet /> {address}
            </Button>
            <ModeToggle />
            <Button variant="outline">
              <IconLogout /> Logout
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
