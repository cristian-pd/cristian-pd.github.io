import { useLayoutEffect  } from "react";
import Header from "../components/header/Header";
import "../containers/Main.scss";
import "../containers/greeting/Greeting.scss"
import "./proj.scss";

function TFGProj() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="proj-body">
        <h1 className="greeting-text">Simulation of natural selection by evolutionary computation</h1>
        <br/>
        <h1>Repository Page</h1>
        <p className="greeting-text-p subTitle"><a href="https://github.com/cristian-pd/simulation_of_natural_selection_by_evolutionary_computation">https://github.com/cristian-pd/simulation_of_natural_selection_by_evolutionary_computation</a></p>
        <br/>
        <h1>Description</h1>
        <p className="greeting-text-p subTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default TFGProj;