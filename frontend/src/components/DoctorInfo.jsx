import React from "react";

const DoctorInfo = ({ doctorImage, doctorName, doctorPhone }) => {
  return (
    <div className="doctor-info">
      <div className="doctor-image-container">
        <img 
          src={doctorImage}
          alt={doctorName}
          className="doctor-image"
        />
      </div>
      <h3 className="doctor-name">{doctorName}</h3>
      <p className="doctor-phone">{doctorPhone}</p>
    </div>
  );
};

export default DoctorInfo;