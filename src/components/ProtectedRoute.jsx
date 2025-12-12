import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoaderThree } from "@/components/ui/loader";
import { baseurl } from "@/store/baseurl";
 

export default function ProtectedRoute({ children }) {
  const [isValid, setIsValid] = useState(null); 

  useEffect(() => {
    const verifySession = async () => {
      const token = localStorage.getItem("accessToken");
      const wallet = localStorage.getItem("wallet");

      if (!token || !wallet) {
        setIsValid(false);
        return;
      }

      try {
        const res = await fetch(`${baseurl}login`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "x-user-address": wallet,
          },
        });

        if (res.ok) {
          setIsValid(true);
          return;
        }

        if (res.status === 401) {
          const refreshToken = localStorage.getItem("refreshToken");
          const refreshRes = await fetch(`${baseurl}refreshtoken`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ wallet, refreshToken }),
          });

          if (refreshRes.ok) {
            const { accessToken, refreshToken: newRT } = await refreshRes.json();
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", newRT);
            setIsValid(true);
          } else {
            localStorage.clear();
            setIsValid(false);
          }
        }
      } catch (err) {
        console.error("Session check failed:", err);
        setIsValid(false);
      }
    };

    verifySession();
  }, []);

  if (isValid === null) return(
    <div className="flex items-center justify-center h-screen w-screen">
    <LoaderThree/>

    </div>
    
   )
  if (!isValid) return <Navigate to="/" replace />;

  return children;
}
