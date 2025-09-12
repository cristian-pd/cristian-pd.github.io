import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

import cppLogo from "../../assets/new/skills/diff/cplusplus.svg";
import csLogo from "../../assets/new/skills/diff/cs.svg";
import netLogo from "../../assets/new/skills/diff/dotnet.svg";
import dbLogo from "../../assets/new/skills/database-solid-full.svg";
import serverLogo from "../../assets/new/skills/server-solid-full.svg";
import unityLogo from "../../assets/new/skills/unity-brands-solid-full.svg";
import gameLogo from "../../assets/new/skills/gamepad-solid-full.svg";
import gearLogo from "../../assets/new/skills/gear-solid-full.svg";
import wifiLogo from "../../assets/new/skills/wifi-solid-full.svg";
import cubeLogo from "../../assets/new/skills/cube-solid-full.svg";
import fireLogo from "../../assets/new/skills/fire-flame-curved-solid-full.svg";
import mathLogo from "../../assets/new/skills/square-root-variable-solid-full.svg";
import linuxLogo from "../../assets/new/skills/linux-brands-solid-full.svg";
import revengLogo from "../../assets/new/skills/square-binary-solid-full.svg";
import cmakeLogo from "../../assets/new/skills/diff/cmake.svg";
import gitLogo from "../../assets/new/skills/code-pull-request-solid-full.svg";
import blenderLogo from "../../assets/new/skills/diff/blender.svg";
import brushLogo from "../../assets/new/skills/paintbrush-solid-full.svg";
import phpLogo from "../../assets/new/skills/php-brands-solid-full.svg";
import cssLogo from "../../assets/new/skills/css-brands-solid-full.svg";
import html5Logo from "../../assets/new/skills/html5-brands-solid-full.svg";

const logosMap = {
  "cppLogo": cppLogo,
  "csLogo": csLogo,
  "netLogo": netLogo,
  "dbLogo": dbLogo,
  "serverLogo": serverLogo,
  "unityLogo": unityLogo,
  "gameLogo": gameLogo,
  "gearLogo": gearLogo,
  "wifiLogo": wifiLogo,
  "cubeLogo": cubeLogo,
  "fireLogo": fireLogo,
  "mathLogo": mathLogo,
  "linuxLogo": linuxLogo,
  "revengLogo": revengLogo,
  "cmakeLogo": cmakeLogo,
  "gitLogo": gitLogo,
  "blenderLogo": blenderLogo,
  "brushLogo": brushLogo,
  "phpLogo": phpLogo,
  "cssLogo": cssLogo,
  "html5Logo": html5Logo
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
			  
			  
			  
//            return (
//              <li
//                key={i}
//                className="software-skill-inline"
//                name={skills.skillName}
//              >
//                <i className={skills.fontAwesomeClassname}></i>
//                <p>{skills.skillName}</p>
//              </li>
//            );
			  
			  
			  
//			  return (
//              <li
//                key={i}
//                className="software-skill-inline"
//                name={skills.skillName}
//              >
//                <img src={skills.fontAwesomeClassname} alt="" className="new-skill-icon" />
//                <p>{skills.skillName}</p>
//              </li>
//            );
			
			
			
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <img src={logosMap[skills.fontAwesomeClassname]} alt="" />
                <p>{skills.skillName}</p>
              </li>
            );
			
			
			
          })}
        </ul>
      </div>
    </div>
  );
}
