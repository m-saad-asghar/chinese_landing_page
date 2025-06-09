import Contact from "@/components/Common/Contact";
import Faq from "@/components/Common/Faq";
import Footer from "@/components/Common/Footer";
import Funfact from "@/components/Common/Funfact";
import HowWeWork from "@/components/Common/HowWeWork";
import Strategy from "@/components/Common/Strategy";
import Team from "@/components/Common/Team";
import Testimonial from "@/components/Common/Testimonial";
import AboutUsWelcome from "@/components/Common/AboutUsWelcome";
import WhoWeAre from "@/components/Common/WhoWeAre";
import Navbar from "@/components/Layout/Navbar";
import MainBannerOne from "@/components/PageBanners/MainBannerOne";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBannerOne />

      <Strategy />

      <Funfact />

      <Testimonial />

      <AboutUsWelcome />

      <WhoWeAre />

      <Faq />

      <Team />

      <HowWeWork />

      <Contact />

      <Footer />
    </>
  );
}
