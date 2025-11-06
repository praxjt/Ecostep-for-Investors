import  DashboardLayout  from "@/layouts/DashboardLayout";
import {SiteHeader} from "@/components/site-header";
import {AppSidebar} from "@/components/app-sidebar";
import {SectionCards} from "@/components/section-cards";


export default function DashboardHome() {
  return (
   <div className="flex h-screen bg-gray-50">
     
      <AppSidebar />


      <div className="flex-1 flex flex-col">
        <SiteHeader />
        <main className="p-4 flex-1 overflow-auto">
          <SectionCards />
<h1 className="text-black bg-gray-50"> jfururuftjcc </h1>
        </main>
      </div>
    </div>
  );
}
