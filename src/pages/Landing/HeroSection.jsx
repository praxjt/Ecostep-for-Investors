"use client";

import React, { useState, useEffect } from "react";
import { FlipWords } from "@/components/FlipWords";
import SparklesText from "@/components/sparklestext";
import ConnectWallet from './ConnectWallet.jsx';


import { cn } from "@/lib/utils";
const StackerLogo = ({
  className
}) => <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0z" fill="#4F46E5" />
    <path d="M19.333 9.333h-6.666v1.334h6.666V9.333z" fill="#fff" />
    <path d="M22.667 15.333h-10v1.334h10v-1.334z" fill="#fff" />
    <path d="M16 21.333h-3.333v1.334H16v-1.334z" fill="#fff" />
  </svg>;
const PlayIcon = ({
  className
}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z" />
  </svg>;
const MenuIcon = ({
  className
}) => <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>;
const CloseIcon = ({
  className
}) => <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>;
const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "Features",
    href: "#features"
  }, {
    name: "FAQS",
    href: "#faq"
  },];
   const words = [
    "offset carbon",
    "fund sustainability",
    "transparent",
    "earn trust",
    "change the world",
  ];
  const colors = {
         gradient: "from-green-600 via-teal-600 to-cyan-600",

  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  return <div className="bg-gray-50 dark:bg-black font-sans text-gray-800 dark:text-gray-200 w-full">
      <div className="w-full">
       <header className="fixed top-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300">
  <nav className="flex items-center justify-between max-w-7xl mx-auto">
    <div className="flex items-center gap-2">
    <img src="./darkmodelogo.png" alt="Logo" className="h-8 w-8" />

      <span className="font-bold text-2xl text-white">EcoStep</span>
    </div>

    <div className="hidden lg:flex items-center gap-8">
      {navLinks.map(link => (
        <a
          key={link.name} href={link.href}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {link.name}
        </a>
      ))}
    </div>

    {/* <a
  href="#"
  className="hidden lg:inline-block bg-[#1A2230] border border-[#F9FAFB] font-semibold px-6 py-3 rounded-lg  hover:bg-[#1A2230] hover:border-[#9EE6FF] hover:shadow-[0_0_12px_#9EE6FF] transition-all shadow-sm"
> */}
  {/* <SparklesText
    as="span"
    className="text-base md:text-lg font-semibold text-white"
    sparkleCount={10}
    sparkleSize={8}
    colors={{ first: '#fde047', second: '#f97316' }}
  > */}
        <div className="hidden lg:inline-block">
  <ConnectWallet />
</div>

  {/* </SparklesText> */}
{/* </a> */}

    <div className="lg:hidden">
      <button
        onClick={() => setIsMenuOpen(true)}
        className="text-gray-300 hover:text-white"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
    </div>
  </nav>
</header>

        <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80" onClick={() => setIsMenuOpen(false)}></div>

          <div className={`relative z-50 bg-white dark:bg-gray-900 h-full w-4/5 max-w-sm ml-auto p-6 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-2xl text-gray-900 dark:text-white">
                Menu
              </span>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-5">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-lg w-full text-left py-2">
                  {link.name}
                </a>)}
   
   <div className="lg:hidden ">
  <ConnectWallet />
</div>

  
            </nav>
          </div>
        </div>

        <main className="relative flex-1 flex items-center justify-center text-center w-full  pt-24 sm:pt-28">
          <div className="relative flex flex-col items-center justify-center py-10 sm:py-16 px-4 max-w-5xl mx-auto">
       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl text-gray-900 dark:text-white">
  Invest in a future that’s{" "}
  <span className="relative inline-flex overflow-hidden align-baseline isolate">
    <FlipWords
      words={words}
     className="text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-green-400 via-green-500 to-green-600 
             bg-clip-text text-transparent"

    />
  </span>
</h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
             Empower eco-friendly walking campaigns that offset carbon emissions  and watch your investments create real-world impact.
            </p>
   
  <div className="mt-8">
  <ConnectWallet />
</div>

          </div>
        </main>
      </div>
    </div>;
};
export default HeroSection;