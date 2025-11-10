import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useUserStore } from "@/store/WalletAdress";
import { Button } from "@/components/ui/button";
import SparklesText from "@/components/sparklestext";

function ConnectWallet() {
  // const [address, setAddress] = useState(null);
   const { address, setAddress } = useUserStore();
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('MetaMask not detected');
      }
    const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      const network = await provider.getNetwork();

      setAddress(addr);

    
 const connectRes = await fetch("http://localhost:3001/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: addr,
          chainId:  Number(network.chainId),
          role:"Investor"
        }),
      });

      const connectData = await connectRes.json();
   
      if (!connectRes.ok) throw new Error(connectData.error || "Failed to connect");

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

      setToken(verifyData.accessToken);
      alert(" Wallet authenticated successfully!");
    
  
     } catch (err) {
      setError(err.message);
    }
    }

  return (
    <div>
          
  
        <button
  onClick={connectWallet}
  className="hidden lg:inline-block bg-[#1A2230] border border-[#F9FAFB] font-semibold px-6 py-3 rounded-lg 
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
