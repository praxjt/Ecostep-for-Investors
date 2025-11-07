import  DashboardLayout  from "@/layouts/DashboardLayout";
import {SiteHeader} from "@/components/site-header";
import {AppSidebar} from "@/components/app-sidebar";
import {SectionCards} from "@/components/section-cards";
// import {ChartAreaInteractive} from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
// import { Table } from "@/components/ui/table";

export default function DashboardHome() {
  return (
    <div  className="space-y-6">
  <SectionCards />
<DataTable/>
 </div>
  );
}
