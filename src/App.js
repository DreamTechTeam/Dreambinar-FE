import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Router from "./Router";

const App = () => {
  return (
    <>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </>
  );
};

export default App;
