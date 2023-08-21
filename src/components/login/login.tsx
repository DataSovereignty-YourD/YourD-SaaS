import React, { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import loginimage from "../../assets/img/YourD_Logo.jpg";

export default function Login() {
  const [seePassword, setSeePassword] = useState(true);

  const seePasswordHandler = () => {
    setSeePassword(!seePassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form className="form space-y-6">
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

              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-10 "
                placeholder="Email Address"
              />

              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-5"
                name="password"
                placeholder="Password"
              />
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

              <Link
                to="./signup"
                className="inline-block font-medium text-sm text-blue-500 ml-3"
              >
                Sign Up
              </Link>
            </div>

            <div className="text-center">
              <button className="w-1/2 py-4  bg-blue-600 hover:bg-blue-799 rounded-full text-white  text-2xl mt-4">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
