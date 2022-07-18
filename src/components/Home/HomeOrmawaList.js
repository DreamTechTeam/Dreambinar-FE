import React from "react";
import HomeOrmawaItem from "./HomeOrmawaItem";

const HomeOrmawaList = ({ ormawa, isShowedMore, onlyShow = 12 }) => {
  ormawa = isShowedMore ? ormawa : ormawa.slice(0, onlyShow);

  return (
    <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-6">
      {ormawa.map((ormawa) => (
        <HomeOrmawaItem key={ormawa.id} {...ormawa} />
      ))}
    </div>
  );
};

export default HomeOrmawaList;
