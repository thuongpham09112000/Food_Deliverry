import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import HighlightSection from './components/HighlightSection';
import FilterSection from './components/FilterSection';
import FoodDetail from './components/FoodDetail';
import Login from './components/Login/Login.jsx'; // Import thành phần Login của bạn
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className='sidebar_left'>
          <Sidebar />
        </div>
        <main className="main">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <>
                <HighlightSection />
                <FilterSection />
                <FoodDetail />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
