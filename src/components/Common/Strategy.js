"use client";

import React from "react";
import Link from "next/link";
import Welcome from "./Welcome";

const Strategy = () => {
  return (
    <>
      <section   id="about" className="strategy-area">
        <div className="container-fluid p-0">
          <div className="row ">
            <div
              className="col-lg-6 col-md-5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div
                className="image"
                style={{ backgroundImage: `url(/images/faq_image.jpg)` }}
              ></div>
            </div>

            <div
              className="col-lg-6 col-md-7"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="about-strategy" style={{paddingTop: 80}}>
                <div className="section-title">
                  <h4>RAALC —— 您在阿联酋的战略法律合作伙伴</h4>
                  <h2>
                  关于 <span>RAALC律师事务所</span>
                  </h2>
                  <p>
                  我们为个人、企业家以及各类规模的公司提供量身定制的专业法律咨询服务。从争议解决到公司架构设计，我们的团队致力于提供推动您成功的专业法律解决方案。
                  </p>
                </div>
                <Welcome />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategy;