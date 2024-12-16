"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Community = () => {
  return (
    <>

      {/* Community Section */}
      <div className="flex flex-col bg-gradient-to-br from-customDarkpurple  to-custompurple2">
      <div className="h-[80px]"></div>
        <div className="container mx-auto flex flex-col items-center px-4 py-12">
          {/* Title */} 
          <h2 className="text-4xl text-white text-center font-bold mb-8">
            Community
          </h2>

          {/* Description */}
          <p className="text-white text-lg text-center max-w-2xl mb-12">
            We contribute to open-source communities like <span className="font-semibold">Bayes Labs</span> & <span className="font-semibold">ChemBioAI</span>.
            These communities produce quality work in AI and Drug Discovery research, providing valuable tools and packages for the scientific community.
          </p>

          {/* Cards for each open-source project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

            {/* Bayes Labs Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple mb-4">Bayes Labs</h3>
              <p className="text-gray-700 mb-6">
                Bayes Labs is a community that coordinates from remote locations to produce quality work in the fields of AI and Drug Discovery research. It has developed multiple packages that will aid in the sciences research.
              </p>
              <a
                href="https://bayeslabs.co/"
                className="text-white bg-gradient-to-r from-customBlue to-customPurple py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Explore Bayes Labs
              </a>
            </div>

            {/* ChemBioAI Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple mb-4">ChemBioAI</h3>
              <p className="text-gray-700 mb-6">
                ChemBioAI is a dynamic research open source community, committed to advancing scientific frontiers by seamlessly blending the realms of Chemistry, Biology, and Artificial Intelligence.
              </p>
              <a
                href="https://chembioai.org/"
                className="text-white bg-gradient-to-r from-customBlue to-customPurple py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Explore ChemBioAI
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Community;
