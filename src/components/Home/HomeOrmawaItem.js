import React from "react";

const HomeOrmawaItem = ({ ormawa }) => {
  const imageUrl =
    ormawa.image.url && ormawa.image.url !== ""
      ? ormawa.image.url
      : "https://via.placeholder.com/150";

  return (
    <div className="flex items-center justify-center p-6 bg-opacity-25 bg-slate-200 rounded-lg shadow-md hover:shadow-lg">
      <img
        src={imageUrl}
        alt={ormawa.name}
        className="block object-contain h-16"
      />
    </div>
  );
};

export default HomeOrmawaItem;
