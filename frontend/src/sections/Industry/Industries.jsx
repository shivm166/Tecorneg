import React from 'react';
// To use local images in a React project, you can place them in the 'public' folder
// and then reference them from the root. For example, if you place your images
// in 'public/images/', the path would be './images/your-image-name.jpg'.
// Alternatively, you can import images directly if they are within your 'src' folder.

const industryData = [
  {
    title: 'Supply chain & Logistics',
    image: '/logo.svg',
  },
  {
    title: 'Healthcare',
    image: './images/Healthcare.jpg',
  },
  {
    title: 'Education',
    image: './images/education.jpg',
  },
  {
    title: 'Banking',
    image: './images/banking.jpg',
  },
  {
    title: 'E-commerce',
    image: './images/e-commerce.jpg',
  },
  {
    title: 'Travel',
    image: './images/travel.jpg',
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center sm:text-left">
          Industries We are experts in
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl h-64 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
