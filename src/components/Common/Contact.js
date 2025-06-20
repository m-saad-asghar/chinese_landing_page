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
            <h4>Contact Us: Get in Touch</h4>
            <h2>
            Turning Business Challenges into <span> Strategic Wins</span>
            </h2>
            <p>
            Legal challenges don&apos;t just need solving, they need transforming. From business setup and mergers to restructuring and risk management, RAALC provides tailored legal solutions that turn complexity into clarity and ensure compliance every step of the way.
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
                    <i className="fa fa-map-marker"></i> Dubai Office (HQ): Offices 308 , 309 & 312, 3rd Floor, Dubai Supreme Court Complex, Umm Hurair 2, Dubai, UAE
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:inquiry@raalc.ae">inquiry@raalc.ae</a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a href="tel:8007225223">800-7225223</a>
                    <span> (TOLL FREE)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form" style={{padding: 0}}>
              <div className={`main-banner-text ${styles.form_styling}`}>
                <p className={styles.form_heading}>
                Speak to a corporate Lawyer Now
                </p>
                <HubSpotForm formId="hubspotForm2"/>
                  <p className={styles.form_footer}>
            Your information is 100% secure & confidential.
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
