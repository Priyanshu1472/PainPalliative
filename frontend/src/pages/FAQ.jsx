import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/FAQ.css'; // Import your CSS styles

// Move faqData outside component to avoid re-creation on every render
const faqData = {
  cancer: [
    {
      id: 'c1',
      question: 'What are the most common types of cancer pain?',
      answer: 'Cancer pain can be categorized into visceral pain (from organs), somatic pain (from bones, muscles), and neuropathic pain (from nerve damage). Bone pain is particularly common in cancers that spread to bones.',
      category: 'cancer'
    },
    {
      id: 'c2',
      question: 'How is cancer pain assessed and measured?',
      answer: 'Cancer pain is assessed using numerical rating scales (0-10), visual analog scales, or descriptive scales. Healthcare providers evaluate pain location, quality, timing, and triggers.',
      category: 'cancer'
    },
    {
      id: 'c3',
      question: 'What are the main approaches to treating cancer pain?',
      answer: 'Treatment follows the WHO pain ladder, starting with non-opioid medications, progressing to weak opioids, then strong opioids. Adjuvant therapies include radiation, nerve blocks, and physical therapy.',
      category: 'cancer'
    },
    {
      id: 'c4',
      question: 'Can cancer pain be completely eliminated?',
      answer: 'While complete elimination isn\'t always possible, significant pain relief can be achieved in most patients. The goal is to reduce pain to manageable levels for improved quality of life.',
      category: 'cancer'
    },
    {
      id: 'c5',
      question: 'What are breakthrough pain episodes?',
      answer: 'Breakthrough pain refers to sudden, severe pain that breaks through regular medication. These episodes typically last 30-60 minutes and require fast-acting rescue medications.',
      category: 'cancer'
    }
  ],
  opioids: [
    {
      id: 'o1',
      question: 'What are opioids and how do they work?',
      answer: 'Opioids bind to receptors in the brain and spinal cord to reduce pain perception. They include natural opiates like morphine and synthetic drugs like fentanyl.',
      category: 'opioids'
    },
    {
      id: 'o2',
      question: 'What\'s the difference between dependence and addiction?',
      answer: 'Physical dependence is normal physiological adaptation. Addiction is compulsive drug seeking despite harm. Patients taking opioids as prescribed rarely develop addiction.',
      category: 'opioids'
    },
    {
      id: 'o3',
      question: 'What are common side effects?',
      answer: 'Common side effects include constipation, nausea, drowsiness, and dizziness. Constipation is the most persistent side effect that doesn\'t improve over time.',
      category: 'opioids'
    },
    {
      id: 'o4',
      question: 'How can I prevent constipation?',
      answer: 'Preventive measures include increasing fluids, eating fiber, staying active, and taking prescribed laxatives. Many patients need stimulant laxatives regularly.',
      category: 'opioids'
    },
    {
      id: 'o5',
      question: 'Is it safe to stop taking opioids suddenly?',
      answer: 'No, stopping suddenly can cause withdrawal symptoms. Opioids should be gradually reduced under medical supervision through a tapering schedule.',
      category: 'opioids'
    }
  ],
  palliative: [
    {
      id: 'p1',
      question: 'What is palliative care?',
      answer: 'Palliative care focuses on improving quality of life for people with serious illnesses. It can be provided alongside curative treatments at any stage of illness.',
      category: 'palliative'
    },
    {
      id: 'p2',
      question: 'What\'s the difference between palliative and hospice care?',
      answer: 'Palliative care can be provided at any stage alongside treatments. Hospice is for patients with 6 months or less life expectancy who focus on comfort over cure.',
      category: 'palliative'
    },
    {
      id: 'p3',
      question: 'What services does the team provide?',
      answer: 'Teams include doctors, nurses, social workers, and chaplains. They provide symptom management, emotional support, care coordination, and family support.',
      category: 'palliative'
    },
    {
      id: 'p4',
      question: 'Where can palliative care be provided?',
      answer: 'Care can be provided in hospitals, outpatient clinics, long-term care facilities, and at home. Many areas have specialized palliative care programs.',
      category: 'palliative'
    },
    {
      id: 'p5',
      question: 'Does choosing palliative care mean giving up hope?',
      answer: 'No, palliative care is about living well with serious illness. Many patients receive it while continuing curative treatments to improve quality of life.',
      category: 'palliative'
    }
  ]
};

// Move categories outside component as well
const categories = [
  { id: 'all', label: 'All Categories', color: 'bg-blue-500' },
  { id: 'cancer', label: 'Cancer Pain', color: 'bg-red-500' },
  { id: 'opioids', label: 'Opioids', color: 'bg-green-500' },
  { id: 'palliative', label: 'Palliative Care', color: 'bg-purple-500' }
];

const FAQPage = () => {
  const [globalSearch, setGlobalSearch] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('all');

  // Combine all FAQ items into a single array
  const allFAQs = useMemo(() => {
    return [
      ...faqData.cancer,
      ...faqData.opioids,
      ...faqData.palliative
    ];
  }, []); // Empty dependency array since faqData is now static

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let filtered = allFAQs;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    // Filter by search term
    if (globalSearch.trim()) {
      const searchTerm = globalSearch.toLowerCase().trim();
      filtered = filtered.filter(item =>
        item.question.toLowerCase().includes(searchTerm) ||
        item.answer.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }, [allFAQs, activeCategory, globalSearch]);

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => {
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
      {/* Header */}
      <div className="faq-header">
        <div className="faq-header-content">
          <h1 className="faq-title">
            Frequently Asked Questions
          </h1>
          <p className="faq-subtitle">
            Find answers to common questions about pain management and care
          </p>
        </div>
      </div>

      <div className="faq-content">
        {/* Search and Filter Section */}
        <div className="faq-search-section">
          {/* Global Search */}
          <div className="faq-search-wrapper">
            <Search className="faq-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search all questions and answers..."
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              className="faq-search-input"
            />
          </div>

          {/* Category Filter */}
          <div className="faq-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`faq-category-btn ${
                  activeCategory === category.id ? 'active' : ''
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <span className="faq-category-count">
                    {category.id === 'all' ? allFAQs.length : filteredFAQs.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="faq-results-summary">
          <p>
            Showing <span className="faq-results-count">{filteredFAQs.length}</span> results
            {globalSearch && (
              <span> for "<span className="faq-search-term">{globalSearch}</span>"</span>
            )}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-items">
          {filteredFAQs.length === 0 ? (
            <div className="faq-no-results">
              <Search className="faq-no-results-icon" size={48} />
              <h3 className="faq-no-results-title">No results found</h3>
              <p className="faq-no-results-text">
                Try adjusting your search terms or selecting a different category.
              </p>
            </div>
          ) : (
            filteredFAQs.map((item) => {
              const isExpanded = expandedItems.has(item.id);
              
              return (
                <div
                  key={item.id}
                  className={`faq-item ${item.category}`}
                >
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="faq-item-button"
                  >
                    <div className="faq-item-header">
                      <div className="faq-item-content">
                        <div className="faq-item-badge-wrapper">
                          <span className={`faq-item-badge ${item.category}`}>
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                        </div>
                        <h3 className="faq-item-question">
                          {item.question}
                        </h3>
                      </div>
                      <div className="faq-item-icon">
                        {isExpanded ? (
                          <ChevronUp className="faq-chevron-active" size={24} />
                        ) : (
                          <ChevronDown className="faq-chevron-inactive" size={24} />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="faq-item-answer-wrapper">
                      <div className="faq-item-answer">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="faq-footer">
          <p>Need more help? Contact our support team for additional assistance.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;