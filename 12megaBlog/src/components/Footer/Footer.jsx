import React from "react";
import { NavLink } from "react-router-dom";
import { SectionTag } from "../index";
function Footer() {
  return (
    
    <footer className="bg-gray-600">
        <SectionTag tagname={"Quick Links"}/>
      <ul className="text-center sm:text-start sm:flex justify-around">
        <div>
          <li className="py-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </div>
        <div>
          <li className="py-2">
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/company">Company</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/terms-conditions">Terms and Conditions</NavLink>
          </li>
        </div>
      </ul>
      <p className="text-center text-sm p-3 border border-t-amber-300">
        CopyRight @2025
      </p>
    </footer>
  );
}

export default Footer;
