"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <section id="team" className="team-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h4>认识 RAALC</h4>
            <h2>
            我们的团队：驱动企业成功的法律专才
            </h2>
            <p>
            在RAALC，我们的团队由卓越的法律专业人士组成，融合全球视野与对阿联酋法律的深度掌握。我们提供战略性法律解决方案，精准应对企业与个人在阿联酋及全球范围内面临的各类法律挑战。
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="team-slider"
          >
            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/ehab.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">伊哈布·穆罕默德</h3>
                  <span className="post">首席执行官 — 高级诉讼顾问</span>
                </div>

                <div className="social">
                  <ul>
                  
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ehab-mohamed-79bb561a/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/israa.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">伊斯拉·阿卜杜拉</h3>
                  <span className="post">公司事务主管</span>
                </div>

                <div className="social">
                  <ul>
                  
                    <li>
                      <a
                        href="https://www.linkedin.com/in/israa-abdulla-b9b30313b/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/atif.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">阿蒂夫·巴希尔</h3>
                  <span className="post">财务与税务经理</span>
                </div>

                <div className="social">
                  <ul>
                  
                    <li>
                      <a
                        href="https://www.linkedin.com/in/atif-bashir/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

            <Swiper
            spaceBetween={30}
            // navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="team-slider"
          >
            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/kate.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">陈扬</h3>
                  <span className="post">高级公司法律顾问</span>
                </div>

                <div className="social">
                  <ul>
                  
                    <li>
                      <a
                       href="https://www.linkedin.com/in/kate-y-c-745855a5/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/zaur.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">扎乌尔·库尔巴诺夫</h3>
                  <span className="post">高级公司法律顾问</span>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/zaur-kurbanov-088831244/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/anda.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">安达·穆萨拉吉</h3>
                  <span className="post">高级公司法律顾问</span>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/anda-musaraj-57b20519a/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="our-team">
                <div className="pic">
                  <Image
                    src="/images/mohamed.jpg"
                    alt="team-img"
                    className="w-100"
                    width={300}
                    height={350}
                  />
                </div>

                <div className="team-content">
                  <h3 className="title">穆罕默德·塞利姆</h3>
                  <span className="post">高级法律顾问</span>
                </div>

                <div className="social">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mohamed-amin-selim-50ba4386/"
                        className="fa-brands fa-linkedin-in"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Team;
