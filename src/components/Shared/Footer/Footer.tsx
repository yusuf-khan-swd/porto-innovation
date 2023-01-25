import React from "react";
import logo from "../../../assets/logo.png";
import "./Footer.css";
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary">
      <div className="p-2">
        <div className="container mx-auto pt-5 pb-3">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 py-5">
            <div className="col-md-4 col-lg-2 mb-4 lg:mb-0">
              <h4 className="font-extrabold text-lg mb-3">Address</h4>
              <ul>
                <li className="mb-1">12345 Porto Blvd.</li>
                <li className="mb-1">Suite 1500</li>
                <li>Los Angeles, California 90000</li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 lg:mb-0">
              <h4 className="font-extrabold text-lg mb-3">Contacts</h4>
              <ul>
                <li>
                  <span className="block mb-1">OFFICE</span>
                  <a
                    href="tel:+1234567890"
                    className="text-6 text-lg-4 text-xl-6 font-weight-bold"
                  >
                    800-123-4568
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-2 mb-4 lg:mb-0">
              <h4 className="font-extrabold text-lg mb-3">Useful Links</h4>
              <ul>
                <li className="mb-1">
                  <a href="demo-architecture-2-services.html">Our Services</a>
                </li>
                <li className="mb-1">
                  <a href="#">Payment Methods</a>
                </li>
                <li className="mb-1">
                  <a href="#">Services Guide</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h4 className="font-extrabold text-lg mb-3">Services</h4>
              <ul>
                <li className="mb-1">
                  <a href="demo-architecture-2-services-detail.html">
                    Design &amp; Planning
                  </a>
                </li>
                <li className="mb-1">
                  <a href="demo-architecture-2-services-detail.html">
                    Interior Design
                  </a>
                </li>
                <li className="mb-1">
                  <a href="demo-architecture-2-services-detail.html">
                    Exerior Design
                  </a>
                </li>
                <li>
                  <a href="demo-architecture-2-services-detail.html">
                    Construction Drawings
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h4 className="font-extrabold text-lg mb-3">About</h4>
              <ul>
                <li className="mb-1">
                  <a href="demo-architecture-2-about-us.html">About Us</a>
                </li>
                <li>
                  <a href="demo-architecture-2-contact.html">Send a Message</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-2">
              <h4 className="font-extrabold text-lg mb-3">Follow Us</h4>
              <ul className="flex">
                <li className="mr-2">
                  <a href="https://www.instagram.com/">
                    <FaInstagram></FaInstagram>
                  </a>
                </li>
                <li className="mr-2">
                  <a href="https://www.twitter.com/">
                    <FaTwitter></FaTwitter>
                  </a>
                </li>
                <li className="mr-2">
                  <a href="https://www.facebook.com/">
                    <FaFacebook></FaFacebook>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container mx-auto pb-4">
            <div>
              <div>
                <hr className="my-0" />
              </div>
            </div>
            <div className="py-5 my-3">
              <div className="flex flex-col items-center">
                <a
                  href="demo-architecture-2.html"
                  className="d-inline-block mb-3"
                >
                  <img alt="Porto" width="115" height="30" src={logo} />
                </a>
                <p className="text-3 mb-0">
                  Porto Architecture 2. © 2023. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
