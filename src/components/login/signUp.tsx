import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // react-icons에서 아이콘 가져오기
import yourdLogo from "../../assets/img/YourD_Logo.jpg";
import {BsFillPersonFill} from "react-icons/bs";
export default function SignUp() {
    const [signUp, setSignUp] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const handlePasswordToggle = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 shadow-md rounded-md w-80">
                <div className="flex items-center justify-center mb-4">
                    <img src={yourdLogo} alt="Your Logo" className="w-30 h-20 mb-30" />
                </div>
                <h2 className="text-lg font-semibold text-center">Get Started with <span className="text-blue-600">Metrix</span></h2>
                
                <h3 className="text-sm font-semibold text-center text-slate-300 mb-7">Create your free account</h3>
                
                <div className="mb-4 text-center0">
                    
                    <input
                        type="text"
                        placeholder="Your Full Name"
                        className="w-full px-8 py-2 border rounded-md text-xs"
                    />
                    
                </div>
                <div className="mb-4 text-center">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full px-8 py-2 border rounded-md text-xs"
                    />
                </div>
                <div className="mb-4 relative text-center">
                    <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        value={signUp}
                        onChange={(e) => setSignUp(e.target.value)}
                        placeholder="Create a Strong Password"
                        className="w-full px-8 py-2 border rounded-md  text-xs"
                    />
                    <button
                        type="button"
                        onClick={handlePasswordToggle}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center justify-center focus:outline-none"
                        style={{ width: "24px", height: "24px" }}
                    >
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <h4 className="text-xs text-center mb-5"> Already have an account? <span className="text-blue-600">Login</span></h4>
                <div className="flex justify-center">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
