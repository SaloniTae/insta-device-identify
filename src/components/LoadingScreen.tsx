
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full py-10 bg-white">
      {/* Instagram logo centered vertically */}
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="https://cdn.jsdelivr.net/gh/SaloniTae/my-fonts@main/IMG_20250508_160205.png" 
          alt="Instagram" 
          className="w-28 h-28"
        />
      </div>
      
      {/* Meta logo closer to center */}
      <div className="flex flex-col items-center mb-14">
        <img 
          src="https://cdn.jsdelivr.net/gh/SaloniTae/my-fonts@main/Untitled%20design_20250508_155811_0000.png" 
          alt="Meta" 
          className="h-14"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
