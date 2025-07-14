import React from "react";
import AboutMain from "../components/AboutMain";
import Timeline from "../components/TimeLine";
import MedicalOfferings from "../components/MedicalOfferings";
import MapSection from "../components/MapSection";

const About = () => {
  return (
    <div>
      <AboutMain />
      <Timeline />
      <MedicalOfferings />
      <MapSection />
    </div>
  );
}
export default About;