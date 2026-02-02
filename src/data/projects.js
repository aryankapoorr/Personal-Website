export const projects = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, order management, and integrated payment processing. Includes an admin dashboard for inventory management and sales analytics.",
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
    category: "Full Stack",
    featured: true,
    status: "completed"
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
    longDescription: "A modern task management application built with React and Firebase, featuring real-time collaboration, drag-and-drop task organization, team workspaces, and comprehensive progress tracking with analytics dashboard.",
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
    category: "Frontend",
    featured: true,
    status: "completed"
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.",
    longDescription: "A comprehensive weather dashboard application that provides current weather conditions, 7-day forecasts, historical weather data visualization, and severe weather alerts. Features geolocation support and customizable dashboard widgets.",
    image: {
      src: "/images/weather-project.jpg",
      alt: "Weather Dashboard Screenshot",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPldlYXRoZXIgRGFzaGJvYXJkPC90ZXh0Pjwvc3ZnPg=="
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
    category: "Frontend",
    featured: false,
    status: "completed"
  },
  {
    id: "project-4",
    title: "API Gateway Service",
    description: "Microservices API gateway with authentication, rate limiting, request routing, and monitoring capabilities.",
    longDescription: "A robust API gateway service built with Node.js and Express, providing centralized authentication, rate limiting, request routing, load balancing, and comprehensive monitoring for microservices architecture.",
    image: {
      src: "/images/api-gateway-project.jpg",
      alt: "API Gateway Service Architecture",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFQSSBHYXRld2F5PC90ZXh0Pjwvc3ZnPg=="
    },
    technologies: [
      { name: "Node.js", category: "framework" },
      { name: "Express.js", category: "framework" },
      { name: "Redis", category: "database" },
      { name: "Docker", category: "tool" },
      { name: "Prometheus", category: "tool" },
      { name: "JWT", category: "tool" }
    ],
    links: [
      {
        type: "code",
        url: "https://github.com/aryankapoor/api-gateway",
        label: "Source Code"
      },
      {
        type: "documentation",
        url: "https://api-gateway-docs.aryankapoor.dev",
        label: "Documentation"
      }
    ],
    category: "Backend",
    featured: false,
    status: "completed"
  },
  {
    id: "project-5",
    title: "Real-time Chat Application",
    description: "Modern chat application with real-time messaging, file sharing, group chats, and end-to-end encryption.",
    longDescription: "A feature-rich real-time chat application built with React and Socket.io, supporting private messaging, group chats, file sharing, message encryption, user presence indicators, and message history with search functionality.",
    image: {
      src: "/images/chat-app-project.jpg",
      alt: "Real-time Chat Application Screenshot",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNoYXQgQXBwbGljYXRpb248L3RleHQ+PC9zdmc+"
    },
    technologies: [
      { name: "React", category: "framework" },
      { name: "Socket.io", category: "tool" },
      { name: "Node.js", category: "framework" },
      { name: "MongoDB", category: "database" },
      { name: "WebRTC", category: "tool" },
      { name: "Crypto-js", category: "tool" }
    ],
    links: [
      {
        type: "demo",
        url: "https://chat-app.aryankapoor.dev",
        label: "Live Demo"
      },
      {
        type: "code",
        url: "https://github.com/aryankapoor/realtime-chat",
        label: "Source Code"
      }
    ],
    category: "Full Stack",
    featured: false,
    status: "in-progress"
  },
  {
    id: "project-6",
    title: "Machine Learning Model Deployment",
    description: "MLOps pipeline for deploying and monitoring machine learning models with automated retraining and A/B testing.",
    longDescription: "A comprehensive MLOps solution for deploying machine learning models to production, featuring automated model training pipelines, A/B testing framework, model performance monitoring, and automated retraining based on data drift detection.",
    image: {
      src: "/images/ml-deployment-project.jpg",
      alt: "ML Model Deployment Pipeline",
      placeholder: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1MIERlcGxveW1lbnQ8L3RleHQ+PC9zdmc+"
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
    category: "Backend",
    featured: false,
    status: "planned"
  }
];