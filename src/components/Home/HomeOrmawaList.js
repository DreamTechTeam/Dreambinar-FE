import React from "react";
import HomeOrmawaItem from "./HomeOrmawaItem";

const HomeOrmawaList = ({ ormawa, isShowedMore, onlyShow = 12 }) => {
  const dataOrmawa = isShowedMore
    ? ormawa.data
    : ormawa.data.slice(0, onlyShow);

  return (
    <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-6">
      {dataOrmawa.map((item) => (
        <HomeOrmawaItem key={item.id} ormawa={item} />
      ))}
    </div>
  );
};

export default HomeOrmawaList;
