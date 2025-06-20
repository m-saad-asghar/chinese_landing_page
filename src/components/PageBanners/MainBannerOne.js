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
        src="/images/home_page_bg_image.webp" 
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
                    RAALC Law Firm — Your Corporate Legal Partner in the UAE
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
                        "Corporate Lawyer in Dubai",
                        "Trusted Dispute Resolution Partner",
                        "Expert Legal Support for Companies",
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
                    Legal clarity is not a luxury, it’s your business advantage. RAALC’s corporate lawyers deliver end-to-end legal support for company formation, business setup in Dubai, contract drafting, and corporate arbitration. From M&A legal advisory to trademark registration, we simplify the law so you can scale with confidence and peace of mind.
                  </p>
                </div>
              </div>

              <div className={`col-lg-6 col-md-12 ${styles.form_container}`}>
                <div className={`main-banner-text ${styles.form_styling}`}>
                  <p className={styles.form_heading}>
                    Speak to a Corporate Lawyer Now!
                  </p>
                  <HubSpotForm formId="hubspotForm1" />
                  <p className={styles.form_footer}>
                    Your information is 100% secure & confidential.
                  </p>
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
