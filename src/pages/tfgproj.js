import React, { useLayoutEffect } from "react";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import "../containers/Main.scss";
import "../containers/greeting/Greeting.scss"
import "./proj.scss";
import "./tfgproj.scss";
import tfgddiagram from "../assets/new/tfgddiagram.png";
import tfgimage from "../assets/new/tfgimage.png";
import SoftwareSkill from "../components/softwareSkills/SoftwareSkill";

const tfgSkills = [
  { skillName: "unity",    fontAwesomeClassname: "unityLogo" },
  { skillName: "game-dev", fontAwesomeClassname: "gameLogo"  },
  { skillName: "math",     fontAwesomeClassname: "mathLogo"  },
  { skillName: "c#",       fontAwesomeClassname: "csLogo"    },
];

function TFGProj() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="proj-body">
        <h2 className="tfg-greeting-text">Simulation of natural selection by evolutionary computation</h2>
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
        <h5 className="tfg-abstract">Abstract</h5>
        <p className="tfg-abstract">Genetic algorithms are an approach within evolutionary computing inspired by natural selection, where the best-adapted individuals have a higher probability of surviving and reproducing, passing their traits on to subsequent generations.</p>
        <p className="tfg-abstract">In this project, a simulation of artificial life based on genetic algorithms has been developed, in which a population of individuals interacts with the environment through actions such as hunting, fleeing, and collecting resources in order to maximize their survival.</p>
        <p className="tfg-abstract">Each individual possesses evolutionary parameters such as vision, smell, speed, and endurance, which are optimized through an evaluation function based on survival time. This allows the progressive adaptation of the population to be observed across generations.</p>
        <br/>
        <br/>
        <div className="tfg-video-wrapper">
          <iframe className="tfg-video" src="https://www.youtube.com/embed/PwmmFecg4Lg" title="Simulation of natural selection by evolutionary computation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <br/>
        <br/>
        <p className="tfg-subTitle tfg-p-center"><b>What skills did I use?</b></p>
        <br/>
        <SoftwareSkill skillMap={tfgSkills} />
        <h5 className="tfg-no-abstract">What did it do?</h5>
        <p className="tfg-no-abstract">This project is <b>my Bachelor's thesis in Computer Science, which I programmed entirely on my own</b> and for which I received a grade of 10 out of 10. It consists of a <b>simulation that uses three different artificial intelligence algorithms</b>. These algorithms were implemented from scratch by me without using any external libraries.</p>
        <h5 className="tfg-no-abstract">What was the result?</h5>
        <p className="tfg-no-abstract">An artificial intelligence that evolves creatures by giving them specific settings and behaviors. The results showed that <b>my AI configured the creatures using logic similar to human thinking.</b></p>
        <h5 className="tfg-no-abstract">Why is it important?</h5>
        <p className="tfg-no-abstract">Simulations are a key tool in modern science, allowing the study of complex or inaccessible systems, such as the universe, through theoretical models.</p>
        <br/>
        <h5 className="tfg-no-abstract tfg-subTitle"><b>How did I do it?</b></h5>
        <p className="tfg-no-abstract tfg-subTitle">The simulation uses genetic algorithms to find the creatures that best adapt to the environment over successive generations. Each creature internally uses a state machine that governs its behaviour throughout its lifetime. In addition, each node of the state machine internally uses a decision tree. This decision tree is what determines the creature’s current behaviour.</p>
        <p className="tfg-no-abstract tfg-subTitle">This project was implemented using the waterfall development methodology. It began with the decision of the tools to be used, after which a brainstorming process was carried out, from which 30 ideas emerged. Fifteen ideas were selected and analysed exhaustively. The end of the analysis phase resulted in a Software Functional Requirements Definition document, with 39 features to be implemented.</p>
        <p className="tfg-no-abstract tfg-subTitle">The design phase consisted of analysing the functional requirements in order to find a way to turn them into a final product. To achieve this, the functional requirements were divided into modules, and each module was defined and documented using UML diagrams and mathematical formulas. The following diagram is a highly summarized version of the entire process documented in the attached PDF, which can be found at the beginning of this webpage.</p>
        <img className="tfg-img tfg-img-aux" src={tfgddiagram} alt="Diagram" />
        <br/>
        <br/>
        <p className="tfg-no-abstract tfg-subTitle">After the design phase, the implementation phase was carried out, in which all the code was programmed. Then, a validation phase was conducted by presenting the already functional simulation to my university supervisors. Finally, the system was improved based on the feedback received.</p>
        <p className="tfg-no-abstract tfg-subTitle">From this moment on, with the system fully implemented, the project moved on to its scientific phase. Several experiments were run, configured in a specific way, and the resulting data were analysed. The following image shows a summarized result of one of the experiments. In this experiment, it can be observed how the genetic algorithm takes effect and how the average evolution of all creatures over 97 generations tends toward convergence.</p>
        <br/>
        <img className="tfg-img tfg-img-aux" src={tfgimage} alt="Experiment 2 summary" />
      </div>
    </div>
  );
}

export default TFGProj;