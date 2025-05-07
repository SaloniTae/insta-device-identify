
import React from 'react';
import InstagramHeader from '@/components/InstagramHeader';
import ReviewClock from '@/components/ReviewClock';
import ReviewMessage from '@/components/ReviewMessage';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <InstagramHeader />
      <div className="flex-grow flex flex-col justify-center pt-16 pb-10">
        <div className="mt-10 sm:mt-16">
          <ReviewClock />
          <ReviewMessage />
        </div>
      </div>
    </div>
  );
};

export default Index;
