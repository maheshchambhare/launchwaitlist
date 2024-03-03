import React from "react";

function Navbar() {
  return (
    <div className="w-[95%]  mMax:w-[80%] lMax:w-[70%] mx-auto h-[60px]  flex justify-between items-center  ">
      <div className=" w-[50%] h-full ">
        <h1 className="flex font-brand font-[400] text-[30px] text-textPrimary items-center">
          BRIEFOLOGY
        </h1>
      </div>
      <div className=" w-[50%] h-full"></div>
    </div>
  );
}

export default Navbar;
