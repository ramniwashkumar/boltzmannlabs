"use client"
import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Boltpro = () => {
  return (
    <>
      <div className="h-screen relative">
        {/* Background image with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: "url('/protein.jpeg')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(29, 78, 216, 0.7)", // Adjust opacity and color for gradient
          }}
        ></div>

        {/* Gradient overlay with opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-customDarkpurple to-custompurple2 pointer-events-none z-[-1]"></div>
        <div className="container mx-auto h-full flex flex-col justify-center relative">
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 h-full">
              <div className="col-span-2 flex flex-col justify-center">
                <h1 className="text-[48px] text-white">
                  An advanced AI-driven platform for protein engineering.
                </h1>
                <p className="text-[25px] text-lightText">
                  Revolutionizing protein engineering through advanced generative AI, enabling rapid and targeted discovery and design of novel proteins. Our platform leverages the power of AI-driven modeling and optimization to engineer antibodies, enzymes, and peptides with enhanced functionality and precision. Whether you're seeking to create therapeutic antibodies, optimize biocatalysts, or design custom peptides, our technology opens new possibilities for breakthroughs in biotechnology, medicine, and beyond.
                </p>
                <div className="mt-4">
                  <button className="px-4 py-2 bg-purple-500 rounded-full text-white shadow-lg transition duration-300">
                    Login<FontAwesomeIcon icon={faSignIn} className="ml-2" />
                  </button>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex">
        <div className="container mx-auto flex flex-col items-center py-16">
          <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple text-center mb-12">
            Key Features
          </h2>
          <div className="h-[80vh] w-full">
            <div className="grid grid-cols-3 h-full">
              <div className="flex flex-col col-span-2 items-center justify-center">
                <Swiper
                  modules={[Navigation, Autoplay, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  effect="fade"
                  autoplay={{ delay: 4000 }}
                  pagination={{
                    clickable: true,
                    el: '.custom-swiper-pagination',
                    renderBullet: (index, className) => `<span class="${className}"></span>`,
                  }}
                  className="w-full h-[400px]"
                >
                  {[
                    {
                      title: "Antibody Design and Optimization",
                      description:"Our generative AI platform redefines the approach to antibody engineering, enabling the development of highly specific and effective antibodies for various therapeutic and diagnostic applications. We focus on:"
                    },
                    {
                      title: "Enzyme Engineering for Enhanced Performance",
                      description: "Identifying and selecting eligible patients who meet the criteria defined in a clinical trial protocol."
                    },
                    {
                      title: "Patient Simulation",
                      description: "Using data-driven models to predict how patients may respond to a clinical trial's treatment regimen."
                    }
                  ].map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative rounded-2xl p-5 h-[400px] flex items-center bg-white shadow-md">
                        <div>
                          <h3 className="text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple">
                            {slide.title}
                          </h3>
                          <p className="text-[20px] mt-2 text-gray-700">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="custom-swiper-pagination mt-4 flex justify-center"></div>

              </div>
              <div className="col-span-1"></div>
            </div>

            {/* Custom pagination element positioned outside of the Swiper container */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Boltpro
