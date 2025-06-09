"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partner = () => {
  return (
    <>
      <div className="partner-area ptb-40 bg-ffffff" style={{marginBottom: 50}}>
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="partner-slider"
          >
            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/one.webp"
                  srcSet="/images/one.webp"
                  alt="client-avatar-1"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/two.webp"
                  srcSet="/images/two.webp"
                  alt="client-avatar-2"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/three.webp"
                  srcSet="/images/three.webp"
                  alt="client-avatar-3"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/four.webp"
                 srcSet="/images/four.webp"
                 alt="client-avatar-four"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/five.webp"
                 srcSet="/images/five.webp"
                 alt="client-avatar-5"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/six.webp"
                  srcSet="/images/six.webp"
                  alt="client-avatar-6"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/seven.webp"
                  srcSet="/images/seven.webp"
                  alt="client-avatar-7"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/eight.webp"
                  srcSet="/images/eight.webp"
                  alt="client-avatar-8"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/nine.webp"
                  srcSet="/images/nine.webp"
                  alt="client-avatar-9"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/ten.webp"
                  srcSet="/images/ten.webp"
                  alt="client-avatar-10"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                   src="/images/eleven.webp"
                   srcSet="/images/eleven.webp"
                   alt="client-avatar-11"
                   width={140}
                   height={100}
                 />
               </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/twelve.webp"
                  srcSet="/images/twelve.webp"
                  alt="client-avatar-12"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/thirteen.webp"
                  srcSet="/images/thirteen.webp"
                  alt="client-avatar-13"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/fourteen.webp"
                  srcSet="/images/fourteen.webp"
                  alt="client-avatar-14"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/fifteen.webp"
                  srcSet="/images/fifteen.webp"
                  alt="client-avatar-15"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                   src="/images/sixteen.webp"
                   srcSet="/images/sixteen.webp"
                   alt="client-avatar-16"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                   src="/images/seventeen.webp"
                   srcSet="/images/seventeen.webp"
                   alt="client-avatar-17"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/eighteen.webp"
                  srcSet="/images/eighteen.webp"
                  alt="client-avatar-18"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/nineteen.webp"
                 srcSet="/images/nineteen.webp"
                 alt="client-avatar-19"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/twenty.webp"
                 srcSet="/images/twenty.webp"
                 alt="client-avatar-20"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/twenty_one.webp"
                 srcSet="/images/twenty_one.webp"
                 alt="client-avatar-21"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/twenty_two.webp"
                 srcSet="/images/twenty_two.webp"
                 alt="client-avatar-22"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/twenty_three.webp"
                 srcSet="/images/twenty_three.webp"
                 alt="client-avatar-23"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
