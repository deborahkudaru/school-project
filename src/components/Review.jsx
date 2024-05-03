import React from "react";

const Review = (props) => {
  return (
    <div className="px-48 bg-teal-50">
      <h2 className="text-4xl font-bold pt-28 text-center pb-10">
        See What They Say About Us
      </h2>
      <div className="bg-white hover:bg-violet-400 w-1/3 font-semibold hover:text-white py-10 px-6">
        <p className="text-xl pb-3">{props.name}</p>
        <p>{props.rating}</p>
        <p className="text-slate-500">{props.review}</p>
        <p className="text-xs text-slate-500 hover:text-white pt-7">{props.date}</p>
      </div>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Review;
