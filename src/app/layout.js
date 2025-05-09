

import "../app/styles/bootstrap.min.css";
import "../app/styles/font-awesome.min.css";
import "../app/styles/animate.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../app/styles/style.css";
import "../app/styles/responsive.css";
import "../app/styles/dark.css";

import { Poppins } from "next/font/google";
import GoTop from "@/components/Common/GoTop";
import DemoSidebar from "@/components/Common/DemoSidebar/DemoSidebar";
import AosAnimation from "@/components/Layout/AosAnimation";
import DarkModeSwitcher from "@/components/Layout/DarkModeSwitcher";
import WhatsAppButton from "@/components/Common/WhatsappButton";
import PhoneButton from "@/components/Common/PhoneButton";
import Script from "next/script";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "RAALC Law Firm",
  description: "RAALC Law Firm",
  robots: "noindex, nofollow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Head Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NK2H57S');
            `,
          }}
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={poppins.className}>
        {/* Google Tag Manager NoScript (inside <body>) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK2H57S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Main content */}
        {children}

        {/* Floating contact buttons */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <PhoneButton />
          <WhatsAppButton />
        </div>

        <GoTop />
        <AosAnimation />

        {/* Optional UI components */}
        {/* <DarkModeSwitcher />
        <DemoSidebar /> */}
      </body>
    </html>
  );
}
