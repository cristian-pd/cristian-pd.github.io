import React, { useLayoutEffect } from "react";
import Header from "../components/header/Header";
import "../containers/Main.scss";
import "../containers/greeting/Greeting.scss"
import "./proj.scss";
import "./doproj.scss";
import SoftwareSkill from "../components/softwareSkills/SoftwareSkill";
import compa from "../assets/new/tfgddiagram.png";
import clientserver from "../assets/new/client-server.png";
import arch from "../assets/new/tfgddiagram.png";

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
        <p className="do-no-abstract do-subTitle">The biggest challenge of the project has been maintaining the highest possible fidelity to the original game. To achieve this, I used the assets of the original game, which are only used <i>for educational and preservation purposes</i> and whose rights belong to Bigpoint GmbH. However, all the code was entirely developed by me in Unity.</p>
        <p className="do-no-abstract do-subTitle">To correctly position all visual elements, I had to reverse-engineer forgotten files from the original 2007 client, developed in Flash Player. In addition, I used numerous YouTube videos as references to accurately recreate the original proportions and behaviours of the game.</p>
        <img className="do-img do-img-aux" src={compa} alt="Version comparison" />
        <br/>
        <p className="do-no-abstract do-subTitle">The game uses a client–server network topology. The server receives actions from all players, updates the game world state, and then sends the updated information back to each client to ensure that all players have a consistent and synchronized view of the game world. Communication between clients and the server occurs over a physical cable-based network or through air using technologies such as Wi-Fi. Specifically, I have implemented most of the techniques described in the book <i>Multiplayer Game Programming: Architecting Networked Games</i>.</p>
        <br/>
        <img className="do-img do-img-aux" src={clientserver} alt="Client-Server Diagram" />
        <br/>
        <p className="do-no-abstract do-subTitle">The networking part was programmed from scratch. No high-level technology was used to simplify the work; only the operating system’s TCP socket interface was used. The goal was to make the game server efficient and as scalable as possible in the future. This decision also reduces the monthly costs of keeping the servers running in the cloud.</p>
        <img className="do-img do-img-aux" src={arch} alt="Network Architecture Diagram" />
        <br/>
      </div>
    </div>
  );
}

export default DOProj;