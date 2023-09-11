"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="bg-slate-200  h-screen flex items-center justify-center"
      id="cards-animations"
    >
      <div className="text-center text-black">
        <h1 className=" text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className=" text-lg mb-8">Discover amazing content and features.</p>
        <button className=" text-black px-6 py-2 shadow-lg hover:shadow-black rounded-md font-semibold transition duration-300 ease-in-out hover:bg-black hover:text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
