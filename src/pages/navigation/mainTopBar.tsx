import { useNavigate } from "react-router-dom";
import yourdLogo from "../../assets/img/YourDLogo.png";
import { Button } from "@material-tailwind/react";
import { useRecoilState } from "recoil";
import { projectModalState } from "../../recoil/dashBoard/project";
import { loginState } from "../../recoil/loginState";

export default function MainTopbar() {
  // const [isOpen, setIsOpen] = useRecoilState(projectModalState);
  // const [isLogin, setIsLogin] = useRecoilState(loginState);
  const navigate = useNavigate();
  

  return (
    <section
      title="TopBar"
      className="fixed bg-white drop-shadow-md w-screen flex h-[64px] items-center   z-50"
    >
      <div className="flex w-full mx-auto  white text-white items-center justify-between">
        <img
          src={yourdLogo}
          onClick={() => navigate("/")}
          className="flex w-20 ml-10 object-contain"
        />
        {/* <div>
          <Button
            className="pt-2 pb-2 bg-gray-500 rounded-[36px] mr-5  mt-3"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </Button>
        </div> */}
      </div>
    </section>
  );
}
