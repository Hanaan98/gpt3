import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Whatisgpt3 from "@/components/Whatisgpt3";
import Possibilities from "@/components/Possibilities";
import Future from "@/components/Future";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import { Fade } from "react-awesome-reveal";
function index() {
  return (
    <div className="main_bg relative">
      <div className="navbar_bg ">
        <div className="fixed top-0 w-full z-10">
          <Navbar />
        </div>
        <Banner />
      </div>

      <Fade>
        <div className="pt-20">
          <Brands />
          <Whatisgpt3 />
          <Future />
          <Possibilities />
          <Register />
          <Blogs />
          <Footer />
        </div>
      </Fade>
    </div>
  );
}

export default index;
