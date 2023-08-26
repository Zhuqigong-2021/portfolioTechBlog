import React from "react";
import waterColor from "../../../assets/waterColor.jpg";

const Pencil = () => {
  return (
    <div className="pencil">
      <p>Here is my water color</p>
      <img src={waterColor} alt="water" className="h-[600px] w-[400px]" />
    </div>
  );
};

export default Pencil;
