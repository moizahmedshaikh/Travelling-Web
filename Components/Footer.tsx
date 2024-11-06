
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin,  } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-box">
          <h3>Services</h3>
          <p>Email Marketing</p>
          <p>Compaigns</p>
          <p>Brandings</p>
          <p>Offline</p>
        </div>

        <div className="footer-box">
          <h3>About</h3>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Careers</p>
        </div>

        <div className="footer-box">
          <h3>Help</h3>
          <p>FAQS</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-box">
          <h3>Social</h3>
          <div className="social">
            <li>
              <Link className="icon" target="_blank" href={"https://www.instagram.com/moizahmed_shaikh/?hl=en"}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link className="icon"target="_blank" href={"https://www.linkedin.com/in/moiz-ahmed-6516b728a/"} >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link className="icon" target="_blank" href={"https://en-gb.facebook.com/moizahmed.shiakh"}>
                <FaFacebook />
              </Link>
            </li>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>Copyright 2024 by Moiz Ahmed</p>
      </div>
    </div>
  );
};

export default Footer;
