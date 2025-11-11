import React from "react";
import { FaFacebook, FaGoogle, FaRegUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Regester = () => {
  return (
    <div className=" flex min-h-screen bg-[#F5F5F5] justify-center items-center ">
      {/* login main div */}
      <div className="login-main w-1/3 my-auto  pt-0">
        <div className="form-div w-full border-2 p-2 radius-2 rounded-lg z-10 bg-[#FFF]">
          <div className="flex flex-col justify-center items-center p-2 ">
            <FaRegUser className="text-7xl border-2 border-slate-300 rounded-full p-2 text-[#54B8FF]" />
            <h1 className="text-3xl pt-1 text-[#54B8FF]">Sign Up</h1>
          </div>
          <form action="" className="flex flex-col mt-0 p-2">

            {/* User name section */}

             <label htmlFor="">User Name</label>
            <div className="flex justify-center items-center p-2 -ml-16">
              <MdOutlineMailOutline className="mt-2 -ml-4" />
              <input
                className="mt-1 ml-2 border-b-2 outline-none"
                placeholder="User Name"
                type="text"
              />
            </div>

            {/* Email section */}

            <label htmlFor="">Email</label>
            <div className="flex justify-center items-center p-2 -ml-16">
              <MdOutlineMailOutline className="mt-2 -ml-4" />
              <input
                className="mt-1 ml-2 border-b-2 outline-none"
                placeholder="Email"
                type="email"
              />
            </div>

        {/* password  */}

            <label className="mt-2" htmlFor="">
              Password
            </label>
            <div className="flex justify-center items-center p-2 -ml-16">
              <RiLockPasswordLine className="mt-2 -ml-4" />
              <input
                className="mt-1 ml-2 border-b-2 outline-none"
                placeholder="Password"
                type="Password"
              />
            </div>
            <button className="mt-1 bg-[#54B8FF] p-2">Sign Up</button>
          </form>
          <div className="text-center">
            <Link to="/login" className="text-center text-sm mx-auto">
              Already have an account?{" "}
              <Link to='/login' className="text-[#54B8FF]">Sign In</Link>
            </Link>
          </div>

          {/* scocial media login */}
          <div className="text-center py-2">
            <h3>Or, sign up with</h3>
            <div className="flex justify-center py-1 text-2xl text-[#54B8FF]">
              <FaGoogle></FaGoogle>
              <FaFacebook className="ml-4"></FaFacebook>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
