"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Rebolt = () => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      setRotation((prevRotation) => prevRotation + scrollDifference * 0.1); // Adjust rotation speed
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "-200px", // Partially off-screen
          top: "50%",
          transform: `translateY(-50%) rotate(${rotation}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400" // Larger width
          height="400" // Larger height
          viewBox="0 0 24 24"
          fill="none"
          stroke="#660095"
          strokeWidth="0.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            position: "absolute",
          }}
        >
          <polygon points="12 2 20 8 20 16 12 22 4 16 4 8"></polygon>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400" // Larger width
          height="400" // Larger height
          viewBox="0 0 24 24"
          fill="none"
          stroke="#660095" strokeWidth="0.1" // Thinner border
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: "rotate(90deg)", // Rotate hexagon for parallel sides
          }}
        >
          <polygon points="12 2 20 8 20 16 12 22 4 16 4 8"></polygon>
        </svg>
      </div>

      <div className="h-[80vh] flex items-center justify-center overflow-hidden relative mt-16">
        <div className="container mx-auto h-full p-2">
          <div className="h-full">
            <div className="grid grid-cols-3 w-full gap-2 h-full justify-center items-center">
              <div className="h-full col-span-2 flex flex-col justify-center items-center max-w-md mx-auto">
                <div>
                  <p className="text-black text-[36px] font-semibold leading-[1.2em]">
                    Bioinformatics <br /> Agent
                  </p>
                  <p className="text-black text-[24px] leading-[1.2em]">
                    For Drug target Identification <br />
                    <div className='flex flex-row'>
                    using 
                    <span className="font-semibold mx-2">BoltBio</span>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full border border-dotted border-black bg-white text-black hover:bg-black hover:text-white">
                      &gt;
                    </button>
                    </div>
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <button className="px-4 py-2 text-black drop-shadow-xl bg-white rounded-md border border-black">
                      Multi-Omics Analysis
                    </button>
                    <button className="px-4 py-2 text-black drop-shadow-xl bg-white rounded-md border border-black">
                      System Biology
                    </button>
                    <button className="px-4 py-2 text-black drop-shadow-xl bg-white rounded-md border border-black">
                      Target Identification
                    </button>
                    <button className="px-4 py-2 text-black drop-shadow-xl bg-white rounded-md border border-black">
                      Network Biology
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="h-full flex items-center justify-center origin-center">
                <Image alt="Rebolt" src="/protein.png" width={500} height={100} className="animate-spin-slow" />
              </div> */}
              <div className="h-full flex flex-col items-center justify-center origin-center">
                <Image alt="Rebolt" src="/protein.png" width={200} height={200} className="animate-spin-slow" />
                <p className="text-black text-center mt-4 max-w-md">
                  Using advanced algorithms to predict disease
                  pathways, identify biomarkers, and validate
                  targets against curated databases. Whether
                  you're focusing on rare diseases or broad-
                  spectrum therapies, the Bioinformatics Agent
                  ensures a data-driven, reliable foundation for
                  your drug discovery pipeline
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80vh] overflow-auto bg-white">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-2 h-full">
            <div className="h-full flex items-center justify-center">
              <div className="w-full h-3/4">
                <Swiper
                  className="h-full"
                  modules={[Navigation, Autoplay, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 2500 }}
                  pagination={{
                    clickable: true,
                  }}
                >
                  <SwiperSlide>
                    <div className="relative bg-black bg-opacity-30 p-5 h-full flex items-center">
                      <div className="text-white text-center">
                        <h3 className="text-xl">Dummy Text 1</h3>
                        <p>This is some dummy text for the first slide. It has a transparent black background.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative bg-black bg-opacity-50 p-5 h-full flex items-center">
                      <div className="text-white text-center">
                        <h3 className="text-xl">Dummy Text 2</h3>
                        <p>This is some dummy text for the second slide. It also has a transparent black background.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative bg-black bg-opacity-50 p-5 h-full flex items-center">
                      <div className="text-white text-center">
                        <h3 className="text-xl">Dummy Text 3</h3>
                        <p>This is some dummy text for the third slide with a similar style has a transparent black background.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative bg-black bg-opacity-50 p-5 h-full flex items-center">
                      <div className="text-white text-center">
                        <h3 className="text-xl">Dummy Text 4</h3>
                        <p>Here's the fourth slide's dummy text with a transparent black background has a transparent black background.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
            <div className="h-full flex items-center justify-center">
              <img src="/protein.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Rebolt
