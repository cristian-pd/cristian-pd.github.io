import React, { useLayoutEffect } from "react";
import Header from "../components/header/Header";
import "../containers/Main.scss";
import "../containers/greeting/Greeting.scss"
import "./proj.scss";
import "./doproj.scss";
import SoftwareSkill from "../components/softwareSkills/SoftwareSkill";
import dodiagram from "../assets/new/tfgddiagram.png";
import doimage from "../assets/new/tfgimage.png";

const doSkills = [
  { skillName: "c++",       fontAwesomeClassname: "cppLogo"   },
  { skillName: "c#",        fontAwesomeClassname: "csLogo"    },
  { skillName: "unity",     fontAwesomeClassname: "unityLogo" },
  { skillName: "sql",       fontAwesomeClassname: "dbLogo"    },
  { skillName: "analysis",  fontAwesomeClassname: "reverse"   },
  { skillName: "boost",     fontAwesomeClassname: "boost"     },
  { skillName: "cmake",     fontAwesomeClassname: "cmakeLogo" },
  { skillName: "wireshark", fontAwesomeClassname: "wireshark" },
  { skillName: "cloud",     fontAwesomeClassname: "aws"       }
];

function DOProj() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="proj-body">
        <h2 className="do-greeting-text">DarkOrbit MMO Rework</h2>
        <br/>
        <p className="do-abstract do-p-center do-subTitle">“An online space MMO where players control starships and join different factions to compete for control of space by fighting enemy ships, completing missions, and collecting resources across dangerous open-space maps filled with PvP combat and cooperative battles against alien threats.”</p>
        <br/>
        <br/>
        <div className="do-video-wrapper">
          <iframe className="do-video" src="https://www.youtube.com/embed/PwmmFecg4Lg" title="Simulation of natural selection by evolutionary computation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <br/>
        <br/>
        <p className="do-subTitle do-p-center"><b>What skills did I use?</b></p>
        <br/>
        <SoftwareSkill skillMap={doSkills} />
        <h3 className="do-no-abstract">What did it do?</h3>
        <p className="do-no-abstract">I have programmed a clone of the old <b>massively multiplayer online game</b> DarkOrbit (2007 version). This is a 1:1 clone, meaning it is as faithful as possible to the original game in every sense: audio, graphics, mechanics, and mood. It required <b>building a real-time multiplayer networking architecture using sockets and multithreading</b>.</p>
        <h3 className="do-no-abstract">Why did I do it?</h3>
        <p className="do-no-abstract"><b>This project was the starting point for other online game project, which I am still developing</b>, based on the idea: <i>“make it exist first, make it good later”</i>. Apart from that, the game DarkOrbit evokes nostalgia in me; it was what sparked my interest in programming when I was a child, and it already became my dream back then to create a space MMO game.</p>
        <h3 className="do-no-abstract">Implemented features</h3>
        <ul>
          <li className="do-no-abstract">Spell system (direct or area-based)</li>
          <li className="do-no-abstract">Aura system (buffs and debuffs)</li>
          <li className="do-no-abstract">Combat system (lasers and missiles)</li>
          <li className="do-no-abstract">Portal system (instanced maps)</li>
          <li className="do-no-abstract">Minimap and radar</li>
          <li className="do-no-abstract">Player statistics (health, experience, money, etc.)</li>
          <li className="do-no-abstract">Inventory system</li>
          <li className="do-no-abstract">Movement and coordinate system</li>
          <li className="do-no-abstract">Mineral gathering system</li>
          <li className="do-no-abstract">Diplomacy system (factions, enemies and clans)</li>
        </ul>
        <h3 className="do-no-abstract">Upcoming features</h3>
        <ul>
          <li className="do-no-abstract">Equipment system</li>
          <li className="do-no-abstract">In-game shop</li>
          <li className="do-no-abstract">Clan management</li>
          <li className="do-no-abstract">Mineral refinement system</li>
        </ul>
        <h3 className="do-no-abstract do-subTitle">How did I do it?</h3>
        <p className="do-no-abstract do-subTitle">The simulation uses genetic algorithms to find the creatures that best adapt to the environment over successive generations. Each creature internally uses a state machine that governs its behaviour throughout its lifetime. In addition, each node of the state machine internally uses a decision tree. This decision tree is what determines the creature’s current behaviour.</p>
        <p className="do-no-abstract do-subTitle">This project was implemented using the waterfall development methodology. It began with the decision of the tools to be used, after which a brainstorming process was carried out, from which 30 ideas emerged. Fifteen ideas were selected and analysed exhaustively. The end of the analysis phase resulted in a Software Functional Requirements Definition document, with 39 features to be implemented.</p>
        <p className="do-no-abstract do-subTitle">The design phase consisted of analysing the functional requirements in order to find a way to turn them into a final product. To achieve this, the functional requirements were divided into modules, and each module was defined and documented using UML diagrams and mathematical formulas. The following diagram is a highly summarized version of the entire process documented in the attached PDF, which can be found at the beginning of this webpage.</p>
        <img className="do-img do-img-aux" src={dodiagram} alt="Diagram" />
        <br/>
        <br/>
        <p className="do-no-abstract do-subTitle">After the design phase, the implementation phase was carried out, in which all the code was programmed. Then, a validation phase was conducted by presenting the already functional simulation to my university supervisors. Finally, the system was improved based on the feedback received.</p>
        <p className="do-no-abstract do-subTitle">From this moment on, with the system fully implemented, the project moved on to its scientific phase. Several experiments were run, configured in a specific way, and the resulting data were analysed. The following image shows a summarized result of one of the experiments. In this experiment, it can be observed how the genetic algorithm takes effect and how the average evolution of all creatures over 97 generations tends toward convergence.</p>
        <br/>
        <img className="do-img do-img-aux" src={doimage} alt="Experiment 2 summary" />
      </div>
    </div>
  );
}

export default DOProj;