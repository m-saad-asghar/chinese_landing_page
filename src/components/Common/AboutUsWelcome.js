"use client";

import React from "react";
import Link from "next/link";

const AboutUsWelcome = () => {
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section id="about_us_welcome" className="welcome-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
            以洞察力、诚信与影响力为基础的战略法律支持
            </h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-scale-balanced icon"></i>
                <h3>实用法律解决方案</h3>
                <p>
                旨在保障您的权益并优化运营流程
                </p>
                {/* <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-eye icon"></i>
                <h3>量身定制的法律视角</h3>
                <p>
                评估您的法律状况，提供最优战略建议。
                </p>
                {/* <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link> */}
              </div>
            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-handshake icon"></i>
                <h3>Y诚信与专业并重</h3>
                <p>
                透明且以结果为导向的服务，确保长期法律保障。
                </p>
                {/* <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link> */}
              </div>
            </div>

            {/* <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-life-ring icon"></i>
                <h3>Fast Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div style={{display: "flex",
    justifyContent: "center",
    marginTop: 50}}>
        <button
  onClick={scrollToHomePage}
  style={{
    backgroundColor: "#dab35c",
    color: "#ffffff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  }}
>
立即获取专家法律建议！
</button>
        </div>
      </section>
    </>
  );
};

export default AboutUsWelcome;
