// src/components/Industries.jsx (Revised)

import React from 'react';

const Industries = () => {
  const industries = [
    { title: 'Supply chain & Logistics', imageUrl: '/images/supply.jpg' },
    { title: 'Healthcare', imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcwNTF8MHwxfHNlYXJjaHwxMHx8aGVhbHRoY2FyZXxlbnwwfHx8fDE3MDA0NTg1NjR8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { title: 'Education', imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcwNTF8MHwxfHNlYXJjaHw3fHxlZHVjYXRpb258ZW58MHx8fHwxNzAwNDU4NTcxfDA&ixlib=rb-4.0.3&q=80&w=1080' },
    { title: 'Banking', imageUrl: '/images/Banking.jpg' },
    { title: 'E-commerce', imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcwNTF8MHwxfHNlYXJjaHwzfHxlY29tbWVyY2V8ZW58MHx8fHwxNzAwNDU4NjA0fDA&ixlib=rb-4.0.3&q=80&w=1080' },
    { title: 'Travel', imageUrl: '/images/Travel.jpg' },
  ];

  return (
    <div className="p-8">
      {/* KEY CHANGE: Removed `min-h-screen` from this div.
        The height will now be determined by the content itself.
      */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center sm:text-left">
          Industries We are experts in
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative h-40 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={industry.imageUrl}
              alt={industry.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-neutral-950 opacity-40"></div>
            <div className="absolute inset-0 flex items-end p-6">
              <h2 className="text-xl font-bold text-center items-center text-white">
                {industry.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;