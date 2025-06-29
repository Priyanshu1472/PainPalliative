import React from "react";

const MapSection = ({ latitude, longitude }) => {
  return (
    <div className="map-subsection">
      <h2 className="subsection-title">Our Location</h2>
      <div className="map-container">
        {/* Interactive Google Map */}
        <div className="map-iframe-container">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4959742847847!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ac14ec5e663%3A0x682e72353ecc6eb6!2sDr%20Megha%20Pruthi%20MD%2C%20DNB%2C%20M%20Sc%20Palliative%20Medicine%20(%20Cardiff%20university%2C%20UK)%2C%20Fellowship%20in%20Pain%20Medicine!5e0!3m2!1sen!2sin!4v1735054800000!5m2!1sen!2sin`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Megha Pruthi Clinic Location"
            ></iframe>
          </div>
      </div>
    </div>
  );
};

export default MapSection;