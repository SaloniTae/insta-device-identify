
import React from 'react';
import InstagramHeader from '@/components/InstagramHeader';
import ReviewClock from '@/components/ReviewClock';
import ReviewMessage from '@/components/ReviewMessage';

const Index = () => {
  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <InstagramHeader />
      <div className="flex-grow flex flex-col items-center justify-center pt-16">
        <div className="max-w-md w-full px-4">
          <ReviewClock />
          <ReviewMessage />
        </div>
      </div>
    </div>
  );
};

export default Index;
