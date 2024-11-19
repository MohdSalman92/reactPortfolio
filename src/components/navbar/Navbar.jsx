import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaArrowUp, FaDownload } from "react-icons/fa";


function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  return (
    <>
      <div className="h-[50px] p-3 bg-black text-white drop-shadow-md flex justify-between sticky top-0 w-full z-50 overflow-x-hidden-hidden">
        <div
          className="menu md:hidden text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {openMenu ? <IoMdClose /> : <RiMenu2Fill />}
        </div>
        <div className="hidden md:block text-xl bold">SA<span className="text-[var(--theme)]">L</span>MAN</div>
        <ul className="hidden md:flex gap-4">
          <li className=""><Link to = "/">Home</Link></li>
          <li><Link to = "about">About</Link></li>
          <li><Link to = "education" >Education</Link></li>
          <li><Link to = "skills" >Skills</Link></li>
          <li><Link to = "certification">Certification</Link></li>
          <li><Link to = "projects" >Projects</Link></li>
          <li><Link to = "contact" >Contact</Link></li>
        </ul>
        <button className="">
          <FaDownload className="inline mr-2 -mt-2"/>Download Resume
        </button>
        {/* <Outlet /> */}
      </div>
      {openMenu && (
        <div className="fixed bg-black/50 text-[var(--primary)] w-[50%] max-w-[200px] p-4 md:hidden z-50">
          <ul className="grid gap-4">
          <li onClick={toggleMenu}><Link to = "/">Home</Link></li>
          <li onClick={toggleMenu}><Link to = "about">About</Link></li>
          <li onClick={toggleMenu}><Link to = "education" >Education</Link></li>
          <li onClick={toggleMenu}><Link to = "skills" >Skills</Link></li>
          <li onClick={toggleMenu}><Link to = "certification" >Certification</Link></li>
          <li onClick={toggleMenu}><Link to = "projects" >Projects</Link></li>
          <li onClick={toggleMenu}><Link to = "contact" >Contact</Link></li>
          </ul>
        </div>
      )}
      {/* <button className="absolute p-5 bottom-6 right-6 bg-neutral-400 dark:bg-black dark:text-white rounded-full">
        <FaArrowUp />
      </button> */}
    </>
  );
}

export default Navbar;
