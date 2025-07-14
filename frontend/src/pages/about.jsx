import React from "react";
import AboutMain from "../components/AboutMain";
import Timeline from "../components/TimeLine";
import MedicalOfferings from "../components/MedicalOfferings";
import MapSection from "../components/MapSection";
import FloatingBookingButton from "../components/FloatingButton";

const About = () => {
  return (
    <div>
      <AboutMain />
      <Timeline />
      <MedicalOfferings />
      <MapSection />
      <FloatingBookingButton/>
    </div>
  );
}
export default About;