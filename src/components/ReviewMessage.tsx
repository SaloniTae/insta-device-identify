
import React from 'react';

const ReviewMessage = () => {
  return (
    <div className="text-center px-6 max-w-lg mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">We're reviewing your info</h1>
      <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
        It usually takes us around a day. We'll notify you when the review is finished. If we can confirm your info, you'll be able to use Instagram again. If we can't, your account will be permanently disabled.
      </p>
    </div>
  );
};

export default ReviewMessage;
