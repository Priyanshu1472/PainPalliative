import React, { useEffect, useRef, useState } from 'react';
import { Heart, Zap, Users } from 'lucide-react';
import '../styles/MedicalOfferings.css'; // Assuming you have a CSS file for styling

const MedicalOfferings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const offerings = [
    {
      icon: <Heart className="offering-icon heart-icon" />,
      title: "Medical Management",
      subtitle: "for pain",
      description: "Comprehensive pain assessment and personalized treatment plans using evidence-based medical approaches to help you regain control of your life."
    },
    {
      icon: <Zap className="offering-icon zap-icon" />,
      title: "Interventional Pain Procedures",
      subtitle: "",
      description: "Advanced minimally invasive procedures including nerve blocks, injections, and targeted therapies for effective pain relief when conservative treatments aren't enough."
    },
    {
      icon: <Users className="offering-icon users-icon" />,
      title: "Supportive Guidance",
      subtitle: "by specialists",
      description: "Holistic care through our multidisciplinary team of physiotherapists for movement rehabilitation, psychologists for mental wellness, and dieticians for nutritional support."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === containerRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = cardRefs.current.findIndex(ref => ref === entry.target);
            if (cardIndex !== -1 && !visibleCards.includes(cardIndex)) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, cardIndex]);
              }, cardIndex * 200); // Stagger the animations
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentCardRefs = [...cardRefs.current];
    currentCardRefs.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      currentCardRefs.forEach((ref) => {
        if (ref) cardObserver.unobserve(ref);
      });
    };
  }, [visibleCards]);

  return (
    <div className="medical-offerings">
      <div className="container" ref={containerRef}>
        <div className={`header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Our Offerings</h2>
          <div className={`divider ${isVisible ? 'animate-in' : ''}`}></div>
        </div>
        
        <div className="offerings-grid">
          {offerings.map((offering, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el}
              className={`offering-card ${visibleCards.includes(index) ? 'animate-in' : ''}`}
            >
              <div className="card-content">
                <div className="icon-container">
                  {offering.icon}
                </div>
                
                <h3 className="card-title">{offering.title}</h3>
                
                {offering.subtitle && (
                  <p className="card-subtitle">{offering.subtitle}</p>
                )}
                
                <p className="card-description">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MedicalOfferings;