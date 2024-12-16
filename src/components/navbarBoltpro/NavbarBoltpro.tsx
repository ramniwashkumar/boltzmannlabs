"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faYoutube, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function NavbarBoltpro() {
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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`w-full z-20 h-auto top-0 start-0  text-customBlue p-2 bg-white transition-colors duration-300`}>
            <div className="container mx-auto flex items-center justify-between h-full p-2">
                <img alt="Boltchem" src="/boltchem_icon.png" className='h-[50px]' />
                <div className="hidden flex-1 md:flex justify-center items-center text-sm">
                    <Link href="/" className="mx-5 hover:underline uppercase text-sm">Home</Link>
                    <Link href="/products" className="mx-5 uppercase text-sm">Products</Link>
                    <a href="/contact" className="mx-5 px-4 py-2 bg-gradient-to-r from-customBlue to-customPurple text-white hover:scale-105 transition uppercase text-sm rounded-full">
                        Contact
                    </a>
                </div>
                {/* "./#contact-section" */}

                <div className="hidden md:flex space-x-3">
                    <button className="rounded-full">
                        <FontAwesomeIcon icon={faXTwitter} className="text-customBlue text-xl" />
                    </button>
                    <button className="rounded-full">
                        <FontAwesomeIcon icon={faYoutube} className="text-customBlue text-2xl" />
                    </button>
                    <button className="rounded-full">
                        <FontAwesomeIcon icon={faLinkedin} className="text-customBlue text-2xl" />
                    </button>
                    <button className="rounded-full">
                        <FontAwesomeIcon icon={faFacebook} className="text-customBlue text-2xl" />
                    </button>
                    <button className="rounded-full">
                        <FontAwesomeIcon icon={faInstagram} className="text-customBlue text-2xl" />
                    </button>
                </div>

                {/* Drawer Toggle Button */}
                <button
                    className="md:hidden text-customBlue"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
                </button>
            </div>

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 md:hidden z-30`}
            >
                <div className="flex flex-col space-y-4">
                    <Link href="/" className="text-customBlue hover:underline" onClick={toggleMenu}>Home</Link>
                    <Link href="/products" className="text-customBlue hover:underline" onClick={toggleMenu}>Products</Link>
                    <Link href="/about" className="text-customBlue hover:underline" onClick={toggleMenu}>About</Link>
                    <Link href="/blogs" className="text-customBlue hover:underline" onClick={toggleMenu}>Blog</Link>
                    <Link href="/pipeline" className="text-customBlue hover:underline" onClick={toggleMenu}>Pipeline</Link>
                    <a href="/#contact-section" className="text-white bg-customBlue text-center px-1 py-1 hover:shadow-lg hover:scale-105 transition" onClick={toggleMenu}>
                        Contact
                    </a>

                    {/* Social Icons in Drawer */}
                    <div className="flex space-x-3 mt-4">
                        <button className="rounded-full">
                            <FontAwesomeIcon icon={faXTwitter} className="text-customBlue" />
                        </button>
                        <button className="rounded-full">
                            <FontAwesomeIcon icon={faYoutube} className="text-customBlue" />
                        </button>
                        <button className="rounded-full">
                            <FontAwesomeIcon icon={faLinkedin} className="text-customBlue" />
                        </button>
                        <button className="rounded-full">
                            <FontAwesomeIcon icon={faFacebook} className="text-customBlue" />
                        </button>
                        <button className="rounded-full">
                            <FontAwesomeIcon icon={faInstagram} className="text-customBlue" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
