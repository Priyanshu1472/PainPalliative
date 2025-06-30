import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWindowDimensions } from '../extras/common';
import logoImage from '../assets/images/Pain&PalliativeLogo.png';
import '../styles/navbar.css';

const Navbar = () => {
  const device = useWindowDimensions();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navigation items
  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'testimonial', path: '/testimonial' },
    { name: 'FAQs', path: '/faqs' }
  ];

  // Handle scroll behavior - disabled on mobile when menu is open
  useEffect(() => {
    const handleScroll = () => {
      // Don't hide navbar on mobile when menu is open
      if (device.isMobile && isMobileMenuOpen) {
        return;
      }

      const currentScrollY = window.scrollY;
      
      // Show navbar when at top, hide when scrolling down, show when scrolling up
      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, device.isMobile, isMobileMenuOpen]);

  // Close mobile menu when screen size changes
  useEffect(() => {
    if (!device.isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [device.isMobile, isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen && device.isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, device.isMobile]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if current path matches nav item
  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    if (path !== '/' && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const renderDesktopNav = () => (
    <div className="nav-buttons">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`nav-button ${isActiveRoute(item.path) ? 'active' : ''}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  const renderMobileMenuToggle = () => (
    <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
      <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
      <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
      <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
    </div>
  );

  const renderMobileMenu = () => (
    <>
      {/* Backdrop overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMobileMenu}>
          ×
        </button>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`mobile-nav-button ${isActiveRoute(item.path) ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Spacer div to prevent content from going under the fixed navbar */}
      
      <nav className={`navbar ${!isVisible ? 'hidden' : ''}`}>
        <div className="logo-section">
          <Link to="/" className="logo">
            <img 
              src={logoImage} 
              alt="Pain & Palliative Care Logo" 
              className="logo-image"
            />
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="logo-text">Pain & Palliative Care</h1>
          </Link>
        </div>
        
        {device.isMobile ? renderMobileMenuToggle() : renderDesktopNav()}
      </nav>
      
      {device.isMobile && renderMobileMenu()}
    </>
  );
};

// Export the navbar height function for use in other components
export const getNavbarHeight = (deviceWidth) => {
  if (deviceWidth <= 320) return 75;
  if (deviceWidth <= 480) return 85;
  if (deviceWidth <= 768) return 95;
  if (deviceWidth <= 1024) return 100;
  if (deviceWidth <= 1440) return 110;
  return 120;
};

export default Navbar;