import React from "react";

const HomeOrmawaItem = ({ name, imageUrl }) => {
  return (
    <div className="flex items-center justify-center p-6 bg-opacity-25 bg-slate-200 rounded-lg shadow-md hover:shadow-lg">
      <img src={imageUrl} alt={name} className="block object-contain h-16" />
    </div>
  );
};

export default HomeOrmawaItem;
