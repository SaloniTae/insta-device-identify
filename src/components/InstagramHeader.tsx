
import React from 'react';
import { Menu } from 'lucide-react';

const InstagramHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 z-50">
      <div className="w-32">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png" 
          alt="Instagram" 
          className="w-full" 
        />
      </div>
      <button className="p-1" aria-label="Menu">
        <Menu size={28} />
      </button>
    </header>
  );
};

export default InstagramHeader;
