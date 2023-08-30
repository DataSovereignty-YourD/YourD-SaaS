import React, { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRecoilState } from "recoil";
import loginimage from "../../assets/img/YourD_Logo.jpg";
import { loginState } from "../../recoil/loginState";

export default function Login() {
  const [signUp, setSignUp] = useState("");
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    setIsLogin(true);
    navigate('/project');
    document.body.style.overflow = "auto";
  }

  document.body.style.overflow = "hidden";

  return (
    <div
      className="min-h-[calc(100vh-4rem)]  bg-gray-50 flex flex-col justify-center bg-center z-[1]"
      style={{ backgroundImage: loginimage }}
    >
      <div>
        <img
          src={loginimage}
          alt="bgimg"
          className="absolute z-0 w-[600px] blur-lg top-1/5 left-1/5"
        />
      </div>
      <div className="max-w-md w-full mx-auto z-[1]">
        <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300">
          <form className="form space-y-6">
            =
            <div>
              <div className="flex justify-center items-center ">
                <img src={loginimage} className="w-20 h-20 "></img>
              </div>
              <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
                Welcome back!
              </div>
              <div className="text-center font-medium text-xl mt-5 text-gray-500">
                Login to your account
              </div>

              <div className="mt-5">
                Email Address
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded  mb-4 "
                  placeholder="Email Address"
                />
              </div>

              <div className="mb-2 relative ">
                <div>
                  Password
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    value={signUp}
                    onChange={(e) => setSignUp(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <button
                  type="button"
                  onClick={handlePasswordToggle}
                  className="absolute top-1/2 right-3 transform  translate-y-3/2 flex items-center justify-center  focus:outline-none"
                  style={{ width: "24px", height: "24px" }}
                >
                  {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="text-right">
              <a href="" className="font-medium text-sm text-blue-500 ">
                Recover Password
              </a>
            </div>
            <div className="text-center">
              <div className="inline-block text-center font-medium text-xl">
                Don't have an account?
              </div>

              <button
                onClick={() => navigate("/signup")}
                className="inline-block font-medium text-sm text-blue-500 ml-3"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center">
              <button
                className="w-1/2 py-4  bg-blue-600 hover:bg-blue-799 rounded-full text-white  text-2xl mt-4 "
                onClick={() => handleLogin()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
