export type ProjectTag =
  | "ML"
  | "Systems"
  | "Web"
  | "Audio"
  | "Research"
  | "Design";

export interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
  techStack: string[];
  year: string;
  featured?: boolean;
  status?: "Completed" | "In Progress";
  href?: string;
  github?: string;
  video?: string;
}

export const projects: Project[] = [
  {
    title: "Interactive Game Audio System",
    description:
      "In-progress interactive audio engineering project focused on responsive game sound, runtime parameter control, and event-driven audio behavior. Built as a portfolio project for audio software engineering and technical game-audio roles.",
    tags: ["Audio", "Systems"],
    techStack: [
      "C++",
      "Unreal Engine 5",
      "Wwise",
      "MetaSounds",
      "Interactive Audio",
      "Game Audio",
    ],
    year: "2026",
    featured: true,
    status: "In Progress",
  },

  {
    title: "Freesound Generative Performance",
    description:
      "Generative audio system created for a live audiovisual performance. The application uses the Freesound API to build collections of tagged sounds and dynamically selects samples for continuously changing browser-based playback.",
    tags: ["Audio", "Web"],
    techStack: [
      "JavaScript",
      "Node.js",
      "Freesound API",
      "Web Audio API",
      "HTML",
      "CSS",
    ],
    year: "2024",
    featured: true,
    status: "Completed",
    github: "https://github.com/jkaphammer/freesoundAPI-Generation",
    video: "https://youtu.be/EhLKBfwSlK0?si=djKVbGkeRUFBxuKd",
  },

  {
    title: "Honeybee Swarm Computer Vision",
    description:
      "Computer vision research for analyzing honeybee swarm dynamics and responses to environmental perturbations. Developed image-processing and deep-learning workflows for tracking, segmentation, and quantitative analysis of swarm behavior.",
    tags: ["ML", "Research"],
    techStack: [
      "Python",
      "PyTorch",
      "U-Net",
      "YOLO11",
      "MATLAB",
      "Computer Vision",
      "Image Processing",
    ],
    year: "2024–2025",
    featured: true,
    status: "Completed",
  },

  {
    title: "Zebrafish Phenotype Prediction",
    description:
      "Machine learning pipeline for predicting zebrafish phenotype expression from gene mutations using biological data from ZFIN. Included preprocessing, high-dimensional feature encoding, supervised classification, clustering, and dimensionality reduction.",
    tags: ["ML", "Research"],
    techStack: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "Logistic Regression",
      "K-Means",
      "PCA",
      "ZFIN",
    ],
    year: "2025",
    featured: true,
    status: "Completed",
  },

  {
    title: "Cross-Data-Center Failover System",
    description:
      "High-availability engineering project developed during a systems engineering internship to improve service reliability across data centers through health checks, failover behavior, and distributed infrastructure integration.",
    tags: ["Systems"],
    techStack: [
      "Java",
      "Spring Boot",
      "Oracle",
      "Kubernetes",
      "Rancher",
      "REST APIs",
      "GSLB",
      "Maven",
    ],
    year: "2025",
    featured: true,
    status: "Completed",
  },

  {
    title: "Production Systems & Observability",
    description:
      "Production reliability and troubleshooting work across distributed Linux systems, including service diagnostics, automation, observability, API analysis, and infrastructure support.",
    tags: ["Systems"],
    techStack: [
      "Linux",
      "Bash",
      "SQL",
      "Splunk",
      "Kubernetes",
      "Rancher",
      "REST APIs",
    ],
    year: "2026",
    featured: false,
    status: "Completed",
  },

  {
    title: "Astro Adventures",
    description:
      "Full-stack web application integrating external space-data APIs with server-side rendering, persistent storage, automated testing, and containerized development.",
    tags: ["Web"],
    techStack: [
      "JavaScript",
      "Node.js",
      "EJS",
      "PostgreSQL",
      "Docker",
      "REST APIs",
      "Mocha",
      "HTML",
      "CSS",
    ],
    year: "2024",
    featured: false,
    status: "Completed",
    github: "https://github.com/jkaphammer/AstroAdventures-012-Group6",
  },

  {
    title: "Interactive Portfolio & Persistent Audio System",
    description:
      "Personal portfolio combining editorial web design with persistent browser audio, custom playback controls, frequency visualization, responsive layout, and project filtering.",
    tags: ["Web", "Audio", "Design"],
    techStack: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Web Audio API",
      "HTML",
      "CSS",
      "Canvas API",
    ],
    year: "2026",
    featured: true,
    status: "In Progress",
    github: "https://github.com/jkaphammer/jkaphammer.github.io",
  },

  {
    title: "Buff Portal UX Research",
    description:
      "User-centered design project focused on improving the university portal experience through user research, usability evaluation, prototyping, and A/B testing.",
    tags: ["Design"],
    techStack: [
      "Figma",
      "User Research",
      "Usability Testing",
      "A/B Testing",
      "Prototyping",
    ],
    year: "2024",
    featured: false,
    status: "Completed",
  },
];