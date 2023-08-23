
import { Route, Routes, } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ApiKey from "../components/project/apiKey";
import DashBoard from "../components/project/dashboard";
import Settings from "../components/project/settings";
import SideBar from "../components/project/sideBar";
import UserManagement from "../components/project/userManagement";
import { currentProjectVaule } from "../recoil/dashBoard/project";

export default function ProjectDetailPage() {
  // const location = useLocation();
  // const { item } = location.state;
  const item = useRecoilValue(currentProjectVaule);
  document.body.style.overflowX = "hidden";

  return (
    <div className="flex text-slate-300 border-t-2 h-fit bg-gray-100">
      <div
        id="sidebar"
        className="fixed bg-white border-r-2 h-full max-w-[200px] py-2 translate-x-300 z-10"
      >
        <SideBar item={item} />
      </div>
      {/*
       *일단 여기 밑으로는 건들지 않기
       */}
        <div
          id="content"
          className="grid w-full px-6 py-4 h-fit  mt-12 ml-16"
        >
          <Routes>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="apikey" element={<ApiKey  item={item}/>}/>
            <Route path="usermanagement" element={<UserManagement item={item}/>}/>
            <Route path="settings" element={<Settings item={item}/>} />
          </Routes>
        </div>
    </div>
  );
}
