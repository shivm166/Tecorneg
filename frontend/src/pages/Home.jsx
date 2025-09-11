// src/pages/Home.jsx
import React from "react";
import Header from "../components/layout/Header";
import Hero from "../sections/Hero/Hero";
import Preview from "../sections/previewSection/Preview";
import HireNow from "../sections/HireNowSection/HireNow";
import Service from "../sections/services/Service";
import WhyChooseUs from "../sections/GetTouch/WhyChooseUs";
import Footer from "../sections/FooterSection/FooterSection";
import Specialization from "../sections/Specialazations/Specialization";
import EngagementModels from "../sections/Engagement/EngagementModels";
import SuccessStories from "../sections/SuccessStori/stori";
import DevelopmentProcess from "../sections/Development/DevelopmentProcess";
import Industries from "../sections/Industry/Industries";

const Home = () => {
  return (
    <>
            <Header />     {" "}
      {/* The font-sans class is now here to apply globally */}     {" "}
      <div className="bg-[#071735] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
                <Hero />
                <Preview />
                <HireNow />
                <Service />
                <WhyChooseUs />
                  <Specialization />
                   <EngagementModels />
                   <DevelopmentProcess />
                  <SuccessStories />
                  <Industries />
      </div>
              <Footer />         {" "}
    </>
  );
};

export default Home;
