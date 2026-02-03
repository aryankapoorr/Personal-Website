import amazonLogo from '../assets/amazon.png';
import cmcLogo from '../assets/cmc.png';

export const experiences = [
  {
    id: "exp-1",
    company: "Amazon",
    position: "Software Dev Engineer",
    startDate: "2025-6",
    endDate: "Present",
    description: "Started full time as a SWE at Amazon",
    achievements: [
      "Designed and built a scalable, event-driven microservice from scratch--using AWS resources--with a comprehensive operational review, handling large asynchronous workloads and boosting automated catalog enforcements by 20×",
      "Productionized the division’s first GenAI tool using web crawling LLMs, boosting violation detection by 15\%",
      "Employed various AI agents connected to custom MCP servers developing software, increasing output by 30\%",
      "Redesigned a legacy service by using AWS tools (SQS, Lambda) to lower costs by 20\% and reduce operational load",
      "Identified \& plugged 15 gaps in alarming \& monitoring of team's services, improving overall response time by 25\%",
      "Spearheaded initiatives across engineering, product \& operations teams removing ~20,000 catalog violations yearly"
    ],
    technologies: [
      { name: "Java", category: "language" },
      { name: "React", category: "framework" },
      { name: "Python", category: "language" },
      { name: "AWS SDK", category: "framework" },
      { name: "Lambda", category: "tool" },
      { name: "Scala", category: "language" },
      { name: "GenAI", category: "tool" }
    ],
    location: "Dallas, TX",
    logo: amazonLogo
  },
  {
    id: "exp-2",
    company: "Amazon",
    position: "Software Dev Engineer Intern",
    startDate: "2024-5",
    endDate: "2024-8",
    description: "Returned to Amazon for a 2nd internship, optimizing the product audit process",
    achievements: [
      "Developed a feature leveraging a dynamic React UI and AWS Glue Job to query a large scale database 3x faster",
      "Improved investigator handling time by 30\% while simultaneously decreasing the tool's operational load by 50\%",
      "Implemented an intuitive UI of a component querying realtime LLM results, 3x efficiency of product audits",
      "Designed data schema structure for an ML division to easily parse JSON results, increasing outputs by 200\%"
    ],
    technologies: [
      { name: "React", category: "framework" },
      { name: "JavaScript", category: "language" },
      { name: "AWS", category: "tool" },
      { name: "RDS", category: "database" },
      { name: "HTML/CSS", category: "language" }
    ],
    location: "Dallas, TX",
    logo: amazonLogo
  },
  {
    id: "exp-3",
    company: "Amazon",
    position: "Software Dev Engineer Intern",
    startDate: "2023-5",
    endDate: "2023-8",
    description: "Started at Amazon as an intern in the Selling Partner Services division",
    achievements: [
      "Wrote Python \& Scala scripts scheduled through EventBridge that filtered S3 data spanning 8 billion records, which were then fed into various machine learning models assessing the violation risk of respective Amazon products",
      "Cooperated with cross-functional teams to align on requirements, identifying $>5$ million miscategorized products",
      "Designed an end-to-end process leveraging Lambda \& DynamoDB automating reports of ~5,000 risky sellers"
    ],
    technologies: [
      { name: "Scala", category: "language" },
      { name: "Python", category: "language" },
      { name: "AWS", category: "tool" },
      { name: "Apache Spark", category: "tool" },
    ],
    location: "Dallas, TX",
    logo: amazonLogo
  },
  {
    id: "exp-4",
    company: "Commercial Metals Company",
    position: "Software Engineer Intern",
    startDate: "2022-5",
    endDate: "2022-8",
    description: "Interned for CMC as a SWE building an internal dashboard application",
    achievements: [
      "Created a full stack application with C\# .NET calling APIs identifying ~100 errors daily across applications",
      "Leveraged SQL tables spanning 5 million entries through the Entity Framework using a MVC architectural pattern"
    ],
    technologies: [
      { name: "C#", category: "language" },
      { name: ".NET", category: "framework" },
      { name: "MySQL", category: "database" },
      { name: "React", category: "framework" },
      { name: "JavaScript", category: "language" }
    ],
    location: "Dallas, TX",
    logo: cmcLogo
  }
];