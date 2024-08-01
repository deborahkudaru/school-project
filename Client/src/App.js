import React from "react";
// import Header from "./components/Header";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login ";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Workersignup from "./pages/Workersignup";
import Employersignup from "./pages/Employersignup";
import About from "./pages/About";
import ManualProfile from "./pages/ManualProfile";


const App = () => {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, []) 

  return (
    <div>
      
      {/* <Header /> */}
      {/* <Body /> */}

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-manually" element={<ManualProfile />} />
        {/* <Route path="/finder" element={<Find />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/worker-signup" element={<Workersignup />} />
        <Route path="/employer-signup" element={<Employersignup />} />
        {/* <Route path="/search" element={<Find />} /> */}
        {/* <Route path="/how-to-apply" element={<HowToApply />} /> */}
        {/* <Route path="/talent" /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
