export interface Project {
  title: string;
  role?: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  link?: string;
}

export interface AcademicModule {
  name: string;
  grade: number;
}

export const personalInfo = {
  name: "Tyler Howle",
  role: "Backend & Systems-Focused Software Engineer",
  education: "BSc Computer Science · University of Nottingham",
  bio: "Focused on building maintainable backend software, scalable API design, and distributed systems. Grounded in strong fundamentals across computer architecture, databases, and formal reasoning.",
  status: "Open to Software Engineering & Backend Roles",
  links: {
    github: "https://github.com/thowle06",
    linkedin: "https://www.linkedin.com/in/t-howle06/",
    email: "mailto:t.howle06@outlook.com",
  },
};

export const skills = {
  languages: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "C/C++",
    "Haskell",
    "SQL",
    "ARM Assembly",
  ],
  backend: [
    "Node.js",
    "Express",
    "FastAPI",
    "PosthreSQL",
    "Prisma",
    "Redis",
    "Supabase",
  ],
  infrastructure: [
    "Docker",
    "Docker Compose",
    "GitHub Actions",
    "Linux",
    "Git",
  ],
};

export const projects: Project[] = [
  {
    title: "UniHub",
    role: "Full-Stack Project Lead",
    description:
      "Full-stack platform engineered to support university students with responsive UI, auth, and automated CI.",
    highlights: [
      "Custom authentication & authorization layer powered by Better Auth",
      "Normalized relational schema in PostgreSQL managed via Prisma ORM",
      "Automated CI workflows for build and validation with GitHub Actions",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    github: "https://github.com/thowle06",
  },
  {
    title: "RobotDay Management System",
    role: "Backend Developer & Git Workflow Lead",
    description:
      "Agile group event management platform delivering reliable service layers and clean interfaces.",
    highlights: [
      "Designed clean RESTful backend service layers using FastAPI & Supabase",
      "Led team branching strategy, PR reviews, and automated CI pipelines",
      "Containerized microservices for consistent local and test runtimes",
    ],
    tech: ["FastAPI", "Python", "Supabase", "Docker", "Git"],
  },
  {
    title: "High-Throughput URL Shortener",
    description:
      "Backend microservice focused on fast URL validation, hash generation, and defensive redirection.",
    highlights: [
      "Type-safe REST API with defensive validation handling",
      "Zero-latency redirection layer with automated error recovery",
      "Packaged in a lightweight, production-ready Docker container",
    ],
    tech: ["TypeScript", "Express", "Docker"],
    github: "https://github.com/thowle06",
  },
  {
    title: "Weather API & Redis Cache",
    description:
      "Third-party weather service aggregator engineered with an in-memory caching layer to eliminate rate limits.",
    highlights: [
      "Integrated Redis caching to drastically cut upstream latency and external API consumption",
      "Robust fallback logic for external network failures",
      "Multi-container environment orchestration managed via Docker Compose",
    ],
    tech: ["Node.js", "Express", "Redis", "Docker Compose"],
    github: "https://github.com/thowle06",
  },
];

export const academicHighlights: AcademicModule[] = [
  { name: "Assembly Language Programming", grade: 83 },
  { name: "Computer Architecture", grade: 83 },
  { name: "Developing Maintainable Software", grade: 81 },
  { name: "Programming & Algorithms", grade: 77 },
  { name: "Software Engineering Group Project", grade: 76 },
  { name: "Programming Paradigms", grade: 76 },
  { name: "Databases & Interfaces", grade: 75 },
  { name: "C++ Programming", grade: 72 },
  { name: "Introduction to Formal Reasoning", grade: 72 },
  { name: "Languages and Computation", grade: 71 },
];
