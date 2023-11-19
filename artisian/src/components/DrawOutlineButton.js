import React from "react";
import { FaLink } from "react-icons/fa";

const Example = ({ children }) => {
  return (
    <div className="flex place-content-center">
      <DrawOutlineButton className="">{children}</DrawOutlineButton>
      <FaLink className=" mt-[8px] -ml-[24px]" />
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative pl-2 pr-8 py-2 font-medium text-white transition-colors duration-[400ms] hover:text-blue-500"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example;
