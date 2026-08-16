import fantasyboard from '../assets/fantasyboard.png';
import fantasyboardLogo from '../assets/fantasyboard-logo.png';
import movieLogo from '../assets/movie.png';
import sentimentPage from '../assets/sentimentpage.png';
import cfg from '../assets/cfg.png';
import shopnshare from '../assets/shopnshare.png';
import acm from '../assets/acm.png';
import chaseLogo from '../assets/chase.png';
import chatbotLogo from '../assets/chatbot.png';
import openaiLogo from '../assets/openai.png';
import utd from '../assets/utd.png';
import fintech from '../assets/fintech.png';
import bowling from '../assets/bowling.png';
import utdbowling from '../assets/utdbowling.png';
import photo from '../assets/photo.png';
import photoapp from '../assets/photoapp.png';
import outsidebaseball from '../assets/outsidebaseball.png';
import ob from '../assets/ob.png';

export const projects = [
  {
    id: "project-6",
    title: "Outside Baseball",
    description: "Developing a baseball analytics platform using machine learning to predict player performance and game outcomes with advanced statistical modeling",
    longDescription: "A comprehensive baseball analytics platform that leverages machine learning algorithms to analyze player statistics, predict performance trends, and forecast game outcomes using advanced statistical modeling and data visualization.",
    timePeriod: "In Progress",
    logo: {
      src: outsidebaseball,
      alt: "Outside Baseball Logo"
    },
    image: {
      src: ob,
      alt: "Outside Baseball Background"
    },
    technologies: [
      { name: "React", category: "framework" },
      { name: "JavaScript", category: "language" },
      { name: "Tailwind CSS", category: "framework" },
      { name: "AWS S3", category: "database" },
      { name: "Firebase", category: "tool" },
      { name: "Python", category: "language" },
      { name: "Framer Motion", category: "tool" }
    ],
    links: [
      {
        type: "demo",
        url: "https://outsidebaseball.web.app",
        label: "Live Site"
      },
      {
        type: "code",
        url: "https://github.com/aryankapoorr/outsidebaseball",
        label: "Source Code"
      },
    ],
    category: "Data Science"
  },
  {
    id: "project-1",
    title: "Sentiment Analysis Model",
    description: "Created an NLP model trained on movie reviews to evaluate public sentiment, creating normalized movie ratings",
    longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, order management, and integrated payment processing. Includes an admin dashboard for inventory management and sales analytics.",
    timePeriod: "May 2024",
    logo: {
      src: movieLogo,
      alt: "Movie Sentiment Logo"
    },
    image: {
      src: sentimentPage,
      alt: "Sentiment Analysis Interface",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNlbnRpbWVudCBBbmFseXNpczwvdGV4dD48L3N2Zz4="
    },
    technologies: [
      { name: "NLP", category: "framework" },
      { name: "Google Colab", category: "tool" },
      { name: "Python", category: "language" },
      { name: "Machine Learning", category: "framework" },
    ],
    links: [
      {
        type: "demo",
        url: "https://moviesentiment.streamlit.app/",
        label: "Project Website"
      },
      {
        type: "code",
        url: "https://github.com/aryankapoorr/moviesentiment?tab=readme-ov-file",
        label: "Source Code"
      }
    ],
    category: "NLP"
  },
  {
    id: "project-2",
    title: "JPMorgan Code For Good Hackathon",
    description: "Winning Submission -- Redesigned the website for the CanCare nonprofit, integrating the Calendy API and a chatbot leveraging the LLamaIndex, trained on domain information",
    longDescription: "A modern task management application built with React and Firebase, featuring real-time collaboration, drag-and-drop task organization, team workspaces, and comprehensive progress tracking with analytics dashboard.",
    timePeriod: "Oct 2023",
    logo: {
      src: chaseLogo,
      alt: "JPMorgan Chase Logo"
    },
    image: {
      src: cfg,
      alt: "Code For Good Project",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNvZGUgRm9yIEdvb2Q8L3RleHQ+PC9zdmc+"
    },
    technologies: [
      { name: "LLamaIndex", category: "tool" },
      { name: "React", category: "framework" },
      { name: "Firebase", category: "database" },
      { name: "Next.js", category: "framework" },
    ],
    links: [
      {
        type: "documentation",
        url: "https://docs.google.com/presentation/d/10fuB7g0I9USuqXfd3E4mWJGHU1K7uWNftr1yhKM3yKg/edit?usp=sharing",
        label: "Submission Deck"
      },
      {
        type: "code",
        url: "https://github.com/cfgtexas23/Team-20",
        label: "Source Code"
      }
    ],
    category: "Full Stack"
  },
  {
    id: "project-10",
    title: "FantasyBoard",
    description: "Built a fantasy football draft board that merges consensus expert rankings with live ADP into one drag-and-drop board, with custom tiers, favorites, notes, and live pick tracking during a real draft",
    longDescription: "FantasyBoard is a full-stack fantasy football draft board built with Next.js and React. It merges FantasyPros expert consensus rankings with live ESPN/FFC average draft position data into a single virtualized drag-and-drop board that stays smooth even across 1,000+ ranked players. Users can group players into custom tiers, favorite and annotate targets, and track every pick live as a draft unfolds — either as a guest (saved to the browser) or signed in with Google (synced in real time to the cloud across devices).",
    timePeriod: "Aug 2026",
    logo: {
      src: fantasyboardLogo,
      alt: "FantasyBoard Logo"
    },
    image: {
      src: fantasyboard,
      alt: "FantasyBoard draft board landing page"
    },
    technologies: [
      { name: "Next.js", category: "framework" },
      { name: "React", category: "framework" },
      { name: "TypeScript", category: "language" },
      { name: "Tailwind CSS", category: "framework" },
      { name: "Firebase", category: "tool" },
      { name: "Zustand", category: "tool" },
      { name: "dnd-kit", category: "tool" }
    ],
    links: [
      {
        type: "demo",
        url: "https://fantasydraftboard.vercel.app",
        label: "Live Site"
      },
      {
        type: "code",
        url: "https://github.com/aryankapoorr/fantasyboard",
        label: "Source Code"
      }
    ],
    category: "Full Stack"
  },
  {
    id: "project-3",
    title: "AI Syllabus Chatbot",
    description: "Using the OpenAI API, created a chatbot on a syllabus & course information to answer student questions in realtime",
    longDescription: "A comprehensive weather dashboard application that provides current weather conditions, 7-day forecasts, historical weather data visualization, and severe weather alerts. Features geolocation support and customizable dashboard widgets.",
    timePeriod: "Aug 2023 - Dec 2023",
    logo: {
      src: openaiLogo,
      alt: "OpenAI Logo"
    },
    image: {
      src: chatbotLogo,
      alt: "AI Chatbot Interface",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFJIENoYXRib3Q8L3RleHQ+PC9zdmc+"
    },
    technologies: [
      { name: "GenAI", category: "tool" },
      { name: "React", category: "framework" },
      { name: "Python", category: "language" },
      { name: "Flask", category: "framework" },
      { name: "Large Language Models", category: "tool" },
    ],
    links: [
      {
        type: "code",
        url: "https://github.com/raghavpillai/syllabus-chatbot",
        label: "Source Code"
      }
    ],
    category: "Full Stack"
  },
  {
    id: "project-4",
    title: "UTD Fintech",
    description: "Created a website allowing users to gain financial literacy and analysis via a Black Litterman model -- additionally, analyzed financial markets using algorithmic models and technical indicators to track and predict stock trends",
    longDescription: "A comprehensive healthcare analytics platform built with React and Python, featuring patient data visualization, treatment outcome tracking, predictive analytics, and compliance reporting for medical institutions.",
    timePeriod: "Nov 2023 - Present",
    logo: {
      src: fintech,
      alt: "UTD Fintech Logo"
    },
    technologies: [
      { name: "React", category: "framework" },
      { name: "Python", category: "language" },
      { name: "Next.js", category: "framework" },
      { name: "Firebase", category: "database" },
      { name: "Technical Analysis", category: "tool" },
    ],
    links: [
      {
        type: "code",
        url: "https://github.com/UTD-FinTech/CometVisor",
        label: "Source Code"
      }
    ],
    category: "Full Stack"
  },
  {
    id: "project-5",
    title: "Arcade Bar Tracker",
    description: "Created a script & corresponding database using a sorted binary search tree housing the data of a bar arcade, leveraging a Binary Tree Search to iterate through database values and execute queries with O(log n) efficiency",
    longDescription: "A comprehensive MLOps solution for deploying machine learning models to production, featuring automated model training pipelines, A/B testing framework, model performance monitoring, and automated retraining based on data drift detection.",
    timePeriod: "Sept 2022",
    logo: {
      src: utd,
      alt: "UTD Logo"
    },
    technologies: [
      { name: "C++", category: "language" },
      { name: "Data Structures & Algorithms", category: "tool" },
    ],
    links: [
      {
        type: "code",
        url: "https://github.com/aryankapoorr/Cidercade_Tracker",
        label: "Source Code"
      }
    ],
    category: "Backend"
  },
  {
    id: "project-7",
    title: "ACM Projects",
    description: "Collaborated with a team of people, developing a mobile application allowing users to create and share grocery lists with peers",
    longDescription: "A comprehensive research platform built for university collaboration, featuring document version control, peer review workflows, citation management, and publication tracking with analytics dashboard.",
    timePeriod: "Aug 2022 - Dec 2022",
    logo: {
      src: acm,
      alt: "ACM Logo"
    },
    image: {
      src: shopnshare,
      alt: "Shop and Share App Interface",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNob3AgYW5kIFNoYXJlPC90ZXh0Pjwvc3ZnPg=="
    },
    technologies: [
      { name: "React Native", category: "framework" },
      { name: "Firebase", category: "tool" },
      { name: "Javascript", category: "language" },
      { name: "Tailwind.css", category: "tool" },
      { name: "NoSQL", category: "database" }
    ],
    links: [
      {
        type: "documentation",
        url: "https://docs.google.com/presentation/d/1-nI3FBE1ePgHm5GRyTW2AMS_ICKkEjp5RNpKb2NZ7xg/edit?usp=sharing",
        label: "Submission Deck"
      },
      {
        type: "code",
        url: "https://github.com/acm-projects/Shop-and-Share",
        label: "Source Code"
      }
    ],
    category: "Mobile"
  },
  {
    id: "project-8",
    title: "Photo Party App",
    description: "Created a real time mobile web application allowing users to take and view a pool of photos from an event",
    longDescription: "A comprehensive research platform built for university collaboration, featuring document version control, peer review workflows, citation management, and publication tracking with analytics dashboard.",
    timePeriod: "Jan 2025",
    logo: {
      src: photo,
      alt: "Photo Party Logo"
    },
    image: {
      src: photoapp,
      alt: "Photo Party App Interface",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlBob3RvIFBhcnR5PC90ZXh0Pjwvc3ZnPg=="
    },
    technologies: [
      { name: "React", category: "framework" },
      { name: "Firebase", category: "tool" },
      { name: "Firestore", category: "database" },
      { name: "MUI", category: "tool" },
      { name: "JavaScript", category: "language" }
    ],
    links: [
      {
        type: "code",
        url: "https://github.com/aryankapoorr/Photoapp",
        label: "Source Code"
      }
    ],
    category: "Full Stack"
  },
  {
    id: "project-9",
    title: "Bowling Tracker",
    description: "Wrote a Python based UI to sync with a Google Sheet to track bowling stats & results, and wrote a JavaScript function to automate a Pivot Table's aggregated stats",
    longDescription: "A comprehensive MLOps solution for deploying machine learning models to production, featuring automated model training pipelines, A/B testing framework, model performance monitoring, and automated retraining based on data drift detection.",
    timePeriod: "Feb 2025",
    logo: {
      src: bowling,
      alt: "Bowling Tracker Logo"
    },
    image: {
      src: utdbowling,
      alt: "UTD Bowling Tracker Interface",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJvd2xpbmcgVHJhY2tlcjwvdGV4dD48L3N2Zz4="
    },
    technologies: [
      { name: "Python", category: "language" },
      { name: "Sheets API", category: "tool" },
      { name: "Streamlit", category: "framework" },
      { name: "JavaScript", category: "language" },
    ],
    links: [
      {
        type: "demo",
        url: "https://utdbowling.streamlit.app/",
        label: "Project Website"
      },
      {
        type: "code",
        url: "https://github.com/aryankapoorr/Bowling",
        label: "Source Code"
      }
    ],
    category: "Full Stack"
  }
];