import React from 'react';
import '../styles/testimonial.css'; // Import the CSS file for styling
import defaultuser from '../assets/images/images.png'; // Import a default user image

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      company: {defaultuser},
      rating: 4.9,
      quote: "I recommend the doctor Happy with: Doctor friendliness Explanation of the health issue Treatment satisfaction Friendly doctor, quite intelligent. would recommend her for back and neck problems",
      logo: 'Online Reviews',
      companyClass: 'hulu'
    },
    {
      id: 2,
      company: {defaultuser},
      rating: 3.2,
      quote: "Dr.Gaurav Chanana is very experienced and does thorough examination to diagnose. His diagnosis is showing good result.",
      logo: 'Ashok Moga',
      companyClass: 'hbomax'
    },
    {
      id: 3,
      company: {defaultuser},
      rating: 4.9,
      quote: "Doctor is very intelligent and courtious, a through gentleman.he is very honest and supportive .he gives best advise to treatment for the patient.",
      logo: 'Pradeep Yadav',
      companyClass: 'disney'
    },
    {
      id: 4,
      company: {defaultuser},
      rating: 3.2,
      quote: "A very helpful and patient doctor. Listened to my mothers problem very patiently and was very supportive. Would recommend him to other patients. Old people need lot of patience and delicate handling.",
      logo: 'Sanjay Kumar',
      companyClass: 'starz'
    },
    {
      id: 5,
      company: {defaultuser},
      rating: 4.9,
      quote: "Since last 6 year my mother was in very much pain due to disc prolapse.took so many treatment finally we decided to try pain management .we met with Dr gaurav chanana he expalined us about the condition very well listen my mother's problem patiently . Advise us for pain management treatment .Till now feelng better . I will give feedback after a week .",
      logo: 'Neha Masih',
      companyClass: 'vix'
    },
    {
      id: 6,
      company: {defaultuser},
      rating: 3.2,
      quote: "Dr.chanana is very polite, all my questions were answered well. Even after so much of questions he doesn't get carried away. Thanks",
      logo: 'Ankit',
      companyClass: 'prime'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="rating-container">
        <span className="rating-number">{rating}</span>
        <span className="star">★</span>
      </div>
    );
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="main-title">
            Our trusted{' '}
            <span className="highlight-text">Clients</span>
          </h1>
          <p className="subtitle">
          We thank our patients & their caregivers who took time and shared a feedback it helps us keep working with the same zeal & enthusiasm
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${testimonial.companyClass}`}
            >
              {/* Company Header */}
              <div className="card-header">
                <div className="company-info">

                  <img
                    src={testimonial.company.defaultuser}
                    alt={`${testimonial.author}'s company logo`}
                    className="company-logo"
                  />
                  <span className="company-name">{testimonial.logo}</span>
                  
                </div>
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className="quote">
                "{testimonial.quote}"
              </blockquote>

              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;