"use client";

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../../utils/baseUrl";
import styles from '../PageBanners/main_banner_one.module.css'
import HubSpotForm from "../HubSpotForm";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, message } = contact;
      const payload = { name, email, number, message };
      const response = await axios.post(url, payload);
      console.log(response.data);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <h4>联系我们：取得联系</h4>
            <h2>
            RAALC —— 法律细节成就卓越
            </h2>
            <p>
            不要让法律事务悬而未决。立即通过可信赖的法律团队保护您的企业和投资。预约咨询，让我们帮助您做出明智的法律决策，支持您的长期成功。
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115476.08537794588!2d55.237817068899886!3d25.24946273940273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f69c52eb45b59%3A0xaeb6a9b245a8bdf6!2sPO%20128334%D8%8C%20Supreme%20Court%20Complex%20-%20Office%20308%20%26%20309%20-%20Umm%20Hurair%202%20-%20Dubai!3m2!1d25.2494856!2d55.3202186!5e0!3m2!1sen!2sae!4v1744366261455!5m2!1sen!2sae"
                width="100%"
                height="392"
                loading="lazy"
              ></iframe>

              <div className="contact-info" style={{padding: 38}}>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> 迪拜办公室（总部）阿联酋迪拜，迪拜最高法院大楼，308和309办公室，三楼
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:inquiry@raalc.ae">inquiry@raalc.ae</a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="tel:8007225223">800-7225223</a>
                    <span>（免费电话）</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form" style={{padding: 0}}>
              <div className={`main-banner-text ${styles.form_styling}`}>
                <p className={styles.form_heading}>
                立即咨询法律顾问！
                </p>
                <HubSpotForm formId="hubspotForm2"/>
                  <p className={styles.form_footer}>
                  您的信息将被100%安全保密。
            </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
