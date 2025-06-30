import React, { useState, useMemo } from 'react';
import { Search, Plus, Minus } from 'lucide-react';
import '../styles/FAQ.css'; // Assuming you have a separate CSS file for styles

// FAQ data organized by category
const faqData = {
  cancer: [
    {
      "id": "c1",
      "question": "What causes cancer pain?",
      "answer": "Cancer pain may be due to the cancer itself (mass effect or nerve compression), post-surgical pain (phantom pain), or treatments like chemotherapy or radiation. Some pain can also occur incidentally from unrelated issues like moving a dressing.",
      "category": "cancer"
    },
    {
      "id": "c2",
      "question": "How to rate your pain?",
      "answer": "Pain is rated using a 0–10 scale, where 0 is no pain and 10 is worst pain. Patients are asked to describe their pain type (e.g., sharp, throbbing), location, and when it hurts. This helps in developing a personalized pain management plan.",
      "category": "cancer"
    },
    {
      "id": "c3",
      "question": "What are the advantages of good pain relief?",
      "answer": "Effective pain relief helps patients relax, better adhere to treatment, sleep better, reduce anxiety and depression, and improve their quality of life with family and friends.",
      "category": "cancer"
    },
    {
      "id": "c4",
      "question": "How to manage cancer pain?",
      "answer": "Healthcare providers may use medication or minimally invasive procedures to reduce or eliminate cancer-related pain.",
      "category": "cancer"
    },
    {
      "id": "c5",
      "question": "What medications are used to manage cancer pain?",
      "answer": "Pain management involves non-opioid medications (like acetaminophen, ibuprofen), opioids (like tramadol, morphine), and adjuvants (like antidepressants, anticonvulsants, steroids). Medications are prescribed based on the severity and type of pain.",
      "category": "cancer"
    },
    {
      "id": "c6",
      "question": "What minimally invasive procedures may be suggested to relieve cancer pain?",
      "answer": "These include nerve blocks (for localized nerve pain), radiofrequency ablation (to destroy pain signals), epidural catheters (to deliver pain meds directly), and pain pumps or stimulators (to manage severe or nerve pain post-surgery).",
      "category": "cancer"
    },
    {
      "id": "c7",
      "question": "How long will I get pain relief from a dose of the medication you are recommending?",
      "answer": "Pain and Palliative Specialists will monitor and adjust your medication over time. Pain relief varies by condition and disease progression or remission.",
      "category": "cancer"
    },
    {
      "id": "c8",
      "question": "Does taking these medicines have any effect on my cancer and on-going treatment outcomes?",
      "answer": "Current research shows that pain medicines do not interfere with cancer progression or remission. They are safe to use alongside cancer therapies.",
      "category": "cancer"
    }
  ],  
  opioids: [
    {
      "id": "o1",
      "question": "Is morphine the only solution for cancer pain?",
      "answer": "No, it is important that type of pain is identified and the appropriate intervention and drugs are used. Morphine is seldom used alone.",
      "category": "opioids"
    },
    {
      "id": "o2",
      "question": "Will I become addicted to morphine (or other strong pain medicines)?",
      "answer": "No, these medicines do not cause addiction if taken as instructed by the doctor and under supervision of the pain specialist doctor.",
      "category": "opioids"
    },
    {
      "id": "o3",
      "question": "If morphine is taken for pain now, will it become ineffective later when the pain gets worse?",
      "answer": "Not at all. Morphine will continue to be effective throughout the pain course.",
      "category": "opioids"
    },
    {
      "id": "o4",
      "question": "Will the patient on morphine be sedated for the rest of life?",
      "answer": "No, certainly not, if used in the right dose.",
      "category": "opioids"
    },
    {
      "id": "o5",
      "question": "Will there be any withdrawal symptoms if morphine is stopped abruptly?",
      "answer": "This is not correct either. But the patient might ask for morphine, not because of psychological dependence/addiction but because he would be suffering from pain.",
      "category": "opioids"
    },
    {
      "id": "o6",
      "question": "How about the risk of respiratory depression with oral morphine?",
      "answer": "Very rare, if used as directed by your pain and palliative medicine physician.",
      "category": "opioids"
    },
    {
      "id": "o7",
      "question": "Can I take this tablet on an empty stomach?",
      "answer": "Yes. It does not have any side effects like acidity / gastritis if taken on an empty stomach.",
      "category": "opioids"
    },
    {
      "id": "o8",
      "question": "What is the duration of this treatment? After how many days will I be pain free without medicine?",
      "answer": "This is not a course of treatment. These medicines must be continued as long as the disease that causes this pain persists.",
      "category": "opioids"
    },
    {
      "id": "o9",
      "question": "Will it harm the kidney / liver?",
      "answer": "No",
      "category": "opioids"
    },
    {
      "id": "o10",
      "question": "Will I die earlier because of morphine?",
      "answer": "No, Morphine does not disturb activity of any vital organ to cause premature death.",
      "category": "opioids"
    }
  ],
  palliative: [
    {
      "id": "p1",
      "question": "What is the main purpose of palliative care?",
      "answer": "The aim of palliative care is to give patients the best quality of life possible by managing pain, symptoms, and ensuring comfort. It enhances current care by focusing on quality of life for both the patient and their family.",
      "category": "palliative"
    },
    {
      "id": "p2",
      "question": "What are the benefits of palliative care?",
      "answer": "Palliative care puts the patient's desires and decisions first, supports families, helps understand treatment plans, improves quality of life, reduces hospital visits, provides symptom control, and can even extend survival.",
      "category": "palliative"
    },
    {
      "id": "p3",
      "question": "Who will provide these services?",
      "answer": "A palliative care team including doctors (palliative medicine specialists), nurses, social workers, pharmacists, other specialists, and volunteers.",
      "category": "palliative"
    },
    {
      "id": "p4",
      "question": "How can a patient receive palliative care?",
      "answer": "Patients or their families can request services anytime during a serious illness, or be referred by physicians or hospital staff for evaluation by a palliative care team.",
      "category": "palliative"
    },
    {
      "id": "p5",
      "question": "In what ways a patient can receive palliative care services?",
      "answer": "Palliative care services can be received as inpatient services, on an outpatient basis, through home care, or hospice care.",
      "category": "palliative"
    },
    {
      "id": "p6",
      "question": "While receiving palliative care, will I still be able to see my personal/primary/treating doctor?",
      "answer": "Yes, you can.",
      "category": "palliative"
    },
    {
      "id": "p7",
      "question": "Will my treating doctors not be concerned with alleviating my suffering and improving my quality of life?",
      "answer": "Yes, they will. But palliative care doctors have special training and expertise in pain management and symptom control.",
      "category": "palliative"
    },
    {
      "id": "p8",
      "question": "When should palliative care be started? When the disease is declared incurable?",
      "answer": "No, ideally palliative care should start at the time of diagnosis of a life-threatening illness.",
      "category": "palliative"
    },
    {
      "id": "p9",
      "question": "Is palliative care covered by insurance in India?",
      "answer": "Most public and private insurance plans in India cover palliative care.",
      "category": "palliative"
    }
  ]
  
};

const categories = [
  { id: 'all', label: 'All Topics' },
  { id: 'cancer', label: 'Cancer Pain' },
  { id: 'opioids', label: 'Opioids' },
  { id: 'palliative', label: 'Palliative Care' }
];

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState(new Set());

  // Combine all FAQ items
  const allFAQs = useMemo(() => {
    return [
      ...faqData.cancer,
      ...faqData.opioids,
      ...faqData.palliative
    ];
  }, []);

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let filtered = allFAQs;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(item =>
        item.question.toLowerCase().includes(search) ||
        item.answer.toLowerCase().includes(search)
      );
    }

    return filtered;
  }, [allFAQs, activeCategory, searchTerm]);

  const toggleItem = (itemId) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Get answers to common questions about pain management</p>
      </header>
  
      <div className="faq-content">
        {/* Search Bar */}
        <div className="faq-search-container">
          <div className="faq-search-wrapper">
            <Search size={20} className="faq-search-icon" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="faq-search-input"
            />
          </div>
        </div>
  
        {/* Category Tabs */}
        <div className="faq-tabs-container">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`faq-tab ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>
  
        {/* Results Count */}
        <div className="faq-results-info">
          {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
        </div>
  
        {/* FAQ Items */}
        <div className="faq-list">
          {filteredFAQs.length === 0 ? (
            <div className="faq-no-results">
              <Search size={48} className="faq-no-results-icon" />
              <p className="faq-no-results-text">No questions found matching your search.</p>
              <p className="faq-no-results-subtext">Try different keywords or browse all categories.</p>
            </div>
          ) : (
            filteredFAQs.map((item) => {
              const isOpen = openItems.has(item.id);
  
              return (
                <div key={item.id} className="faq-item">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="faq-question-button"
                  >
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-icon">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
  
                  {isOpen && (
                    <div className="faq-answer-container">
                      <p className="faq-answer">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
  
        {/* Help Footer */}
        <footer className="faq-footer">
          <p className="faq-footer-text">
            Still have questions? Contact our support team for personalized assistance.
          </p>
        </footer>
      </div>
    </div>
  );
};  


export default FAQPage;