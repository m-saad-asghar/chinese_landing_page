"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll"; 
import Image from "next/image";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true); 

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
 
  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const menuActiveClass = () => {
      const mainNavLinks = document.querySelectorAll(".navbar-nav li a");
      window.addEventListener("scroll", () => {
        const fromTop = window.scrollY;
        mainNavLinks.forEach((link) => {
          if (link.hash) {
            const section = document.querySelector(link.hash);
            if (
              section.offsetTop <= fromTop &&
              section.offsetTop + section.offsetHeight > fromTop
            ) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          }
        });
      });
    };
    menuActiveClass();
  }, []);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "navbar-collapse collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-md navbar-light bg-light header-sticky">
        <div className="container">
          <Link href="/" className="navbar-brand">
          <div>
                              <Image
                                src="/images/raalc_golden_logo.png"
                                alt="raalc-logo"
                                width={220}
                                height={220}
                              />
                            </div>
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => 100}
                  className="nav-link active"
                  href="#home"
                >
                  主页
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#about"
                >
                  关于我们
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#clients"
                >
                  我们的客户
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#services"
                >
                  服务
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#faq"
                >
                  常见问题解答
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#team"
                >
                  我们的团队
                </AnchorLink>
              </li>


              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#gallery"
                >
                  新闻动态 
                </AnchorLink>
              </li>

              {/* <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#work"
                >
                  Work
                </AnchorLink>
              </li> */}

              {/* <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#price"
                >
                  Pricing
                </AnchorLink>
              </li> */}

              {/* <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#blog"
                >
                  Blog
                </AnchorLink>
              </li> */}

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#contact"
                >
                  联系我们
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;