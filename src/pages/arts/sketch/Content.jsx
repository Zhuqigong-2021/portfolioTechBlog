import React from "react";
import waterColor from "../../../assets/waterColor.jpg";
import ball from "../../../assets/sketch/ball.jpg";
import cone from "../../../assets/sketch/cone.jpg";
import cube from "../../../assets/sketch/cube.jpg";
import hourglass from "../../../assets/sketch/hourglass.jpg";
import ice from "../../../assets/sketch/ice.jpg";
import poke from "../../../assets/sketch/poke.jpg";
import pyramid from "../../../assets/sketch/pyramid.jpg";
import square from "../../../assets/sketch/square.jpg";
import watermelon from "../../../assets/sketch/watermelon.jpg";

const Pencil = () => {
  return (
    <div className="sketch min-h-[65vh] flex flex-col justify-center items-center text-center">
      <h2 className="my-10 text-xl font-bold bg-gradient-to-r from-transparent via-indigo-500 from-10% via-30% to-transparent to-90%  text-white p-4  w-full text-center">
        My Sketch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={square} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={watermelon} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={cube} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={ball} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={ice} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={poke} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={hourglass} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={pyramid} alt="water" className="h-96 object-cover" />
          </div>
        </div>

        <div className="">
          <div className="border-[16px] border-stone-300 p-12 shadow-md shadow-black bg-white ">
            <img src={cone} alt="water" className="h-96 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pencil;
