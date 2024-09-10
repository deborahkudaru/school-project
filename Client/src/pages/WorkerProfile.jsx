import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import WorkerHead from "../components/WorkerHead";
import pic from "../images/prince-akachi-i2hoD-C2RUA-unsplash.jpg";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
// import LoggedHead from "../components/LoggedHead";
// import { toast } from "react-toastify";

const WorkerProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  // const [profilePhoto, setProfilePhoto] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data()); 
            console.log(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // async function handleLogout() {
  //   try {
  //     await auth.signOut();
  //     window.location.href = "/login";
  //     console.log("user logged out successfully");
  //   } catch (error) {
  //     console.error("error loggint out", error.message);
  //   }
  // }

  // const handlePhotoChange = (e) => {
  //   const file = e.target.files[0];
  //   setProfilePhoto(URL.createObjectURL(file)); // Create a preview URL
  // };
  return (
    <>
      <div className="bg-sky-100">
        <WorkerHead />
      </div>

      <div className="px-48 pt-20 bg-sky-100">
        {/* {profilePhoto && (
        <img
          src={profilePhoto}
          alt="Profile"
          className="profile-img border-2 w-1/2 h-1/2 rounded-full"
        />
      )} */}
        {/* <input type="file" accept="image/*" onChange={handlePhotoChange} /> */}
        <div>
          {userDetails ? (
            <>
              {/* <h3>Welcome {userDetails.firstName}</h3> */}
              <div>
                <div className="flex gap-20">
                  <div className="">
                    <h2 className="text-xl text-violet-500 font-bold">
                      Profile Photo
                    </h2>

                    <img src={userDetails.photoURL} alt="" className="" />
                  </div>
                  <div className="mt-10">
                    <h3 className="text-2xl text-violet-500 font-semibold pb-2">
                      About
                    </h3>
                    <p className="text-slate-500 font-medium mb-10 w-1/2">
                      {userDetails.description}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl text-violet-500 font-bold">
                  {userDetails.firstName} {userDetails.lastName}
                </h3>
                <p className="text-violet-400 mt-2">{userDetails.job}</p>
                <div className="mt-5">
                  <div className="flex gap-20">
                    <div className="w-1/2">
                      <p className="text-slate-500 font-medium mb-2">
                        {" "}
                        Please send me a message below and I will get back to
                        you as soon as possible👇👇👇
                      </p>
                      <form action="">
                        <textarea
                          name=""
                          id=""
                          rows={5}
                          cols={40}
                          className="px-3 py-3 mb-5 border-violet-500 outline-0 text-slate-500"
                        ></textarea>
                        <button
                          type="submit"
                          className="text-sky-100 bg-violet-400 px-10 py-3  font-semibold text-sm rounded-md mb-5"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>

                    <div className="flex flex-col gap-5 pb-10">
                      <p className="text-slate-500 font-medium">
                        Phone:{" "}
                        <span className="text-violet-500">
                          {userDetails.phoneNumber}
                        </span>
                      </p>
                      <p className="text-slate-500 font-medium">
                        Email:{" "}
                        <span className="text-violet-500 underline">
                          {userDetails.email}
                        </span>
                      </p>
                      <p className="text-slate-500 font-medium">
                        Status: <span className="text-violet-500">Worker</span>
                      </p>
                      <p className="text-slate-500 font-medium">
                        Gender:{" "}
                        <span className="text-violet-500">
                          {userDetails.gender}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* <h3 className="text-2xl text-violet-500 font-semibold pb-2">
                    Socials
                  </h3> */}
                  <div className="flex gap-5 text-2xl">
                    {/* <a href="">
                      <FaInstagram />
                    </a>
                    <a href="">
                      <FaXTwitter />
                    </a>
                    <a href="">
                      <FaWhatsapp />
                    </a>
                    <a href="">
                      <FiMail />
                    </a> */}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkerProfile;
