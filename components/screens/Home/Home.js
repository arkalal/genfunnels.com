import React from "react";
import Navbar from "../../reuse/Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Intro from "../../Intro/Intro";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;
