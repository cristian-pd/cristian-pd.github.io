import emoji from "react-easy-emoji";

// ---------------------------Unused---------------------------
const splashScreen = {
  enabled: false,
  animation: "",
  duration: 0
};

const educationInfo = {
  display: false,
  schools: []
};

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const achievementSection = {
  title: "",
  subtitle: "",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "",
  subtitle: "",
  display: false
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false;

const illustration = {
  animated: true
};

// ---------------------------In use---------------------------
const greeting = {
  username: "",
  title: "Hi all",
  subTitle: emoji("My name is Cristian Pagán. I’m a programmer focused on Multiplayer Game Development 💫 I’m an expert in C++ and C#, with a degree in Computer Science, and I’m currently studying Game Design. I consider myself a big-picture thinker who transforms complex challenges into scalable solutions 🚀"),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/cristian-pd",
  linkedin: "https://www.linkedin.com/in/cristian-pagan-diaz/",
  gmail: "contact.cristianpd@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "Quick-learning developer with full confidence in his abilities.",
  
  skills: [
    emoji("⚡ Experienced in creating dedicated servers from scratch or using existing backend-frameworks to deliver robust online experiences."),
    emoji("⚡ Possess in-depth knowledge of game engine internals, enabling highly optimized and efficient development."),
    emoji("⚡ Highly adaptable with a versatile skill set, quickly becoming productive in new environments.")
  ],

  softwareSkills: [
    {
      skillName: "c++",
      fontAwesomeClassname: "cppLogo"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "csLogo"
    },
    {
      skillName: ".net",
      fontAwesomeClassname: "netLogo"
    },
	{
      skillName: "unity",
      fontAwesomeClassname: "unityLogo"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "dbLogo"
    },
    {
      skillName: "backend",
      fontAwesomeClassname: "serverLogo"
    },
    {
      skillName: "gamedev",
      fontAwesomeClassname: "gameLogo"
    },
    {
      skillName: "networked-games",
      fontAwesomeClassname: "wifiLogo"
    },
    {
      skillName: "3d-art",
      fontAwesomeClassname: "cubeLogo"
    },
    {
      skillName: "shaders",
      fontAwesomeClassname: "fireLogo"
    },
    {
      skillName: "math",
      fontAwesomeClassname: "mathLogo"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "linuxLogo"
    },
	{
      skillName: "reverse-engineering",
      fontAwesomeClassname: "revengLogo"
    },
	{
      skillName: "cmake",
      fontAwesomeClassname: "cmakeLogo"
    },
	{
      skillName: "git",
      fontAwesomeClassname: "gitLogo"
    },
	{
      skillName: "blender",
      fontAwesomeClassname: "blenderLogo"
    },
	{
      skillName: "php",
      fontAwesomeClassname: "phpLogo"
    },
	{
      skillName: "css3",
      fontAwesomeClassname: "cssLogo"
    },
	{
      skillName: "html5",
      fontAwesomeClassname: "html5Logo"
    }
  ],
  
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "",
  
  projects: [
    {
      image: require("./assets/images/new/doLogo.webp"),
      projectName: "Dark Orbit Rework",
      projectDesc: "Low-level networking framework for building real-time game protocols.",
      footerLink: [
        {
          name: "See more",
          url: "doproj"
        }
      ]
    },
    {
      image: require("./assets/images/new/tfg.webp"),
      projectName: "Computational Natural Selection",
      projectDesc: "My bachelor’s thesis, graded 10/10 ✅, focused on developing an AI system.",
      footerLink: [
        {
          name: "See more",
          url: "tfgproj"
        }
      ]
    },
	{
      image: require("./assets/images/new/tcLogo.webp"),
      projectName: "Top Cruise 🧩",
      projectDesc: "A puzzle simulation game made with Unity and C#",
      footerLink: [
        {
          name: "See more",
          url: "tcproj"
        }
      ]
    }
  ],
  
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: socialMediaLinks.gmail
};

// ---------------------------Mandatory---------------------------

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
