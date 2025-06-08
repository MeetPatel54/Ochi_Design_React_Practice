import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 rounded-tl-3xl  rounded-tr-3xl  bg-[#004D43] h-full"
    >
      <div className="text border-t-1 border-b-1 border-zinc-300 flex whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[20vw] leading-none font-grotesk pt-5 uppercase -mb-[5.5vw] pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[20vw] leading-none font-grotesk pt-5 uppercase -mb-[5.5vw] pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[20vw] leading-none font-grotesk pt-5 uppercase -mb-[5.5vw] pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
