import amazonLogo from '../assets/amazon.png';
import cmcLogo from '../assets/cmc.png';

export const experiences = [
  {
    id: "exp-1",
    company: "Amazon",
    position: "Software Development Engineer",
    startDate: "2022-03",
    endDate: "Present",
    description: "Lead full-stack development of enterprise web applications serving 100k+ users. Architect scalable solutions using modern technologies and mentor junior developers.",
    achievements: [
      "Reduced application load time by 40% through performance optimization",
      "Led migration from monolithic to microservices architecture",
      "Mentored 3 junior developers and established code review processes",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ],
    technologies: [
      { name: "React", category: "framework" },
      { name: "Node.js", category: "framework" },
      { name: "TypeScript", category: "language" },
      { name: "PostgreSQL", category: "database" },
      { name: "AWS", category: "tool" },
      { name: "Docker", category: "tool" }
    ],
    location: "San Francisco, CA",
    logo: amazonLogo
  },
  {
    id: "exp-2",
    company: "Amazon",
    position: "Software Development Engineer Intern",
    startDate: "2020-06",
    endDate: "2022-02",
    description: "Developed and maintained multiple client-facing applications in a fast-paced startup environment. Collaborated directly with product and design teams to deliver user-centric solutions.",
    achievements: [
      "Built responsive web applications from scratch using React and Express",
      "Integrated third-party APIs and payment processing systems",
      "Improved code coverage from 45% to 85% through comprehensive testing",
      "Collaborated with UX team to implement accessible design patterns"
    ],
    technologies: [
      { name: "React", category: "framework" },
      { name: "Express.js", category: "framework" },
      { name: "JavaScript", category: "language" },
      { name: "MongoDB", category: "database" },
      { name: "Stripe API", category: "tool" },
      { name: "Jest", category: "tool" }
    ],
    location: "Remote",
    logo: amazonLogo
  },
  {
    id: "exp-3",
    company: "Amazon",
    position: "Software Development Engineer Intern",
    startDate: "2019-01",
    endDate: "2020-05",
    description: "Created responsive websites and web applications for diverse clients ranging from small businesses to enterprise companies. Focused on performance optimization and cross-browser compatibility.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Achieved 95+ PageSpeed scores on all production websites",
      "Implemented modern CSS Grid and Flexbox layouts",
      "Established responsive design standards for the team"
    ],
    technologies: [
      { name: "HTML5", category: "language" },
      { name: "CSS3", category: "language" },
      { name: "JavaScript", category: "language" },
      { name: "Vue.js", category: "framework" },
      { name: "Sass", category: "tool" },
      { name: "Webpack", category: "tool" }
    ],
    location: "New York, NY",
    logo: amazonLogo
  },
  {
    id: "exp-4",
    company: "Commercial Metals Company",
    position: "Software Developer Intern",
    startDate: "2018-06",
    endDate: "2018-12",
    description: "Developed software solutions and contributed to various projects in a collaborative team environment.",
    achievements: [
      "Contributed to multiple software development projects",
      "Collaborated with cross-functional teams",
      "Gained experience in software development lifecycle",
      "Participated in code reviews and team meetings"
    ],
    technologies: [
      { name: "JavaScript", category: "language" },
      { name: "HTML5", category: "language" },
      { name: "CSS3", category: "language" },
      { name: "Git", category: "tool" }
    ],
    location: "Dallas, TX",
    logo: cmcLogo
  }
];