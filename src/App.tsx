import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { useRecoilValue } from "recoil";
import { loginValue } from "./recoil/loginState";
import MainTopbar from "./pages/navigation/mainTopBar";
import DefaultPage from "./pages/defaultPage";
import ProjectDetailPage from "./pages/projectDetailPage";
import ProjectListPage from "./pages/projectListPage";
import ProjectTopBar from "./pages/navigation/projectTobBar";
import NotFoundPage from './pages/404Page';
import Login from "./pages/login/login";
import SignUp from "./pages/login/signUp";

function App() {
  const isLoggedin = useRecoilValue(loginValue);
  console.log(isLoggedin);

  if (!isLoggedin) {
    return (
      <div>
        <MainTopbar />
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-auto bg-gray-50 h-full">
      <ProjectTopBar />
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/project" element={<ProjectListPage />} />
        <Route path={"/project/:id/*"} element={<ProjectDetailPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
