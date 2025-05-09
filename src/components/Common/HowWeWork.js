"use client";

import React from "react";
import Image from "next/image";

const HowWeWork = () => {
  return (
    <>
      <section
        className="how-work ptb-80"
        id="gallery"
        style={{ backgroundImage: `url(/images/dott.jpg)` }}
      >
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h2>
            我们的画廊：每一步都体现卓越
            </h2>
            <p>
            在RAALC，我们不仅提供法律咨询服务——我们积极塑造法律领域的格局。我们参与迪拜及全球领先法律活动，体现了我们在法律领域的领导力、合作精神和创新承诺。
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
                 <div className="pic">
                                  <Image
                                    src="/images/gallery_1.JPG"
                                    alt="gallery-img-1"
                                    className="w-100"
                                     style={{height: 350, objectFit: "cover", borderRadius: 10}}
                                    width={300}
                                    height={350}
                                  />
                                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
                 <div className="pic">
                                  <Image
                                    src="/images/gallery_5.JPG"
                                    alt="gallery-img-2"
                                    className="w-100"
                                     style={{height: 350, objectFit: "cover", borderRadius: 10}}
                                    width={300}
                                    height={350}
                                  />
                                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
                 <div className="pic">
                                  <Image
                                    src="/images/gallery_3.JPG"
                                    alt="gallery-img-3"
                                    className="w-100"
                                     style={{height: 350, objectFit: "cover", borderRadius: 10}}
                                    width={300}
                                    height={350}
                                  />
                                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
                 <div className="pic">
                                  <Image
                                    src="/images/gallery_4.JPG"
                                    alt="gallery-img-4"
                                    className="w-100"
                                    style={{height: 350, objectFit: "cover", borderRadius: 10}}
                                    width={300}
                                    height={350}
                                  />
                                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
                 <div className="pic" style={{marginTop: 20}}>
                                  <Image
                                    src="/images/gallery_5.jpeg"
                                    alt="gallery-img-5"
                                    className="w-100"
                                     style={{height: 350, objectFit: "cover", borderRadius: 10}}
                                    width={300}
                                    height={350}
                                  />
                                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
              <div className="pic" style={{marginTop: 20}}>
                                  <Image
                                    src="/images/gallery_6.JPG"
                                    alt="gallery-img-6"
                                    className="w-100"
                                     style={{height: 350, objectFit: "cover", borderRadius: 10}}
                                    width={300}
                                    height={350}
                                  />
                                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
              <div className="pic" style={{marginTop: 20}}>
                                  <Image
                                    src="/images/gallery_7.jpeg"
                                    alt="gallery-img-7"
                                    className="w-100"
                                     style={{height: 350, objectFit: "cover", borderRadius: 10}}
                                    width={300}
                                    height={350}
                                  />
                                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <div className="single-how-work">
              <div className="pic" style={{marginTop: 20}}>
                                  <Image
                                    src="/images/gallery_8.JPG"
                                    alt="gallery-img-8"
                                    className="w-100"
                                    style={{height: 350, objectFit: "cover", borderRadius: 10}}
                                    width={300}
                                    height={350}
                                  />
                                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
