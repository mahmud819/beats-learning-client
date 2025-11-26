import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaFacebook, FaGoogle, FaRegUser, FaUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Regester = () => {
  const {creatUser} = useContext(AuthContext)


  const handleSignUp=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);
  }
  return (
    <div className=" flex min-h-screen bg-base-300 justify-center items-center ">
      {/* login main div */}
      <div className="login-main w-6/12 my-auto  p-2">
        <div className="form-div w-full border-2 p-2 radius-2 rounded-lg z-10 bg-[#FFF]">
          <div className="flex flex-col justify-center items-center p-2 ">
            <FaRegUser className="text-7xl border-2 border-slate-300 rounded-full p-2 text-[#54B8FF]" />
            <h1 className="text-3xl pt-1 text-[#54B8FF]">Sign Up</h1>
          </div>
          <form onSubmit={handleSignUp} className="flex flex-col mt-0 p-2">
            {/* User name section */}

            <div className="flex ">

              <div className="w-1/2">
                <label htmlFor="">User Name</label>
                <div className="flex justify-center items-center p-2 ">
                  <FaRegUser className="mt-2 -ml-6" />
                  <input
                    className="mt-1 ml-2 border-b-2 outline-none"
                    placeholder="User Name"
                    type="text"
                    name='name'
                    required
                  />
                </div>
              </div>

              {/* Email section */}

              <div className="1/2">
                <label htmlFor="">Email</label>
                <div className="flex justify-center items-center p-2 ">
                  <MdOutlineMailOutline className="mt-2 -ml-2" />
                  <input
                    className="mt-1 ml-2 border-b-2 outline-none"
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </div>
              </div>
            </div>

            {/* password  */}

            <div className="w-full">
              <label className="mt-2" htmlFor="">
                Password
              </label>
              <div className="flex  p-2 ">
                <RiLockPasswordLine className="mt-2 -ml-2" />
                <input
                  className="mt-1 border-b-2 outline-none"
                  placeholder="Password"
                  type="Password"
                  name="password"
                  required
                />
              </div>
            </div>

            <button className="mt-1 bg-[#54B8FF] p-2">Sign Up</button>
          </form>
          <div className="text-center">
            <Link to="/login" className="text-center text-sm mx-auto">
              Already have an account?{" "}
              <Link to="/login" className="text-[#54B8FF]">
                Sign In
              </Link>
            </Link>
          </div>

          {/* scocial media login */}

          <div className="text-center py-1">
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
