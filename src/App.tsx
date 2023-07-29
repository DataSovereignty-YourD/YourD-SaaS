import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './components/topBar-db';
import DefaultPage from './pages/defaultPage';
import ProjectDetailPage from './pages/projectDetailPage';
import ProjectListPage from './pages/projectListPage';
import SignInPage from './pages/signInPage';

function App() {

  return (
      <div className='h-screen mx-auto'>
        <Topbar/>
        <Routes>
          <Route path='/' element={<DefaultPage/>}/>
          <Route path='/signin' element={<SignInPage/>} />
          <Route path='/project/*' element={<ProjectListPage/>}/>
          <Route path={'/project/:id/*'} element={<ProjectDetailPage/>}/>          
        </Routes>
      </div>
      
  );
}

export default App;
