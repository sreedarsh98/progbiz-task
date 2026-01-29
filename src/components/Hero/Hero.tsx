import React from "react";
import "./hero.css";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container text-center">

        {/* Image */}
        <div className="hero-image-wrapper">
          <img
            src="/images/hero.png"
            alt="AI Health Coach"
            className="img-fluid hero-image"
          />
        </div>

        {/* Users */}
     


<div className="hero-users d-flex justify-content-center align-items-center mt-4">
  <div className="user-icons">

    <div className="avatar">
      <Image
        src="/images/avathar.jpg"
        alt="user"
        width={36}
        height={36}
      />
    </div>

    <div className="avatar">
      <Image
        src="/images/avathar.jpg"
        alt="user"
        width={36}
        height={36}
      />
    </div>

    <div className="avatar">
      <Image
        src="/images/avathar.jpg"
        alt="user"
        width={36}
        height={36}
      />
    </div>

  </div>

  <p className="mb-0 ms-3 users">
    <span className="count" >59,182</span> <span className="cont">Happy Users</span> 
  </p>
</div>



        {/* Title */}
        <h1 className="hero-title mt-2">
          Your AI Health Coach
        </h1>

        {/* Subtitle */}
        <p className="hero-text mt-3">
          Transform your wellness journey with personalized AI-powered
          guidance that adapts to your unique needs.
        </p>

        {/* Buttons */}
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

export default Hero;
