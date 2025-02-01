import React from 'react';

const FeatureCard = ({ icon, title, description, index }) => (
  <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay={index * 100}>
    <i className={`${icon} text-4xl text-blue-600 mb-4`}></i>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "bi bi-graph-up",
      title: "Advanced Analytics",
      description: "Gain valuable insights with our powerful analytics tools."
    },
    {
      icon: "bi bi-cloud-arrow-up",
      title: "Cloud Integration",
      description: "Seamlessly integrate with popular cloud services and tools."
    },
    {
      icon: "bi bi-shield-check",
      title: "Enterprise Security",
      description: "Keep your data safe with our robust security measures."
    },
    {
      icon: "bi bi-chat-dots",
      title: "24/7 Support",
      description: "Get help anytime with our round-the-clock customer support."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
