import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
  {
    id: 1,
    imageUrl: "/blog.jpg",
    title: "2025's Hottest Tech Stack Trends—What You Need to Know Now",
    date: "10-04-2025",
    author: "Minat Shahbot",
    excerpt:
      "Introduction: Why Your Tech Stack Will Be at Its Hottest In 2025 lets face it—Tech Stack Trends 2025 is a tough gig...",
  },
  {
    id: 2,
    imageUrl: "blog2.jpg",
    title: "Web3: The Story of Blockchain",
    date: "05-02-2024",
    author: "Tecoreng",
    excerpt:
      "Brief Overview of the Evolution of the Internet: The Internet, a transformative force that has redefined the way we communicate...",
  },
  {
    id: 3,
    imageUrl: "blog3.jpg",
    title: "What is OLAP (Online Analytical Processing)? And OLTP V/s OLAP",
    date: "01-08-2023",
    author: "Faresh Saidnti",
    excerpt:
      "What is OLAP? This blog contains in-depth information on OLAP. The society we live in today is driven by data...",
  },
  {
    id: 4,
    imageUrl: "blog4.jpg",
    title: "Microservices vs. Monoliths: A Modern Architectural Showdown",
    date: "15-06-2025",
    author: "Lena Petrov",
    excerpt:
      "The age-old debate in software architecture continues to evolve. Choosing between a monolithic and a microservices approach...",
  },
  {
    id: 5,
    imageUrl: "blog5.jpg",
    title: "The Rise of AI in Cybersecurity: A New Frontier",
    date: "22-09-2024",
    author: "Kwame Adjei",
    excerpt:
      "As cyber threats become more sophisticated, traditional defense mechanisms are struggling to keep up. Enter artificial intelligence...",
  },
  {
    id: 6,
    imageUrl: "blog6.jpg",
    title: "DevOps: Bridging the Gap Between Development and Operations",
    date: "03-11-2023",
    author: "Sofia Ramirez",
    excerpt:
      "DevOps is more than just a buzzword; it's a cultural shift. By fostering collaboration and communication, DevOps practices aim to streamline...",
  },
];

const Insight = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <h1 className="text-4xl sm:text-5xl font-poppins text-white mb-12">
        Tecoreng Insights
      </h1>
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id} className="px-2 flex justify-center">
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg w-full max-w-sm flex flex-col h-full min-h-[500px]">
              <div className="relative h-48">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/071735/fff?text=Image+Not+Found";
                  }}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-lg font-poppins text-white mb-2">
                  {post.title}
                </p>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <span className="mr-4">{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-5">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Insight;
