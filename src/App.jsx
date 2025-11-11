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
// import LandingPage from '@/pages/Landing/ConnectWallet';
import LandingPage from '@/pages/Landing/Landingpage.jsx';
import ProtectedRoute from '@/components/ProtectedRoute'; 

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"

// import { ToastProvider } from '@/hooks/usetoast.jsx';
function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={
            // <ToastProvider>
            <LandingPage />

            // </ToastProvider>
            } />

          <Route
            path="/dashboard"
            element={
               <SidebarProvider>
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
              </SidebarProvider>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="create-campaign" element={<CreateCampaign />} />
            <Route path="certificates" element={<Certificates />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={
            //  <ToastProvider>
            <LandingPage />

          // </ToastProvider>
            
            } />
        </Routes>
     
   

      </ThemeProvider>
      );
}

export default App;



// use colorof text : #bdff7b;