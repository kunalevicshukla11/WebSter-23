import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const HostelCard = ({ title, content }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="w-3/4 m-auto">
            <div className='mt-20'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
                            <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-4 p-4">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <p className="text-center">{d.about}</p>
                                <Link to={`/dashboard/${d.link}`}>
                                    <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Go inside</button>
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
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },

    {
        link: "tilak",
        name: `Tilak Hostel`,
        img: `/assets/tandon.jpeg`,
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },

    {
        link: "patel",
        name: `Patel Hostel`,
        img: `/assets/tandon.jpeg`,
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },

    {
        link: "malviya",
        name: `Malviya Hostel`,
        img: `/assets/tandon.jpeg`,
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
]

export default HostelCard;
