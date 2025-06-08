import { motion } from "framer-motion";
import React from "react";

function Cards() {
  return (
    <div
      data-scroll
      data-scroll-speed=".5"
      className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5 font-NeuMontreal"
    >
      <div className="cordcontainer w-1/2 h-[50vh]">
        <div className="card w-full relative bg-[#004D43] h-full rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cordcontainer w-1/2 flex gap-5 h-[50vh]">
        <div className="card bg-[#212121] h-full w-1/2  rounded-xl relative flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 bottom-10 rounded-full">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card w-1/2  bg-[#212121] h-full rounded-xl relative flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2  bottom-10 rounded-full">
            BUSINESS ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
