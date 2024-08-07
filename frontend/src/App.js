import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import HighlightSection from './components/HighlightSection';
import FilterSection from './components/FilterSection';
import FoodDetail from './components/FoodDetail';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className='siebar_left'>
        <Sidebar />
      </div>
      <main className="main">
        <Navbar />
        <HighlightSection />
        <FilterSection />
        <FoodDetail />
      </main>
    </div>
  );
};

export default App;
