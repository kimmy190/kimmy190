// Single source of truth for all portfolio content.
// Edit this file to update any section of the site — pushing to `main`
// rebuilds and redeploys automatically via GitHub Actions.

export interface ExperienceEntry {
  role: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
  stack?: string[];
}

export interface ProjectEntry {
  name: string;
  start: string;
  end: string;
  highlights: string[];
  stack?: string[];
  link?: string;
}

export const profile = {
  name: "Amy",
  role: "Full-Stack Developer",
  location: "Toronto, ON",
  summary: [
    "I'm a developer passionate about solving meaningful problems through technology. <strong>Loving both art and tech</strong>, I put effort to create applications that are not only functional, but also thoughtfully designed.",
    "I believe great software lies at the intersection of <i>creativity, innovation, and purpose,</i> and I'm excited to build solutions that make a lasting impact!", 
    "During my time at the University of Toronto, I worked on a variety of projects that expanded my technical skills and introduced me to new technologies. Since graduating, I've continued to learn by exploring new tools, building personal projects, and challenging myself to grow as a developer."
  ],
};

export const education = {
  degree: "Honours Bachelor of Science — Computer Science Specialist",
  school: "University of Toronto",
  honors: ["University of Toronto International Scholar Award"],
};

export const skills = {
  languages: [
    "C/C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Java",
    "Assembly",
    "R",
  ],
  tools: [
    "React",
    "Node.js",
    "Next.js",
    "Django",
    "Tailwind",
    "Bootstrap",
    "jQuery",
    "Prisma",
    "Quarto",
    "Git",
    "GitHub",
    "Postman",
    "Spring Boot",
    "Figma",
    "RStudio",
    "Tableau",
    "NumPy",
    "Flask",
    "pandas",
    "seaborn",
    "Matplotlib",
    "BeautifulSoup",
    "scikit-learn",
    "Lighthouse",
  ],
};

export const experience: ExperienceEntry[] = [
  {
    role: "Freelance Full-Stack Developer",
    org: "Kelly Services",
    location: "Toronto, ON",
    start: "June 2026",
    end: "August 2026",
    highlights: [
      "Identified that professional interpreters were losing time hunting for terminology across scattered spreadsheets and notes, and scoped a full-stack vocabulary management platform to organize and share terminology in one place",
      "Architected a the application across React, Flask, and PostgreSQL, building REST APIs and relational data models for vocabulary lists, categories, user-owned resources, authentication, and bulk CSV workflows", 
      "Reworked the application's most expensive database workflows after profiling performance bottlenecks, reducing CSV import latency by ~96% with batched transactions and cutting database round trips by ~91% by eliminating N+1 queries with SQLAlchemy eager loading and aggregation", 
      "Built authentication around JWT access and refresh tokens, CSRF protection, Google OAuth, and ownership-based permissions, then introduced Redis-backed token revocation so logging out invalidates tokens server-side instead of relying solely on removing them from the browser",
    ],
    stack: ["Python/Flask", "PostgreSQL", "React", "TailwindCSS", "Redis"],
  },
  {
    role: "Web Developer",
    org: "University of Toronto",
    location: "Toronto, ON",
    start: "June 2025",
    end: "Sept 2025",
    highlights: [
        "Developed the official course website for UofT's CS grad courses in Quarto, organizing 50+ lectures, assignments, and resources into a responsive platform — architected so instructors can update content each semester without touching layout code", 
        "Engineered an auto-render pipeline that detects uploaded Quarto (.qmd) files, converts them to clean HTML, and publishes them to the lab website — eliminating the manual convert-and-attach workflow for blogs and research papers", 
        "Cut page load times ~30% by building a Node.js batch converter (Sharp) that transforms JPEG/PNG/GIF assets to WebP, with documented, configurable usage for future maintainers", 
        "Redesigned the lab homepage, news cards, and blog layouts to stakeholder specifications while resolving 10+ cross-device rendering defects with responsive React components and CSS"
    ],
    stack: ["React", "CSS", "JavaScript"],
  },
  {
    role: "Software Developer",
    org: "University of Toronto",
    location: "Toronto, ON",
    start: "Jan 2025",
    end: "April 2025",
    highlights: [
      "Rebuilt a browser-based slide viewer into a full interactive presentation platform with features of audio-narrated playback, thumbnail navigation, and hands-free autoplay — all in JavaScript with zero framework dependencies",
      "Eliminated cross-device scroll alignment defects by tracing the root cause to inconsistent browser snap-point calculation between keyboard and wheel events, then replacing scroll-based navigation with deterministic active-state management", 
"Built a reusable audio playback component with Shadow DOM custom elements, keeping styles encapsulated so narration embeds cleanly in any slide",
"Designed a YouTube-style autoplay mode where UI controls fade during viewing, slides advance in sync with audio, and hover brings everything back",
     
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },{
    role: "UI/UX Tester",
    org: "TechValet",
    location: "Toronto, ON",
    start: "Dec 2024",
    end: "Jan 2025",
    highlights: [
        "Conducted structured usability testing with 6 participants for a software solutions website, synthesizing qualitative feedback into a formal usability report whose recommendations were applied to refine core user flows"
    ],
    // stack: ["Django", "PostgreSQL", "Postman"],
  },

  {
    role: "Software Developer",
    org: "mHapy",
    location: "Toronto, ON",
    start: "Jan 2024",
    end: "April 2024",
    highlights: [
      "Collaborated across a 7-person agile team to build the backend data layer for a mental health chatbot API on a Railway-hosted SQL database",
      "Architected a relational schema with a precomputed, real-time user-statistics table, eliminating repeated multi-table aggregations in the Django ORM and cutting assessment data retrieval latency by 40%",
      "Validated API reliability by designing Postman test suites covering HTTP response codes and payload structures across every endpoint",
    ],
    stack: ["Django", "PostgreSQL", "Postman"],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: "Automated Job Search Agent",
    start: "April 2026",
    end: "May 2026",
    highlights: [
      "Built an automated Python pipeline that scrapes LinkedIn job postings and scores each one against a personal resume profile using the Claude API",
      "Designed a custom AI scoring rubric to rank opportunities by fit, cutting out hours of manual screening",
      "Wired the pipeline to push filtered, ranked results to a Google Sheet via the Sheets REST API, turning job search into an automated daily digest",
    ],
    stack: ["Python", "Claude API", "Google Sheets API"],
  },
    {
    name: "Petpal",
    start: "Sept 2023",
    end: "Dec 2023",
    highlights: [
      "Built a full-stack pet adoption platform with a team of four, connecting animal shelters with adopters end to end",
      "Engineered RESTful APIs powering real-time messaging between adopters and shelters, cutting communication response times by 40%",
      "Implemented role-based access control and authentication with Django's authorization framework to keep sensitive adoption data secure",
      "Paired the Django backend with a React and Tailwind CSS frontend for a fast, responsive adopter experience",
    ],
    stack: ["Django", "React", "Tailwind CSS", "PostgreSQL"],
     link: "https://github.com/kimmy190/Petpal",
  },
  {
    name: "Diabetes Data Visualization",
    start: "Nov 2024",
    end: "Dec 2024",
    highlights: [
      "Cleaned and restructured a dataset of 200+ health records in R, handling missing values and standardizing formats",
      "Built an interactive Tableau dashboard surfacing early diabetes risk patterns across key health indicators, turning static spreadsheet data into an explorable visual tool",
    ],
    stack: ["Tableau", "R"],
    link: "https://public.tableau.com/app/profile/amy.kim5641/viz/313project_17335805823240/Healthfactors2?publish=yes"
  },
  {
    name: "EBook",
    start: "Sept 2023",
    end: "Dec 2023",
    highlights: [
      "Built an ebook marketplace on a Spring Boot microservice architecture in a team of 8 — independent order, user, book, and third-party services registered through Eureka and routed via Spring Gateway with JWT authentication, backed by MySQL with Redis caching for hot data like index pages and sessions", 
    "Delivered end-to-end user features across services: registration and role-based access (student, professor, admin), document upload and reading via AWS S3, PayPal-integrated checkout, and a ratings system surfacing top-ranked books"
    ],
    stack: ["Springboot","Spring Cloud (Gateway, Eureka, Feign)", "Redis", "MySQL", "Javascript", "HTML", "Bootstrap"],
    // link: "hhttps://github.com/CSC207-2022F-UofT/course-project-e-booked",
  },

  {
    name: "WorkSphere",
    start: "Sept 2023",
    end: "Dec 2023",
    highlights: [
      "Designed a workplace social-connection app from research to high-fidelity Figma prototype — conducting user interviews, defining user flows, and wireframing core interactions", 
    "Validated and iterated the design through multi-stage usability testing with real participants, documenting feedback that reshaped each version"
    ],
    stack: ["Figma"],
    link: "https://www.figma.com/proto/3QdxyKHY54U1t8hYwN4pIw/High-Fidelity-Prototype---CSC318?node-id=318-470&t=rHYLTGugAD5Twr0N-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=318%3A470&show-proto-sidebar=1",
  },
];

export const contact = {
  email: "aamy.kim@alumni.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/amy-kim8/",
  github: "https://github.com/kimmy190",
};
