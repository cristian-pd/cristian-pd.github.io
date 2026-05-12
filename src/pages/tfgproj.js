import React, { useLayoutEffect } from "react";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import "../containers/Main.scss";
import "../containers/greeting/Greeting.scss"
import "./proj.scss";
import "./tfgproj.scss";

function TFGProj() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="proj-body">
        <h2>Simulation of natural selection by evolutionary computation</h2>
        <br/>
        <h5>Download Page & More Info</h5>
        <div className="tfg-button-greeting-div">
          <a
            href="https://github.com/cristian-pd/simulation_of_natural_selection_by_evolutionary_computation"
            className="download-link-button"
          >
            <Button text="Code repository" />
          </a>
        </div>
        <div className="tfg-button-greeting-div">
          <a
            href="https://drive.google.com/file/d/1gWTkXCIm4rG0Y7eCrAroCQtsvGrOFalZ/view?usp=sharing"
            download="Memoria.pdf"
            className="download-link-button"
          >
            <Button text="Thesis PDF" />
          </a>
        </div>
        <br/>
        <h5>Description</h5>
        <p className="greeting-text-p subTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default TFGProj;