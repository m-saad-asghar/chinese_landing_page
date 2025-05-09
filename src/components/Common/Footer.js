"use client";

import React from "react";
import Link from "next/link";
import styles from '../PageBanners/main_banner_one.module.css'

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <h4 style={{textAlign: "left"}}>
                  <span style={{textTransform: "none", fontSize: 25}}>沙迦分公司</span>
              </h4>
              <p style={{textAlign: "left", lineHeight: "25px"}}>
              阿联酋沙迦，布海拉海滨大道，萨尔赫阿勒马拉特大厦1307套房，13楼
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4 style={{textAlign: "left"}}>
                  <span style={{textTransform: "none", fontSize: 25}}>哈伊马角分公司</span>
              </h4>
              <p style={{textAlign: "left", lineHeight: "25px"}}>
              阿联酋哈伊马角，阿尔库瓦伊斯海滨大道，阿尔诺姆塔楼1006套房，10楼
              </p>
            </div>
            <div className="col-lg-4 col-md-12" style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/RAALCUAE.ae/"
                    className={`fa-brands fa-facebook-f ${styles.icon_styling}`}
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/raalcuae"
                    className={`fa-brands fa-x-twitter ${styles.icon_styling}`}
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/raalc_uae/"
                    className={`fa-brands fa-instagram ${styles.icon_styling}`}
                    target="_blank"
                  ></Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/uaeraalc/"
                    className={`fa-brands fa-linkedin-in ${styles.icon_styling}`}
                    target="_blank"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
