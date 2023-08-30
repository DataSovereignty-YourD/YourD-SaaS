import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // react-icons에서 아이콘 가져오기
import yourdLogo from "../../assets/img/YourD_Logo.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import loginimage from "../../assets/img/YourD_Logo.jpg";

export default function SignUp() {
  const [signUp, setSignUp] = useState("");
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    document.body.style.overflow = "auto";
    setIsPasswordVisible(!isPasswordVisible);
  };

  document.body.style.overflow = "hidden";

  return (
    <div
      className="min-h-[calc(100vh-4rem)]  bg-gray-50 flex flex-col justify-center bg-center z-[1]"
      style={{ backgroundImage: loginimage }}
    >
      <div>
        <img
          src={loginimage}
          className="absolute z-0  blur-2xl top-0 right-1/2"
        />
      </div>
      <div className="max-w-md w-full mx-auto z-[1]">
        <div className="max-w-md w-full mx-auto  bg-white p-8 border border-gray-300">
          <form className="form space-y-6">
            =
            <div className="flex justify-center items-center">
              <img src={yourdLogo} alt="Your Logo" className="w-20 h-20 " />
            </div>
            <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
              Get Started with <span className="text-blue-600">Metrix</span>
            </div>
            <div className="text-center font-medium text-xl mt-5 text-gray-500">
              Create your free account
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div>
                First Name
                <input
                  type="text"
                  placeholder="First Name"
                  className="col-span-1 w-full p-2 border border-gray-300 rounded  mb-2 "
                />
              </div>
              <div>
                Last Name
                <input
                  type="text"
                  placeholder="Last Name"
                  className="col-span-1 w-full p-2 border border-gray-300 rounded  mb-2 "
                />
              </div>
            </div>
            <div>
              Company*
              <input
                type="text"
                placeholder="Company"
                className="col-span-1 w-full p-2 border border-gray-300 rounded  mb-2 "
              />
            </div>
            <div>
              Eamil Address*
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </div>
            <div>
              Password
              <input
                type="email"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4 relative text-center">
              <input
                type={isPasswordVisible ? "text" : "password"}
                value={signUp}
                onChange={(e) => setSignUp(e.target.value)}
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded "
              />
              <button
                type="button"
                onClick={handlePasswordToggle}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center justify-center  focus:outline-none"
                style={{ width: "24px", height: "24px" }}
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="text-center">
              <div className="inline-block text-center font-medium text-xl">
                Already have an account? <span className="text-blue-600"></span>
              </div>
              <button
                onClick={() => navigate("/signin")}
                className="inline-block font-medium text-sm text-blue-500 ml-3"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <button
                className="w-3/4 py-4  bg-blue-600 hover:bg-blue-700 rounded-3xl text-white  text-2xl mt-4 "
                onClick={() => navigate("/signin")}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
