import React from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

import { Link } from "react-router-dom";

const Logo = () => {

  return (
    <div >
      
        <Link to="/" className="text-slate-950 text-4xl md:text-2xl  font-bold  font-DancingScript">
          Work<span className="text-violet-400">buddy</span>
        </Link>
      
    </div>
  );
};
 
export default Logo;
