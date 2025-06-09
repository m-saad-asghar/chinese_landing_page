"use client";

import React from "react";
import Image from "next/image";

const DemoSidebarContent = ({ active, onClick }) => {
  const closeModal = () => {
    onClick();
  };

  return (
    <>
      <div className={`example-demo-modal ${active}`}>
        <div className="inner">
          <ul>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-1.webp"
                  alt="Home One"
                  width={700}
                  height={700}
                />
                <span>Home One</span>
                <a href="/" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-2.webp"
                  alt="Home Two"
                  width={700}
                  height={700}
                />
                <span>Home Two</span>
                <a href="/home-2" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-3.webp"
                  alt="Home Three"
                  width={700}
                  height={700}
                />
                <span>Home Three</span>
                <a href="/home-3" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-4.webp"
                  alt="Home Four"
                  width={700}
                  height={700}
                />
                <span>Home Four</span>
                <a href="/home-4" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-5.webp"
                  alt="Home Five"
                  width={700}
                  height={700}
                />
                <span>Home Five</span>
                <a href="/home-5" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-6.webp"
                  alt="Home Six"
                  width={700}
                  height={700}
                />
                <span>Home Six</span>
                <a href="/home-6" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-7.webp"
                  alt="Home Seven"
                  width={700}
                  height={700}
                />
                <span>Home Seven</span>
                <a href="/home-7" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-8.webp"
                  alt="Home Eight"
                  width={700}
                  height={700}
                />
                <span>Home Eight</span>
                <a href="/home-8" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-9.webp"
                  alt="Home Nine"
                  width={700}
                  height={700}
                />
                <span>Home Nine</span>
                <a href="/home-9" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-10.webp"
                  alt="Home Ten"
                  width={700}
                  height={700}
                />
                <span>Home Ten</span>
                <a href="/home-10" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-11.webp"
                  alt="Home Eleven"
                  width={700}
                  height={700}
                />
                <span>Home Eleven</span>
                <a href="/home-11" className="link-btn"></a>
              </div>
            </li>
            <li>
              <div className="single-demo">
                <Image
                  src="/images/demo-img/home-12.webp"
                  alt="Home Twelve"
                  width={700}
                  height={700}
                />
                <span>Home Twelve</span>
                <a href="/home-12" className="link-btn"></a>
              </div>
            </li>
          </ul>
        </div>

        <div className="header-title">
          <button className="example-demo-modal-control" onClick={closeModal}>
            <i className="fa fa-close"></i>
          </button>
          <div className="title">View Demo</div>
        </div>
      </div>
    </>
  );
};

export default DemoSidebarContent;
