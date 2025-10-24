import React from "react";
import { Link } from "react-router-dom";
import heroImg from './../../assets/hero.png'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:px-6 lg:flex-row">
      <div className="p-4 lg:w-1/2 lg:pt-20">
        <p className="text-[#2F2B71] text-xs text-center lg:text-xl lg:text-left">TRAINING TO SUCCEED</p>
        <h1 className="text-[#5F596E] py-2 text-xl text-center lg:text-6xl py-6 lg:text-left">Believe and you can achieve </h1>
        <p className="text-xs lg:text-xl">
          Learn any skill from comfort of your home Anywhere and Anytime for
          only $10
        </p>
        <Link className="w-[100%] mx-auto btn mt-2 bg-[#54B8FF] text-white lg:mt-8 lg:w-4/12">Apply Now</Link>
      </div>
      <div className="lg:w-1/2 pt-8">
         <img className="lg:w-full" src={heroImg} alt="hero photo" />
      </div>
    </div>
  );
};

export default Hero;
