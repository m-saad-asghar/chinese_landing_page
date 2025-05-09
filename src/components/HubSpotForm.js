"use client";
import { useEffect } from "react";

const HubSpotForm = ({ formId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "20189826",
          formId: "458d1410-c35e-4895-b49a-202638479cf7",
          region: "na1",
          target: `#${formId}`
        });
      }
    };

    document.body.appendChild(script);
  }, [formId]);

  return <div id={formId}></div>;
};

export default HubSpotForm;