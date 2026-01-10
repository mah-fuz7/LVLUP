import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import errorbg from '../assets/errorimg.jpg'
export default function ErrorPage() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url('${errorbg}')`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 " />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        {/* 404 Text */}
        <h1 className="text-9xl md:text-[200px] font-bold text-white mb-6 tracking-tight">
          404
        </h1>
        
        {/* Error Message */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Oops! Page Not Found
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <p className="text-base md:text-lg text-gray-300 mb-12">
          Don't worry, it happens to the best of us. Let's get you back on track.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          
          <button 
            onClick={() => window.location.href = '/'}
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-xl shadow-blue-500/30"
          >
            <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="font-semibold">Go Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}