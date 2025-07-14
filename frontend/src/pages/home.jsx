import React from "react";
import HeroSection from "../components/HeroSection";
import MedicalProfile from "../components/MedicalProfile";
import docimg from "../assets/images/Gaurav_chanana.jpg"; // Adjust the path as necessary
import VideoCarousel from "../components/VideoCarousel";
import MapSection from "../components/MapSection";
import FloatingBookingButton from "../components/FloatingButton";

const home = () => {
  return (
    <div className="home">
      <HeroSection />
      <MedicalProfile doctorImage={docimg} doctorName="Dr. Gaurav Chanana" doctorPhone="+91-8800483843​" />
      <VideoCarousel/>
      <MapSection />
      {/* Floating Booking Button */}
      <FloatingBookingButton/>
    </div>
  );
}

export default home;