import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import GoInsideButton from "./GoInsideButton";
const HostelCard = ({ title, content }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-3/4 mr-[38px]">
      <div className="mt-20 ">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className=" h-[480px] bg-zinc-950 bg-opacity-50 border-black border-4 text-black rounded-xl"
            >
              <div className="h-56  flex justify-center items-center rounded-t-xl pt-6">
                <img
                  src={d.img}
                  alt=""
                  className="h-[250px] w-[300px] object-bottom border-l-4 border-r-4 border-b-4  border-black   rounded-3xl rounded-t-none"
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-3xl pt-4 text-orange-400 font-mono font-semibold">
                  {d.name}
                </p>
                <p className="text-center text-white">{d.about}</p>
                <Link to={`/dashboard/${d.link}`}>
                  <GoInsideButton>Explore</GoInsideButton>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    link: "tandon",
    name: `P.D.Tandon Hostel`,
    img: `/assets/tandon.jpeg`,
    about: `Lorem ipsum dolor  elit, 
        sed do  aliqua.`,
  },

  {
    link: "tilak",
    name: `Tilak Hostel`,
    img: `/assets/tandon.jpeg`,
    about: `Lorem ipsum dolor sit amet, consectetur.`,
  },

  {
    link: "patel",
    name: `Patel Hostel`,
    img: `/assets/tandon.jpeg`,
    about: `Lorem ipsum dolor sit amet, consectetur.`,
  },

  {
    link: "malviya",
    name: `Malviya Hostel`,
    img: `/assets/tandon.jpeg`,
    about: `Lorem ipsum dolor sit amet, consectetur .`,
  },
];

export default HostelCard;
