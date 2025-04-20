import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
