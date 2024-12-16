"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

const Clinbolt = () => {
  return (
    <>
      <div className="h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: "url('/clinbolt_bg.jpeg')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(29, 78, 216, 0.7)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-customDarkpurple to-custompurple2 pointer-events-none z-[-1]"></div>

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


      <div className="h-screen overflow-auto">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-3 h-full">
            <div className="col-span-2 h-full flex items-center justify-center">
              <div className="w-full h-3/4">
                <Swiper
                  className="h-full"
                  modules={[Navigation, Autoplay, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  effect="fade"
                  autoplay={{ delay: 4000 }}
                  pagination={{
                    clickable: true,
                    el: '.swiper-pagination', // Ensures the custom pagination element is used
                    renderBullet: (index, className) => {
                      return `<span class="${className}"></span>`;
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="relative rounded-2xl p-5 h-full flex items-center overflow-hidden bg-white">
                      <div>
                        <h3 className="text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple">Site selection</h3>
                        <p className="text-[20px]">
                          Site selection involves identifying the most suitable clinical trial sites based on factors like historical performance, geographic location, and protocol requirements.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative rounded-2xl p-5 h-full flex items-center overflow-hidden">
                      <div>
                        <h3 className="text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple">Patient matching</h3>
                        <p className="text-[20px]">
                          Patient matching involves identifying and selecting eligible patients who meet the criteria defined in a clinical trial protocol.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative rounded-2xl p-5 h-full flex items-center overflow-hidden">
                      <div>
                        <h3 className="text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple">Patient simulation</h3>
                        <p className="text-[20px]">
                          Patient simulation involves using data-driven models to predict how patients may respond to a clinical trial's treatment regimen.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Pagination element */}
                  <div className="swiper-pagination"></div>
                </Swiper>
              </div>
            </div>
            <div className="col-span-1 h-full flex items-center justify-center">
              <img src="/protein.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clinbolt
