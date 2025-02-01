import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simplify Your Workflow with StreamLine</h1>
          <p className="text-xl mb-8">Boost productivity and streamline your business processes with our intuitive SaaS platform.</p>
          <Link
            to="/login"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
          >
            Start Your Free Trial
          </Link>
        </div>
        <div className="md:w-1/2" data-aos="fade-left">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Streamline Dashboard" className="rounded-lg shadow-xl" crossOrigin="anonymous" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
