import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Review = (props) => {
  
  return (
    <div className=" bg-gray-50">
      <div className="bg-violet-400 font-semibold text-white pb-10 pt-5 px-6 rounded-tl-3xl rounded-br-3xl shadow-inner">
        <div className="pb-2">
          <img src={props.image} alt="" className="float-left w-12 mr-3 rounded-full"/>
          <p className="text-xl">{props.name}</p>
          <p className="flex gap-1 pb-3 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
        <p>{props.rating}</p>
        <p className=" text-white">{props.review}</p>
        <p className="text-xs font-normal text-white pt-7">{props.date}</p>
      </div>
    </div>
  );
};

export default Review;
