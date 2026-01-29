"use client";

import React, { useState } from "react";
import "./faq.css";

const faqData = [
  {
    question: "What features does the AI Health Assistant offer?",
    answer:
      "Our AI Health Assistant provides personalized health insights, daily routines, nutrition planning, and real-time wellness tracking.",
  },
  {
    question: "Is the app customizable to my needs?",
    answer:
      "Yes, the app adapts based on your lifestyle, preferences, goals, and daily behavior.",
  },
  {
    question: "How accurate is the AI health tracking?",
    answer:
      "Experience the future of personalized health and wellness before everyone else. Join our exclusive early access program and help shape the future of AI-powered health coaching.",
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "No special equipment is required. The app works directly from your smartphone.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "You can try all premium features free for a limited time before choosing a plan.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="faq-section">
      <div className="container">

        {/* Header */}
        <div className="faq-header ">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <p className="text-center">
            Get answers to common questions about our AI health assistant app
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                openIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
              >
                {item.question}
                <span className="icon">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
