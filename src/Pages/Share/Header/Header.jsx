import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Componets/Context/ContextApi';

const Header = () => {
  const {User}=useContext(AuthContext)
    const UlItem = (<>
    <li> <NavLink to='/'>Home</NavLink> </li>
    <li> <NavLink to='/test'>Test</NavLink> </li>
    <li> <NavLink to='/about'>About</NavLink> </li>
    <li> <NavLink to='/appointment'>Appointment</NavLink> </li>
    <li> <NavLink to='/contact'>ContucUs</NavLink> </li>
    <li> <NavLink to='/login'>Login</NavLink> </li>
    </>)
    return (
      <div className="">
        <div className="navbar  -mt-7 mb-4 bg-base-100 shadow-">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-sm"
              >
                {UlItem}
              </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost text-xl">
              Doctor_Portal
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">{UlItem}</ul>
          </div>
          <div className="navbar-end">
            {/* <a className="btn">{User ? User?.displayName : "Dassboard"} </a> */}
            <details>
              <summary>{User ? User?.displayName : "Dassboard"}</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a className='btn'>Profile {User?.displayName} </a>
                </li>
                <li>
                  <a className='btn'>LogOut {User?.displayName} </a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    );
};

export default Header;