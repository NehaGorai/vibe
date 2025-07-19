import React from 'react';
import Header from './components/Header';
import ThreeScene from './components/ThreeScene';
import InfoPanel from './components/InfoPanel';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 h-screen">
        {/* 3D Scene */}
        <div className="w-full h-full">
          <ThreeScene />
        </div>
        
        {/* Info Panel */}
        <InfoPanel />
        
        {/* Welcome Text Overlay */}
        <div className="absolute bottom-8 left-8 z-30">
          <div className="card p-6 max-w-md">
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome to VibeCoding
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Explore this interactive 3D scene built with React, Three.js, and TailwindCSS. 
              Use your mouse to navigate and discover the animated objects.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
