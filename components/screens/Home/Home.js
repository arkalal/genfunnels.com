import React from "react";
import Navbar from "../../reuse/Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Intro from "../../Intro/Intro";
import Footer from "../../Footer/Footer";
import ChatAssistants from "../../reuse/ChatAssistants/ChatAssistants";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Intro />
      <Footer />

      <ChatAssistants />
    </div>
  );
};

export default Home;
