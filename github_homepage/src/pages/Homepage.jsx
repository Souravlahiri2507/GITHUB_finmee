import React from "react";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import "../css/Homepage.css";
import Footer from "../components/Footer";
import Content from "../components/Content";

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div class="container">
        <div class="sidebar">
            <Side/>
        </div>
        <div class="main-content">
            <Content/>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Homepage;
