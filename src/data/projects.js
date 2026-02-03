import amazonLogo from '../assets/amazon.png';
import reactLogo from '../assets/react.svg';
import utdLogo from '../assets/utd-logo.svg';
import cmcLogo from '../assets/cmc.png';

export const projects = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, order management, and integrated payment processing. Includes an admin dashboard for inventory management and sales analytics.",
    timePeriod: "Jan 2024 - Mar 2024",
    logo: {
      src: amazonLogo,
      alt: "E-Commerce Platform Logo"
    },
    image: {
      src: "/images/ecommerce-project.jpg",
      alt: "E-Commerce Platform Screenshot",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkUtQ29tbWVyY2UgUGxhdGZvcm08L3RleHQ+PC9zdmc+"
    },
    technologies: [
      { name: "React", category: "framework" },
      { name: "Node.js", category: "framework" },
      { name: "Express.js", category: "framework" },
      { name: "MongoDB", category: "database" },
      { name: "Stripe", category: "tool" },
      { name: "JWT", category: "tool" }
    ],
    links: [
      {
        type: "demo",
        url: "https://ecommerce-demo.aryankapoor.dev",
        label: "Live Demo"
      },
      {
        type: "code",
        url: "https://github.com/aryankapoor/ecommerce-platform",
        label: "Source Code"
      }
    ],
    category: "Full Stack"
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
    longDescription: "A modern task management application built with React and Firebase, featuring real-time collaboration, drag-and-drop task organization, team workspaces, and comprehensive progress tracking with analytics dashboard.",
    timePeriod: "Sep 2023 - Dec 2023",
    logo: {
      src: reactLogo,
      alt: "Task Management App Logo"
    },
    image: {
      src: "/images/taskmanager-project.jpg",
      alt: "Task Management App Screenshot",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlRhc2sgTWFuYWdlcjwvdGV4dD48L3N2Zz4="
    },
    technologies: [
      { name: "React", category: "framework" },
      { name: "TypeScript", category: "language" },
      { name: "Firebase", category: "database" },
      { name: "Material-UI", category: "framework" },
      { name: "React DnD", category: "tool" }
    ],
    links: [
      {
        type: "demo",
        url: "https://taskmanager.aryankapoor.dev",
        label: "Live Demo"
      },
      {
        type: "code",
        url: "https://github.com/aryankapoor/task-manager",
        label: "Source Code"
      }
    ],
    category: "Frontend"
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.",
    longDescription: "A comprehensive weather dashboard application that provides current weather conditions, 7-day forecasts, historical weather data visualization, and severe weather alerts. Features geolocation support and customizable dashboard widgets.",
    timePeriod: "Jun 2023 - Aug 2023",
    logo: {
      fallback: "WD"
    },
    technologies: [
      { name: "React", category: "framework" },
      { name: "D3.js", category: "tool" },
      { name: "OpenWeather API", category: "tool" },
      { name: "Chart.js", category: "tool" },
      { name: "Tailwind CSS", category: "framework" }
    ],
    links: [
      {
        type: "demo",
        url: "https://weather-dashboard.aryankapoor.dev",
        label: "Live Demo"
      },
      {
        type: "code",
        url: "https://github.com/aryankapoor/weather-dashboard",
        label: "Source Code"
      }
    ],
    category: "Frontend"
  },
  {
    id: "project-4",
    title: "University Research Platform",
    description: "Academic research collaboration platform with document management, peer review system, and publication tracking.",
    longDescription: "A comprehensive research platform built for university collaboration, featuring document version control, peer review workflows, citation management, and publication tracking with analytics dashboard.",
    timePeriod: "Mar 2023 - May 2023",
    logo: {
      src: utdLogo,
      alt: "University Research Platform Logo"
    },
    technologies: [
      { name: "Node.js", category: "framework" },
      { name: "Express.js", category: "framework" },
      { name: "PostgreSQL", category: "database" },
      { name: "Docker", category: "tool" },
      { name: "Redis", category: "database" },
      { name: "JWT", category: "tool" }
    ],
    links: [
      {
        type: "code",
        url: "https://github.com/aryankapoor/research-platform",
        label: "Source Code"
      },
      {
        type: "documentation",
        url: "https://research-platform-docs.aryankapoor.dev",
        label: "Documentation"
      }
    ],
    category: "Backend"
  },
  {
    id: "project-5",
    title: "Healthcare Analytics Dashboard",
    description: "Medical data visualization platform with patient analytics, treatment tracking, and predictive insights for healthcare providers.",
    longDescription: "A comprehensive healthcare analytics platform built with React and Python, featuring patient data visualization, treatment outcome tracking, predictive analytics, and compliance reporting for medical institutions.",
    timePeriod: "Nov 2023 - Present",
    logo: {
      src: cmcLogo,
      alt: "Healthcare Analytics Logo"
    },
    image: {
      src: "/images/healthcare-dashboard.jpg",
      alt: "Healthcare Analytics Dashboard Screenshot",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkhlYWx0aGNhcmUgQW5hbHl0aWNzPC90ZXh0Pjwvc3ZnPg=="
    },
    technologies: [
      { name: "React", category: "framework" },
      { name: "Python", category: "language" },
      { name: "FastAPI", category: "framework" },
      { name: "PostgreSQL", category: "database" },
      { name: "D3.js", category: "tool" },
      { name: "Docker", category: "tool" }
    ],
    links: [
      {
        type: "demo",
        url: "https://healthcare-analytics.aryankapoor.dev",
        label: "Live Demo"
      },
      {
        type: "code",
        url: "https://github.com/aryankapoor/healthcare-analytics",
        label: "Source Code"
      }
    ],
    category: "Full Stack"
  },
  {
    id: "project-6",
    title: "Machine Learning Model Deployment",
    description: "MLOps pipeline for deploying and monitoring machine learning models with automated retraining and A/B testing.",
    longDescription: "A comprehensive MLOps solution for deploying machine learning models to production, featuring automated model training pipelines, A/B testing framework, model performance monitoring, and automated retraining based on data drift detection.",
    timePeriod: "Planned for 2024",
    logo: {
      fallback: "ML"
    },
    technologies: [
      { name: "Python", category: "language" },
      { name: "FastAPI", category: "framework" },
      { name: "Docker", category: "tool" },
      { name: "Kubernetes", category: "tool" },
      { name: "MLflow", category: "tool" },
      { name: "Prometheus", category: "tool" }
    ],
    links: [
      {
        type: "code",
        url: "https://github.com/aryankapoor/ml-deployment-pipeline",
        label: "Source Code"
      }
    ],
    category: "Backend"
  }
];