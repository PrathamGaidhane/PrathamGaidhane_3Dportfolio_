import React, { useState, useEffect } from 'react';

import NavBar from "./components/NavBar";
import Hero from "./section/Hero";
import ShowcaseSection from "./components/ShowcaseSection";
import LogoSection from "./section/LogoSection";
import FeatureCards from "./section/FeatureCards";
import ExperienceSection from "./section/ExperienceSection";
import TechStack from "./section/TechStack";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import Loader from "./components/Loader"; // Make sure you create this file

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or replace with actual loading condition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Hero />
          <ShowcaseSection />
          <LogoSection />
          <FeatureCards />
          <ExperienceSection />
          <TechStack />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
