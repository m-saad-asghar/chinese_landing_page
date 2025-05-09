"use client";

import React from "react";
import Link from "next/link";

const Welcome = () => {
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("home");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section id="welcome" className="welcome-area" style={{paddingRight: "5%", paddingTop: 80}}>
        <div className="container">
          {/* <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h4>We are creative</h4>
            <h2>
              Welcome to <span>Addax</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}

          <div className="row justify-content-center g-4">
            <div
              className="col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-gavel icon"></i>
                <h3>推动增长的定制法律战略</h3>
                <p>
                我们的团队制定先进的法律框架，以保护您的资产并确保企业的可持续增长。无论您是个人投资者还是企业客户，我们都将为您量身打造专属策略，降低风险并确保合规。
                </p>
                {/* <Link href="#" title="Read More" className="link-btn">
                  <i className="fa fa-arrow-right"></i>
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-box">
                <i className="fa fa-scale-balanced icon"></i>
                <h3>洞见法律本质，创造非凡价值</h3>
                <p>
                我们的法律顾问融合国际专业经验与本地法规知识，助您做出明智的法律决策。在充满变化的商业环境中，我们确保全面遵守阿联酋法律，为您提供坚实的法律保障。
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
立即咨询法律顾问！
</button>
        </div>
      </section>
    </>
  );
};

export default Welcome;