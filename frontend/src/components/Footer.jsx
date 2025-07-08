import React from 'react';
import { useWindowDimensions, getFontSizes, getSpacing } from '../extras/common.js';
import '../styles/footer.css';

const Footer = () => {
  const device = useWindowDimensions();
  const fontSizes = getFontSizes(device);
  const spacing = getSpacing(device);

  const footerSections = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      content: 'Max Superspeciality Hospital Delhi NCR',
      type: 'location',
      href: 'https://www.google.com/maps/dir//Dr+Gaurav+Chanana+Best+Cancer+Pain+Palliative+care+in+Delhi,+Pain+management+specialist,+Hospice+care,+Home+care+in+Delhi,+Room+no+5,+Cancer+Care+OPD+Max+Superspeciality+Hospital,+Saket+Institutional+Area,+Saket,+New+Delhi,+Delhi+110017/@28.527726,77.2120223,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce1f687c428df:0x5940b739a47aa797!2m2!1d77.2120223!2d28.527726?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      content: '8800483843',
      type: 'whatsapp',
      href: 'https://wa.me/918800483843'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      content: 'drgchanana@gmail.com',
      type: 'email',
      href: 'mailto:drgchanana@gmail.com'
    }
  ];

  const handleSectionClick = (section) => {
    if (section.href) {
      window.open(section.href, '_blank');
    }
  };

  return (
    <footer 
      className="footer"
      style={{
        padding: device.isMobile ? spacing.md : spacing.lg,
        fontSize: fontSizes.small
      }}
    >
      <div className="footer-container">
        {footerSections.map((section, index) => (
          <div 
            key={index}
            className={`footer-section ${section.href ? 'footer-section--clickable' : ''}`}
            onClick={() => handleSectionClick(section)}
          >
            <div className="footer-section__icon">
              {section.icon}
            </div>
            <div 
              className="footer-section__text"
              style={{ 
                fontSize: device.isSmallMobile ? '0.7rem' : fontSizes.small 
              }}
            >
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;