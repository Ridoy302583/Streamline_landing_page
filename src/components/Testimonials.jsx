import React from 'react';

const TestimonialCard = ({ quote, author, company, image, index }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={index * 100}>
    <img 
      src={image} 
      alt={author} 
      className="w-24 h-24 rounded-full mb-4 object-cover"
      crossOrigin="anonymous"
    />
    <p className="text-gray-600 mb-4 italic">"{quote}"</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "StreamLine has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours.",
      author: "Sarah Johnson",
      company: "Tech Innovators Inc.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      quote: "The analytics features in StreamLine have helped us make data-driven decisions and grow our business.",
      author: "Michael Chen",
      company: "Global Solutions Ltd.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      quote: "Customer support is top-notch. They're always there when we need them, no matter the time of day.",
      author: "Emily Rodriguez",
      company: "Creative Minds Agency",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
