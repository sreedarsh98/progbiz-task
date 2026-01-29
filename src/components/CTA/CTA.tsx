"use client";

import React from "react";
import "./cta.css";
import Image from "next/image";

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="container text-center">

        {/* floating icons */}
        {/* <div className="cta-icon icon-1">📄</div>
        <div className="cta-icon icon-2">💬</div>
        <div className="cta-icon icon-3">👍</div>
        <div className="cta-icon icon-4">🧠</div> */}

        {/* content */}
        <span className="cta-badge">SPECIAL LAUNCH OFFER</span>

        <h2 className="cta-title">
          Your journey to better
          <br />
          health starts now
        </h2>

        <p className="cta-text">
          Get 50% off your first 3 months when you start your trial today!
        </p>
        <div className="hero-buttons mt-4 d-flex justify-content-center gap-3">
                  <button className="btn btn-light rounded-pill px-4 py-2">
                    <Image src="/logo/apple.png" width={20} height={20} alt="apple" />  Download
                  </button>
        
                  <button className="btn btn-outline-light rounded-pill px-4 py-2">
                     <Image src="/logo/play.png" width={20} height={20} alt="apple" /> Download
                  </button>
                </div>

      </div>
    </section>
  );
};

export default CTA;
