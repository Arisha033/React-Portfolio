import React from "react";
import "./index.css";
import { Header }  from "./assets/Components/Header/Header";
import { About } from "./assets/Components/About/About";
import { Technologies } from "./assets/Components/Technologies/Technologies";
import { Project } from "./assets/Components/Projects/Project";
import { Contact } from "./assets/Components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Technologies />
      <Project />
      <Contact />
    </>
  );
}

export default App;
