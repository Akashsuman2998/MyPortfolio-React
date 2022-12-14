import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
const Footer = () => {
  return (
   
      <footer id="footer">
        <a href="#" className="footer__logo">
          Akash
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Work</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          {/* <li>
            <a href="#testimonials">Testimonials</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com/ak.stayle" target="_blank">
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/_arya_suman?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <FiInstagram />
          </a>
          <a href="https://twitter.com/_Arya_suman" target="_blank">
            <GrTwitter />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; AKASH Suman. all rights reserved</small>
        </div>
      </footer>
   
  );
};

export default Footer;
