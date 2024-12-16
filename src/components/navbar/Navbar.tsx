"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faYoutube,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 h-auto top-0 start-0 transition-colors duration-300 text-black bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-[80px] px-4">
        {/* Logo */}
        <img alt="Boltchem" src="/shad.png" className="h-[50px]" />

        {/* Desktop Links */}
        <div className="hidden md:flex h-full justify-center items-center font-medium">
          <Link href="/" className="mx-5 hover:underline uppercase text-lg">
            Home
          </Link>
          <div className="relative group z-10">
            <Link
              href="/Products"
              className="mx-5 h-full uppercase text-lg py-4 flex items-center relative"
            >
              Products
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md z-10 top-full left-0 min-w-max">
              <ul className="py-2">
                {[
                  { name: "BoltBio", path: "/products/boltbio" },
                  { name: "BoltChem", path: "/products/boltchem" },
                  { name: "BoltPro", path: "/products/boltpro" },
                  { name: "ClinBolt", path: "/products/clinbolt" },
                  { name: "ReBolt", path: "/products/rebolt" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/industries"
            className="mx-5 hover:underline uppercase text-lg"
          >
            Applications
          </Link>
          <div className="relative group z-10">
            <Link
              href="/resources"
              className="mx-5 h-full uppercase text-lg py-4 flex items-center relative"
            >
              Resources
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md z-10 top-full left-0 min-w-max">
              <ul className="py-2">
                {[
                  { name: "Whitepapers & Success Stories", path: "/resources/whitepapersebooks" },
                  { name: "Case Studies", path: "/resources/casestudies" },
                  { name: "Blog", path: "/blogs" },
                  { name: "Community", path: "/resources/community" },
                  { name: "GitHub Repository", path: "/resources/github" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/about"
            className="mx-5 hover:underline uppercase text-lg"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="mx-5 hover:underline uppercase text-lg"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-customPurple"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden z-30">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" onClick={toggleMenu} className="hover:underline uppercase">
              Home
            </Link>
            <div>
              <p className="hover:underline uppercase">Products</p>
              <ul className="pl-4 mt-2 space-y-2">
                {[
                  { name: "BoltBio", path: "/products/boltbio" },
                  { name: "BoltChem", path: "/products/boltchem" },
                  { name: "BoltPro", path: "/products/boltpro" },
                  { name: "ClinBolt", path: "/products/clinbolt" },
                  { name: "ReBolt", path: "/products/rebolt" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.path}
                      onClick={toggleMenu}
                      className="text-gray-700 hover:underline text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/industries" onClick={toggleMenu} className="hover:underline uppercase">
              Applications
            </Link>
            <div>
              <p className="hover:underline uppercase">Resources</p>
              <ul className="pl-4 mt-2 space-y-2">
                {[
                  { name: "Whitepapers & Success Stories", path: "/resources/whitepapersebooks" },
                  { name: "Case Studies", path: "/resources/casestudies" },
                  { name: "Blog", path: "/blogs" },
                  { name: "Community", path: "/resources/community" },
                  { name: "GitHub Repository", path: "/resources/github" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.path}
                      onClick={toggleMenu}
                      className="text-gray-700 hover:underline text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/about" onClick={toggleMenu} className="hover:underline uppercase">
              About
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:underline uppercase">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
