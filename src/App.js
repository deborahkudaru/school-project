import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Howto from "./components/Howto";
import Category from "./components/Category";
import FindTalent from "./components/FindTalent";
import talent from "./Talent";
import Review from "./components/Review";
import review from "./Review";
import Begin from "./components/Begin";
import Prefooter from "./components/Prefooter";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Howto />
      <Category />
      <div className="px-48 bg-gray-50">
        <div className="flex gap-7 pb-5">
          <FindTalent
            image={talent[0].imageUrl}
            rate={talent[0].rating}
            job={talent[0].job}
            name={talent[0].name}
            age={talent[0].age}
          />
          <FindTalent
            image={talent[0].imageUrl}
            rate={talent[0].rating}
            job={talent[0].job}
            name={talent[0].name}
            age={talent[0].age}
          />
          <FindTalent
            image={talent[0].imageUrl}
            rate={talent[0].rating}
            job={talent[0].job}
            name={talent[0].name}
            age={talent[0].age}
          />
        </div>

        <div className="flex gap-5">
          <FindTalent
            image={talent[0].imageUrl}
            rate={talent[0].rating}
            job={talent[0].job}
            name={talent[0].name}
            age={talent[0].age}
          />
          <FindTalent
            image={talent[0].imageUrl}
            rate={talent[0].rating}
            job={talent[0].job}
            name={talent[0].name}
            age={talent[0].age}
          />
          <FindTalent
            image={talent[0].imageUrl}
            rate={talent[0].rating}
            job={talent[0].job}
            name={talent[0].name}
            age={talent[0].age}
          />
        </div>
      </div>

      <div className="px-48 bg-gray-50">
        <h2 className="text-4xl font-bold pt-28 text-center pb-10">
          See What They Say About Us
        </h2>
        <div className="flex gap-4">
          <Review
            image={review[0].imageUrl}
            name={review[0].name}
            review={review[0].review}
            date={review[0].date}
          />
          <Review
            image={review[1].imageUrl}
            name={review[1].name}
            review={review[1].review}
            date={review[1].date}
          />
          <Review
            image={review[2].imageUrl}
            name={review[2].name}
            review={review[2].review}
            date={review[2].date}
          />
        </div>
      </div>

      <Begin />
      <Prefooter />
    </div>
  );
};

export default App;
