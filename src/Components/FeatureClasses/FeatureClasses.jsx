import React from "react";
import web from './../../assets/Icon.png'
import progessIcon from './../../assets/Icon (1).png'
import graduateIcon from './../../assets/Icon (2).png'

const FeatureClasses = () => {
  return (
    <div className="px-12 py-14">
        <div className="py-8">
            <h1 className="font-bold text-2xl">Featured Course</h1>
            <p className="text-[#BDBDBD]">Everything you need to  when you're looking</p>
        </div>
      <div className="lg:flex gap-x-4">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={teacherIcon} alt="icons" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#1E1E1E] font-bold text-lg">
              Experienced Teacher
            </h2>
            <p>
              We teach in small groups with experienced, supportive staff who
              are trained to understand some of the problems our students face.{" "}
            </p>
          </div>
        </div>

        {/* card 2 */}

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={progessIcon} alt="icons" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#1E1E1E] font-bold text-lg">
              Progressive Learning
            </h2>
            <p>
              Our mission is to use our knowledge, skills, and networks to equip
              people with multiple disadvantages with the skills to gain and
              sustain employment
            </p>
          </div>
        </div>

        {/* card 3 */}

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={graduateIcon} alt="icons" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#1E1E1E] font-bold text-lg">
              Graduate and job ready
            </h2>
            <p>
              We are a unique training provider willing to give you all the
              skills and experience you need to fulfil your future career
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureClasses;
