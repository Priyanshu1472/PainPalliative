import React, { useEffect, useRef, useState } from 'react';
import '../styles/TimeLine.css'; // Assuming you have a CSS file for styling

// Move data arrays outside component to prevent recreation on every render
const educationData = [
  "Diplomate in Anaesthesiology - National Board of Education",
  "CCEPC - AIIMS BRA IRCH",
  "Fellowship in Pain Management - Aesculap Academy/ Delhi Pain Management Centre",
  "IASP-ISSP Multidisciplinary Evidence-Based Pain Management Program"
];

const experienceData = [
  "Gurugobind Singh Hospital 2010 - 2012",
  "All India Institute of Medical Sciences 2012- 2015",
  "Delhi Pain Management Centre 2015 -2017",
  "Max Super-speciality Hospital Saket & Max Smart Super-speciality Hospital (2017 to present)"
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const [visibleEducationItems, setVisibleEducationItems] = useState([]);
  const [visibleExperienceItems, setVisibleExperienceItems] = useState([]);
  const [educationLineHeight, setEducationLineHeight] = useState(0);
  const [experienceLineHeight, setExperienceLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - timelineTop) / (windowHeight + timelineHeight * 0.5)));
      
      // Check if we're on mobile
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // Mobile: Sequential behavior (education first, then experience)
        // Phase 1: Education items (0 to 0.5 progress)
        if (scrollProgress <= 0.5) {
          const educationProgress = scrollProgress / 0.5; // Normalize to 0-1
          const educationItemsToShow = Math.floor(educationProgress * educationData.length * 1.2);
          
          // Update visible education items based on current progress
          const newVisibleEducationItems = [];
          for (let i = 0; i < educationItemsToShow && i < educationData.length; i++) {
            newVisibleEducationItems.push(i);
          }
          
          setVisibleEducationItems(prev => {
            if (JSON.stringify(prev) !== JSON.stringify(newVisibleEducationItems)) {
              return newVisibleEducationItems;
            }
            return prev;
          });
          
          // Clear experience items when scrolling back to education phase
          setVisibleExperienceItems(prev => {
            if (prev.length > 0) {
              return [];
            }
            return prev;
          });
        } else {
          // Ensure all education items are visible when moving past 0.5
          const allEducationItems = educationData.map((_, index) => index);
          setVisibleEducationItems(prevEdu => {
            if (JSON.stringify(prevEdu) !== JSON.stringify(allEducationItems)) {
              return allEducationItems;
            }
            return prevEdu;
          });
        }
        
        // Phase 2: Experience items (0.5 to 1.0 progress)
        if (scrollProgress > 0.5) {
          const experienceProgress = (scrollProgress - 0.5) / 0.5; // Normalize remaining progress
          const experienceItemsToShow = Math.floor(experienceProgress * experienceData.length * 1.2);
          
          // Update visible experience items based on current progress
          const newVisibleExperienceItems = [];
          for (let i = 0; i < experienceItemsToShow && i < experienceData.length; i++) {
            newVisibleExperienceItems.push(i);
          }
          
          setVisibleExperienceItems(prev => {
            if (JSON.stringify(prev) !== JSON.stringify(newVisibleExperienceItems)) {
              return newVisibleExperienceItems;
            }
            return prev;
          });
        }
      } else {
        // Desktop: Both sections work together simultaneously
        const educationItemsToShow = Math.floor(scrollProgress * educationData.length * 1.2);
        const experienceItemsToShow = Math.floor(scrollProgress * experienceData.length * 1.2);
        
        // Update education items - show/hide based on scroll progress
        const newVisibleEducationItems = [];
        for (let i = 0; i < educationItemsToShow && i < educationData.length; i++) {
          newVisibleEducationItems.push(i);
        }
        
        setVisibleEducationItems(prev => {
          if (JSON.stringify(prev) !== JSON.stringify(newVisibleEducationItems)) {
            return newVisibleEducationItems;
          }
          return prev;
        });
        
        // Update experience items - show/hide based on scroll progress
        const newVisibleExperienceItems = [];
        for (let i = 0; i < experienceItemsToShow && i < experienceData.length; i++) {
          newVisibleExperienceItems.push(i);
        }
        
        setVisibleExperienceItems(prev => {
          if (JSON.stringify(prev) !== JSON.stringify(newVisibleExperienceItems)) {
            return newVisibleExperienceItems;
          }
          return prev;
        });
      }
    };

    // Throttle scroll handler to prevent excessive calls
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []); // Empty dependency array since we moved data arrays outside

  // Separate effect for education line height updates
  useEffect(() => {
    if (visibleEducationItems.length > 0) {
      const lastEducationIndex = Math.max(...visibleEducationItems);
      const educationItemHeight = 120;
      const calculatedHeight = (lastEducationIndex + 1) * educationItemHeight;
      setEducationLineHeight(Math.min(calculatedHeight, educationData.length * educationItemHeight));
    } else {
      setEducationLineHeight(0);
    }
  }, [visibleEducationItems]);

  // Separate effect for experience line height updates
  useEffect(() => {
    if (visibleExperienceItems.length > 0) {
      const lastExperienceIndex = Math.max(...visibleExperienceItems);
      const experienceItemHeight = 120;
      const calculatedHeight = (lastExperienceIndex + 1) * experienceItemHeight;
      setExperienceLineHeight(Math.min(calculatedHeight, experienceData.length * experienceItemHeight));
    } else {
      setExperienceLineHeight(0);
    }
  }, [visibleExperienceItems]);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-header">
        <h2>Professional Journey</h2>
      </div>
      
      <div className="timeline-content">
        {/* Education Section */}
        <div className="timeline-section education-section">
          <h3 className="section-title">Education</h3>
          <div className="section-with-line">
            {/* Education Vertical Line */}
            <div className="timeline-line education-line">
              <div 
                className="timeline-line-fill education-line-fill"
                style={{ height: `${educationLineHeight}px` }}
              ></div>
            </div>
            
            <ul className="timeline-list">
              {educationData.map((item, index) => (
                <li 
                  key={index}
                  className={`timeline-item ${visibleEducationItems.includes(index) ? 'visible' : ''}`}
                  style={{
                    opacity: visibleEducationItems.includes(index) ? 1 : 0,
                    transform: visibleEducationItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: visibleEducationItems.includes(index) ? `${visibleEducationItems.indexOf(index) * 0.2}s` : '0s'
                  }}
                >
                  <div className="timeline-dot education-dot"></div>
                  <div className="timeline-content-item">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Experience Section */}
        <div className="timeline-section experience-section">
          <h3 className="section-title">Experience</h3>
          <div className="section-with-line">
            {/* Experience Vertical Line */}
            <div className="timeline-line experience-line">
              <div 
                className="timeline-line-fill experience-line-fill"
                style={{ height: `${experienceLineHeight}px` }}
              ></div>
            </div>
            
            <ul className="timeline-list">
              {experienceData.map((item, index) => (
                <li 
                  key={index}
                  className={`timeline-item ${visibleExperienceItems.includes(index) ? 'visible' : ''}`}
                  style={{
                    opacity: visibleExperienceItems.includes(index) ? 1 : 0,
                    transform: visibleExperienceItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: visibleExperienceItems.includes(index) ? `${visibleExperienceItems.indexOf(index) * 0.2}s` : '0s'
                  }}
                >
                  <div className="timeline-dot experience-dot"></div>
                  <div className="timeline-content-item">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;