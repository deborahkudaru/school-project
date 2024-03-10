import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Router>
        <Link to="/" className="text-gray-900 text-xl font-bold pl-20">
          Workbuddy
        </Link>
        <Routes>
          <Route exact path="/" render={() => <div>Home Page</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Logo;
