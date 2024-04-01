import React from 'react';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Features from './components/features';

function App() {
  return (
 <div className="W-full h-auto bg-bodyColor text-lightText">
  <div className="max-w-screen-xl mx-auto mx- px-16">
  <Navbar/>
  <Banner/>
  <Features/>
  </div>
 
 </div>
  );
}

export default App;
