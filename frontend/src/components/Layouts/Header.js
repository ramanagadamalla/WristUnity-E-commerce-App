import React from "react";
// import { NavLink } from "react-router-dom";
import logoimage from "../../logo/logo-black.png";
import { LuShoppingCart } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
const Header = () => {
  return (
    <>
      {/* <nav className="bg-gray-100 fixed top-0 left-0 right-0 w-full"> */}
      <nav className="bg-gray-200 w-full mt-0">
        <div className="mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8  mt-0  w-full">
          <div className="shadow text-black-900 flex h-14 items-center justify-between  mt-0 w-full">
            <div className=" inset-y-0 left-0 flex items-center justify-center sm:hidden">
              {/* Mobile menu button*/}
            </div>
            {/* logo */}
            <div className="flex flex-shrink-0 flex space-x-3 items-center justify-start">
              <img className="h-12 w-auto" src={logoimage} alt="logo" />
              <h1 className="font-sans text-2xl">WristUnity</h1>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className=" flex items-center hidden sm:ml-6 sm:block  ">
                <div className=" flex items-center flex space-x-4 justify-center">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a
                    href="/"
                    className=" text-black-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center"
                    // aria-current="page"
                  >
                    <AiFillHome className="mr-3 text-2xl" />
                    HOME
                  </a>
                  <a
                    href="/category"
                    className="text-black-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    CATEGORY
                  </a>
                  <a
                    //for routing go to app.js
                    href="/register"
                    className=" text-black-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    REGISTER
                  </a>
                  <a
                    href="/login"
                    className=" text-black-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    LOGIN
                  </a>
                  <a
                    href="/contact"
                    //   playfairsc: ["Playfair Display SC", "serif"],
                    className=" text-black-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    CONTACT US
                  </a>
                  <a
                    href="/cart"
                    className="text-black-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center"
                  >
                    <LuShoppingCart className="mr-1 text-2xl" />
                    {/* Add margin-right to separate icon and text */}
                    CART
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>
        {/* </div> */}
        {/* Mobile menu, show/hide based on menu state. */}

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="/"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              HOME
            </a>
            <a
              href="/categoty"
              className="text-gray-900 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              CATEGORY
            </a>
            <a
              href="/register"
              className="text-gray-900 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              REGISTER
            </a>
            <a
              href="/login"
              className="text-gray-900 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              LOGIN
            </a>
            <a
              href="/contact"
              className="text-gray-900 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
