import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import { AccordionDemo } from "@/components/Faq";
import Footer from "@/components/Footer";
import Learn from "@/components/Learn";
import LogoCarousel from "@/components/LogoCarousel";
import Navbar from "@/components/Navbar";
import Package from "@/components/Package";
import Testimonial from "@/components/Testimonial";


import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel/>
      {/* <Card/> */}
      <Package/>

     <LogoCarousel/>
      <Testimonial/>
      <WhyUs/>
      <AccordionDemo/>
      <Learn/>

      <Footer/>
    </div>
  );
}