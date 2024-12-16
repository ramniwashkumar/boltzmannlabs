"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Outproducts: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false); // To track visibility
  const [isVisible, setIsVisible] = useState(false); // To manage opacity

  useEffect(() => {
    // Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set to true when the component comes into view
          setIsVisible(true); // Make the content visible
        } else {
          setIsInView(false); // Reset to false when the component is out of view
          setIsVisible(false); // Hide the content
        }
      },
      {
        threshold: 0.25, // Trigger when 25% of the component is visible
      }
    );

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="min-h-screen" id='prodi'>
        <div className="container mx-auto flex flex-col items-center py-16">
          {/* Section Title */}
          <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple text-center mb-12">
            One Platform for End-to-End Drug Discovery with Advanced AI Agent-Based Workflows
          </h2>

          <div className="flex flex-col items-center w-full max-w-4xl space-y-4 mb-12">
            {/* Top Row */}
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer group">
                <img src="/boltchem_icon.png" alt="" height={'80'} width={'160'} />
              </div>
              <div className="rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer group">
              <img src="/breboltbg.png" alt="" height={'60'} width={'160'} />
            
              </div>
              <div className="rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer group">
              <img src="/boltprolog.png" alt="" height={'60'} width={'160'} />

              </div>
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-2 gap-4 w-2/3">
              <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer group">
                <p className="text-[30px] text-customPurple group-hover:text-shadow-md group-hover:scale-110 transition-all duration-300">
                  BoltBio
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer group">
                <p className="text-[30px] text-customPurple group-hover:text-shadow-md group-hover:scale-110 transition-all duration-300">
                  ClinBolt
                </p>
              </div>
            </div>
          </div>






          {/* Section Subtitle */}
          <p className="text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple text-center max-w-2xl mb-16 px-4">
            Our platform unifies the entire process—from discovery to clinical optimization—empowering researchers with AI-driven tools across all stages of development.
          </p>

          {/* Grid Content */}
          <div
            ref={containerRef}
            className={`grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-14 w-full px-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 mt-16`}
          >
            <div className="grid-item">
              <div className="relative min-h-[260px] flex items-center bg-gradient-to-r from-customBlue to-customPurple p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute min-h-[260px] xl:w-full flex flex-col gap-4 items-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 left-[10px] top-[10px]">
                  <div className="flex items-center gap-4">
                    <img src="/aipowered.svg" alt="" width={"80"} height={"80"} />
                    <p className="font-bold text-3xl">AI-Powered Drug Discovery</p>
                  </div>
                  <p className="text-gray-700  text-lg">
                    Specialized modules for designing small molecules, peptides, antibodies, and enzymes, enabling precise and accelerated discovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid-item">
              <div className="relative min-h-[260px] flex items-center bg-gradient-to-r from-customBlue to-customPurple p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute min-h-[260px] xl:w-[420px] flex flex-col gap-4 items-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 left-[10px] top-[10px]">
                  <div className="flex items-center gap-4">
                    <img src="/cloud.svg" alt="" width={"80"} height={"80"} />
                    <p className="font-bold text-3xl">Clinical Trials Optimization</p>
                  </div>
                  <p className="text-gray-700  text-lg">
                    site selection recommendations and streamlined clinical study reports generated using advanced generative AI.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid-item">
              <div className="relative min-h-[260px] flex items-center bg-gradient-to-r from-customBlue to-customPurple p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute min-h-[260px] xl:w-[420px] flex flex-col gap-4 items-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 left-[10px] top-[10px]">
                  <div className="flex items-center gap-4">
                    <img src="/retrosynthesis.svg" alt="" width={"80"} height={"80"} />
                    <p className="font-bold text-3xl">Chemical Retrosynthesis</p>
                  </div>
                  <p className="text-gray-700  text-lg">
                    Predicts efficient synthetic pathways for complex molecules, bridging the gap between discovery and synthesis.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid-item">
              <div className="relative min-h-[260px] flex items-center bg-gradient-to-r from-customBlue to-customPurple p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute min-h-[260px] xl:w-[420px] flex flex-col gap-4 items-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 left-[10px] top-[10px]">
                  <div className="flex items-center gap-4">
                    <img src="/data.svg" alt="" width={"80"} height={"80"} />
                    <p className="font-bold text-3xl">Advanced Data Management</p>
                  </div>
                  <p className="text-gray-700  text-lg">
                    Secure, scalable, and tailored data solutions for handling extensive research datasets seamlessly.
                  </p>
                </div>
              </div>
            </div>



          </div>





          {/* Section Footer Subtitle */}
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple text-[25px] text-center max-w-2xl mt-16 px-4">
            By leveraging AI agent-based workflows, Boltzmann Labs enables researchers to achieve faster insights, reduce manual work, and streamline collaboration across all stages of drug discovery and clinical optimization—delivering an all-in-one platform built for results.
          </p>
        </div>
      </div>
    </>
  );
}

export default Outproducts;
