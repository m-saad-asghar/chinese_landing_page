"use client";

import React from "react";
import Link from "next/link";
import HubSpotForm from "../HubSpotForm";
import styles from '../PageBanners/main_banner_one.module.css'
import { Typewriter } from "react-simple-typewriter";

const MainBannerOne = () => {
  return (
    <>
      <div
        id="home"
        className="main-banner"
        style={{ backgroundImage: `url(/images/header_real-estate.png)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
              <div className="col-lg-6 col-md-12" style={{display: "flex", alignItems: "center"}}>
                  <div className="main-banner-text" style={{textAlign: "left"}}>
                    <h4
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                    欢迎来到拉尔克（RAALC）律师事务所 —— 为您每一个阶段提供法律专业支持 
                    </h4>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-once="true"
                      data-aos-duration="1000"
                      style={{fontSize: 45}}
                    >
                      <Typewriter
        words={[
            "值得信赖的法律支持", 
            "以法律赋能企业发展", 
            "您实现法律成功的合作伙伴",
        ]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
      />
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      量身定制的法律解决方案，满足您的多样化需求——无论您需要法律咨询、争议解决，还是出庭代理，我们都将为您提供应得的专业支持。
                    </p>

                    {/* <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <Link href="#welcome" className="btn btn-primary">
                        Get Started
                      </Link>

                      <Link href="#work" className="btn btn-primary view-work">
                        View Work
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className={`col-lg-6 col-md-12 ${styles.form_container}`}>
                <div className={`main-banner-text ${styles.form_styling}`}>
                <p className={styles.form_heading}>
                立即咨询法律顾问！
                </p>
                  <HubSpotForm formId="hubspotForm1"/>
                  <p className={styles.form_footer}>
                  您的信息将被100%安全保密。
            </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBannerOne;
