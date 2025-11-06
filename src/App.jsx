import React from 'react';
import './App.css';
import ConnectWallet from './pages/Landing/ConnectWallet.jsx';
import  DashboardLayout  from './layouts/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome.jsx';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
function App() {
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Routes>
  
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />         
        {/* <Route path="create" element={<CreateCampaign />} />  
        <Route path="active" element={<ActiveCampaigns />} />  
        <Route path="certificates" element={<Certificates />} />
        <Route path="profile" element={<Profile />} />          */}
      </Route>

      {/* Public pages */}
      {/* <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} /> */}

      {/* Default route */}
      <Route path="*" element={<DashboardHome />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;



// use colorof text : #bdff7b;