import React from "react";
import water1 from "../../../assets/watercolor/water1.jpg";
import water2 from "../../../assets/watercolor/water2.jpg";
import water3 from "../../../assets/watercolor/water3.jpg";
import water4 from "../../../assets/watercolor/water4.jpg";
import water5 from "../../../assets/watercolor/water5.jpg";
import water6 from "../../../assets/watercolor/water6.jpg";
import water7 from "../../../assets/watercolor/water7.jpg";
import water8 from "../../../assets/watercolor/water8.jpg";

const Pencil = () => {
  return (
    <div className="watercolor  min-h-[65vh] flex flex-col justify-center items-center text-center ">
      <h2 className="my-10 text-xl font-bold bg-gradient-to-r from-transparent via-indigo-500 from-10% via-30% to-transparent to-90%  text-white p-4  w-full text-center">
        WaterColor Painting
      </h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-7">
        <div className="flex justify-center items-center">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img
              src={water1}
              alt="water"
              className="h-[450px] object-cover w-[580px]"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img
              src={water2}
              alt="water"
              className="h-[450px] object-cover w-[580px]"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img
              src={water3}
              alt="water"
              className="h-[450px] object-cover w-[580px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img
              src={water4}
              alt="water"
              className="h-[450px] object-cover w-[580px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img
              src={water5}
              alt="water"
              className="h-[450px] object-cover w-[580px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img
              src={water6}
              alt="water"
              className="h-[450px] object-cover w-[580px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img
              src={water7}
              alt="water"
              className="h-[450px] object-cover w-[580px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img
              src={water8}
              alt="water"
              className="h-[450px] object-cover w-[580px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pencil;
