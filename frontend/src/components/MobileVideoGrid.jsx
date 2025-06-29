import React from "react";
import VideoCard from "./VideoCard.jsx";

const MobileVideoGrid = ({ 
  videosToDisplay, 
  showAllVideos, 
  onToggleShowVideos 
}) => {
  return (
    <div className="mobile-video-container">
      <div className="youtube-cards-grid mobile-grid">
        {videosToDisplay.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            date={video.date}
            link={video.link}
            platform={video.platform}
          />
        ))}
      </div>

      {/* Show More/Less Button for Mobile */}
      <div className="mobile-show-more">
        <button
          onClick={onToggleShowVideos}
          className="show-more-btn"
        >
          {showAllVideos ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default MobileVideoGrid;