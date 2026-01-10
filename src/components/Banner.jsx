import React from 'react';
import { Link } from 'react-router';
import bannerBg from '../assets/bannerBg.jpg'
const Banner = () => {
    return (
       <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${bannerBg}')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
Discover Amazing Games
          </h1>
          <p className="mb-8 text-xl text-gray-200 md:text-2xl">
Explore top-rated indie and AAA games from developers around the world.          </p>
          <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105 active:scale-95">
           <Link to="/appsdetails">Browse Games</Link>
          </button>
        </div>
      </div>
    </div>
    );
};

export default Banner;