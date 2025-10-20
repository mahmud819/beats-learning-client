import React from "react";
import platformImage from './../../assets/Images.png'
import vector from './../../assets/Vector (1).png'
import { Link } from "react-router-dom";

const LearningPlatform = () => {
  return (
    <div className="py-8">
      <div className="lg:px-12 flex">
        <div className="lg:w-1/2 lg:px-10 pt-36">
          <p className="text-[#2F2B71] text-lg">SIMPLE LEAENING PLATFORM</p>
          <h1 className="text-[#101130] lg:text-6xl py-6">
            A quality place for distance learning
          </h1>
          <p className="lg:text-lg text-[#67687B]">
            A best and cheapest way of getting know learning to make a better tomorrow 
          </p>
          <Link className="btn bg-[#54B8FF] text-white lg:mt-8">Start Free Trial</Link>
        </div>
        <div className="relative lg:w-1/2">
          <img className="" src={vector} alt="vector photo" />
          <img className="absolute top-10 left-10 z-10 lg:w-full p-10" src={platformImage} alt="hero photo" />
          
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;
