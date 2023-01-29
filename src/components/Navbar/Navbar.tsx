import { useState } from "react";
import { FaBars, FaFacebook, FaLinkedinIn, FaSearch, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li tabIndex={0}>
        <a>
          Services
        </a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <>
      <div id="navbar" className="bg-primary text-white sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="navbar min-h-[80px]">
            <div className="navbar-start">
              <div className="dropdown">
                <label htmlFor="nav-drawer" onClick={() => setOpenMenu(!openMenu)} tabIndex={0} className="btn btn-ghost lg:hidden p-0 mr-3">
                  <FaBars className="text-xl"></FaBars>
                </label>
              </div>
              <a className="text-2xl font-extrabold uppercase cursor-pointer ml-4 lg:ml-0">
                Porto
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{menuItems}</ul>
            </div>
            <div className="mr-3 navbar-end lg:w-8">
              <FaSearch className="cursor-pointer text-xl"></FaSearch>
            </div>
            <div className="navbar-end hidden lg:flex">
              <a className="btn btn-sm btn-ghost text-xl">
                <FaFacebook></FaFacebook>
              </a>
              <a className="btn btn-sm btn-ghost text-xl">
                <FaTwitter></FaTwitter>
              </a>
              <a className="btn btn-sm btn-ghost text-xl">
                <FaLinkedinIn></FaLinkedinIn>
              </a>
            </div>
          </div>
        </div>
      </div>
      {
        openMenu &&
        <div className="drawer">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label htmlFor="nav-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-full bg-primary text-white items-center">
              {menuItems}
            </ul>
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;
