import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import YouTubeSection from "../components/YouTubeSection.jsx";
import MapSection from "../components/MapSection.jsx";
import { useResponsive } from "../hooks/useResponsive.js";
import { useVideoSlider } from "../hooks/useVideoSlider.js";
import { videoData } from "../data/videoData.js";
import BGImage from "../assets/images/BG-image.jpg";
import GauravImage from "../assets/images/Gaurav_chanana.jpg";
import "../styles/home.css";

const Home = () => {
  // Custom hooks
  const { isDesktop } = useResponsive();
  const {
    currentIndex,
    showAllVideos,
    isTransitioning,
    goToNext,
    goToPrevious,
    goToSlide,
    handleManualNavigation,
    getVideosToDisplay,
    toggleShowVideos
  } = useVideoSlider(videoData, isDesktop);

  // Coordinates for Dr. Megha Pruthi's Clinic
  const clinicCoordinates = {
    latitude: 28.4502461,
    longitude: 77.0758843
  };

  // Doctor information
  const doctorInfo = {
    name: "Dr. Gaurav Chanana",
    phone: "+91-8800483843​",
    image: GauravImage
  };

  return (
    <div className="home-container">

      {/* Hero Section */}
      <HeroSection backgroundImage={BGImage} />

      {/* About Section */}
      <AboutSection 
        doctorImage={doctorInfo.image}
        doctorName={doctorInfo.name}
        doctorPhone={doctorInfo.phone}
      />
      
      {/* YouTube and Map Section */}
      <section className="youtube-map-section">
        <div className="youtube-map-container">
          
          {/* YouTube Videos Section */}
          <YouTubeSection
            videoData={videoData}
            currentIndex={currentIndex}
            isTransitioning={isTransitioning}
            isDesktop={isDesktop}
            showAllVideos={showAllVideos}
            getVideosToDisplay={getVideosToDisplay}
            handleManualNavigation={handleManualNavigation}
            goToPrevious={goToPrevious}
            goToNext={goToNext}
            goToSlide={goToSlide}
            toggleShowVideos={toggleShowVideos}
          />

          {/* Map Section */}
          <MapSection 
            latitude={clinicCoordinates.latitude}
            longitude={clinicCoordinates.longitude}
          />

        </div>
      </section>

    </div>
  );
};

export default Home;