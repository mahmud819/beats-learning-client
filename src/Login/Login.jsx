import React from "react";
import { FaRegCircleUser, FaRegUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <div className=" flex min-h-screen bg-[#F5F5F5] justify-center items-center">
      {/* login main div */}
      <div className="login-main w-1/3 my-auto  pt-1">
        <div className="form-div w-full border-2 p-2 radius-2 rounded-lg z-10 bg-[#FFF]">
          <div className="flex flex-col justify-center items-center p-2 ">
            <FaRegUser className="text-7xl border-2 border-slate-300 rounded-full p-2 text-[#54B8FF]" />
            <h1 className="text-3xl pt-2 text-[#54B8FF]">Login</h1>
            {/* <FaRegCircleUser className="text-6xl" /> */}
          </div>
          <form action="" className="flex flex-col mt-0 p-4">
            <label htmlFor="">Email</label>
            <div className="flex justify-center items-center p-2 -ml-16">
              <MdOutlineMailOutline className="mt-2 -ml-4" />
              <input
                className="mt-1 ml-2 border-b-2 outline-none"
                placeholder="Email"
                type="text"
              />
            </div>

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
            <button className="mt-4 bg-[#54B8FF] p-2">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
