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
                  src="/images/one.jpg"
                  alt="client-avatar-1"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/two.jpg"
                  alt="client-avatar-2"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/three.jpg"
                  alt="client-avatar-3"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/four.jpg"
                 alt="client-avatar-four"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/five.jpg"
                 alt="client-avatar-5"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/six.jpg"
                  alt="client-avatar-6"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/seven.jpg"
                  alt="client-avatar-7"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/eight.jpg"
                 alt="client-avatar-8"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                src="/images/nine.jpg"
                alt="client-avatar-9"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/ten.jpg"
                 alt="client-avatar-10"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                   src="/images/eleven.jpg"
                   alt="client-avatar-11"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/twelve.jpg"
                  alt="client-avatar-12"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/thirteen.jpg"
                  alt="client-avatar-13"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/fourteen.jpg"
                  alt="client-avatar-14"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/fifteen.jpg"
                  alt="client-avatar-15"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                   src="/images/sixteen.jpg"
                   alt="client-avatar-16"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                   src="/images/seventeen.jpg"
                   alt="client-avatar-17"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                  src="/images/eighteen.jpg"
                  alt="client-avatar-18"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/nineteen.jpg"
                 alt="client-avatar-19"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/twenty.jpg"
                 alt="client-avatar-20"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/twenty_one.jpg"
                 alt="client-avatar-21"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/twenty_two.jpg"
                 alt="client-avatar-22"
                  width={140}
                  height={100}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <Image
                 src="/images/twenty_three.jpg"
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
