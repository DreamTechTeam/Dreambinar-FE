import React from "react";
import HomeFeaturesItem from "./HomeFeaturesItem";

const HomeFeatureList = ({ features }) => {
  const featuresData = features.data;

  return (
    <div className="flex flex-wrap">
      {featuresData.map((feature) => (
        <HomeFeaturesItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default HomeFeatureList;
