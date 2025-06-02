import React from "react";

function Feature() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-NeuMontreal tracking-tight">
          Feature projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-normal text-8xl font-grotesk">
              
              {"SALIENCE".split("").map((item,index) => (
                <span>{item}</span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-normal text-8xl font-grotesk">
              {"CARDBOARD".split("").map((item,index) => (
                <span>{item}</span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt=""
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Feature;
