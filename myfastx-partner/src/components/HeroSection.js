import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">

        <img src="truck.png" alt="truck" />
        <h2><span className='welcome'>Welcome to MyFast</span><span className='partner'>X Partner</span></h2>
        <h1>Quick & Reliable Delivery and Logistics Solution</h1>
        <p>
          At MyFastX, we are revolutionizing the delivery and logistics industry by providing swift,
          dependable services to our clients. Our mission is to ensure every package reaches its
          destination on time, every time.
        </p>
      </div>
      <div className="partner-driver">
        <img src="hero_section.png" alt="Hero_content" />
        <h4>Drive Your Success with MyFastX</h4>
        <h2>Join Us as a Partner Driver</h2>
        <p>
          Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part
          of a dynamic network of drivers. With us, you'll enjoy flexible work hours, competitive
          earnings, and the satisfaction of delivering smiles across the city.
        </p>
        <button className="register-btn">Register now for just Rs. 999!</button>
      </div>
    </section>
  );
}

export default HeroSection;
