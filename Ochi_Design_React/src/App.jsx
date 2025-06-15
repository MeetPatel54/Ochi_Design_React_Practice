import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import DesktopOnly from "./components/Desktoponly";
import Titleblinker from "./components/Titleblinker";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <DesktopOnly>
      <Titleblinker blinkTitle="Click Me 👀" intervalTime={100} />
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
    </DesktopOnly>
  );
}

export default App;
