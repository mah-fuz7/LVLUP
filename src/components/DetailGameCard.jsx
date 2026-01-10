import React from 'react';
import { Star, Download } from 'lucide-react';

const DetailGameCard = ({app}) => {
    const {coverPhoto, title, category, developer, description, ratings, downloadLink} = app;
    
    return (
        <div>
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg transform transition-all hover:scale-105 hover:shadow-3xl">
        <div className="relative">
          <img 
            src={coverPhoto} 
            alt={title}
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"/>
          <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            {category}
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-gray-800 to-transparent opacity-60"></div>
        </div>
        
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h2>
          
          <p className="text-gray-400 text-xs sm:text-sm mb-3">
            by {developer}
          </p>
          
          <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">
            {description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-300 text-base sm:text-lg md:text-xl font-semibold">
                {ratings} / 5
              </span>
            </div>
          </div>
          
          <a 
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all w-full"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Download Game</span>
          </a>
        </div>
      </div>

        </div>
    );
};

export default DetailGameCard;