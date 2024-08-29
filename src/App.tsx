
import './App.css';
import Header from './components/global/header';
import Kanban from './pages/areq/kanban';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Signup from './pages/signup/signup';
import { SessionProvider } from './context/session';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <SessionProvider>
        <div className="page-wrapper">
          <ConditionalHeader/>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/areq" element={<Kanban/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </div>
      </SessionProvider>
    </Router>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }
  return <Header/>;
}

export default App;
