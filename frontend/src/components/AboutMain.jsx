import React from 'react';
import { Phone, Mail } from 'lucide-react';
import '../styles/AboutMain.css'; // Assuming you have a CSS file for styling
import docimg from '../assets/images/Gaurav_chanana.jpg'; // Adjust the path as necessary

const AboutMain = () => {
  const handleCallClick = () => {
    // Handle call functionality - you can add phone call logic here
    window.location.href = 'tel:+918800483843';
  };

  return (
    <div className="about-container1">
      <div className="about-header">
        <h1>About The Doctor</h1>
      </div>
      
      <div className="content-wrapper">
        <div className="doctor-profile">
          <div className="profile-image">
            <img src={docimg} alt="Dr Gaurav Chanana" />
            <button className="call-button" onClick={handleCallClick}>
              <Phone size={16} />
              Call
            </button>
          </div>
          
          <div className="doctor-info">
            <h2>Dr Gaurav Chanana DNB, FIPM</h2>
            <p className="specialty">Senior Consultant Pain & Palliative Medicine</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <span>(+91) 88004-83843</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>drgchanana@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="details-section">
          <div className="section">
            <h3>Professional Profile</h3>
            <p>
              With extensive training in anaesthesiology and specialized expertise in pain management, Dr. Gaurav Chanana brings over a decade of clinical experience across some of India’s leading healthcare institutions. Following advanced education and fellowships in pain medicine and palliative care, Dr. Chanana has built a distinguished career through his work at premier centers including the All India Institute of Medical Sciences (AIIMS) and Max Super Speciality Hospital.
              </p>
              <p> 
              His clinical practice focuses on delivering compassionate, evidence-based care to individuals suffering from chronic and cancer-related pain. He is known for integrating interventional techniques with holistic, patient-centered approaches tailored to each individual's needs. A recognized leader in his field, Dr. Chanana is actively engaged in medical education, healthcare quality improvement, and advocacy for palliative care in India.
              </p>
              <p>
              As a committed member of national medical associations—including the Indian Society for Study of Pain and the Indian Association of Palliative Care—he continues to contribute to the advancement of clinical standards and collaborative care models in pain and palliative medicine.
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Patients Treated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Specializations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;