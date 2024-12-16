"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./styling.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faYoutube, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const About = () => {
  return (
    <>
      <div className="h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-customDarkpurple  to-custompurple2 pointer-events-none z-[-1]"></div>
        <div className="container mx-auto h-full flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 h-full">
              <div className="col-span-2 flex flex-col justify-center">
                <h1 className="text-[48px] text-white">Our Story</h1>
                <p className="text-[25px] text-lightText">
                  A Company with the vision of revolutionizing Drug Discovery. Designing precision medicine with data-driven solutions. Boltzmann Labs offers products & services that cater to the wide spectrum of Drug Discovery (Target & Biomarker identification, Small molecule design, Antibody design, Protein engineering, and custom synthesis planning) with AI-powered technologies.
                </p>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen mt-16">
        <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple text-center mb-12 ">
          Leadership Team
        </h2>
        <div className="container mx-auto h-full flex flex-col justify-center items-center">

          <div className="w-full">
            <div className="grid grid-cols-2 h-full gap-4"> {/* Set gap here for space between grid items */}

              {/* Card 1 */}
              <div className="relative h-[300px] flex items-center bg-gradient-to-r from-customBlue to-customPurple p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 w-full">
                <div className="absolute h-[300px] w-full flex flex-col items-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 left-[10px] top-[10px]">
                  <div className="relative flex justify-center">
                    <div className="absolute border-2 h-[200px] w-[200px] rounded-full overflow-hidden -top-[210px]">
                      <img src="/sarath.png" className="scale-100" alt="" />
                    </div>
                    <p className="text-center text-gray-700 text-lg">
                      <span className="font-semibold bg-gradient-to-r from-customBlue to-customPurple bg-clip-text text-transparent">Sarath Kolli (CEO)</span>
                      <span className="block">Kolli Sarath completed their Master of Technology (M.Tech.) in Computer Science from the Indian Institute of Technology, Bombay between 2010 and 2012.</span>
                    </p>
                  </div>

                  {/* Social Icons (Centered horizontally below description) */}
                  <div className="flex justify-center space-x-3 text-customPurple mt-4">
                    <a href="https://x.com/kollisarath" className="rounded-full">
                      <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/kollisarath/" className="rounded-full">
                      <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative h-[300px] flex items-center bg-gradient-to-r from-customPurple to-customBlue p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 w-full">
                <div className="absolute h-[300px] w-full flex flex-col items-center bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 left-[10px] top-[10px]">
                  <div className="relative flex justify-center">
                    <div className="absolute border-2 h-[200px] w-[200px] rounded-full overflow-hidden -top-[210px]">
                      <img src="/paritosh.png" className="scale-100" alt="" />
                    </div>
                    <p className="text-center text-gray-700 text-lg">
                      <span className="font-semibold bg-gradient-to-r from-customBlue to-customPurple bg-clip-text text-transparent">Dr. Paritosh Prashar (Co-Founder)</span>
                      <span className="block">Paritosh Prashar is currently associated with 5 Companies and is director with Rhyza Agroponics Private Limited, Eviogen Discovery Private Limited.  </span>
                    </p>
                  </div>

                  {/* Social Icons (Centered horizontally below description) */}
                  <div className="flex justify-center space-x-3 text-customPurple mt-4">
                    <a href="https://x.com" className="rounded-full">
                      <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/paritosh-prashar-04a366163/" className="rounded-full">
                      <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div className="h-screen bg-gradient-to-r from-customBlue to-customPurple">
        <div className="h-full container mx-auto flex flex-col">

          {/* First row: Partnerships & Alliances title */}
          <h2 className="text-4xl text-white text-center mt-16">
            Partnerships & Alliances
          </h2>

          {/* Second row: Description content */}
          <div className="relative rounded-2xl w-full flex items-center overflow-hidden mt-6">
            <div className="text-white">
            <p className="text-[20px] font-semibold mb-4">
          Selected for the Institute of Eminence (IoE) Scheme
        </p>
        <p className="text-[25px] mb-2">
          As part of this initiative led by IIT Bombay under the National Innovation and Start-up Policy (NISP) 2019, we have partnered to foster a vibrant ecosystem of innovation and entrepreneurship.
        </p>
        <p className="text-[25px] mb-2">
          This collaboration seeks to actively engage students, alumni, faculty, and staff in driving forward impactful projects and start-ups, addressing pressing societal and technological challenges.
        </p>
        <p className="text-[25px] mb-2">
          Through dedicated funding and support, we empower innovators to bring their ideas to life and support the broader mission of transforming India into a global innovation hub.
        </p>
        <p className="text-[25px]">
          Our partners contribute resources, mentorship, and industry insights that bolster our capacity to make a tangible difference in sectors ranging from technology and healthcare to sustainability and beyond.
        </p>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default About