"use client";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const CaseStudies = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Here you can add logic to send the form data to a server or email service.
  };

  return (
    <>
      <div className="flex flex-col bg-gradient-to-br from-customDarkpurple to-custompurple2">
        <div className="h-[80px]"></div>
        <div className="container mx-auto flex flex-col items-center px-4 py-12">
          {/* Title */}
          <h2 className="text-4xl text-white text-center font-bold mb-8">
            Case Studies
          </h2>

          {/* Brief Description */}
          <p className="text-white text-center max-w-2xl mb-8">
            Explore our in-depth case studies showcasing real-world solutions and results. 
            These are available upon request by filling out the form below. The PDF will be sent to your email.
          </p>

          {/* Form Section */}
          {!formSubmitted ? (
            <form
              onSubmit={handleFormSubmit}
              className="w-full max-w-md bg-white p-6 rounded shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold mb-2 text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custompurple2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold mb-2 text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custompurple2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-custompurple2 text-white py-2 px-4 rounded hover:bg-customDarkpurple transition"
              >
                Request Case Study
              </button>
            </form>
          ) : (
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="max-w-md">
                Your request has been received. The case study PDF will be sent
                to your email shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
