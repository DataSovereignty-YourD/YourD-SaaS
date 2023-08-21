import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ApiKey from "../components/project/apiKey";
import DashBoard from "../components/project/dashboard";
import Settings from "../components/project/settings";
import SideBar from "../components/project/sideBar";

export default function ProjectDetailPage() {
    const location = useLocation();
    const { item } = location.state;
    document.body.style.overflowX='hidden';

    return (
      <div className="antialiased w-screen h-[calc(100vh-64px)] text-slate-300 relative py-4 overflow-auto flex border-t-2 ">
        <div
          id="sidebar"
          className="bg-white border-r-2 w-64 p-6 translate-x-300"
        >
          <SideBar item={item} />
        </div>
        <div className="w-full my-2 "> {/**일단 여기 밑으로는 건들지 않기 */}
          <div
            id="content"
            className="bg-white rounded-lg p-4 overflow-auto min-w-fit"
          >
            <Routes >
              <Route path="dashboard" element={<DashBoard item={item} />} />
              <Route path="apikey" element={<ApiKey />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    );
}