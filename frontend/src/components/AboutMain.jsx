import React from 'react';
import { Phone, Mail} from 'lucide-react';
import '../styles/AboutMain.css'; // Assuming you have a CSS file for styling
import docimg from '../assets/images/Gaurav_chanana.jpg'; // Adjust the path as necessary

const AboutMain = () => {
  return (
    <div className="about-container1">
      <div className="about-header">
        <h1>About The Doctor</h1>
      </div>
      
      <div className="content-wrapper">
        <div className="doctor-profile">
          <div className="profile-image">
            <img 
              src={docimg} 
              alt="Dr Gaurav Chanana"
            />
          </div>
          
          <div className="doctor-info">
            <h2>Dr Gaurav Chanana DNB, FIPM</h2>
            <p className="specialty">Senior Consultant Pain & Palliative Medicine</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={20} />
                <span>(+91) 88004-83843</span>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <span>drgchanana@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="details-section">
          <div className="section">
            <h3>Professional Profile</h3>
            <p>
            With extensive training in anaesthesia and specialized expertise in pain management, this medical professional brings over a decade of experience across leading healthcare institutions. After completing advanced education and fellowships in pain care, their clinical journey has spanned renowned centers, including top-tier hospitals and research institutions. Their focus lies in delivering compassionate, evidence-based treatment to individuals suffering from chronic pain, combining interdisciplinary approaches with personalized care. A committed member of several national medical bodies, they remain actively involved in advancing patient care and clinical excellence in their field.
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