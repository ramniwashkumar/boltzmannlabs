"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const WhitepapersEbooks = () => {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-br from-customDarkpurple  to-custompurple2">
      <div className="min-h-screen mt-16 items-center">
        <div className="container mx-auto flex flex-col items-center px-4 py-12">
          {/* Title */}
          <h2 className="text-4xl text-white text-center font-bold mb-8">
            Whitepapers & eBooks
          </h2>

          {/* Description */}
          {/* <p className="text-gray-700 text-center max-w-2xl mb-12 text-lg">
            Access to detailed resources on AI applications in life sciences. Explore our curated collection of whitepapers and eBooks to stay informed on the latest trends and innovations.
          </p> */}
          <p className="text-[25px] text-white bg-clip-text bg-gradient-to-r from-customBlue to-customPurple text-center max-w-2xl mb-16 px-4">
            Access to detailed resources on AI applications in life sciences. Explore our curated collection of whitepapers and eBooks to stay informed on the latest trends and innovations.
          </p>

          {/* Cards for each whitepaper/eBook */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">

            {/* Sample Whitepaper Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple mb-4">AI in Drug Discovery</h3>
              <p className="text-gray-600 mb-6">
                A comprehensive overview of how AI is revolutionizing the drug discovery process, with case studies and future outlook.
              </p>
              <a
                href="#"
                className="text-white bg-gradient-to-r from-customBlue to-customPurple py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Download Now
              </a>
            </div>

            {/* Sample eBook Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple mb-4">The Future of Life Sciences with AI</h3>
              <p className="text-gray-600 mb-6">
                Explore how AI is transforming the life sciences industry, from genomics to personalized medicine.
              </p>
              <a
                href="#"
                className="text-white bg-gradient-to-r from-customBlue to-customPurple py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Download Now
              </a>
            </div>

            {/* Sample Whitepaper Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple mb-4">Machine Learning for Biomarker Discovery</h3>
              <p className="text-gray-600 mb-6">
                Insights into how machine learning techniques are aiding in the identification and validation of new biomarkers.
              </p>

              <a
                href="#"
                className="text-white bg-gradient-to-r from-customBlue to-customPurple py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Download Now
              </a>
            </div>

            {/* Add more cards as needed */}

          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default WhitepapersEbooks;
