import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ApiKey from "../components/project/apiKey";
import DashBoard from "../components/project/dashboard";
import Menu from "../components/project/menu";
import Settings from "../components/project/settings";

export default function ProjectDetailPage() {
    const location = useLocation();
    const { item } = location.state;
    document.body.style.overflowX='hidden';

    return (
        <div className="antialiased mx-auto w-11/12 h-[calc(100vh-64px)]  text-slate-300 relative py-4 overflow-auto ">
            <div className="grid grid-cols-12 mx-auto max-w-screen my-2 border-t-2 ">
                <div id="menu" className="bg-white rounded-lg p-4 sm:col-span-4 md:col-span-3 lg:col-span-2 min-w-fit">
                    <Menu item={item} />
                </div>
                <div id="content" className="bg-white rounded-lg p-4 sm:col-span-8 md:col-span-9 lg:col-span-10 overflow-auto min-w-fit">
                    <Routes>    
                        <Route path="dashboard" element={<DashBoard item={item} />} />
                        <Route path="apikey" element={<ApiKey/>} />
                        <Route path='settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}