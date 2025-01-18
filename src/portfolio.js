/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya R.",
  title: "Hi all, I'm Aditya",
  subTitle: emoji(
    "Building robust backends and seamless infrastructure 🚀"
  ),
  resumeLink:
    "https://clips.id/drive-resume-adit", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/adityarizkyramadhan",
  linkedin: "https://www.linkedin.com/in/adityaariizkyy/",
  gmail: "adityarizky1020@gmail.com",
  gitlab: "https://gitlab.com/adityarizkyramadhan",
  facebook: "",
  medium: "https://medium.com/@adityarizky1020",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACK END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive backend for your web and mobile applications"
    ),
    emoji("⚡ Develop RESTful APIs, GraphQL APIs, Websockets, PubSub, and GRPC"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji("⚡ Building scalable microservices"),
    emoji("⚡ Implementing best security practices to protect data and prevent security threats"),
    emoji("⚡ Writing and maintaining clear technical documentation for developed code and systems"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "RabbitMQ",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Brawijaya",
      logo: require("./assets/images/ub.png"),
      // Teknik Informatika
      subHeader: "Informatics Engineering",
      duration: "September 2021 - Desember 2024",
      desc: "I am a graduate of the Faculty of Computer Science at Brawijaya University with a strong interest in backend development.",
      descBullets: [
        "Software Engineering",
        "Data Structure and Algorithm",
        "Web Programming",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JavaScript", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Golang",
      progressPercentage: "90%"
    },
    {
      Stack: "Java",
      progressPercentage: "60%"
    },
    {
      Stack: "Python",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer",
      company: "Synapsis.ID",
      companylogo: require("./assets/images/synapsis_id_logo.jpeg"),
      date: "December 2024 – Present",
      desc: "Building and maintaining the backend of the Synapsis.ID platform, which provides various services tailored to client needs.",
      descBullets: [
        "Developing and executing unit tests, as well as debugging to ensure system performance and reliability.",
        "Implementing best security practices to protect data and prevent security threats.",
        "Writing and maintaining clear technical documentation for developed code and systems.",
        "Collaborating with cross-disciplinary team members to design and implement technical solutions that meet business needs.",
        "Languages used: Go"
      ]
    },
    {
      role: "Intermediate Backend Developer",
      company: "Vobis",
      companylogo: require("./assets/images/vobisio_logo.jpeg"),
      date: "August 2024 – Present",
      desc: "Designing and developing scalable and high-performance RESTful APIs and backend services.",
      descBullets: [
        "Developing and executing unit tests, as well as debugging to ensure system performance and reliability.",
        "Implementing best security practices to protect data and prevent security threats.",
        "Writing and maintaining clear technical documentation for developed code and systems.",
        "Collaborating with cross-disciplinary team members to design and implement technical solutions that meet business needs.",
        "Developed features such as a data uploader and personalized WhatsApp bot integrated with a database.",
        "Languages used: Go, JavaScript, and TypeScript."
      ]
    },
    {
      role: "Backend Junior Programmer",
      company: "Vobis",
      companylogo: require("./assets/images/vobisio_logo.jpeg"),
      date: "October 2023 – August 2024",
      desc: "Supporting backend development for various projects, following workflow and requirements set by the Project Manager (PM).",
      descBullets: [
        "Reviewing and adhering to workflows based on provided flowcharts.",
        "Developing features according to team specifications and requirements.",
        "Collaborating with team members to ensure features function properly and meet user needs.",
        "Testing developed features to ensure they meet requirements.",
        "Documenting workflows and features using Postman.",
        "Enhancing microservices architecture by transitioning to PubSub using RabbitMQ."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "PLAYBOX Season 3",
      subtitle:
        "Third Winner - 2022",
      image: require("./assets/images/playbox.png"),
      imageAlt: "PLAYBOX Season 3",
      footerLink: [
        {
          name: "Appreciation Post",
          url: "https://www.instagram.com/p/CiMPzM5rLaF"
        },
        {
          name: "Certificate",
          url: "https://jgjyjvyldoamqndazixl.supabase.co/storage/v1/object/public/sertif/Sertifikat%20juara%203%20mhs%20Aditya%20Rizky%20Ramadhan%20(1).pdf"
        }
      ]
    },
    {
      title: "8th Closer 2022",
      subtitle:
        "Third Winner - 2022",
      image: require("./assets/images/closer.png"),
      imageAlt: "Closer",
      footerLink: [
        {
          name: "Appreciation Post",
          url: "https://www.instagram.com/p/Cmvx_2KLgBk"
        },
        {
          name: "Certificate",
          url: "https://jgjyjvyldoamqndazixl.supabase.co/storage/v1/object/public/sertif/BCCxRaion_Sertif.pdf"
        }
      ]
    },
    {
      title: "Ciputra Hackfest",
      subtitle:
        "First Winner - 2023",
      image: require("./assets/images/ciputra.png"),
      imageAlt: "Ciputra Hackfest",
      footerLink: [
        {
          name: "Appreciation Post",
          url: "https://www.instagram.com/p/CsfBHE5yNTM"
        },
        {
          name: "Certificate",
          url: "https://jgjyjvyldoamqndazixl.supabase.co/storage/v1/object/public/sertif/adit.png"
        }
      ]
    },
    {
      title: "V-Hacks University Sains Malaysia",
      subtitle: "Finalist - 2023",
      image: require("./assets/images/vhack.png"),
      imageAlt: "VHacks University Sains Malaysia",
      footerLink: [
        {
          name: "Certification",
          url: "https://jgjyjvyldoamqndazixl.supabase.co/storage/v1/object/public/sertif/ADITYA%20RIZKY%20RAMADHAN%20-%20V%20Hack%20Top%2020%20Finalist%20Certificate.pdf"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// // Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62 857 0438 4348",
  email_address: "adityarizky1020@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
