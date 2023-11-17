import React, { useState } from "react";
import Contact from "../pages/Contact";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";

const ContactUs = () => {
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isYoutubeHovered, setIsYoutubeHovered] = useState(false);

  const handleIconMouseEnter = (icon) => {
    switch (icon) {
      case "Instagram":
        setIsInstagramHovered(true);
        break;
      case "Twitter":
        setIsTwitterHovered(true);
        break;
      case "Discord":
        setIsDiscordHovered(true);
        break;
      case "Facebook":
        setIsFacebookHovered(true);
        break;
      case "Youtube":
        setIsYoutubeHovered(true);
        break;
      default:
        break;
    }
  };

  const handleIconMouseLeave = (icon) => {
    switch (icon) {
      case "Instagram":
        setIsInstagramHovered(false);
        break;
      case "Twitter":
        setIsTwitterHovered(false);
        break;
      case "Discord":
        setIsDiscordHovered(false);
        break;
      case "Facebook":
        setIsFacebookHovered(false);
        break;
      case "Youtube":
        setIsYoutubeHovered(false);
        break;
      default:
        break;
    }
  };

  const iconStyle = {
    transition: "transform 0.2s ease-in-out",
  };

  const activeIconStyle = {
    transform: "scale(1.5)",
    backgroundColor: "",
    boxShadow:
      "0 0 10px rgba(102, 255, 255, 0.7), 0 0 20px rgba(102, 255, 255, 0.5), 0 0 30px rgba(102, 255, 255, 0.3)",
  };

  return (
    <>
      <div className="relative">
        <img
          className="h-[672px] w-full object-cover"
          src="/images/contactUS2.jpg"
          alt="Contact Us-image"
        />
        <div className=" bg-zinc-950 border-[1px] bg-opacity-10 h-[180px]  absolute inset-0 flex flex-col max-w-screen ">
          <div className="flex justify-start gap-56 ">
            <img
              className=" h-[400px] -mt-24 w-[350px]"
              src="/images/Api Artisans-logos_white.png"
              alt="Logo"
            />
            <div className="text-center">
              <p className="mt-[20px] text-gray-300 font-bold text-opacity-40 text-6xl">
                We work for you
              </p>
              <p className="flex mt-4 w-[400px] text-opacity-40 text-3xl text-gray-400 font-bold font-sans mx-auto">
                Follow Us :
                <div className="flex mt-[6px] ml-4  gap-4">
                  <FaInstagram
                    className={`social-icon rounded-xl p-1 cursor-pointer ${
                      isInstagramHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isInstagramHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Instagram")}
                    onMouseLeave={() => handleIconMouseLeave("Instagram")}
                  />
                  <FaXTwitter
                    className={`social-icon rounded-xl p-1 cursor-pointer ${
                      isTwitterHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isTwitterHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Twitter")}
                    onMouseLeave={() => handleIconMouseLeave("Twitter")}
                  />
                  <FaDiscord
                    className={`social-icon rounded-xl p-1 cursor-pointer ${
                      isDiscordHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isDiscordHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Discord")}
                    onMouseLeave={() => handleIconMouseLeave("Discord")}
                  />
                  <ImFacebook2
                    className={`social-icon p-1 cursor-pointer ${
                      isFacebookHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isFacebookHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Facebook")}
                    onMouseLeave={() => handleIconMouseLeave("Facebook")}
                  />
                  <BsYoutube
                    className={`social-icon rounded-xl p-1 cursor-pointer ${
                      isYoutubeHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isYoutubeHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Youtube")}
                    onMouseLeave={() => handleIconMouseLeave("Youtube")}
                  />
                </div>
              </p>
            </div>
          </div>
          <div className="self-end mr-4 -mt-64">
            <Contact className="bg-white p-4 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
