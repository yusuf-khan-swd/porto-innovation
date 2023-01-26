import { FaFacebook, FaLinkedinIn, FaSearch, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
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
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-primary">
          <li>
            <a>View All</a>
          </li>
          <li>
            <a>Design & Planning</a>
          </li>
          <li>
            <a>Interior Design</a>
          </li>
          <li>
            <a>Exterior Design</a>
          </li>
          <li>
            <a>Construction Drawing</a>
          </li>
        </ul>
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
    <div id="navbar" className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="navbar min-h-[80px]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <a className="text-xl font-extrabold uppercase cursor-pointer">
              Porto
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
          <div className="mt-1 navbar-end lg:w-8">
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
  );
};

export default Navbar;
