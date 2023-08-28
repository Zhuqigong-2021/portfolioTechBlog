import React from "react";
import acry1 from "../../../assets/acrylic/acry1.jpg";
import acry2 from "../../../assets/acrylic/acry2.jpg";
import acry3 from "../../../assets/acrylic/acry3.jpg";
import acry4 from "../../../assets/acrylic/acry4.jpg";
import acry5 from "../../../assets/acrylic/acry5.jpg";
import acry6 from "../../../assets/acrylic/acry6.jpg";
import acry7 from "../../../assets/acrylic/acry7.jpg";
import acry8 from "../../../assets/acrylic/acry8.jpg";
import acry9 from "../../../assets/acrylic/acry9.jpg";
import acry10 from "../../../assets/acrylic/acry10.jpg";
import "./style.css";

const Content = () => {
  return (
    <div className="pencil min-h-[65vh] flex flex-col   text-center ">
      <h2 className="my-10 text-xl font-bold bg-gradient-to-r from-transparent via-indigo-500 from-10% via-30% to-transparent to-90%  text-white p-4  w-full text-center">
        Acrylic Painting
      </h2>
      <div className="gallery  w-full">
        <div className=" flex justify-center items-center big  p-4 lg:p-1 lg:py-20 border-stone-300 border-[10px]  shadow-stone-800 shadow-md  ">
          <img src={acry1} alt="" className="" />
        </div>
        {/* <div className="flex justify-center items-center p-4 border-stone-300 border-[10px]  shadow-stone-800 shadow-md">
          <img src={acry2} alt="" className="" />
        </div> */}
        <div className="flex justify-center items-center wide p-4 border-stone-300 border-[10px] shadow-stone-800 shadow-md">
          <img src={acry3} alt="" className="" />
        </div>
        <div className="flex justify-center items-center wide p-4 border-stone-300 border-[10px]  shadow-stone-800 shadow-md">
          <img src={acry4} alt="" className="" />
        </div>
        <div className="flex justify-center items-center wide p-4 border-stone-300 border-[10px] shadow-stone-800 shadow-md">
          <img src={acry5} alt="" className="" />
        </div>

        <div className="flex justify-center items-center wide p-4 border-stone-300 border-[10px] shadow-stone-800 shadow-md">
          <img src={acry6} alt="" className="" />
        </div>
        <div className="flex justify-center items-center big p-4 lg:p-1 lg:py-10 border-stone-300 border-[10px]  shadow-stone-800 shadow-md">
          <img src={acry7} alt="" className="" />
        </div>

        <div className="flex justify-center items-center big p-4 lg:p-1 lg:py-10 border-stone-300 border-[10px]  shadow-stone-800 shadow-md ">
          <img src={acry8} alt="" className="" />
        </div>
        <div className="flex justify-center items-center wide p-4 border-stone-300 border-[10px]  shadow-stone-800 shadow-md ">
          <img src={acry9} alt="" className="" />
        </div>
        <div className="flex justify-center items-center wide p-4 border-stone-300 border-[10px]  shadow-stone-800 shadow-md ">
          <img src={acry10} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Content;
