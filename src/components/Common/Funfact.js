"use client";

import React from "react";
import styles from '../PageBanners/main_banner_one.module.css'

const Funfact = () => {
  return (
    <>
      <section
       className={`funFacts-area ptb-80 ${styles.margin_up}`}
        style={{ backgroundImage: `url(/images/funfact-bg.jpg)` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-map-marker"></i>
                <h2 className="count">4</h2>
                <p>阿联酋办事处 – 迪拜、沙迦、哈伊马角</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-calendar"></i>
                <h2 className="count">30+</h2>
                <p>多年综合法律经验</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-gavel"></i>
                <h2 className="count">100+</h2>
                <p>项法律服务</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              style={{marginTop: 40}}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-users"></i>
                <h2 className="count">70+</h2>
                <p>位法律专业人士</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              style={{marginTop: 40}}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-users"></i>
                <h2 className="count">15+</h2>
                <p>个国家背景</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              style={{marginTop: 40}}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="funFact">
                <i className="fa fa-users"></i>
                <h2 className="count">17+</h2>
                <p>种语言能力</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Funfact;
