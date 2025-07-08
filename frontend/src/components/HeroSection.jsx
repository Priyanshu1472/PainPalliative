import React,{useRef} from "react";
import "../styles/HeroSection.css";
import VariableProximity from "./VariableProximity"; // Import the VariableProximity component
const HeroSection = () => {
  const containerRef = useRef(null);
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">In India</h1>
        <p className="hero-description" ref={containerRef}>
        <VariableProximity
    label={"Pain management is often approached by general physicians, orthopaedicians, neurologists, oncologists, and anaesthesiologists. However, the growing burden of chronic and cancer-related pain calls for dedicated expertise and interdisciplinary care. Dr. Gaurav Chanana, Associate Director in Pain and Palliative Medicine at Max Super Speciality Hospital, brings over a decade of specialized experience in pain relief, interventional pain procedures, and palliative care. Trained at premier institutions including AIIMS and certified in both pain medicine and palliative care, Dr. Chanana has been instrumental in establishing integrative palliative services in the oncology departments of leading hospitals in Delhi-NCR. His work emphasizes evidence-based interventions tailored to individual needs—especially for patients living with cancer, advanced illness, or persistent pain. Together with the team offers comprehensive care that not only alleviates suffering but also enhances quality of life—a much-needed shift in India's evolving healthcare landscape."}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={90}
    falloff='gaussian'
  />
        </p>
      </div>
    </section>
  );
};

export default HeroSection;