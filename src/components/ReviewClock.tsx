
import React from 'react';

const ReviewClock = () => {
  return (
    <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-8">
      {/* Colorful circle rays */}
      <div className="absolute w-full h-full">
        {/* Creating 12 evenly spaced colorful rays in a perfect circle */}
        <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-1.5 h-2.5 bg-purple-600 rounded-full"></div>
        <div className="absolute top-[-5px] right-[-5px] transform rotate-30 w-1.5 h-2.5 bg-purple-500 rounded-full"></div>
        <div className="absolute top-[1px] right-[-7px] transform rotate-60 w-1.5 h-2.5 bg-pink-500 rounded-full"></div>
        <div className="absolute top-1/2 right-[-8px] transform -translate-y-1/2 w-2.5 h-1.5 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-[1px] right-[-7px] transform rotate-[120deg] w-1.5 h-2.5 bg-orange-500 rounded-full"></div>
        <div className="absolute bottom-[-5px] right-[-5px] transform rotate-[150deg] w-1.5 h-2.5 bg-red-400 rounded-full"></div>
        <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1.5 h-2.5 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-[-5px] left-[-5px] transform -rotate-[150deg] w-1.5 h-2.5 bg-yellow-500 rounded-full"></div>
        <div className="absolute bottom-[1px] left-[-7px] transform -rotate-[120deg] w-1.5 h-2.5 bg-green-400 rounded-full"></div>
        <div className="absolute top-1/2 left-[-8px] transform -translate-y-1/2 w-2.5 h-1.5 bg-green-500 rounded-full"></div>
        <div className="absolute top-[1px] left-[-7px] transform -rotate-60 w-1.5 h-2.5 bg-blue-400 rounded-full"></div>
        <div className="absolute top-[-5px] left-[-5px] transform -rotate-30 w-1.5 h-2.5 bg-purple-600 rounded-full"></div>
      </div>
      
      {/* Clock circle */}
      <div className="absolute w-16 h-16 rounded-full border-2 border-gray-800"></div>
      
      {/* Clock center dot */}
      <div className="absolute w-1.5 h-1.5 bg-black rounded-full z-10"></div>
      
      {/* Clock hands */}
      <div className="absolute h-6 w-0.5 bg-black origin-bottom transform rotate-45"></div>
      <div className="absolute h-4 w-0.5 bg-black origin-bottom transform -rotate-[30deg]"></div>
    </div>
  );
};

export default ReviewClock;
