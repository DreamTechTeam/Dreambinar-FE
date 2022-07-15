import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <Head title="Home" />

      <header>
        <NavBar />
      </header>

      <article>
        <h1>Home</h1>
      </article>
    </>
  );
};

export default Home;