import { useLayoutEffect  } from "react";
import Header from "../components/header/Header";
import "../containers/Main.scss";
import "../containers/greeting/Greeting.scss"
import "./proj.scss";
import "./tcproj.scss";
import thumbnail from "../assets/new/tcthumbnail.png";

function TCProj() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header />
      <div class="proj-body">
        <h1 className="greeting-text">Top Cruise</h1>
        <br/>
        <h5>Download Page & More Info</h5>
        <p className="greeting-text-p subTitle"><a href="https://elairida.itch.io/top-cruise">https://elairida.itch.io/top-cruise</a></p>
        <br/>
        <br/>
        <br/>
        <p className="tc-p-center greeting-text-p subTitle">“A short puzzle simulation game where you recruit volunteer workers for a cruise and shape the journey toward disaster, success, or the perfect voyage through your choices.”</p>
        <br/>
        <video className="tc-video-center" width="720" controls poster={thumbnail}>
          <source src="https://youtu.be/XMazZBMqLm4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br/>
        <br/>
        <br/>
        <h5>Role</h5>
        <p className="greeting-text-p subTitle">In this project, I was the only programmer on a team of 9 persons for a 48-hour Game Jam. The team was highly creative, including art, storytelling, UI design, and sound. They were generating ideas very quickly, so aside from <b>programming</b>, my role was also <b>team coordinator</b>. Therefore, I was analysing and making decisions about the ideas, keeping the team in the same direction, communicating objectives and advances, and fast programming.</p>
        <h5>Metodology</h5>
        <p className="greeting-text-p subTitle">I started the project with a <b>prototype</b> to validate the idea. For development, I used an <b>iterative strategy</b>. In each iteration, I developed an arbitrary number of features and released a playable version to the team. Before starting a new iteration, one team member looked for bugs, while the rest of the team continued developing ideas and providing feedback. All feedback was then added into features to be implemented in future iterations. The cycle continued in this way until the end of development.</p>
        <h5>Features coded</h5>
        <ul>
          <li className="greeting-text-p subTitle">Game user interface</li>
          <li className="greeting-text-p subTitle">Candidate database</li>
          <li className="greeting-text-p subTitle">4 possible endings</li>
          <li className="greeting-text-p subTitle">Main menu</li>
          <li className="greeting-text-p subTitle">Tutorial</li>
          <li className="greeting-text-p subTitle">Animations, effects, sounds and music</li>
          <li className="greeting-text-p subTitle">bug-free software</li>
        </ul>
        <h5>Technologies used</h5>
        <ul>
          <li className="greeting-text-p subTitle">Unity</li>
          <li className="greeting-text-p subTitle">C#</li>
        </ul>
      </div>
    </div>
  );
}

export default TCProj;