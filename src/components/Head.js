import React from "react";
import { Helmet } from "react-helmet-async";

const Head = (props) => {
  return (
    <Helmet>
      <title>{props.title} | Dreambinar</title>
      {props.children && props.children}
    </Helmet>
  );
};

export default Head;
