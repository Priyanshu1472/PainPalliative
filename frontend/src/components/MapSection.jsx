import React from "react";

const MapSection = ({ latitude, longitude }) => {
  return (
    <div className="map-subsection">
      <h2 className="subsection-title">Our Location</h2>
      <div className="map-container">
        {/* Interactive Google Map */}
        <div className="map-iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4631272658423!2d77.2125!3d28.5279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1fd7d690eb3%3A0xdf75eabd1fd2f06d!2sRoom%20no%205%2C%20Cancer%20Care%20OPD%2C%20Max%20Super%20Speciality%20Hospital%2C%20Saket!5e0!3m2!1sen!2sin!4v1735054800000!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title= "Clinic Location"
          ></iframe>
          </div>
      </div>
    </div>
  );
};

export default MapSection;