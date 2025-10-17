import React from "react";
import { Link } from "react-router-dom";
import heroImg from './../../assets/hero.png'

const Hero = () => {
  return (
    <div className="lg:px-6 flex">
      <div className="lg:w-1/2 lg:pt-20">
        <p className="text-[#2F2B71] text-xl">TRAINING TO SUCCEED</p>
        <h1 className="text-[#5F596E] lg:text-6xl py-6">Believe and you can achieve </h1>
        <p className="lg:text-xl">
          Learn any skill from comfort of your home Anywhere and Anytime for
          only $10
        </p>
        <Link className="btn bg-[#54B8FF] text-white lg:mt-8">Apply Now</Link>
      </div>
      <div className="lg:w-1/2 pt-8">
         <img className="lg:w-full" src={heroImg} alt="hero photo" />
      </div>
    </div>
  );
};

export default Hero;
