import React, { useContext, useEffect, useState } from "react";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//cart context
import { CartContext } from "../contexts/CartContext";
//import icons
import { BsBag } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
//import link
import { Link } from "react-router-dom";
//import logo
// import Logo from "../img/logo.svg";
import Logo from "../img/shopping-logo.svg";
import { MdStorefront } from "react-icons/md";
//import all products


const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //event listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo  */}
        <div className="flex-1">
          <Link to={"/"}>
            <div>
              <img className="w-[80px] h-[45px]" src={Logo} alt="" />
            </div>
          </Link>
        </div>
        {/* all Products  */}
        <div className="flex-1">
          <div className="flex justify-center items-center">
            <div className="flex-1 text-center">
              <Link to="/allProducts">
                <button aria-label="All Products"
                  className="p-2 rounded"><MdStorefront size={24}/></button>
              </Link>
            </div>
            <div className="flex-1 text-center">
              <Link to="/profile">
                <button
                  aria-label="User Profile"
                  className="p-2 rounded "
                >
                  <FaUserTie size={24} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* cart  */}
        <div className="">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
