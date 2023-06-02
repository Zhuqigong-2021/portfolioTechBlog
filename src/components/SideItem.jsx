import React, { useState } from "react";
import down from "../images/down.svg";
import up from "../images/up.svg";
const SideItem = ({ text, array }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full ">
      <div className="flex justify-between  ">
        <a href={`#${text}`}>
          <span className="font-bold">{text}</span>
        </a>
        <button
          className="ml-4"
          id="btnbasic"
          onClick={() => setToggle(!toggle)}
        >
          {/* {toggle ? '🔼' : '🔽'} */}
          {toggle ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
        </button>
      </div>
      <div className="flex flex-col ">
        {toggle && (
          <div className="flex flex-col ml-4 items-left ">
            {array.map((item) => (
              <a href={`#${item}`} className="font-semibold">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideItem;
