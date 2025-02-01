import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Streamline Your Workflow?</h2>
        <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied customers and take your productivity to the next level.</p>
        <Link
          to="/login"
          className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300 inline-block"
        >
          Start Your Free Trial
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
