import  DashboardLayout  from "@/layouts/DashboardLayout";
import { useState, useEffect } from "react";
import {SiteHeader} from "@/components/site-header";
import {AppSidebar} from "@/components/app-sidebar";
import {SectionCards} from "@/components/section-cards";
// import {ChartAreaInteractive} from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
// import { Table } from "@/components/ui/table";
import { useUserStore } from "@/store/WalletAdress"
import { useNavigate } from "react-router-dom";
import { baseurl } from "@/store/baseurl";



export default function DashboardHome() {

  const {address,accesstoken} = useUserStore();

    const navigate = useNavigate();

   const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [wallet, setWallet] = useState("");
    // const [token ,setoken ] = useState("")


  
  useEffect(() => {
    const storedWallet = localStorage.getItem("wallet");
    const token = localStorage.getItem("accessToken");
    if (storedWallet) {

  
    }

    if (token && storedWallet) {
      fetchDashboard(storedWallet,token);
    }

  }, [ ]);

   const fetchDashboard = async (walletParam, tokenParam) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${baseurl}dashboard`, {
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
  

  return (
    <div  className="space-y-6">
  <SectionCards dashboardData={dashboardData}/>
<DataTable events={dashboardData?.events|| []}/>
 </div>
  );
}
