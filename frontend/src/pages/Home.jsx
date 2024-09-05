import React from "react";
import Hero from "../components/HomeMain";
import WorkoutSessions from "../components/WorkoutSessions";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import BMICalculator from "../components/HealthCalculator";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICalculator/>
      <Footer/>
    </>
  );
};

export default Home;
