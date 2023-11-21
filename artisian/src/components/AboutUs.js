import React from "react";
import { HiUser } from "react-icons/hi2";
import DrawOutlineButton from "./DrawOutlineButton";
import styled, { keyframes } from "styled-components";
const AboutUs = () => {
  return (
    <>
      <div className="w-full h-full -z-10" id="about">
        <div className="absolute flex flex-col">
          <h1 className="ml-4 text-[40px] mt-3 pl-2 pr-2 font-mono max-w-fit bg-cyan-700 rounded-md text-gray-900">
            Who we are
          </h1>

          <h1 className="ml-3 text-[40px] -mt-4 max-w-fit  pl-3 text-gray-400 font-mono">
            We're a Team of 3
          </h1>
          <p className="text-5xl text-[40px] -mt-4 pt-3 ml-3   h-[70px] max-w-fit font-mono pl-2 text-gray-400">
            Designers,thinkers & collaborators
          </p>
          <h1 className="ml-[10px] text-[40px]  mb-2 font-mono text-6xl max-w-fit text-gray-300 border-b-2 border-gray-400">
            our team
          </h1>
          <div className="flex xl:flex-col z-10  ml-[10px] gap-24 xl:gap-4 max-w-fit ">
            <div className="flex w-24 h-24 bg-gray-300 rounded-sm overflow-hidden ">
              <HiUser
                alt="Team Member 1"
                className="bg-zinc-500 w-full h-full border-2  border-black object-cover"
              />
              <h1 className="absolute xl:ml-32  bg-cyan-700 rounded-md border-black border-2 mt-[104px]  xl:mt-2  text-black text-[35px] xl:text-[40px]  xl:font-bold font-serif xl:p-2">
                Suhas
              </h1>
            </div>
            <div className=" flex w-24 h-24 bg-zinc-500 rounded-sm overflow-hidden">
              <HiUser
                alt="Team Member 2"
                className="w-full h-full object-cover border-2 border-black"
              />
              <h1 className="absolute -ml-5 xl:ml-32 mt-[104px]  bg-cyan-700 rounded-md border-black border-2 xl:mt-2 text-black font-bold font-serif text-[35px] xl:text-[40px] xl:p-2 ">
                Avinash
              </h1>
            </div>
            <div className="flex w-24 h-24 bg-zinc-500 rounded-sm overflow-hidden">
              <HiUser
                alt="Team Member 3"
                className="w-full h-full object-cover border-2 border-black"
              />
              <h1 className="absolute ml-2 xl:ml-32 mt-[104px]  xl:mt-2  bg-cyan-700 rounded-md border-black border-2 text-black font-bold text-[35px] xl:text-[40px] xl:p-2 ">
                Aman
              </h1>
            </div>
            <DrawOutlineButton className="text-2xl">
              Know more about us
            </DrawOutlineButton>
          </div>
        </div>

        <img
          className="w-full h-[800px] object-cover"
          src="/images/aboutus.jpg"
          alt="about us-image"
        />
        <HeroContainer>
          <div className="gradient absolute -mt-[570px] -ml-[50px] "></div>
        </HeroContainer>
      </div>
    </>
  );
};

export default AboutUs;

const rotate = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
const HeroContainer = styled.div`
  .gradient {
    --size: 400px;
    --speed: 25s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(
      90deg,
      rgba(11, 203, 233, 1) 0%,
      rgba(0, 59, 105, 0.9167017148656338) 100%
    );
    animation: ${rotate} var(--speed) var(--easing) alternate infinite;
    border-radius: 0% 50% 50% 50% / 50% 50% 50% 0%;
    transform: rotate(-45deg); /* Adjust the rotation angle if needed */
  }
`;
