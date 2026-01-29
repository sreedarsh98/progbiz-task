"use client";

import React, { useEffect, useState } from "react";
import "./faq.css";

interface Faq {
  _id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("/api/faq");

        const data = await res.json();
        setFaqs(data);
      } catch (error) {
        console.error("Failed to load FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return (
      <section className="faq-section">
        <div className="container text-center">
          <p>Loading FAQs...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="faq-section">
      <div className="container">

        {/* Header */}
        <div className="faq-header">
          <h2 className="text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center">
            Get answers to common questions about our AI health assistant app
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.length === 0 && (
            <p className="text-center">
              No FAQs available
            </p>
          )}

          {faqs.map((item, index) => (
            <div
              key={item._id}
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
