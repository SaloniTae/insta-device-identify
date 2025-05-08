import React from 'react';

const ReviewClock = () => {
  // Create an array of 12 items (0 to 11) representing rays at 30 degree intervals
  const rays = Array.from({
    length: 12
  }, (_, i) => {
    const degree = i * 30;
    // Generate different colors for each ray based on position
    const colors = ['bg-purple-600', 'bg-purple-500', 'bg-purple-500', 'bg-pink-500', 'bg-red-500', 'bg-orange-500', 'bg-yellow-400', 'bg-yellow-500', 'bg-orange-400', 'bg-red-400', 'bg-pink-400', 'bg-pink-300'];
    return {
      degree,
      color: colors[i]
    };
  });

  return (
    <div className="relative flex items-center justify-center w-28 h-28 mx-auto mb-8">
      {/* Colorful circle rays */}
      <div className="absolute w-full h-full flex items-center justify-center">
        {rays.map((ray, index) => (
          <div
            key={index}
            className={`absolute w-1 h-3 ${ray.color} rounded-full`}
            style={{
              transform: `rotate(${ray.degree}deg) translateY(-42px)`
            }}
          ></div>
        ))}
      </div>

      {/* Clock circle */}
      <div className="absolute w-14 h-14 rounded-full border-2 border-gray-800"></div>

      {/* Clock center dot */}
      <div className="absolute w-1.5 h-1.5 bg-black rounded-full z-10"></div>

      {/* Clock hands */}
      {/* Minute hand */}
      <div
        className="absolute h-9 w-0.5 bg-black origin-center transform rotate-45"
        style={{
          transformOrigin: 'bottom center' // Ensures the hand rotates from the bottom center point
        }}
      ></div>
      {/* Hour hand */}
      <div
        className="absolute h-6 w-0.5 bg-black origin-center transform -rotate-[30deg]"
        style={{
          transformOrigin: 'bottom center' // Ensures the hand rotates from the bottom center point
        }}
      ></div>
    </div>
  );
};

export default ReviewClock;
