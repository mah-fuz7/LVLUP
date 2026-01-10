import React from 'react';

const Newsletter = () => {
    return (
      <div className=" mt-8 bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Get the latest updates, articles, and resources delivered straight to your inbox.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>

        <p className="text-blue-100 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
    );
};

export default Newsletter;