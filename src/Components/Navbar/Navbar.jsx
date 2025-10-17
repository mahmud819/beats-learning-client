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
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img src={logoImg} alt="" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {Links}
            </ul>
          </div>
          <div>
            <img src={logoImg} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:pt-6">
            {Links}
          </ul>
        </div>
        <div className="navbar-end lg:pt-6">
          <NavLink className='btn'>Sign In</NavLink>
          <NavLink className='btn'>Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
