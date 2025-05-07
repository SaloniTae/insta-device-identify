
import React from 'react';

const ReviewClock = () => {
  return (
    <div className="relative flex items-center justify-center w-28 h-28 mx-auto mb-8">
      {/* Clock outer circle */}
      <div className="absolute w-28 h-28 rounded-full border-2 border-gray-300"></div>
      
      {/* Clock inner circle */}
      <div className="absolute w-24 h-24 rounded-full border-2 border-gray-300"></div>
      
      {/* Clock face */}
      <div className="absolute w-20 h-20 rounded-full bg-gray-100"></div>
      
      {/* Clock center dot */}
      <div className="absolute w-2 h-2 bg-black rounded-full z-10"></div>
      
      {/* Hour markers */}
      <div className="absolute w-1 h-4 bg-gray-400 transform -translate-y-[34px]"></div>
      <div className="absolute w-1 h-4 bg-gray-400 transform translate-y-[34px]"></div>
      <div className="absolute w-4 h-1 bg-gray-400 transform -translate-x-[34px]"></div>
      <div className="absolute w-4 h-1 bg-gray-400 transform translate-x-[34px]"></div>
      
      {/* Clock hands */}
      <div className="absolute h-8 w-1 bg-black origin-bottom transform -translate-y-[8px] rotate-45"></div>
      <div className="absolute h-10 w-1 bg-black origin-bottom transform -translate-y-[9px] -rotate-[60deg]"></div>
    </div>
  );
};

export default ReviewClock;
