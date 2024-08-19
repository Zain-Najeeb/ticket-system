import React from 'react';
import './App.css';
import Header from './components/global/header';
import Kanban from './pages/areq/kanban';
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/areq" element={<Kanban />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
