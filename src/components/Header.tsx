import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">
              VibeCoding
            </h1>
            <span className="text-white/70 text-sm">
              React + Three.js + TailwindCSS
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#home" 
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <button className="btn-primary text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 