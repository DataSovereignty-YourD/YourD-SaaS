import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ApiKey from "./projectDetail/apiKey";
import DashBoard from "./projectDetail/dashboard";
import Settings from "./projectDetail/settings";
import SideBar from "./projectDetail/sideBar";
import UserManagement from "./projectDetail/userManagement";
import Billing from "./projectDetail/billing";
import { currentProjectVaule } from "../recoil/dashBoard/project";
import { useParams } from 'react-router-dom';
import NotFound from "./notFoundPage";
import { stringify } from "querystring";
import useSessionStorage from "../function/sesstionStorage";

export default function ProjectDetailPage() {
  const [selectProject, setSelectProject] = useSessionStorage('currentProjectState',{});
  const {id} =useParams();
  //isVailed함수
  
  if (id !== String(selectProject.clientId)) {
    return <NotFound/>;
  }

  return (
    <div className="flex text-slate-300  h-full">
      <div
        id="sidebar"
        className="flex bg-white shadow-md max-w-[200px] py-2 z-10"
      >
        <SideBar item={selectProject} />
      </div>
      <div id="content" className="grid w-full px-6 h-fit pt-16 min-h-screen">
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/apikey" element={<ApiKey item={selectProject} />} />
          <Route path="/usermanagement" element={<UserManagement item={selectProject} />}/>
          <Route path="/settings" element={<Settings item={selectProject} />} />
          <Route path="/billing" element={<Billing />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
