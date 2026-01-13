import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

export default function GameCard({app}) {
const {ratings,coverPhoto,title}=app;

  const game = {
    name: title,
    image: coverPhoto,
    rating: ratings
  };



  return (
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg transform transition-all hover:scale-105 hover:shadow-3xl">
        <div className="relative">
          <img 
            src={game.image} 
            alt={game.name}
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-gray-800 to-transparent opacity-60"></div>
        </div>
        
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
            {game.name}
          </h2>
          
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-300 text-base sm:text-lg md:text-xl font-semibold">
              {game.rating} / 5
            </span>
          </div>
        </div>
      </div>
  );
}