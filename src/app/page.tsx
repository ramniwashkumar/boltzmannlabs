"use client"
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Hero from "@/components/hero/Hero";
import Outproducts from "@/components/ourproducts/Outproducts";
import Technology from "@/components/technology/Technology";
import BlogSection from "@/components/blogsection/BlogSection";
import Agent from "@/components/agent/Agent";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Hero section animation
    gsap.fromTo(
      ".hero-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top center",
        },
      }
    );

    // Outproducts section animation
    gsap.fromTo(
      ".outproducts-section",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".outproducts-section",
          start: "top center",
        },
      }
    );

    // Technology section animation
    gsap.fromTo(
      ".technology-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".technology-section",
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      ".blogs-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".blogs-section",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="hero-section">
        <Hero />
      </div>
      {/* <div className="outproducts-section">
        <Outproducts />
      </div> */}
      <div className="agent-section">
        <Agent />
      </div>
      <div className="blogs-section">
        <BlogSection />
      </div>
      {/* <div className="technology-section">
        <Technology />
      </div> */}
    </>
  );
}
