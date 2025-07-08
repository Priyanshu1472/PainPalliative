import React from "react";
import DoctorInfo from "./DoctorInfo.jsx";
import '../styles/MedicalProfile.css'; // Import the CSS file for styling

const MedicalProfile = ({ doctorImage, doctorName, doctorPhone }) => {
  return (
    <section 
      className="about-section"
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      
      <div className="about-container">
        <div className="about-grid">
          {/* Left Column - Doctor Info */}
          <DoctorInfo 
            doctorImage={doctorImage}
            doctorName={doctorName}
            doctorPhone={doctorPhone}
          />

          {/* Right Column - Text Content */}
          <div className="text-content">
            <h2 className="section-title">
              Specialized Pain and Palliative Care by Certified Experts from AIIMS
            </h2>
            <p className="section-paragraph">
              Pain Management is generally done by general physician, Orthopaedicians, Oncologists, 
              Neurologists and anaesthesiologists.
            </p>
            <p className="section-paragraph">
              Dr Gaurav Chanana has received specialised training 
              & certification in pain management & palliative care. Their approach guided by best 
              available evidence & research coupled with individual attention to each patient is the 
              best you can have for yourself and your family. Their experience at top most premier 
              institute AIIMS for pain and palliative medicine has exposed them to needs of cancer 
              patients journey. They have initiated many projects for Pain & Palliative care around 
              Delhi NCR region. Dr Gaurav Chanana has established their pain & 
              palliative practice with Max Super-specialty Hospital Saket & Max Super-specialty 
              Vaishali respectively for last few years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalProfile;