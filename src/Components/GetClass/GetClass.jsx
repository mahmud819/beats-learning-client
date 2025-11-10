import React from "react";
import cardImage from './../../assets/Cards.png'
import { FaArrowRight} from "react-icons/fa6";
// import * as motion from "motion/react-client"
import { motion } from "framer-motion"

const GetClass = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      
      <motion.div initial={{x: -100,opacity: 0}}
            whileInView={{ x: 10,opacity: 1}}
            transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.1, 0.3, 0.8, .8],
            }}   className="w-full lg:w-1/2">
        <img src={cardImage} alt="photo" />
      </motion.div>

      <motion.div initial={{x: 100,opacity: 0}}
            animate={{ x: 10,opacity: 1}}
            transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.1, 0.3, 0.8, .8],
            }}  className="lg:w-1/2 px-8">
        <h1 className="text-[#04004D] text-2xl lg:text-5xl">Get the Best Class by the Best Teachers</h1>
        <p className="text-[#336C61] py-4 text-xs lg:text-sm">Get your best class and gain the great thing from the best and well qualified experienced teachers all over the world and get shinny. We are a unique training provider willing to give you all the skills and experience you need to fulfil your future career</p>
        <button className="btn pt-4">Read More <FaArrowRight className="ml-2 my-auto" /></button>
      </motion.div>

    </div>
  );
};

export default GetClass;
