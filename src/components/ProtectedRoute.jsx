import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
        const res = await fetch("http://localhost:3001/login", {
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
          const refreshRes = await fetch("http://localhost:3001/refreshtoken", {
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

  if (isValid === null) return <div>Loading...</div>;

  if (!isValid) return <Navigate to="/" replace />;

  return children;
}
