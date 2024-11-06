"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const [padding, setPadding] = useState("10px 12%");

  useEffect(() => {
    const handleResize = () => {
      setPadding(window.innerWidth <= 1700 ? "7px 8%" : "10px 12%");
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call for setting padding on load

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 60) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);


  // navbar mobile

  const [menuOpen, setMenuOpen] = useState(false); // State to toggle me

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };



  return (
    <header
      style={
        navBg
          ? {
              padding,
              background: "transparent",
              backdropFilter: "blur(35px)",
            }
          : { background: "fixed" }
      }
    >
      <h1>
        <Link href={"#"} className="logo">
          QWE<span>Ry</span>
        </Link>
      </h1>
      <ul className={`navbar ${menuOpen ? "open" : ""}`}>
        <li>
          <Link className="Link" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Holiday"}>
            Holiday
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Tours"}>
            Tours
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Culture"}>
            Culture
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Contact"}>
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="h-right">
        <li>
          <Link className="Link" href={"#"}>
            {" "}
            Folow
          </Link>
        </li>
        <li>
          <Link
            className="icon"
            target="_blank"
            href={"https://www.instagram.com/moizahmed_shaikh/?hl=en"}
          >
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            className="icon"
            target="_blank"
            href={"https://www.linkedin.com/in/moiz-ahmed-6516b728a/"}
          >
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link
            className="icon"
            target="_blank"
            href={"https://en-gb.facebook.com/moizahmed.shiakh"}
          >
            <FaFacebook />
          </Link>
        </li>
        <div id="menu-icon" onClick={toggleMenu}>
          <HiBars3 />
        </div>
      </div>
    </header>
  );
};

export default Navbar


