import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Skills from './components/Skills/Skills';
import ProjectsContainer from './components/ProjectContainer';

const App = () => {
  return (
    <div className={`app-container min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white`}>
      <Header />
      <div className="main-content flex flex-col md:flex-row">
        <div className="column flex-1 p-4">
          <Skills />
        </div>
        <div className="column flex-1 p-4">
          <ProjectsContainer />
        </div>
      </div>
    </div>
  );
};

export default App;