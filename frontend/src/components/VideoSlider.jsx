import React from "react";
import VideoCard from "./VideoCard.jsx";

const VideoSlider = ({ 
  videoData, 
  currentIndex, 
  isTransitioning, 
  onPrevious, 
  onNext, 
  onGoToSlide,
  getVideosToDisplay 
}) => {
  return (
    <div className="video-slider-container">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={isTransitioning}
        className="slider-nav-btn slider-nav-prev"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={isTransitioning}
        className="slider-nav-btn slider-nav-next"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>

      {/* Slider Track - Fixed to show exactly 3 videos */}
      <div className="slider-track-container">
        <div 
          className={`slider-track ${isTransitioning ? 'transitioning' : ''}`}
        >
          {getVideosToDisplay().map((video, index) => (
            <div
              key={video.key}
              className={`video-slide ${isTransitioning ? 'slide-transitioning' : ''}`}
              style={{
                '--slide-index': index
              }}
            >
              <VideoCard
                title={video.title}
                date={video.date}
                link={video.link}
                platform={video.platform}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {videoData.map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            disabled={isTransitioning}
            className={`pagination-dot ${currentIndex === index ? 'active' : ''} ${isTransitioning ? 'disabled' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;