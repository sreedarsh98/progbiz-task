"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./testimonials.css";

const testimonials = [
  {
    text: `I've tried countless health apps, but none come close to this.
    The AI truly understands my needs—it suggested daily routines and nutrition
    that actually fit my lifestyle. Within weeks, I felt more energized,
    slept better, and became more mindful.`,
    name: "Ava L.",
    role: "Marketing Executive",
    tag: "Empowered by AI Wellness Journeys",
  },
  {
    text: `This app helped me maintain discipline and clarity.
    The guidance feels human and extremely accurate.`,
    name: "Namo Serlina",
    role: "CEO Delego",
    tag: "Business Leader Wellness",
  },
  {
    text: `The personalization is unmatched. It adapts as my routine changes.`,
    name: "Ava L.",
    role: "5 Star Rated",
    tag: "Verified Premium User",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonial-section">
      <div className="container text-center">

        <h2 className="testimonial-title">
          Our Users Feel the Transformation
        </h2>

        <p className="testimonial-subtitle">
          Real Stories from People Empowered by Personalized Wellness
        </p>

        {/* MAIN SLIDER */}
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          slidesPerView={1}
          onSlideChange={(swiper) =>
            setActive(swiper.realIndex)
          }
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">

                <p className="testimonial-text">“{item.text}”</p>

                <div className="testimonial-user">
                  <div className="avatar"></div>
                  <div>
                    <h5>{item.name}</h5>
                    <span>{item.tag}</span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTTOM MINI CARDS */}
        <div className="testimonial-mini">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`mini-card ${
                i === active ? "active" : ""
              }`}
            >
              <div className="mini-avatar"></div>
              <div>
                <p>{item.name}</p>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
