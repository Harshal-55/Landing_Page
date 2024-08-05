import React from 'react';
import './BenefitsSection.css';

function BenefitsSection() {
  return (
    <section className="benefits">
      <div className="benefit-item">
        <img src="reliable_income.png" alt="Reliable Income" />
        <h4>Reliable Income</h4>
        <p>Earn a steady income with consistent delivery requests.</p>
      </div>
      <div className="benefit-item">
        <img src="flexible_schedule.png" alt="Flexible Schedule" />
        <h4>Flexible Schedule</h4>
        <p>Choose your working hours and balance your personal life.</p>
      </div>
      <div className="benefit-item">
        <img src="support.png" alt="Support" />
        <h4>Support</h4>
        <p>Access our dedicated support team whenever you need assistance.</p>
      </div>
      <div className="benefit-item">
        <img src="growth.png" alt="Growth opportunities" />
        <h4>Growth opportunities</h4>
        <p>Advance your career with regular training and development programs.</p>
      </div>
    </section>
  );
}

export default BenefitsSection;
