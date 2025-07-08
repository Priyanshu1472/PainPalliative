import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import '../styles/VideoCarousel.css';

// Video data configuration
const videoData = [
  {
    title: "Understanding Chronic Pain Management",
    date: "2025-01-15",
    link: "https://youtube.com/watch?v=VIDEO_ID_1",
    platform: "youtube",
  },
  {
    title: "Palliative Care: A Comprehensive Guide",
    date: "2024-12-28",
    link: "https://youtube.com/watch?v=VIDEO_ID_2",
    platform: "instagram",
  },
  {
    title: "Advanced Pain Relief Techniques",
    date: "2024-12-10",
    link: "https://youtube.com/watch?v=VIDEO_ID_3",
    platform: "youtube",
  },
  {
    title: "Cancer Pain Management Strategies",
    date: "2024-11-25",
    link: "https://youtube.com/watch?v=VIDEO_ID_4",
    platform: "instagram",
  },
  {
    title: "Post-Surgical Pain Recovery",
    date: "2024-11-18",
    link: "https://youtube.com/watch?v=VIDEO_ID_5",
    platform: "youtube",
  },
  {
    title: "Mental Health and Chronic Pain",
    date: "2024-11-05",
    link: "https://youtube.com/watch?v=VIDEO_ID_6",
    platform: "instagram",
  },
  {
    title: "Physical Therapy for Pain Relief",
    date: "2024-10-22",
    link: "https://youtube.com/watch?v=VIDEO_ID_7",
    platform: "youtube",
  },
  {
    title: "Medication Management in Pain Care",
    date: "2024-10-15",
    link: "https://youtube.com/watch?v=VIDEO_ID_8",
    platform: "instagram",
  },
  {
    title: "Holistic Approaches to Pain Management",
    date: "2024-10-08",
    link: "https://youtube.com/watch?v=VIDEO_ID_9",
    platform: "youtube",
  },
  {
    title: "Living with Fibromyalgia",
    date: "2024-09-30",
    link: "https://youtube.com/watch?v=VIDEO_ID_10",
    platform: "instagram",
  },
  {
    title: "Arthritis Pain Management",
    date: "2024-09-22",
    link: "https://youtube.com/watch?v=VIDEO_ID_11",
    platform: "youtube",
  },
  {
    title: "Back Pain Prevention and Treatment",
    date: "2024-09-15",
    link: "https://youtube.com/watch?v=VIDEO_ID_12",
    platform: "instagram",
  },
];

// YouTube SVG Icon
const YouTubeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Instagram SVG Icon
const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videosPerSlide, setVideosPerSlide] = useState(3);
  const [animationClass, setAnimationClass] = useState('fade-in');
  const intervalRef = useRef(null);
  const animationQueue = useRef(['slide-in', 'fade-in']);

  // Handle responsive videos per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVideosPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setVideosPerSlide(2);
      } else {
        setVideosPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(videoData.length / videosPerSlide);

  // Auto-rotate functionality with improved animation
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      
      const nextAnimation = animationQueue.current[
        Math.floor(Math.random() * animationQueue.current.length)
      ];
      setAnimationClass(nextAnimation);
  
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= totalSlides ? 0 : nextIndex;
      });
  
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 4000);
  
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [totalSlides]);
  
  const handleSlideChange = (indexOrFunction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Cycle through different animations
    const nextAnimation = animationQueue.current[
      Math.floor(Math.random() * animationQueue.current.length)
    ];
    setAnimationClass(nextAnimation);
    
    setCurrentIndex(indexOrFunction);
    
    // Reset transition state
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    
    // Reset auto-rotation timer when user interacts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setTimeout(() => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        
        intervalRef.current = setInterval(() => {
          handleSlideChange((prevIndex) => {
            const nextIndex = prevIndex + 1;
            return nextIndex >= totalSlides ? 0 : nextIndex;
          });
        }, 4000);
      }, 1000);
    }
    
    handleSlideChange(index);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCurrentVideos = () => {
    const startIndex = currentIndex * videosPerSlide;
    const endIndex = startIndex + videosPerSlide;
    return videoData.slice(startIndex, endIndex);
  };

  const getGridClass = () => {
    return `video-grid grid-${videosPerSlide}`;
  };

  return (
    <div className="video-carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">
          Featured Videos
        </h2>
        <p className="carousel-subtitle">
          Explore our comprehensive pain management resources
        </p>
      </div>

      <div className="carousel-wrapper">
        <div className={getGridClass()}>
          {getCurrentVideos().map((video, index) => (
            <div 
              key={`${currentIndex}-${index}`}
              className={`video-card ${animationClass}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="video-card-content">
                <div className="video-card-body">
                  <h3 className="video-title">
                    {video.title}
                  </h3>
                  
                  <div className="video-meta">
                    <Calendar size={16} />
                    <span>{formatDate(video.date)}</span>
                  </div>

                  <div>
                    <span className={`platform-badge ${video.platform}`}>
                      {video.platform === 'youtube' ? 
                        <YouTubeIcon size={14} /> : 
                        <InstagramIcon size={14} />
                      }
                      {video.platform === 'youtube' ? 'YouTube' : 'Instagram'}
                    </span>
                  </div>
                </div>

                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <ExternalLink size={16} />
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <div className="carousel-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{
                width: `${((currentIndex + 1) / totalSlides) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      <div className="carousel-info">
        Showing {currentIndex * videosPerSlide + 1}-{Math.min((currentIndex + 1) * videosPerSlide, videoData.length)} of {videoData.length} videos
      </div>
    </div>
  );
};

export default VideoCarousel;