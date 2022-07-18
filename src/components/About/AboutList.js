import React from "react";
import AboutItem from "./AboutItem";

const AboutList = ({ developers }) => {
  const developersData = developers.data;

  return (
    <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-5 md:gap-3 lg:gap-4">
      {developersData.map((developer) => (
        <AboutItem key={developer.id} developer={developer} />
      ))}
    </div>
  );
};

export default AboutList;
