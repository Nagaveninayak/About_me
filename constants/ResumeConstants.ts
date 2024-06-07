import email from "./../public/images/resume/at.svg";
import birthday from "./../public/images/resume/party-hat.svg";
import location from "./../public/images/resume/pin.svg";
import website from "./../public/images/resume/www.svg";
import github from "./../public/images/resume/github.svg";
import resumeSkills from "./../public/images/resume/skill.svg";
import education from "./../public/images/resume/graduate.svg";
import work from "./../public/images/resume/work.svg";
import user from "./../public/images/resume/user.svg";

export const RESUME = {
  image: "",
  name: "Nagaveni Nayak",
  job: "Full Stack Web Developer",
  contact: [
    {
      image: email,
      title: "Email",
      value:
        '<a href="mailto:nagaveninayakn@gmail.com" target="_blank">nagaveninayakn@gmail.com</a>',
    },
    {
      image: location,
      title: "Location",
      value: "India -> Bangalore",
    },
    {
      image: birthday,
      title: "Date Of Birth",
      value: "04 Oct 1999",
    },
    {
      image: github,
      title: "Github",
      value:
        '<a href="https://github.com/Nagaveninayak" target="_blank">github.com/Nagaveninayak</a>',
    },
    {
      image: website,
      title: "Website",
      value:
        '<a href="https://nagaveninayak.wordpress.com/" target="_blank">Wordpress?Nagaveninayak/pf</a>',
    },
  ],
  skills: {
    title: "Skills",
    icon: resumeSkills,
    skills: [
      {
        title: "HTML",
        process: 95,
      },
      {
        title: "CSS",
        process: 85,
      },
      {
        title: "Javacript",
        process: 80,
      },
      {
        title: "Typescript",
        process: 80,
      },
      {
        title: "React",
        process: 80,
      },
      {
        title: "Nextjs",
        process: 80,
      },
      {
        title: "Angular",
        process: 70,
      },
      {
        title: "Bootstrap",
        process: 80,
      },
      {
        title: "Tailwind",
        process: 90,
      },
      {
        title: "Node",
        process: 80,
      },
      {
        title: "Express",
        process: 75,
      },
      {
        title: "java",
        process: 70,
      },
      {
        title: "MySQL",
        process: 80,
      },
      {
        title: "Mongodb",
        process: 80,
      },
    ],
  },
  about: {
    title: "About Me",
    icon: user,
    content: `
            I'm Nagaveni Nayak, i love anything related to technology and computers. <br /> 
            I've +2 years of creating websites, i can build any website related to the programming languages that i master, <br />
            in fact i like building big and complicated websites, it's much interesting than simple websites. <br />
            I'm open for learning new technologies and accept criticism, <br />
            because i believe that this is how we can improve and reach the required task.
        `,
  },
  work: {
    title: "Experience",
    icon: work,
    exp: [
      {
        title: "SDE 1",
        company: "Warehouse Now",
        place: "Indiranagar, Bengaluru, Karnataka 560038",
        time: "2023 - Present",
        url: "https://google.com",
      },
      {
        title: "Software Engineer",
        company: "English Quest",
        place: "North Shields, London, NE29 0AE, United Kingdom",
        time: "2022 - 2023",
        url: "https://google.com",
      },
      {
        title: "Intern",
        company: "English Quest",
        place: "North Shields, London, NE29 0AE, United Kingdom",
        time: "2021 - 2022",
        url: "https://google.com",
      },
    ],
  },
  education: {
    title: "Education",
    icon: education,
    edu: [
      {
        title: "College",
        company: "Dr. AIT",
        time: "2017 - 2021",
        url: "https://google.com",
      },
      {
        title: "Intermediate College",
        company: "Vidyadri P.U College",
        time: "2015 - 2017",
        url: "https://google.com",
      },
      {
        title: "School",
        company: "Maya English School",
        time: "until 2015",
        url: "https://google.com",
      },
    ],
  },
  hobbies: {
    title: "Hobbies",
    icon: work,
    hobbies: [
      {
        title: "Reading",
        description:
          "Read a lot, My favorite author is Ozama Dazai and his book 'No Longer Human' is my favoriate book.",
      },
      {
        title: "Anime",
        description:
          "Love watching anime, My favorite is 'Attack on Titan' and 'Naruto'.",
      },
      {
        title: "Playing",
        description:
          "Playing games, Current game I'm playing is Genshin impact, I'm loving it!",
      },
    ],
  },
};
