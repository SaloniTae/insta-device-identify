import React from 'react';

const ReviewClock = () => {
  // Create an array of 12 items (0 to 11) representing rays at 30-degree intervals
  const rays = Array.from({ length: 12 }, (_, i) => {
    const degree = i * 30;
    const colors = [
      'bg-purple-600', 'bg-purple-500', 'bg-purple-500',
      'bg-pink-500', 'bg-red-500', 'bg-orange-500',
      'bg-yellow-400', 'bg-yellow-500', 'bg-orange-400',
      'bg-red-400', 'bg-pink-400', 'bg-pink-300'
    ];
    return { degree, color: colors[i] };
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
      <div className="absolute w-2 h-2 bg-black rounded-full z-10"></div>

      {/* Clock hands */}
      {/* Minute hand */}
      <div
        className="absolute w-0.5 bg-black"
        style={{
          height: '36px', // Adjust length as needed
          transformOrigin: 'center bottom', // Aligns the base of the hand to the center dot
          transform: 'rotate(45deg)' // Example rotation
        }}
      ></div>

      {/* Hour hand */}
      <div
        className="absolute w-0.5 bg-black"
        style={{
          height: '24px', // Adjust length as needed
          transformOrigin: 'center bottom', // Aligns the base of the hand to the center dot
          transform: 'rotate(-30deg)' // Example rotation
        }}
      ></div>
    </div>
  );
};

export default ReviewClock;
