"use client";

import React from "react";
import Image from "next/image";
import styles from '../PageBanners/main_banner_one.module.css'
import Partner from "./Partner";

const Testimonial = () => {
  return (
    <>
      <section className="testimonials-area ptb-80 bg-ffffff" id="clients">
        <div className="container" style={{backgroundColor: "#ffffff"}}>
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
            style={{backgroundColor: "#ffffff"}}
          >
            <h2>
            我们的客户：行业领袖，真正的合作伙伴，卓越的成果见证
            </h2>
          </div>

          <Partner />

          {/* <div className="row justify-content-center">
            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/one.jpg"
                      alt="client-avatar-1"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/two.jpg"
                      alt="client-avatar-2"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/three.jpg"
                      alt="client-avatar-3"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/four.jpg"
                      alt="client-avatar-four"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/five.jpg"
                      alt="client-avatar-5"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/six.jpg"
                      alt="client-avatar-6"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/seven.jpg"
                      alt="client-avatar-7"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/eight.jpg"
                      alt="client-avatar-8"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/nine.jpg"
                      alt="client-avatar-9"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/ten.jpg"
                      alt="client-avatar-10"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/eleven.jpg"
                      alt="client-avatar-11"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/twelve.jpg"
                      alt="client-avatar-12"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/thirteen.jpg"
                      alt="client-avatar-13"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/fourteen.jpg"
                      alt="client-avatar-14"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/fifteen.jpg"
                      alt="client-avatar-15"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/sixteen.jpg"
                      alt="client-avatar-16"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/seventeen.jpg"
                      alt="client-avatar-17"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/eighteen.jpg"
                      alt="client-avatar-18"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/nineteen.jpg"
                      alt="client-avatar-19"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/twenty.jpg"
                      alt="client-avatar-20"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/twenty_one.jpg"
                      alt="client-avatar-21"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/twenty_two.jpg"
                      alt="client-avatar-22"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

                
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-feedback">
                <div className="client-info">
                  <div className={styles.set_icon}>
                    <Image
                      src="/images/twenty_three.jpg"
                      alt="client-avatar-23"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>

            
              </div>
            </div>



          </div> */}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
