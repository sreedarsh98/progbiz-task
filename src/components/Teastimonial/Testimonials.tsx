"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./testimonials.css";

interface Testimonial {
  _id: string;
  text: string;
  name: string;
  role: string;
  tag: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonial");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to load testimonials");
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

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
            <SwiperSlide key={item._id}>
              <div className="testimonial-card">

                <p className="testimonial-text">
                  “{item.text}”
                </p>

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
              key={item._id}
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
