// src/pages/Home.jsx
import React from "react";
import Header from "../components/layout/Header";
import Container from "../components/layout/Container";
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
import Appreciation from "../sections/Appriecient/Appricient";
import Insight from "../sections/insights/Insights";
import GetTouch from "../sections/GetInTouch/GetTouch";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Container>
        <Hero />
        <Preview />
      </Container>
      <div className="bg-[#112542] py-16">
        <Container>
          <HireNow />
        </Container>
      </div>
      <Container>
        <Service />
      </Container>
      <div className="bg-[#112542] py-16">
        <Container>
          <WhyChooseUs />
        </Container>
      </div>
      <Container>
        <Specialization />
        <EngagementModels />
      </Container>
      <div className="bg-[#112542] py-16">
        <Container>
          <DevelopmentProcess />
        </Container>
      </div>
      <Container>
        <SuccessStories />
        <Industries />
        <Appreciation />
        <Insight />
        <GetTouch />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;