"use client";
import React, { useState } from "react";

const Technology: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      title: "SaaS - on Cloud",
      description:
        "Experience hassle-free updates, real-time collaboration, and enhanced performance without the need for on-site infrastructure.",
      icon: "/cloud.svg",
    },
    {
      title: "SaaS - on Premise",
      description:
        "Maintain control over sensitive data while enjoying the benefits of SaaS, tailored to your infrastructure and security needs.",
      icon: "/on-premise.svg",
    },
    {
      title: "APIs - Flexible",
      description:
        "Harness the power of flexibility with our APIs, designed to seamlessly integrate with your existing systems. Empower developers to customize and extend functionalities, ensuring adaptability to evolving business needs and fostering innovation.",
      icon: "/api.svg",
    },
  ];

  return (
    <div >
      <div className="container mx-auto mb-16">
        {/* Title */}
        {/* <h2 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple font-bold mb-12">
          Services
        </h2> */}

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg text-sm sm:text-base font-semibold transition ${
                activeTab === index
                  ? "bg-gradient-to-r from-customBlue to-customPurple text-white shadow-lg"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="relative max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <img
              src={services[activeTab].icon}
              alt={`${services[activeTab].title} Icon`}
              className="w-20 h-20"
            />
          </div>
          {/* Description */}
          <p className="text-center text-gray-700 text-base sm:text-lg">
            {services[activeTab].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
