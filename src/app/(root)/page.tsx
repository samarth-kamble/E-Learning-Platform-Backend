import React from "react";
import Hero from "./_components/Hero";
import Category from "./_components/Category";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Category />
    </div>
  );
};

export default HomePage;
