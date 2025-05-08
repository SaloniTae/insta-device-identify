
import React from 'react';

const ReviewClock = () => {
  // Create an array of 12 items (0 to 11) representing rays at 30 degree intervals
  const rays = Array.from({ length: 12 }, (_, i) => {
    const degree = i * 30;
    // Generate different colors for each ray based on position
    const colors = [
      'bg-purple-600', 'bg-purple-500', 'bg-pink-500', 'bg-pink-500', 
      'bg-red-500', 'bg-orange-500', 'bg-yellow-400', 'bg-yellow-500',
      'bg-orange-400', 'bg-red-400', 'bg-pink-400', 'bg-purple-500'
    ];
    return { degree, color: colors[i] };
  });

  return (
    <div className="relative flex items-center justify-center w-40 h-40 mx-auto mb-12">
      {/* Colorful circle rays */}
      <div className="absolute w-full h-full">
        {rays.map((ray, index) => (
          <div 
            key={index}
            className={`absolute left-1/2 top-1/2 w-2 h-4 ${ray.color} rounded-full`}
            style={{
              transform: `rotate(${ray.degree}deg) translateY(-92px)`
            }}
          ></div>
        ))}
      </div>
      
      {/* Clock circle */}
      <div className="absolute w-32 h-32 rounded-full border-2 border-gray-800"></div>
      
      {/* Clock center dot */}
      <div className="absolute w-2 h-2 bg-black rounded-full z-10"></div>
      
      {/* Clock hands */}
      <div className="absolute h-12 w-1 bg-black origin-bottom transform rotate-45"></div>
      <div className="absolute h-8 w-1 bg-black origin-bottom transform -rotate-[30deg]"></div>
    </div>
  );
};

export default ReviewClock;
