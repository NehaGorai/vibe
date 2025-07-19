import React, { useState } from 'react';

export default function InfoPanel() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Toggle Button - Always visible when panel is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-20 right-4 z-40 bg-white/10 backdrop-blur-md rounded-lg p-3 text-white/70 hover:text-white transition-colors border border-white/20"
          title="Show Controls"
        >
          ☰
        </button>
      )}
      
      {/* Info Panel */}
      <div className={`fixed top-20 right-4 z-40 transition-all duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="card p-6 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">3D Scene Controls</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-white/90 mb-2">Mouse Controls:</h4>
              <ul className="text-xs text-white/70 space-y-1">
                <li>• Left click + drag: Rotate camera</li>
                <li>• Right click + drag: Pan camera</li>
                <li>• Scroll: Zoom in/out</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-white/90 mb-2">3D Objects:</h4>
              <ul className="text-xs text-white/70 space-y-1">
                <li>• Blue Cube: Rotating on X & Y axes</li>
                <li>• Green Sphere: Rotating on X & Z axes</li>
                <li>• Orange Torus: Rotating on X & Y axes</li>
                <li>• Dark Ground: Reflective surface</li>
                <li>• White Particles: Floating background</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-white/90 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                  React
                </span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">
                  Three.js
                </span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                  TailwindCSS
                </span>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded">
                  TypeScript
                </span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/20">
              <p className="text-xs text-white/60">
                This is a beginner-friendly 3D scene built with React Three Fiber. 
                The objects are continuously animated and you can interact with the scene using your mouse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 