import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil"
import { loginState } from "../recoil/loginState"

export default function DefaultPage() {
    const navigate = useNavigate();
    const [isLogin,setIsLogin] = useRecoilState(loginState);
    useEffect(()=> {
        if(isLogin) navigate("/project");
    },[])
    return (
        <div>
            login
        </div>
    )
}