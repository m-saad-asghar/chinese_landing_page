"use client";

import React from "react";
import Link from "next/link";
import HubSpotForm from "../HubSpotForm";
import styles from '../PageBanners/main_banner_one.module.css'
import { Typewriter } from "react-simple-typewriter";

const MainBannerOne = () => {
  return (
    <div id="home" className="main-banner" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background image as an img tag */}
      <img 
        src="/images/header_real-estate.webp" 
        alt="Background"
        fetchPriority="high"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
      />

      <div className="d-table" style={{ width: "100%", height: "100%" }}>
        <div className="d-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12" style={{ display: "flex", alignItems: "center" }}>
                <div className="main-banner-text" style={{ textAlign: "left" }}>
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
                    style={{ fontSize: 25 }}
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
                </div>
              </div>

              <div className={`col-lg-6 col-md-12 ${styles.form_container}`}>
                <div className={`main-banner-text ${styles.form_styling}`}>
                  <p className={styles.form_heading}>
                    立即咨询法律顾问！
                  </p>
                  <HubSpotForm formId="hubspotForm1" />
                          <div
  style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap', // allows stacking on small screens
    textAlign: 'center', // for text centering in stacked mode
  }}
>
  <img
    src="https://api.raalc.ae/storage/lowyer_images/hqesOYuFbRhroZRI3zSrc2xA3lHVD1AieHV7IBo4.webp"
    alt="Ehab Mohamed"
    style={{
      height: '100px',
      width: 'auto',
      borderRadius: '50%',
      marginBottom: '10px',
    }}
  />
  <div
    style={{
      marginLeft: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}
  >
    <div style={{ fontWeight: 'bold', fontSize: '18px' }}>伊哈布·穆罕默德</div>
    <div style={{ fontSize: '14px' }}>
      首席执行官 - 高级诉讼顾问 - 国际仲裁员
    </div>
    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
      +971 55 120 8555
    </div>
  </div>
  
</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBannerOne;
