import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Import social media icons
import HeroVideo from "../components/HeroVideo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
   
  <div>
    <Header />
      <main className="flex-1 relative top-10">   
      <HeroVideo />
        <div className=" min-h-72"></div>
        <div className=" min-h-72"></div>
      </main>
      

    <Footer />
      
    </div>
  );
}
