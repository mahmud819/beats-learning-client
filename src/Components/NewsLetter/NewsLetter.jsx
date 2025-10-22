import React from "react";
import newsLetterImg from "./../../assets/newsLetter.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import circleImg from "./../../assets/circled-lines.png";

const NewsLetter = () => {
  return (
    
      
      <div className="py-12 flex justify-center items-center">
        

        <div className="lg:px-6 w-11/12 ml-6 flex justify-between bg-[#8BD2BD]">
          <div className="lg:w-1/2 lg:px-4 p-6">
            <p className="text-[#8785AA] text-xl">NEWSLETTER</p>
            <h1 className="text-[#101130] lg:text-5xl py-6">
              Subscribe Our Newsletter
            </h1>
            <div className="flex py-6">
              <input
                className="w-full h-12 px-6 py-4 outline-none"
                placeholder="Enter Your Email"
                type="email"
                name=""
                id=""
              />
              <FaLongArrowAltRight className="relative text-4xl my-auto -left-16" />
            </div>
          </div>
          <div className="lg:w-1/2 my-auto relative top-5">
            {/* <img
            className="w-[40%] absolute -bottom-20 right-0"
            src={circleImg}
            alt=""
          /> */}
            <img
              className="lg:w-full ml-2 "
              src={newsLetterImg}
              alt="hero photo"
            />
          </div>
        </div>
      </div>
      
    
  );
};

export default NewsLetter;
