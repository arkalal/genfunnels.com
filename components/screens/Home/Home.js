import React from "react";
import Navbar from "../../reuse/Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Intro from "../../Intro/Intro";
import Footer from "../../Footer/Footer";
import ReduxProvider from "../../../redux/ReduxProvider";

const Home = () => {
  return (
    <div>
      <ReduxProvider>
        <Navbar />
      </ReduxProvider>

      <Banner />
      <Intro />

      <ReduxProvider>
        <Footer />
      </ReduxProvider>
    </div>
  );
};

export default Home;
