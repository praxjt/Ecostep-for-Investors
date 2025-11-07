import React from 'react';
// import './App.css';
import { SidebarProvider } from "@/components/ui/sidebar";
import ConnectWallet from './pages/Landing/ConnectWallet.jsx';
import  DashboardLayout  from '@/layouts/DashboardLayout';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import CreateCampaign from '@/pages/CreateCampaign/CreateCampaign';
import Certificates from '@/pages/Certificates/Certificates';
import ActiveCampign from '@/pages/ActiveCampaign/ActiveCampaign';
import Users from '@/pages/Users/Users';

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
function App() {
  return (
    <SidebarProvider>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="create-campaign" element={<CreateCampaign />} />
        <Route path="active-campaigns" element={<ActiveCampign />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="users" element={<Users />} />
      </Route>

      {/* fallback route */}
      <Route path="*" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
      </Route>
    </Routes>
    </ThemeProvider>
   </SidebarProvider>
  );
}

export default App;



// use colorof text : #bdff7b;