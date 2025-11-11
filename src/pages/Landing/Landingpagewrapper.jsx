import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { LoaderThree } from "@/components/ui/loader";
import  LandingPage from "./Landingpage"


export default function LandingPageWrapper() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (token) {
      navigate("/dashboard", { replace: true });
    } else {
      setloading(false); 
    }
  }, [token, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <LoaderThree />
      </div>
    );
  }

  return <LandingPage />;
}
