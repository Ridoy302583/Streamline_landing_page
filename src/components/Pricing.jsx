import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ plan, price, features, recommended, index }) => (
  <div 
    className={`bg-white p-8 rounded-lg shadow-md ${recommended ? 'border-2 border-blue-600' : ''}`}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    {recommended && (
      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
        Recommended
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4">{plan}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl text-gray-500">/mo</span></p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <i className="bi bi-check2 text-green-500 mr-2"></i>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      to="/signup"
      className={`w-full py-2 rounded-md font-semibold text-center block ${
        recommended ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      } transition duration-300`}
    >
      Choose Plan
    </Link>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      plan: "Basic",
      price: 29,
      features: ["5 team members", "10GB storage", "Basic analytics", "24/7 support"],
      recommended: false
    },
    {
      plan: "Pro",
      price: 79,
      features: ["Unlimited team members", "50GB storage", "Advanced analytics", "Priority support"],
      recommended: true
    },
    {
      plan: "Enterprise",
      price: 199,
      features: ["Unlimited everything", "500GB storage", "Custom integrations", "Dedicated account manager"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
