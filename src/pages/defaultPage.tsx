import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSessionStorage from "../hooks/sesstionStorage";

export default function DefaultPage() {
  const navigate = useNavigate();
  const [isLoggedinSession, setIsLoggedinSesstion] = useSessionStorage('isLoggedin',false);

  useEffect(()=> {
    isLoggedinSession ? navigate("/project") : navigate("/signin")
  },[])
  
  
  return (
      <div>
      </div>
  );
}
