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
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Howto />
      <Category />
      <FindTalent
        image={talent[0].imageUrl}
        rate={talent[0].rating}
        job={talent[0].job}
        name={talent[0].name}
        age={talent[0].age}
      />

      <Review
        image={review[0].imageUrl}
        name={review[0].name}
        rating={review[0].rating}
        review={review[0].review}
        date={review[0].date}
      />

      <Begin />
      <Footer />
    </div>
  );
};

export default App;
