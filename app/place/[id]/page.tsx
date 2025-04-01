import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Learn from "@/components/Learn";
import LogoCarousel from "@/components/LogoCarousel";

export default function Home() {
    return (
      <div>
        
        <Learn/>
    
       <LogoCarousel/>
       <Info/>
        <Footer/>
       
      </div>
    );
  }