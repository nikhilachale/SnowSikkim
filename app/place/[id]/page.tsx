import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Learn from "@/components/Learn";
import LogoCarousel from "@/components/LogoCarousel";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
      <div>
        <Navbar/>
        <Learn/>
    
       <LogoCarousel/>
       <Info/>
       
        <Footer/>
       
      </div>
    );
  }