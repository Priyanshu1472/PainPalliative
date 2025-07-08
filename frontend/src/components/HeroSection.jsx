import React from "react";
import "../styles/HeroSection.css";
import img from "../assets/images/painpalliativelogo.png"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <section className="hero">

      <div className="hero-content">
        {/* Text Content */}
        <div className="hero-text">
          <h1>
            Compassionate <span>Pain & Palliative Care</span>
          </h1>
          <p className="tagline">
            Supporting patients and families with relief, dignity, and comfort through every stage of care.
          </p>

          <p className="bio">
            Pain management is often approached by general physicians, orthopaedicians, neurologists,
            oncologists, and anaesthesiologists. However, the growing burden of chronic and cancer-related
            pain calls for dedicated expertise and interdisciplinary care. <strong>Dr. Gaurav Chanana</strong>, Associate Director
            in Pain and Palliative Medicine at Max Super Speciality Hospital, brings over a decade of specialized
            experience in pain relief, interventional pain procedures, and palliative care.
            <br /><br />
            Trained at premier institutions including <strong>AIIMS</strong> and certified in both pain medicine and palliative care,
            Dr. Chanana has been instrumental in establishing integrative palliative services in the oncology
            departments of leading hospitals in Delhi-NCR. His work emphasizes evidence-based interventions
            tailored to individual needs—especially for patients living with cancer, advanced illness, or persistent pain.
            Together with the team, he offers comprehensive care that not only alleviates suffering but also enhances
            quality of life—a much-needed shift in India's evolving healthcare landscape.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="btn-primary">Learn More</a>
            <a href="tel:+91XXXXXXXXXX" className="btn-call">📞 Call Now</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={img} alt="Dr. Gaurav Chanana" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
