import React from "react";
import VideoSlider from "./VideoSlider.jsx";
import MobileVideoGrid from "./MobileVideoGrid.jsx";

const YouTubeSection = ({ 
  videoData,
  currentIndex,
  isTransitioning,
  isDesktop,
  showAllVideos,
  getVideosToDisplay,
  handleManualNavigation,
  goToPrevious,
  goToNext,
  goToSlide,
  toggleShowVideos
}) => {
  return (
    <div className="youtube-subsection">
      <h2 className="subsection-title">Featured Videos</h2>
      
      {/* Desktop Slider */}
      {isDesktop && (
        <VideoSlider
          videoData={videoData}
          currentIndex={currentIndex}
          isTransitioning={isTransitioning}
          onPrevious={() => handleManualNavigation(goToPrevious)}
          onNext={() => handleManualNavigation(goToNext)}
          onGoToSlide={(index) => handleManualNavigation(() => goToSlide(index))}
          getVideosToDisplay={getVideosToDisplay}
        />
      )}

      {/* Mobile Layout */}
      {!isDesktop && (
        <MobileVideoGrid
          videosToDisplay={getVideosToDisplay()}
          showAllVideos={showAllVideos}
          onToggleShowVideos={toggleShowVideos}
        />
      )}
    </div>
  );
};

export default YouTubeSection;