// ---
// import github from "../images/github.svg";
// ---

import github from "../images/github.svg";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai/index.js";
import Pencil from "../assets/pencils.jpg";
import waterColor from "../assets/waterColor.jpg";
import accrylic from "../assets/accrylic.jpg";
import sketch from "../assets/sketch.png";
import digital from "../assets/digital.jpg";
import quick from "../assets/quick.jpg";
import "./art.css";
const Art = () => {
  const data = [
    {
      projectDescription: "fullstack e-commerce react app",
      git: "https://github.com/Zhuqigong-2021/E-ComerceREACT",
      imgUrl:
        "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      go: "https://velvety-nasturtium-da270f.netlify.app/",
      type: "Web App",
    },
    {
      projectDescription: "front end vue quiz app",
      git: "https://github.com/Zhuqigong-2021/vue-stackquiz",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1678903394367-5ee2f13f3960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      go: "https://illustrious-cascaron-fab96c.netlify.app/",
      type: "Web App",
    },
    {
      projectDescription: "vanila css js app",
      git: "https://github.com/Zhuqigong-2021/E-ComerceREACT",
      imgUrl:
        "https://images.unsplash.com/photo-1490971588422-52f6262a237a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpbG18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      go: "https://moonlit-zabaione-76c398.netlify.app/",
      type: "Web App",
    },
    {
      projectDescription: "fullstack next AI prompt-shared app",
      git: "https://github.com/Zhuqigong-2021/Share-mind-next13.4",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      go: "https://fastidious-gingersnap-e0bedc.netlify.app/",
      type: "Web App",
    },
    {
      projectDescription: "fullstack React Native sanity app",
      git: "https://github.com/Zhuqigong-2021/React-Native-Food-Delivery-App",
      imgUrl:
        "https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      go: "https://heartfelt-frangollo-92ddfd.netlify.app/",
      type: "Mobile App",
    },
    {
      projectDescription: "fullstack React ASP.netcore app",
      git: "https://github.com/Zhuqigong-2021/ReactASP.net_coreSushiFullStack",
      imgUrl:
        "https://images.unsplash.com/photo-1581781870027-04212e231e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHN1c2hpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      go: "https://master--celadon-horse-9b902b.netlify.app/",
      type: "Web App",
    },
  ];
  const [filteredData, setFilteredData] = useState(data);
  const filterMobile = data.filter((pro) => pro.type == "Mobile App");
  const filterWeb = data.filter((pro) => pro.type == "Web App");
  return (
    <section
      id="art"
      className="flex flex-col justify-center items-center text-center h-auto"
    >
      <h1 className="text-center showcase-text font-extrabold sm:max-w-[400px] md:max-w-[600px] md:text-[50px] text-[30px] mt-48 mb-24 flex-wrap mx-2">
        My
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Arts Gallery
        </span>
      </h1>
      <div className="mb-8 flex gap-2 flex-wrap max-w-7xl justify-center ">
        {/* card */}
        <div className="relative bg-stone-200   hover:backdrop-blur-none h-48 w-[400px] rounded-lg  ">
          <div className="absolute top-2 right-2 bg-stone-400/50 backdrop-blur-lg  p-2 rounded-lg text-white z-20">
            color pencil
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden justify-center items-center w-full rounded-lg  ">
            <a href="/arts/pencils">
              <img
                src={Pencil}
                alt=""
                className="object-fit w-full contain border rounded-lg blur-[2px] transition-all duration-500 hover:blur-none"
              />
            </a>
          </div>

          <div className="h-10 w-10 rounded-full bg-white absolute bottom-2 left-2 flex justify-center items-center">
            <AiOutlineHeart />
          </div>
        </div>

        <div className="relative bg-stone-200 h-48 w-[400px] rounded-lg  ">
          <div className="absolute top-2 right-2 bg-stone-400/50 backdrop-blur-lg p-2 rounded-lg text-white z-10 ">
            water color
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0  justify-center items-center w-full rounded-lg overflow-hidden ">
            <a href="/arts/watercolor">
              <img
                src={waterColor}
                alt=""
                className="object-fit w-[400px] contain border rounded-lg  h-full object-cover blur-[2px] transition-all duration-500 hover:blur-none"
              />
            </a>
          </div>

          <div className="h-10 w-10 rounded-full bg-white absolute bottom-2 left-2 flex justify-center items-center">
            <AiOutlineHeart />
          </div>
        </div>

        <div className="relative bg-stone-200 h-48 w-[400px] rounded-lg  ">
          <div className="absolute top-2 right-2 bg-stone-400/50 backdrop-blur-lg p-2 rounded-lg text-white z-10">
            acrylic
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0  justify-center items-center w-full rounded-lg overflow-hidden">
            <a href="/arts/acrylic">
              <img
                src={accrylic}
                alt=""
                className="object-fit w-[400px] contain border rounded-lg  h-full object-cover blur-[2px] transition-all duration-500 hover:blur-none"
              />
            </a>
          </div>

          <div className="h-10 w-10 rounded-full bg-white absolute bottom-2 left-2 flex justify-center items-center">
            <AiOutlineHeart />
          </div>
        </div>

        <div className="relative bg-stone-200 h-48 w-[400px] rounded-lg ">
          <div className="absolute top-2 right-2 bg-stone-400/50 backdrop-blur-lg  p-2 rounded-lg text-white opacity-80 z-20">
            sketch
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0  justify-center items-center w-full rounded-lg overflow-hidden">
            <a href="/arts/sketch">
              <img
                src={sketch}
                alt=""
                className="object-fit w-[400px] contain border rounded-lg  h-full object-cover blur-[2px] transition-all duration-500 hover:blur-none"
              />
            </a>
          </div>

          <div className="h-10 w-10 rounded-full bg-white absolute bottom-2 left-2 flex justify-center items-center">
            <AiOutlineHeart />
          </div>
        </div>

        <div className="relative bg-stone-200 h-48 w-[400px] rounded-lg ">
          <div className="absolute top-2 right-2 bg-stone-400/50 backdrop-blur-lg p-2 px-4 rounded-lg text-white z-10 ">
            digital
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0  justify-center items-center w-full rounded-lg overflow-hidden">
            <a
              href="/arts/digital"
              //   className="overflow-hidden object-cover "
              // target="_blank"
            >
              <img
                src={digital}
                alt=""
                className="object-fit w-[400px] contain border rounded-lg  h-full object-cover blur-[2px] transition-all duration-500 hover:blur-none "
              />
            </a>
          </div>

          <div className="h-10 w-10 rounded-full bg-white absolute bottom-2 left-2 flex justify-center items-center">
            <AiOutlineHeart />
          </div>
        </div>

        <div className="relative bg-stone-200 h-48 w-[400px] rounded-lg overflow-hidden ">
          <a href="/arts/quick">
            <div className="absolute top-2 right-2 bg-stone-400 opacity-80  p-2 rounded-lg text-white z-10 ">
              quick sketch
            </div>
          </a>
          <div className="absolute top-0 left-0 right-0 bottom-0  justify-center items-center w-full rounded-lg overflow-hidden">
            <a
              href="/arts/quick"
              className="overflow-hidden object-cover z-10 "
              target="_blank"
            >
              <img
                src={quick}
                alt=""
                className="object-fit w-[400px] contain border rounded-lg  h-full object-cover z-10 blur-[2px] transition-all duration-500 hover:blur-none"
              />
            </a>
          </div>

          <div className="h-10 w-10 rounded-full bg-white absolute bottom-2 left-2 flex justify-center items-center">
            <AiOutlineHeart />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Art;
