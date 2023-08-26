import React from "react";

import mooncake from "../../../assets/pencils/mooncake.jpg";
import pomegranate from "../../../assets/pencils/pomegranate.jpg";
import cherry from "../../../assets/pencils/cherry.jpg";

const Pencil = () => {
  return (
    <div className="pencil min-h-[65vh] flex flex-col justify-center items-center text-center">
      <h2 className="my-10 text-xl font-bold bg-gradient-to-r from-transparent via-indigo-500 from-10% via-30% to-transparent to-90%  text-white p-4  w-full text-center">
        Color Pencil Drawings
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row space-y-2 md:space-y-0 lg:space-y-0 md:space-x-8 lg:space-x-8">
        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={mooncake} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={pomegranate} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={cherry} alt="water" className="h-96 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pencil;
