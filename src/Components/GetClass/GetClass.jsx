import React from "react";
import cardImage from './../../assets/Cards.png'
import { FaArrowRight} from "react-icons/fa6";

const GetClass = () => {
  return (
    <div className="flex lg:flex-row justify-center items-center">
      {/* <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row lg:w-1/2">
          <img
            src={cardImage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      <div className="lg:w-1/2">
        <img src={cardImage} alt="photo" />
      </div>
      <div className="lg:w-1/2 px-8">
        <h1 className="text-[#04004D] lg:text-5xl">Get the Best Class by the Best Teachers</h1>
        <p className="text-[#336C61] py-4">Get your best class and gain the great thing from the best and well qualified experienced teachers all over the world and get shinny. We are a unique training provider willing to give you all the skills and experience you need to fulfil your future career</p>
        <button className="btn pt-4">Read More <FaArrowRight className="ml-2 my-auto" /></button>
      </div>
    </div>
  );
};

export default GetClass;
