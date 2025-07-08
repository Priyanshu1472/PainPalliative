import React from 'react';
import '../styles/testimonial.css'; // Import the CSS file for styling
import defaultuser from '../assets/images/images.png'; // Import a default user image

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      company: {defaultuser},
      rating: 5,
      quote: "In this day and age of pressurized medical community, Dr. Gaurav is one of the rarest people who'll go out of his way to help his patients. My father was in his care during his last couple of months and he tried to make it as painless for him as he could. He was available to us for consultation even when he was on leave and would especially come and see him even when we had come to the hospital to get some other procedure done. He truly defines the essence of this noble profession. May God bless him with a good, healthy and long life.",
      logo: 'Rashmi Sharma',
      companyClass: 'hulu'
    },
    {
      id: 2,
      company: {defaultuser},
      rating: 5,
      quote: "Dr. Gaurav chanana expertise in pain management is exceptional. From the moment I walked into his clinic, his compassionate approach and thorough understanding of my mother condition were evident. He took the time to delve into my mothers symptoms and tailor a treatment plan that addressed my needs comprehensively. His use of the latest techniques and dedication to patient care provided me with significant relief and improved my mother's quality of life. For anyone struggling with chronic pain, Dr. Gaurav chanana is the ultimate choice for expert, empathetic care.",
      logo: 'Srishti Kheterpal',
      companyClass: 'hbomax'
    },
    {
      id: 3,
      company: {defaultuser},
      rating: 5,
      quote: "Dr. Gaurav Channa and his team is very Supportive and always keen to help patients and there family. Dr. Gaurav and Dr. Pooja shows genuine concern and empathy towards my Father's health.He is Very Humble and kind Doctor. My father is suffering from Cancer due to this he is facing unbearable pain but just because of Dr. Gaurav and his Pain and Palliative Medicine it helps my Father alot. I want to express my heartfelt gratitude to Dr. Gaurav, Your expertise, compassion, and unwavering support made a significant impact on my father's recovery. Thank You Dr.Gaurav and Team.",
      logo: 'Praveen Rawat',
      companyClass: 'disney'
    },
    {
      id: 4,
      company: {defaultuser},
      rating: 5,
      quote: "Dr.Gaurav Chanana and his team is very good, completely understand the concern of patient especially Sr.citizen and targets their overall well being apart from medication. Dr.Gaurav is always available to address any issues and Dr.Pooja makes sure that patient and attendant understand the advice and are comfortable. Mr.Manpreet does excellent co-ordination between the teams.",
      logo: 'Rajeev K. Sharma',
      companyClass: 'starz'
    },
    {
      id: 5,
      company: {defaultuser},
      rating: 5,
      quote: "Dr. Chanana & his team have been an amazing support in this journey since my father's diagnosis & since the time I've come to terms with the fact that there is not much to be done except make things as comfortable for him as possible. They've always been there whenever I've needed them...guiding me through the various ups & downs and the challenges I've come across since I took my father home. Honestly...things have been extremely stressful & managing the illness at home have not been easy. My sincere thanks to Dr. Chanana & his team for being a part of this difficult phase in my life & helping me take care of my ailing father in the best possible manner. God bless.",
      logo: 'Ananya Biswasroy',
      companyClass: 'vix'
    },
    {
      id: 6,
      company: {defaultuser},
      rating: 5,
      quote: "I met Dr. Chanana on recommendation of my Medical Oncologist in regards to my mother's treatment. Her pain was elevating and due to high creatinine levels right medical regime had to be selected also a good support. Dr. Chanana understood our case thoroughly and also suggested other specialist whom we had to meet in order to cater certain complications. He was there in ups and down and in terms of councelling as well, he guided us with all the available options and also with right options. And a special mention to Dr. in his team she is talented and eye to detail, while going through any OPD or IPD reports and has got empathy for patients and family.",
      logo: 'Shobhit Aggarwal',
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