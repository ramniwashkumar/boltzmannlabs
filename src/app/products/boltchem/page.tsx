"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "./styling.css"
import BoltchemAgent from '@/components/boltchemagent/BoltchemAgent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

const Boltchem = () => {
  return (
    <>
      <div className="h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: "url('/boltchem_bg.jpeg')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(29, 78, 216, 0.7)", // Adjust opacity and color for gradient
          }}
        ></div>

        {/* Gradient overlay with opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-customDarkpurple to-custompurple2 pointer-events-none z-[-1]"></div>
        <div className="container mx-auto h-full flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 h-full">
              <div className="col-span-2 flex flex-col justify-center">
                <h1 className="text-[48px] text-white">Ai small molecule design studio</h1>
                <p className="text-[25px] text-lightText">
                  Discovery of novel small molecules is just a few clicks away with BoltChem.
                  Explore new chemical spaces with generative AI.
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
                  autoplay={{ delay: 2500 }}
                  pagination={{
                    clickable: true,
                  }
                  }
                >
                  <SwiperSlide>
                    <div className="relative rounded-2xl bg-black border-t-4 border-customPurple p-5 h-full flex items-center overflow-hidden">
                      <div className="text-white">
                        <h3 className="text-[30px] bg-gradient-to-r from-customBlue to-customPurple text-transparent bg-clip-text">Denovo molecule generation</h3>
                        <p className="text-[20px]">Design diverse molecules and screen them to discover novel HITs as per your hypothesis using AI. Best in class generative algorithms used to design efficient molecules using particular scaffolds or build from scratch.</p>
                        <ul className="list-none">
                          <li className='p-2 w-[500px] bg-white bg-opacity-90 text-white mt-2'><span className="bg-gradient-to-r from-customBlue to-customPurple bg-clip-text text-transparent">Structure based design </span></li>
                          <li className='p-2 w-[500px] bg-white bg-opacity-90 text-white mt-2'><span className="bg-gradient-to-r from-customBlue to-customPurple bg-clip-text text-transparent">Fragment based design </span></li>
                          <li className='p-2 w-[500px] bg-white bg-opacity-90 text-white mt-2'><span className="bg-gradient-to-r from-customBlue to-customPurple bg-clip-text text-transparent">Scaffold hopping </span></li>
                          <li className='p-2 w-[500px] bg-white bg-opacity-90 text-white mt-2'><span className="bg-gradient-to-r from-customBlue to-customPurple bg-clip-text text-transparent">Ligand based design</span></li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative rounded-2xl bg-black border-t-4 border-customPurple p-5 h-full flex items-center overflow-hidden">
                      <div className="text-white">
                        <h3 className="text-[30px] bg-gradient-to-r from-customBlue to-customPurple text-transparent bg-clip-text">Multiparameter Optimization</h3>
                        <p className="text-[20px]">Molecules optimized with AI flows to improve efficacy, affinity, and selectivity. Eliminate toxicity and minimize side effects, improve Pk/Pd and ADMET properties, Docking scores, Novelty, chemical stability, pharmacophore models, and more. Feedback from the lab experiments is considered to improve the model and optimize the molecules better.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative rounded-2xl bg-black border-t-4 border-customPurple p-5 h-full flex items-center overflow-hidden">
                      <div className="text-white">
                        <h3 className="text-[30px] bg-gradient-to-r from-customBlue to-customPurple text-transparent bg-clip-text">ADMETox Profiling</h3>
                        <p className="text-[20px]">Predict. Prioritize. Perfect.</p>
                        <p className="text-[20px]">Our cutting-edge ADMETox profiling platform leverages advanced AI and machine learning to predict key pharmacokinetic (PK) and safety properties early in the drug discovery process. By evaluating a compound’s Absorption, Distribution, Metabolism, Excretion, and Toxicity (ADMETox) profile, our technology streamlines the pathway to identifying drug candidates with optimal safety and efficacy, minimizing costly late-stage failures.</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-span-1 h-full flex items-center justify-center">
              <img src="/protein.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <BoltchemAgent />


    </>
  )
}

export default Boltchem



// <div className="h-[80vh] bg-gradient-to-r from-customBlue to-customPurple">
// <div className="container mx-auto h-full">
//   <div className="grid grid-cols-3 h-full gap-2 items-center">
//     <div className="flex items-center justify-center h-2/4 bg-black"></div>
//     <div className="flex items-center justify-center h-2/4 bg-black"></div>
//     <div className="flex items-center justify-center h-2/4 bg-black"></div>
//   </div>
// </div>
// </div>



