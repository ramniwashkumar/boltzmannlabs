"use client";
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { faLink, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero: React.FC = () => {
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const link = linkRef.current;

    const ctx = gsap.context(() => {

      // Animating the Subtitle
      if (subtitle) {
        const letters = subtitle.textContent?.split("").map((letter) => (
          `<span className='letter2' style="display:inline-block shadow-lg">${letter === " " ? "&nbsp;" : letter}</span>`
        )).join("");
        if (letters) subtitle.innerHTML = letters;

        gsap.from(".letter2", {
          y: 20,
          x: 30,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power3.out"
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="min-h-screen flex bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1] flex-1"
          style={{
            backgroundImage: "url('/herobg.webp')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(29, 78, 216, 0.7)", // Adjust opacity and color for gradient
          }}
        ></div>
        <div className="container mx-auto mt-28 flex-1">
          <div className="grid md:grid-cols-4 grid-cols-1">
            <div className="md:col-span-2">
              <div className="h-[60vh] flex flex-col justify-center md:items-start items-center">
                <h1 className="md:text-[55px] text-[40px] text-Black font-bold">
                  Boltzmann Labs
                </h1>
                {/* <p ref={subtitleRef} className="text-black md:text-[24px] text-[18px]">
                  Accelerating <span className="text-blue-500">Life Science</span> Research.
                </p> */}
                <p className="text-black md:text-[24px] text-[18px]">
                  Accelerating <span className="text-[#7E4499]">Life Science</span> Research.
                </p>
                <p className="text-black md:text-[16px] text-[12px] mt-4 leading-relaxed">
                  Reimagining drug discovery with AI-powered technologies to build
                  advanced agentic systems and ecosystems. <br />
                  We offer versatile AI-centric solutions tailored to address the
                  complexities of small molecule, peptide, and protein drug discovery.
                </p>
                  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-5 mt-4">
                    <a href="#prodi" className="text-black cursor-pointer text-[12px] border border-black border-dotted px-4 py-2 rounded-full">
                      Know more
                    </a>
                    <button   onClick={() => window.open("https://www.youtube.com/watch?v=eQKd7XmE6nU", "_blank")} className="text-black cursor-pointer px-4 py-2 bg-[#660095] rounded-full text-[12px] text-white shadow-sm shadow-purple-300 transition duration-300 hover:scale-110">
                      Watch a demo &gt;
                    </button>
                  </div>
                <div className="hidden md:flex mt-4 items-center space-x-5">
                  <a href="#prodi" className="text-black cursor-pointer text-[12px] border border-black border-dotted px-2 py-1 rounded-full md:hidden">
                    Know more
                  </a>
                  <button onClick={() => window.open("https://www.youtube.com/watch?v=eQKd7XmE6nU", "_blank")} ref={buttonRef} className="px-2 py-2 bg-[#660095] rounded-full text-[12px] text-white shadow-lg transition duration-300 mt-4 md:hidden">
                    Watch a demo &gt;
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex items-center">
              <div className="md:h-[40vh] h-[40vh] w-full flex flex-col items-center justify-center">
                <img src="protein.png" alt="" className="h-[300px] w-[300px] animate-spin-slow absolute" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl text-black text-center mb-4">
              Our Partners
            </h2>
            <div className="relative overflow-hidden 2xl:container 2xl:mx-auto xl:px-20 md:px-6 px-28">
              <div className="flex animate-scroll items-center">
                <img className="mr-[80px] h-[70px] w-[180px] dark:block" src="/morpen.avif" alt="vogue logo" />
                <img className="mr-[80px] h-[70px] w-[240px] dark:block" src="/drreddys.png" alt="cosmopolitan logo" />
                <img className="mr-[80px] h-[70px] w-[70px] dark:block" src="/honkings.png" alt="bazaar logo" />
                <img className="mr-[80px] h-[70px] w-[150px] dark:block" src="/cdri.jpeg" alt="esquire logo" />
                <img className="mr-[80px] h-[70px] w-[70px] dark:block" src="/mland.png" alt="grazia logo" />
                <img className="mr-[80px] hidden dark:block h-[70px] w-[160px]" src="/buck.png" alt="maria clarie logo" />

                <img className="mr-[80px] h-[70px] w-[180px] dark:block" src="/morpen.avif" alt="vogue logo" />
                <img className="mr-[80px] h-[70px] w-[240px] dark:block" src="/drreddys.png" alt="cosmopolitan logo" />
                <img className="mr-[80px] h-[70px] w-[70px] dark:block" src="/honkings.png" alt="bazaar logo" />
                <img className="mr-[80px] h-[70px] w-[150px] dark:block" src="/cdri.jpeg" alt="esquire logo" />
                <img className="mr-[80px] h-[70px] w-[70px] dark:block" src="/mland.png" alt="grazia logo" />
                <img className="mr-[80px] hidden dark:block h-[70px] w-[160px]" src="/buck.png" alt="maria clarie logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;



{/* <div className="h-full">
<h2 className="text-4xl text-lightText text-center mb-12">
  Our Partners
</h2>
<div className="relative overflow-hidden 2xl:container 2xl:mx-auto xl:px-20 md:px-6 px-28">
  <div className="flex animate-scroll items-center">
    <img className="mr-[80px] h-[100px] w-[180px] dark:block" src="/morpen.avif" alt="vogue logo" />
    <img className="mr-[80px] h-[70px] w-[200px] dark:block" src="/drreddys.png" alt="cosmopolitan logo" />
    <img className="mr-[80px] h-[150px] w-[150px] dark:block" src="/honkings.png" alt="bazaar logo" />
    <img className="mr-[80px] h-[100px] w-[150px] dark:block" src="/cdri.jpeg" alt="esquire logo" />
    <img className="mr-[80px] h-[150px] w-[150px] dark:block" src="/mland.png" alt="grazia logo" />
    <img className="mr-[80px] hidden dark:block h-[80px] w-[160px]" src="/buck.png" alt="maria clarie logo" />

    <img className="mr-[20px] inline-block h-[100px] w-[180px] dark:block" src="/morpen.avif" alt="vogue logo" />
    <img className="mr-[20px] inline-block h-[70px] w-[200px] dark:block" src="/drreddys.png" alt="cosmopolitan logo" />
    <img className="mr-[20px] inline-block h-[150px] w-[150px] dark:block" src="/honkings.png" alt="bazaar logo" />
    <img className="mr-[20px] inline-block h-[100px] w-[150px] dark:block" src="/cdri.jpeg" alt="esquire logo" />
    <img className="mr-[20px] inline-block h-[150px] w-[150px] dark:block" src="/mland.png" alt="grazia logo" />
    <img className="mr-[20px]  hidden dark:block h-[80px] w-[160px]" src="/buck.png" alt="maria clarie logo" />
  </div>
</div>
</div> */}

{/* <div className="flex flex-col bg-black"></div>
<div
  className="absolute inset-0 bg-cover bg-center opacity-70"
  style={{ backgroundImage: 'url("/sass.jpeg")', zIndex: '-2' }}
></div>
<div className="absolute inset-0 bg-gradient-to-r from-customBlue to-customPurple opacity-90 pointer-events-none z-[-1]"></div>
<div className="relative container mx-auto h-full flex flex-col items-center z-10">
  <div className="h-3/4 w-full flex flex-col justify-center">
    <div className="grid grid-cols-3">
      <div className="col-span-2 flex flex-col justify-center">
        <h1 className="text-[40px] text-lightText">
          Boltzmann Labs
        </h1>
        <p ref={subtitleRef} className="text-[48px] text-white">
          Accelerating Life Science Research.
        </p>
        <div className="flex mt-4 items-center space-x-5">
          <a ref={linkRef} href="#" className="text-white cursor-pointer">
            Explore Our Solutions <FontAwesomeIcon icon={faLink} className="ml-2" />
          </a>
          <button ref={buttonRef} className="px-4 py-2 bg-purple-500 rounded-full text-white shadow-lg transition duration-300">
            Schedule a demo <FontAwesomeIcon icon={faClock} className="ml-2" />
          </button>
        </div>
      </div>
      <div className="h-full"></div>
    </div>
  </div>
  <div className="h-1/4">
    <div className="grid xl:grid-cols-7 grid-cols-1 md:grid-cols-4 justify-items-center md:justify-items-start xl:justify-items-center md:py-12 gap-y-8 xl:gap-y-0 gap-x-20 py-9 2xl:container 2xl:mx-auto xl:px-20 md:px-6 px-28">
      <div className="text-gray-800 dark:text-white">
        <img className="dark:block" src="/morpen.avif" alt="vogue logo" />

      </div>
      <div className="text-gray-800 dark:text-white">
        <img className="dark:block" src="/drreddys.png" alt="cosmopolitan logo" />

      </div>
      <div className="text-gray-800 dark:text-white">
        <img className="dark:block" src="/honkings.png" alt="bazaar logo" />

      </div>
      <div className="text-gray-800 dark:text-white">
      <img className="dark:block" src="/cdri.jpeg" alt="esquire logo" />
      </div>
      <div className="text-gray-800 dark:text-white">
        <img className="dark:block" src="/uland.svg" alt="esquire logo" />

      </div>
      <div className="text-gray-800 dark:text-white">
        <img className="dark:block" src="/mland.png" alt="grazia logo" />

      </div>
      <div className="text-gray-800 dark:text-white">
        <img className="hidden dark:block" src="/buck.png" alt="maria clarie logo" />

      </div>
    </div>
  </div>
</div> */}
