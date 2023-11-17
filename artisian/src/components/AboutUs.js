import React from "react";
import { HiUser } from "react-icons/hi2";
const AboutUs = () => {
  return (
    <>
      <div className="w-full">
        <div className="absolute flex flex-col">
          <h1 className="ml-4 mt-3 pl-2 pr-2 max-w-fit bg-teal-700 bg-opacity-40 text-gray-400">
            Who we are
          </h1>

          <h1 className="ml-3 -mt-4 max-w-fit  bg-zinc-950 bg-opacity-40 pl-3 text-gray-400 font-mono">
            We're a Team of 3
          </h1>
          <p className="text-5xl -mt-4 pt-2 bg-zinc-950 ml-3 bg-opacity-60 h-[70px] max-w-fit font-mono pl-2 text-gray-400">
            Designers,thinkers & collaborators
          </p>
          <h1 className="ml-[10px] mb-2 font-mono text-6xl max-w-fit text-gray-400 border-b-2 border-gray-400">
            our team
          </h1>
          <div className="flex xl:flex-col bg-zinc-950  ml-[10px] gap-24 xl:gap-4 max-w-fit  bg-opacity-40">
            <div className="flex w-24 h-24 bg-gray-300 rounded-sm overflow-hidden ">
              <HiUser
                alt="Team Member 1"
                className="bg-zinc-500 w-full h-full object-cover"
              />
              <h1 className="absolute xl:ml-32  mt-[104px]  xl:mt-2 bg-zinc-950 opacity-50 text-white text-[35px] xl:text-[45px]  xl:font-bold font-mono xl:p-2 rounded-md">
                Suhas
              </h1>
            </div>
            <div className=" flex w-24 h-24 bg-zinc-500 rounded-sm overflow-hidden">
              <HiUser
                alt="Team Member 2"
                className="w-full h-full object-cover"
              />
              <h1 className="absolute -ml-5 xl:ml-32 mt-[104px] xl:mt-2 bg-zinc-950 opacity-50 text-white font-bold font-mono text-[35px] xl:text-[45px] xl:p-2 rounded-md">
                Avinash
              </h1>
            </div>
            <div className="flex w-24 h-24 bg-zinc-500 rounded-sm overflow-hidden">
              <HiUser
                alt="Team Member 3"
                className="w-full h-full object-cover"
              />
              <h1 className="absolute ml-2 xl:ml-32 mt-[104px] xl:mt-2 bg-zinc-950 opacity-50 text-white font-bold font-mono text-[35px] xl:text-[45px] xl:p-2 rounded-md">
                Aman
              </h1>
            </div>
          </div>
        </div>

        <img className="" src="/images/aboutus.jpg" alt="about us-image" />
      </div>
    </>
  );
};

export default AboutUs;
