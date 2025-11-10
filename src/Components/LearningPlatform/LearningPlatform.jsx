import React from "react";
import platformImage from './../../assets/Images.png'
import vector from './../../assets/Vector (1).png'
import { Link } from "react-router-dom";

const LearningPlatform = () => {
  return (
    <div className="learningPlatfrom py-8 mb-80 box-border block lg:mb-2">
      <div className="w-full flex flex-col lg:flex-row lg:px-12 ">
        <div className="w-full p-8 mx-auto block flex flex-col lg:mx-0 lg:w-1/2 lg:pl-4 lg:pt-36">
          <p className="text-xs text-[#2F2B71] lg:text-lg">SIMPLE LEAENING PLATFORM</p>
          <h1 className="text-3xl text-[#101130] lg:text-6xl py-6">
            A quality place for distance learning
          </h1>
          <p className="text-xm lg:text-lg text-[#67687B]">
            A best and cheapest way of getting know learning to make a better tomorrow 
          </p>
          <Link className="w-full mt-2 btn bg-[#54B8FF] text-white lg:w-5/12 lg:mt-8">Start Free Trial</Link>
        </div>

        {/* image section start */}

        <div className="w-full pl-14 relative lg:w-1/2 lg:pl-0">
          <img className="w-5/12 " src={vector} alt="vector photo" />
          <img className="w-full absolute top-4 left-20 lg:top-10 lg:left-10 lg:w-full p-10" src={platformImage} alt="hero photo" />
          
        </div>
      </div>
    </div>
  );
};

export default LearningPlatform;
