import React from "react";
import HeroVideo from "../components/HeroVideo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

export default function LandingPage() {
  return (
   
  <div>
    <Header />
      <main className="flex-1 relative top-10">   
        <HeroVideo />
        <Cards />
      </main>
      

    <Footer />
      
    </div>
  );
}
