import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Router from "./Router";

const App = () => {
  return (
    <>
      <HelmetProvider>
        <ToastContainer />
        <Router />
      </HelmetProvider>
    </>
  );
};

export default App;
