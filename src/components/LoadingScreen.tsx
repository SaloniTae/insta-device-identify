
import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full py-10 bg-white">
      {/* Instagram logo centered vertically */}
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="https://cdn.jsdelivr.net/gh/SaloniTae/my-fonts@main/IMG_20250508_160205.png" 
          alt="Instagram" 
          className="w-24 h-24"
        />
      </div>
      
      {/* Meta logo at bottom */}
      <div className="flex flex-col items-center mb-10">
        <p className="text-gray-500 text-sm mb-1">from</p>
        <img 
          src="https://cdn.jsdelivr.net/gh/SaloniTae/my-fonts@main/Untitled%20design_20250508_155811_0000.png" 
          alt="Meta" 
          className="h-8"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
