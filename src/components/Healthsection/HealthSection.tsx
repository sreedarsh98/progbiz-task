"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./healthSection.css";

const logos = [
  "/logo/log.svg",
  "/logo/log.svg",
  "/logo/log.svg",
  "/logo/log.svg",
  "/logo/log.svg",
];

const HealthSection: React.FC = () => {
  return (
    <section className="health-section">
      <div className="container">
        {/* LOGO MARQUEE */}
        <div className="logo-marquee">
          <motion.div
            className="logo-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div className="logo-item" key={i}>
                <Image src={logo} alt="logo" width={200} height={40} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="row align-items-center mt-5">
          {/* Left */}
          <div className="col-lg-6">
            <h2 className="section-title">
              Maximizing Your Health Potential Together
            </h2>

            <p className="section-subtitle">Smart Nutrition Planning</p>

            <p className="section-text">
              Your AI-powered health companion transforms the way you approach
              wellness, making healthy living effortless and personalized.
            </p>

            <button className="btn btn-outline-dark rounded-pill px-4 mt-3">
              Read More
            </button>
          </div>

          {/* Right */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="tracker-wrapper">
              <div className="tracker-card">
                {/* Header */}
                <div className="tracker-header">
                  <div className="tracker-left">
                    <Image
                      src="/logo/stopwatch.svg"
                      height={17}
                      width={17}
                      alt="clock"
                    />

                    <span>Time Tracker</span>
                  </div>

                  <div className="tracker-history">
                    <Image
                      src="/logo/clock.svg"
                      height={17}
                      width={17}
                      alt="clock"
                    />
                    <span>History</span>
                  </div>
                </div>

                {/* Time Box */}
                <div className="time-box">
                  <p className="time-label">Design System</p>

                  <div className="time-row">
                    <h2>
                      10:34<span>:00</span>
                    </h2>

                    <Image
                      src="/logo/play.svg"
                      height={60}
                      width={60}
                      alt="paly"
                    />
                  </div>
                </div>

                {/* Tasks */}
                <div className="tasks">
                  <p className="tasks-title">Previous Tasks</p>

                  <div className="task-row">
                    <Image
                      src="/logo/loom.svg"
                      height={22}
                      width={22}
                      alt="paly"
                    />
                    <div className="task-info">
                      <p>Loom UI Design System</p>
                      <span>1:20:35</span>
                    </div>
                    <span className="dots">⋮</span>
                  </div>

                  <div className="task-row">
                    <Image
                      src="/logo/loom.svg"
                      height={22}
                      width={22}
                      alt="paly"
                    />
                    <div className="task-info">
                      <p>Loom UI / UX Designer</p>
                      <span>1:45:35</span>
                    </div>
                    <span className="dots">⋮</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
