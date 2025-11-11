import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { IconWallet, IconLogout } from "@tabler/icons-react"
import { useUserStore } from "@/store/WalletAdress"
import { Outlet } from "react-router-dom"

function shortenAddress(address) {
  if (!address) return "";
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}


export default function DashboardLayout() {
  const { address } = useUserStore()
  const [wallet, setWallet] = useState("");
  const [token ,setoken ] = useState("")
   const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const storedWallet = localStorage.getItem("wallet");
    const token = localStorage.getItem("accessToken");
    if (storedWallet) {

      setoken(token);
      setWallet(storedWallet);
    }

    if (token && storedWallet) {
      fetchDashboard(storedWallet,token);
    }

  }, [ ]);



   const fetchDashboard = async (walletParam, tokenParam) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:3001/dashboard", {
        headers: {
          "Content-Type": "application/json",
          "x-user-address": walletParam,
          "Authorization": `Bearer ${tokenParam}`,
        },
      });

      if (res.status === 401 || res.status === 403) {
        navigate("/login");
        return;
      }

      if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const data = await res.json();
      console.log("Dashboard data:", data);
        setDashboardData(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  
    }
   const handleLogout = () => {
    localStorage.removeItem("wallet");
    localStorage.removeItem("accessToken");
    
   
    navigate("/", { replace: true }); 
  };


  return (
    <div className="flex h-screen w-full">
      <AppSidebar />

      <main className="flex flex-col flex-1">
        <header className="flex items-center justify-between h-14 px-4 border-b">
          <SidebarTrigger />
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <IconWallet /> {shortenAddress(wallet)}
            </Button>
            <ModeToggle />
            <Button variant="outline" onClick={handleLogout}>
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
