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
          formId: "f34f6035-a4be-415e-a5fc-2e5e39482f17",
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