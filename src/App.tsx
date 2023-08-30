import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import './App.css';
import SignInBox from './components/signInBox';
import MainTopbar from './components/mainTopBar';
import DefaultPage from './pages/defaultPage';
import ProjectDetailPage from './pages/projectDetailPage';
import ProjectListPage from './pages/projectListPage';
import Login from './components/login/login';
import { loginValue } from './recoil/loginState';
import ProjectTopBar from './components/projectTobBar';
import SignUp from './components/login/signUp';
import NotFoundPage from './pages/404Page';

function App() {
  const isLogin = useRecoilValue(loginValue);

  return (
    <div className="h-screen mx-auto">
      {!isLogin ? (
        <div>
          <MainTopbar />
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      ) : (
        <div className="bg-gray-100">
          <ProjectTopBar />
          <Routes>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/project" element={<ProjectListPage />} />
            <Route path="/project/:id/*" element={<ProjectDetailPage/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
