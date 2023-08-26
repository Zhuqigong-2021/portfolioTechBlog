import React from "react";

import bottom from "../../../assets/quick/bottom.jpg";
import top from "../../../assets/quick/top.png";
import normal from "../../../assets/quick/normal.jpg";
import quick from "../../../assets/quick/quick.png";

const Pencil = () => {
  return (
    <div className="quick min-h-[65vh] flex flex-col justify-center items-center text-center ">
      <h2 className="my-10 text-xl font-bold bg-gradient-to-r from-transparent via-indigo-500 from-10% via-30% to-transparent to-90%  text-white p-4  w-full text-center">
        Quick Sketching
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row space-y-2 md:space-y-0 lg:space-y-0 md:space-x-8 lg:space-x-8">
        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={bottom} alt="water" className="h-96 object-cover" />
          </div>
        </div>
        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={normal} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={top} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={quick} alt="water" className="h-96 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pencil;
