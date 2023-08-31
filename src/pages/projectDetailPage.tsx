import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ApiKey from "./projectDetail/apiKeyPage";
import DashBoard from "./projectDetail/dashboardPage";
import Settings from "./projectDetail/settingsPage";
import SideBar from "./projectDetail/sideBarPage";
import UserManagement from "./projectDetail/userManagementPage";
import Billing from "./projectDetail/billingPage";
import { currentProjectVaule } from "../recoil/dashBoard/project";
import { useParams } from "react-router-dom";
import { stringify } from "querystring";
import useSessionStorage from "../hooks/sesstionStorage";
import NotFoundPage from "./404Page";
import { useEffect, useState } from "react";

export default function ProjectDetailPage() {
  const [projectInfo, setProjectInfo] = useSessionStorage("projectInfo", {});
  const [showNotFound, setShowNotFound] = useState(false);
  const [projectIndex, setProjectIndex] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let found = false;
    projectInfo.map((project, index) => {
      if (String(id) === String(project.clientId)) {
        found = true;
        setProjectIndex(index);
      }
    });

    if (!found) {
      setShowNotFound(true);
    }
  }, []);

  if (showNotFound) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex text-slate-300  h-full">
      <div
        id="sidebar"
        className="flex bg-white shadow-md max-w-[200px] py-2 z-10"
      >
        <SideBar item={projectInfo[projectIndex]} />
      </div>
      <div id="content" className="grid w-full px-6 h-fit pt-16 min-h-screen">
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route
            path="/apikey"
            element={<ApiKey item={projectInfo[projectIndex]} />}
          />
          <Route
            path="/usermanagement"
            element={<UserManagement item={projectInfo[projectIndex]} />}
          />
          <Route
            path="/settings"
            element={<Settings item={projectInfo[projectIndex]} />}
          />
          <Route path="/billing" element={<Billing />} />
          <Route path={"/*"} element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
