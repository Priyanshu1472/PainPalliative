import { useState, useEffect, useRef } from "react";

// Custom hook for video slider logic
export const useVideoSlider = (videoData, isDesktop) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use ref to store the interval and timeout
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Auto-play slider for desktop
  useEffect(() => {
    // Clear any existing intervals when effect runs
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Only start auto-play on desktop
    if (!isDesktop) {
      return;
    }

    // Start the continuous auto-play
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= videoData.length ? 0 : nextIndex;
      });
    }, 5000); // Change slide every 5 seconds

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isDesktop, videoData.length]);

  // Navigation functions
  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= videoData.length ? 0 : nextIndex;
    });

    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const prevIdx = prevIndex - 1;
      return prevIdx < 0 ? videoData.length - 1 : prevIdx;
    });

    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Manual navigation handler with auto-play pause/resume
  const handleManualNavigation = (navigationFunction) => {
    // Temporarily pause auto-play
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Execute navigation
    navigationFunction();

    // Resume auto-play after a delay (only on desktop)
    if (isDesktop) {
      timeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            return nextIndex >= videoData.length ? 0 : nextIndex;
          });
        }, 5000);
      }, 5000); // Wait 5 seconds before resuming auto-play
    }
  };

  // Get videos to display
  const getVideosToDisplay = () => {
    if (isDesktop) {
      const visibleVideos = [];
      for (let i = 0; i < 3; i++) {
        const videoIndex = (currentIndex + i) % videoData.length;
        visibleVideos.push({
          ...videoData[videoIndex],
          key: `${currentIndex}-${i}`, // Unique key for React
        });
      }
      return visibleVideos;
    } else {
      // Mobile: Show first 3 or all based on showAllVideos state
      return showAllVideos ? videoData : videoData.slice(0, 3);
    }
  };

  const toggleShowVideos = () => {
    setShowAllVideos(!showAllVideos);
  };

  return {
    currentIndex,
    showAllVideos,
    isTransitioning,
    goToNext,
    goToPrevious,
    goToSlide,
    handleManualNavigation,
    getVideosToDisplay,
    toggleShowVideos,
  };
};
