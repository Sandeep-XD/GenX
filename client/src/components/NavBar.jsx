import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="#" alt="Logo" className="h-8 w-8 mr-4" />
            <NavLink
              to="/"
              className="text-lg font-bold text-gray-800 hover:text-gray-900"
            >
              Company Name
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
              activeClassName="text-gray-900"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
              activeClassName="text-gray-900"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
              activeClassName="text-gray-900"
            >
              services
            </NavLink>
          </div>
          <div className="hidden md:flex items-center">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/register")}
            >
              register
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 top-[4em] flex flex-col bg-white shadow-md p-4 w-[150px]">
                <NavLink
                  to="/"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                  activeClassName="text-gray-900"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                  activeClassName="text-gray-900"
                >
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                  activeClassName="text-gray-900"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                  activeClassName="text-gray-900"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
