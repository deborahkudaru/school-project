import React from "react";
import { FaStar } from "react-icons/fa";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../Review";

const Review = (props) => {
  return (
    <div className=" bg-gray-50 grid grid-cols-3 gap-3">
      {reviews.map((review) => (
        <div className="bg-violet-400 font-semibold text-white pb-10 pt-5 px-6 rounded-tl-3xl rounded-br-3xl shadow-inner">
          <div className="pb-2">
            <img
              src={review.imageUrl}
              alt=""
              className="float-left w-12 mr-3 rounded-full"
            />
            <p className="text-xl">{review.name}</p>
            <p className="flex gap-1 pb-3 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          </div>
          <p className=" text-white">{review.review}</p>
          <p className="text-xs font-normal text-white pt-7">{review.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
