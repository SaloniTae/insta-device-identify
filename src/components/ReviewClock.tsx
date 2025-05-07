
import React from 'react';

const ReviewClock = () => {
  return (
    <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-8">
      {/* Clock circle */}
      <div className="absolute w-16 h-16 rounded-full border-2 border-gray-800"></div>
      
      {/* Clock center dot */}
      <div className="absolute w-1.5 h-1.5 bg-black rounded-full z-10"></div>
      
      {/* Clock hands */}
      <div className="absolute h-6 w-0.5 bg-black origin-bottom transform rotate-45"></div>
      <div className="absolute h-4 w-0.5 bg-black origin-bottom transform -rotate-[30deg]"></div>
      
      {/* Decorative rays */}
      <div className="absolute w-full h-full">
        {/* Top ray */}
        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-1 h-3 bg-purple-600 rounded-full"></div>
        
        {/* Top right rays */}
        <div className="absolute top-[-6px] right-[-6px] transform rotate-45 w-1 h-3 bg-purple-500 rounded-full"></div>
        
        {/* Right ray */}
        <div className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 w-3 h-1 bg-red-500 rounded-full"></div>
        
        {/* Bottom right rays */}
        <div className="absolute bottom-[-6px] right-[-6px] transform rotate-[135deg] w-1 h-3 bg-red-400 rounded-full"></div>
        
        {/* Bottom ray */}
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-1 h-3 bg-yellow-400 rounded-full"></div>
        
        {/* Bottom left rays */}
        <div className="absolute bottom-[-6px] left-[-6px] transform rotate-[-135deg] w-1 h-3 bg-orange-400 rounded-full"></div>
        
        {/* Left ray */}
        <div className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 w-3 h-1 bg-yellow-500 rounded-full"></div>
        
        {/* Top left rays */}
        <div className="absolute top-[-6px] left-[-6px] transform rotate-[-45deg] w-1 h-3 bg-purple-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default ReviewClock;
