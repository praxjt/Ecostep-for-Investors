import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useUserStore } from "@/store/WalletAdress";
import { Button } from "@/components/ui/button";
import SparklesText from "@/components/sparklestext";
import Notification from "@/components/ui/toast";
import { useToast } from '@/hooks/usetoast';
import { useNavigate } from 'react-router-dom';


function ConnectWallet() {
  // const [address, setAddress] = useState(null);
   const { address, setAddress } = useUserStore();
  const [errors, setError] = useState(null);
  const [token, setToken] = useState(null);
  const { notifications, success, error, loading, removeToast } = useToast();
const navigate = useNavigate();

  const connectWallet = async () => {
    console.log("clicked connect");
       

    try {
      if (!window.ethereum) {
        throw new Error('MetaMask not detected');
      }

      
    const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      const network = await provider.getNetwork();
      console.log("Connected address:", accounts[0],signer,addr,network);
      setAddress(addr);


    
 const connectRes = await fetch("http://localhost:3001/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: addr,
          chainId:  Number(network.chainId),
          role:"INVESTOR"
        }),
      });

      const connectData = await connectRes.json();
      if (!connectRes.ok){
      throw new Error(connectData.error || "Failed to connect");
      }




      const siweMessage = connectData.message;

      const signature = await signer.signMessage(siweMessage);

      const verifyRes = await fetch("http://localhost:3001/siwe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: siweMessage, signature }),
      });

      const verifyData = await verifyRes.json();
      if (!verifyRes.ok || !verifyData.ok)
        throw new Error(verifyData.error || "Verification failed");
      //  await new Promise((resolve, reject) => setTimeout(() => reject(new Error('Wallet connection failed')), 2000));

         success('Wallet Connected', 'Your wallet is now connected!');

      setToken(verifyData.accessToken);
      localStorage.setItem("wallet", addr);       // persist for ProtectedRoute
localStorage.setItem("accessToken", verifyData.accessToken);

      navigate('/dashboard');
    
  
     } catch (err) {
      setError(err.message);
 error('Error', 'server error:');

    }
    }

  return (
    <div>
          
  
        <button
  onClick={connectWallet}
    className="inline-block bg-[#1A2230] border border-[#F9FAFB] font-semibold px-6 py-3 rounded-lg 
  hover:bg-[#1A2230] hover:border-[#9EE6FF] hover:shadow-[0_0_12px_#9EE6FF] transition-all shadow-sm"

>
  <SparklesText
    as="span"
    className="text-base md:text-lg font-semibold text-white"
    sparkleCount={10}
    sparkleSize={8}
    colors={{ first: '#fde047', second: '#f97316' }}
  >
    Connect Wallet
  </SparklesText>
</button>



      {/* {address ? (
        <div> Connected: {address}</div>
      ) : (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>} */}

     

    </div>

    
  );
}

export default ConnectWallet;
