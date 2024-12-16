"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Github = () => {
  return (
    <>
    <div className="flex flex-col bg-gradient-to-br from-customDarkpurple  to-custompurple2">
      <div className="min-h-screen mt-16 flex items-center">
        <div className="container mx-auto flex flex-col items-center px-4 py-12">
          {/* Title */}
          <h2 className="text-4xl text-white text-center font-bold mb-8">
          GitHub Repository
          </h2>

          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-white text-lg text-center max-w-2xl mb-8">
              Discover our open-source projects and contributions. Join us on GitHub to explore, contribute, and collaborate with our community of developers.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-white bg-customBlue py-2 px-4 rounded-lg transition duration-300 hover:bg-customPurple">Project 1</a>
              <a href="#" className="text-white bg-customPurple py-2 px-4 rounded-lg transition duration-300 hover:bg-customBlue">Project 2</a>
              <a href="#" className="text-white bg-customBlue py-2 px-4 rounded-lg transition duration-300 hover:bg-customPurple">Project 3</a>
            </div>
          </div>
        </div>
      </div>
</div>
    </>
  );
};

export default Github;
