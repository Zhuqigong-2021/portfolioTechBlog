import React from "react";
import SideItem from "../../components/SideItem.jsx";

const Navangular = () => {
  return (
    <div className="h-full fixed bottom-0 overflow-x-hidden top-20 m-1 px-2 md:flex md:flex-col mt-2">
      <SideItem text={"setup"} array={["cli", "new"]} />
      <SideItem
        text={"posilayout"}
        array={[
          "normalflow",
          "float",
          "flex",
          "inlineflex",
          "grid",
          "position",
          "zindex",
          "mulColL",
          "overflow",
        ]}
      />
      <SideItem
        text={"advance"}
        array={[
          "custom",
          "calc",
          "advanceSel",
          "pseudoel",
          "advancemar",
          "browsersup",
          "resetnor",
          "featurequ",
          "mediaqu",
          "customfont",
        ]}
      />
      <SideItem
        text={"animation"}
        array={["transition", "animation.", "transform ", "3danimation"]}
      />
    </div>
  );
};

export default Navangular;
