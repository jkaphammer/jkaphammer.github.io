export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  href?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "audio-system",
    title: "Interactive Audio System",
    description: "An exploration of real-time interactive audio.",
    year: 2026,
    category: "Audio / Interactive Systems",
    tags: ["Audio", "C++", "Software Engineering"],
    featured: true,
  },
  {
    id: "bioacoustics",
    title: "Bioacoustic Machine Learning",
    description: "Exploring acoustic analysis using machine learning.",
    year: 2026,
    category: "Research / Machine Learning",
    tags: ["Machine Learning", "Research", "Audio"],
    featured: true,
  },
  {
    id: "software-project",
    title: "Software Engineering Project",
    description: "A software engineering project.",
    year: 2025,
    category: "Software Engineering",
    tags: ["Software Engineering", "C++"],
    featured: true,
  },
];
