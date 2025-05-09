"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../Common/PhoneButton.module.css";

const PhoneButton = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const saveLog = async () => {
    try {
      await fetch('https://api.raalc.ae/api/save_log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Phone button clicked from Commercial Landing Page',
          origin: "Commercial",
          type: "Phone",
          source: "Web",
          page_url: window.location.href
        }),
      });
      console.log('Log sent!');
    } catch (error) {
      console.error('Log failed:', error);
    }
  };

  // const sendLogToZapier = async () => {
  //   try {
  //     await fetch("/api/zapier-log", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         message: "WhatsApp button clicked from Commercial Landing Page",
  //         origin: "Commercial",
  //         type: "Whatsapp",
  //         source: "Web",
  //         timestamp: new Date().toISOString(),
  //         page_url: window.location.href,
  //       }),
  //     });
  
  //     console.log("Log sent to Zapier!");
  //   } catch (err) {
  //     console.error("Zapier log failed:", err);
  //   }
  // };

  useEffect(() => {
    // const hasSeenMessage = sessionStorage.getItem("whatsappGreeting");

    // if (!hasSeenMessage) {
    //   setShowMessage(true);
    //   sessionStorage.setItem("whatsappGreeting", "true");
    // }
  }, []);

  return (
    <div className={styles.whatsappContainer}>
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "110%",
            backgroundColor: "#dab35c",
            color: "#ffffff",
            padding: "8px 12px",
            borderRadius: "6px",
            whiteSpace: "nowrap",
            zIndex: 9999,
            fontSize: "14px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
        Toll-Free Legal Support — Call RAALC Now!
         No cost, no hassle. Just expert advice.
        </div>
      )}

      {/* Phone Button */}
      <Link
        href="tel:8007225223"
        rel="noopener noreferrer"
        className={styles.whatsapp_button}
        onClick={() => {
          saveLog();
          // sendLogToZapier();
        }}
        style={{
          width: 80,
          height: 80,
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Image
          src="/images/phone_icon.png"
          alt="Phone"
          width={80}
          height={80}
          className={styles.whatsapp_icon}
        />
      </Link>
    </div>
  </div>
  );
};

export default PhoneButton;