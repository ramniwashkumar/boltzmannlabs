"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

const Boltbio = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-customDarkpurple  to-custompurple2 pointer-events-none z-[-1]"></div>

        <div className="container mx-auto h-full flex flex-col justify-center relative">
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 h-full">
              <div className="col-span-2 flex flex-col justify-center">
                <h1 className="text-[48px] text-white">
                  Where AI meets clinical breakthroughs.
                </h1>
                <p className="text-[25px] text-lightText">
                  ClinBolt empowers researchers to ditch trial and error. We optimize research design to reduce costs and increase success rates. This translates to faster access to life-saving treatments and personalized care for every patient.
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

    </>
  )
}

export default Boltbio
