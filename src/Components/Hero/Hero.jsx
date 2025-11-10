import React from "react";
import { Link } from "react-router-dom";
import heroImg from './../../assets/hero.png'
// import * as motion from "motion/react-client"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    
    <div className="flex flex-col-reverse lg:px-6 lg:flex-row">


      <motion.div
            initial={{x: -100,opacity: 0}}
            whileInView={{ x: 10,opacity: 1}}
            transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.1, 0.3, 0.8, .8],
            }} className="p-4 lg:w-1/2 lg:pt-20">
        <p className="text-[#2F2B71] text-xs text-center lg:text-xl lg:text-left">TRAINING TO SUCCEED</p>
        <h1 className="text-[#5F596E] py-2 text-xl text-center lg:text-6xl py-6 lg:text-left">Believe and you can achieve </h1>
        <p className="text-xs lg:text-xl">
          Learn any skill from comfort of your home Anywhere and Anytime for
          only $10
        </p>
        <Link className="w-[100%] mx-auto btn mt-2 bg-[#54B8FF] text-white lg:mt-8 lg:w-4/12">Apply Now</Link>
      </motion.div>
      
            {/* hero image */}
      <motion.div initial={{x: 100,opacity: 0}}
            whileInView={{ x: 10,opacity: 1}}
            transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.1, 0.3, 0.8, .8],
            }}  className="lg:w-1/2 pt-8">
         <img className="lg:w-full" src={heroImg} alt="hero photo" />
      </motion.div>

    </div>
  );
};

export default Hero;
