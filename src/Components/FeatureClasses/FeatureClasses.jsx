import React from "react";
import web from './../../assets/Icon.png'
import webDevelopImg from './../../assets/webDevelop.png'
import musicImg from './../../assets/Music.png'
import personalityImg from './../../assets/personelety.png'
import { CiYoutube } from "react-icons/ci";
import { FaRegFile } from "react-icons/fa";

const FeatureClasses = () => {
  return (
    <div className="px-12 py-14">
        <div className="py-8">
            <h1 className="font-bold text-2xl">Featured Course</h1>
            <p className="text-[#BDBDBD]">Everything you need to  when you're looking</p>
        </div>
      <div className="lg:flex gap-x-4">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="pt-10">
            <img src={webDevelopImg} alt="icons" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#000000] font-bold text-md">
              A Complete Web development
            </h2>
            <p className="text-[#878787]">
              Technology to Web development
            </p>
            <div className="flex gap-x-6 pt-6">
              <div className="font-bold">$450</div>
              <div className="flex gap-x-1"><CiYoutube className="mt-1"/><span className="my-auto ">23.5 hours</span></div>
              <div className="flex gap-x-1"><FaRegFile className="mt-1" />52 Article</div>
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="pt-10">
            <img src={musicImg} alt="icons" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#000000] font-bold text-md">
              Music Production Courses
            </h2>
            <p className="text-[#878787]">
              Music & Sounding
            </p>
            <div className="flex gap-x-6 pt-6">
              <div className="font-bold">$320</div>
              <div className="flex gap-x-1"><CiYoutube className="mt-1"/><span className="my-auto ">18 hours</span></div>
              <div className="flex gap-x-1"><FaRegFile className="mt-1" />27 Article</div>
            </div>
          </div>
        </div>

        {/* card 3 */}

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="pt-10">
            <img src={personalityImg} alt="icons" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#000000] font-bold text-md">
             Personality development course
            </h2>
            <p className="text-[#878787]">
              Personal development
            </p>
            <div className="flex gap-x-6 pt-6">
              <div className="font-bold">$620</div>
              <div className="flex gap-x-1"><CiYoutube className="mt-1"/><span className="my-auto ">32.3 hours</span></div>
              <div className="flex gap-x-1"><FaRegFile className="mt-1" />37 Article</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureClasses;
