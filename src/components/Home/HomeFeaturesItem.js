import React from "react";

const HomeFeaturesItem = ({ feature }) => {
  const featureImage =
    feature.featureImage.data.attributes.url &&
    feature.featureImage.data.attributes.url !== ""
      ? feature.featureImage.data.attributes.url
      : "https://via.placeholder.com/150";

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4">
      <div className=" p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 ">
        <div
          className="
            w-[70px]
            h-[70px]
            flex
            items-center
            justify-center
            bg-primary
            rounded-2xl
            mb-8
            "
        >
          <img src={featureImage} alt="featureImage" />
        </div>
        <h4 className="font-bold font-sans text-xl mb-3">{feature.feature}</h4>
        <p>{feature.description}</p>
      </div>
    </div>
  );
};

export default HomeFeaturesItem;
