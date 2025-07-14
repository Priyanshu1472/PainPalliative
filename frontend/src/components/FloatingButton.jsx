import React from 'react';
import { Calendar } from 'lucide-react';
import '../styles/FloatingButton.css';

const FloatingBookingButton = ({ href = "https://www.maxhealthcare.in/doctor/dr-gaurav-chanana", target = "_blank" }) => {
  return (
    <div className="floating-button-container">
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className="floating-button"
      >
        <Calendar size={24} />
      </a>
      
      {/* Tooltip */}
      <div className="floating-button-tooltip">
        Book Appointment
      </div>
    </div>
  );
};

export default FloatingBookingButton;