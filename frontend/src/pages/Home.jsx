import React from "react";
import Header from "../components/layout/Header";
import Hero from "../sections/Hero/Hero";
import Preview from "../sections/previewSection/Preview";
import HireNow from "../sections/HireNowSection/HireNow";
import Service from "../sections/services/Service";
import Footer from "../sections/FooterSection/FooterSection";

const Home = () => {
  return (
    <>
            <Header />   
      <div className="bg-[#071735] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Preview />
        <HireNow />
        <Service />
      </div>
      <Footer />
    </>
  );
};

export default Home;
