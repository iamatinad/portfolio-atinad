import React from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Features from './components/features';
import Projects from './components/projects/Project';

function App() {
  return (
 <div className="W-full h-auto bg-bodyColor text-lightText">
  <div className="max-w-screen-xl mx-auto mx- px-16">
  <Navbar/>
  <Banner/>
  <Features/>
  <Projects/>
  </div>
 
 </div>
  );
}

export default App;
