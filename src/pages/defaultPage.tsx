import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../recoil/loginState";
import SignUp from "../components/login/signUp";
import Login from "../components/login/login";

export default function DefaultPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  useEffect(() => {
    if (isLogin) navigate("/project");
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}
