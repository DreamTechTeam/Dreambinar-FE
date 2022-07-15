import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <>
      <Head title="About" />

      <header>
        <NavBar />
      </header>

      <article>
        <h1>About</h1>
      </article>
    </>
  );
};

export default About;