import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BreadcrumbSection from './components/BreadcrumbSection';
import './App.css';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <BreadcrumbSection />
      </div>
    </div>
  );
}

export default App;
