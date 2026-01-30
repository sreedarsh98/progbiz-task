"use client";

import React, { useEffect, useState } from "react";
import "./faq-admin.css";

interface Faq {
  _id: string;
  question: string;
  answer: string;
}

export default function AdminFaq() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFaqs = async () => {
    const res = await fetch("/api/faq");
    const data = await res.json();
    setFaqs(data);
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const addFaq = async () => {
    if (!question || !answer) {
      alert("All fields required");
      return;
    }

    setLoading(true);

    await fetch("/api/faq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer }),
    });

    setQuestion("");
    setAnswer("");
    setLoading(false);
    fetchFaqs();
  };

  const deleteFaq = async (id: string) => {
    await fetch(`/api/faq/${id}`, {
      method: "DELETE",
    });

    fetchFaqs();
  };

  return (
    <div className="admin-faq">
      <h2>FAQ Management</h2>

      {/* ADD FAQ */}
      <div className="faq-form">
        <input
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <textarea
          placeholder="Enter answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button onClick={addFaq} disabled={loading}>
          {loading ? "Saving..." : "Add FAQ"}
        </button>
      </div>

      {/* LIST FAQ */}
      <table className="faq-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th width="120">Action</th>
          </tr>
        </thead>

        <tbody>
          {faqs.map((faq) => (
            <tr key={faq._id}>
              <td>{faq.question}</td>
              <td>{faq.answer}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteFaq(faq._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {faqs.length === 0 && (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                No FAQs found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
