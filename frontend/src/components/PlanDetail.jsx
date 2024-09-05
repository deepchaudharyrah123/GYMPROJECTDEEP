import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PlanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const plans = [
    { id: 1, title: 'QUARTERLY', price: 18000, length: 3, description: 'Detailed info about QUARTERLY plan...' },
    { id: 2, title: 'HEAL_YEARLY', price: 34000, length: 6, description: 'Detailed info about HEAL_YEARLY plan...' },
    { id: 3, title: 'YEARLY', price: 67000, length: 12, description: 'Detailed info about YEARLY plan...' },
  ];

  const plan = plans.find(p => p.id === parseInt(id));

  if (!plan) {
    return <p>Plan not found</p>;
  }

  return (
    <section className="plan-detail">
      <div className="plan-detail-container">
        <h1 className="plan-title">{plan.title} Plan Details</h1>
        <div className="plan-info">
          <p className="plan-price">Price: Rs {plan.price}</p>
          <p className="plan-duration">Duration: {plan.length} Months</p>
          <p className="plan-description">{plan.description}</p>
        </div>
        <button className="back-button" onClick={() => navigate('/')}>Back to Home Page</button>
      </div>
    </section>
  );
};

export default PlanDetail;
