import React from "react";
import SideItem from "../../components/SideItem.jsx";

const Navangular = () => {
  return (
    <div className="h-full fixed bottom-0 overflow-x-hidden top-20 m-1 px-2 md:flex md:flex-col mt-2">
      <SideItem text={"setup"} array={["cli"]} />
      <SideItem text={"component"} array={["import", "new"]} />
      <SideItem text={"class"} array={[]} />
      <SideItem text={"service"} array={[]} />
      <SideItem text={"props"} array={[]} />
      <SideItem text={"state"} array={[]} />
      <SideItem text={"style"} array={["scope", "global"]} />
      <SideItem text={"attributes"} array={[]} />
      <SideItem text={"event"} array={["click", "onChange", "customed"]} />
      <SideItem text={"structural"} array={["letof", "index", "styles"]} />
      <SideItem
        text={"others"}
        array={["ngIf", "ngClass", "ngStyle", "ngSwitch", "ngContainer"]}
      />
    </div>
  );
};

export default Navangular;
