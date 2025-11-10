import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from './../../../src/assets/Logo.png'

const Navbar = () => {

    const Links =(
        <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink to='/courses'>Courses</NavLink>
        </li>
        <li>
            <NavLink to='/apparentiships'>Apparentiships</NavLink>
        </li>
        <li>
            <NavLink to='/more'>More</NavLink>
        </li>
        </>
    )
  return (
    <div>
      <div className="navbar  bg-base-100 shadow-sm lg:px-6 pt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </label>
            
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {Links}
            </ul>
          </div>
          <div className="hidden lg:block">
            <img src={logoImg} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:pt-6">
            {Links}
          </ul>
        </div>
        {/* button section */}
        <div className="navbar-end gap-x-2 lg:pt-6">
          <NavLink className='btn'>Sign In</NavLink>
          <NavLink to='/login' className='btn'>Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
