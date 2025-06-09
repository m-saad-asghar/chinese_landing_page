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
                  srcset="/images/one.webp"
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
                  srcset="/images/two.webp"
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
                  srcset="/images/three.webp"
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
                 srcset="/images/four.webp"
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
                 srcset="/images/five.webp"
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
                  srcset="/images/six.webp"
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
                  srcset="/images/seven.webp"
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
                  srcset="/images/eight.webp"
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
                  srcset="/images/nine.webp"
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
                  srcset="/images/ten.webp"
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
                   srcset="/images/eleven.webp"
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
                  srcset="/images/twelve.webp"
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
                  srcset="/images/thirteen.webp"
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
                  srcset="/images/fourteen.webp"
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
                  srcset="/images/fifteen.webp"
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
                   srcset="/images/sixteen.webp"
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
                   srcset="/images/seventeen.webp"
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
                  srcset="/images/eighteen.webp"
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
                 srcset="/images/nineteen.webp"
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
                 srcset="/images/twenty.webp"
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
                 srcset="/images/twenty_one.webp"
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
                 srcset="/images/twenty_two.webp"
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
                 srcset="/images/twenty_three.webp"
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
