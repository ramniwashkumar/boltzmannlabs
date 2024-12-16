"use client";

import React, { useEffect, useRef, useState } from "react";

const Agent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [gridItemPositions, setGridItemPositions] = useState<{ x: number; y: number }[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Check visibility using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const updateGridItemPositions = () => {
    if (gridItemsRef.current.length && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();

      const positions = gridItemsRef.current.map((item) => {
        if (item) {
          const rect = item.getBoundingClientRect();

          // Calculate positions relative to the container
          const centerX = rect.left + rect.width / 2 - containerRect.left;
          const centerY = rect.top + rect.height / 2 - containerRect.top;

          return { x: centerX, y: centerY };
        }
        return { x: 0, y: 0 };
      });

      setGridItemPositions(positions);
    }
  };


  // Recalculate positions on window resize
  useEffect(() => {
    updateGridItemPositions(); // Initial positions calculation

    const handleResize = () => {
      updateGridItemPositions();
    };

    window.addEventListener("resize", handleResize);

    // Clean up the resize event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const edges = [
    { from: 1, to: 0 },
    { from: 3, to: 1 },
    { from: 0, to: 2 },
    { from: 5, to: 3 },
    { from: 2, to: 3 },
    { from: 3, to: 2 },
    { from: 2, to: 4 },
    { from: 4, to: 5 },
  ];

  return (
    <div className="min-h-screen bg-white relative" id="prodi" ref={containerRef}>
      <div className="container mx-auto flex flex-col items-center py-16">
        {/* Section Title */}
        <h2 className="text-4xl text-black text-center">
          Advanced multi-agent systems to automate drug discovery
        </h2>
        <p className="text-[16px] text-black text-center px-4 mt-4">
          Leverage advanced multi-agent systems to streamline and automate every
          stage of drug discovery. From target identification to clinical
          trials, our intelligent agents collaborate to accelerate breakthroughs
          and optimize efficiency.
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-x-72 gap-y-24 w-full px-4 mt-8 relative z-10`}
        >
          {/* First Row */}
          <div
            className="grid-item justify-self-end flex-grow"
            ref={(el) => {
              if (el) {
                gridItemsRef.current[0] = el;
              }
            }}
          >
            <img
              src="/sass.webp"
              alt=""
              className="w-12 sm:w-16 md:w-24 lg:w-32" // Adjust width for responsiveness
            />
          </div>
          <div
            className="grid-item justify-self-start"
            ref={(el) => {
              if (el) {
                gridItemsRef.current[1] = el;
              }
            }}
          >
            <img
              src="/sass.webp"
              alt=""
              className="w-12 sm:w-16 md:w-24 lg:w-32"
            />
          </div>

          {/* Second Row */}
          <div
            className="grid-item justify-self-end flex-grow"
            ref={(el) => {
              if (el) {
                gridItemsRef.current[2] = el;
              }
            }}
          >
            <img
              src="/sass.webp"
              alt=""
              className="w-36 sm:w-44 md:w-56 lg:w-72" // Increased width for larger size
            />
          </div>
          <div
            className="grid-item justify-self-start"
            ref={(el) => {
              if (el) {
                gridItemsRef.current[3] = el;
              }
            }}
          >
            <img
              src="/sass.webp"
              alt=""
              className="w-36 sm:w-44 md:w-56 lg:w-72" // Increased width for larger size
            />
          </div>

          {/* Third Row */}
          <div
            className="grid-item justify-self-end flex-grow"
            ref={(el) => {
              if (el) {
                gridItemsRef.current[4] = el;
              }
            }}
          >
            <img
              src="/herobg.webp"
              alt=""
              className="w-12 sm:w-16 md:w-24 lg:w-32"
            />
          </div>
          <div
            className="grid-item justify-self-start"
            ref={(el) => {
              if (el) {
                gridItemsRef.current[5] = el;
              }
            }}
          >
            <img
              src="/sass.webp"
              alt=""
              className="w-12 sm:w-16 md:w-24 lg:w-32"
            />
          </div>
        </div>
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${containerRef.current?.offsetWidth || 0} ${containerRef.current?.offsetHeight || 0
            }`}
        >
          {gridItemPositions.length > 0 &&
            edges.map(({ from, to }, idx) => {
              const start = gridItemPositions[from];
              const end = gridItemPositions[to];
              if (start && end) {
                // Offset logic for specific connections
                const isSecondRowConnection = (from === 2 && to === 3);
                const offset = isSecondRowConnection ? 10 : 0; // Adjust the gap as needed
                const isAnticlockwiseEdge = (from === 1 && to === 0) || (from === 3 && to === 1) || (from === 5 && to === 3) || (from === 4 && to === 5) || (from === 2 && to === 4) || (from === 0 && to === 2) || (from === 2 && to === 3) || (from===3 && to===2);

                return (
                  <line
                    key={idx}
                    x1={start.x + (isSecondRowConnection ? offset : 0)}
                    y1={start.y - (isSecondRowConnection ? offset : 0)}
                    x2={end.x + (isSecondRowConnection ? offset : 0)}
                    y2={end.y - (isSecondRowConnection ? offset : 0)}
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="4"
                    className={isAnticlockwiseEdge ? "animate-drawing" : ""}
                  />
                );
              }
              return null;
            })}
        </svg>

      </div>
    </div>
  );
};

export default Agent;
