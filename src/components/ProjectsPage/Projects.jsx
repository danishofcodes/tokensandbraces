import ProjectSection from './ProjectSection';

export default function Projects() {
const featuredProjects = [
  {
    title: "LinkedIn Optimizer AI",
    description:
      "AI-powered LinkedIn profile optimizer that generates high-converting headlines, About sections, skill tags, and actionable optimization tips using Gemini API.",
    tech: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Gemini API" },
      { name: "Tailwind CSS" },
    ],
    demoLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    title: "Collaborator Canvas",
    description:
      "Real-time collaborative drawing canvas where users can create or join rooms and doodle together instantly using live synchronization.",
    tech: [
      { name: "React" },
      { name: "WebSockets" },
      { name: "Node.js" },
      { name: "Canvas API" },
    ],
    demoLink: "#",
    codeLink: "#",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "WordPlay",
    description:
      "A Wordle-inspired word guessing game with dynamic hints, keyboard tracking, and game state management.",
    tech: [
      { name: "React", secondary: true },
      { name: "JavaScript", secondary: true },
      { name: "CSS", secondary: true },
    ],
    demoLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    title: "Movies Review",
    description:
      "A movie review blog platform where users can upload reviews, rate movies with stars, and subscribe for email notifications on new posts.",
    tech: [
      { name: "Next.js", secondary: true },
      { name: "PostgreSQL", secondary: true },
      { name: "Nodemailer", secondary: true },
    ],
    demoLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    title: "TodoContext",
    description:
      "A lightweight todo app using React Context API and LocalStorage for persistent state management across sessions.",
    tech: [
      { name: "React", secondary: true },
      { name: "Context API", secondary: true },
      { name: "LocalStorage", secondary: true },
    ],
    demoLink: "#",
    codeLink: "#",
    featured: false,
  },
];
  return (
    <div>

         <ProjectSection title="Featured Projects" projects={featuredProjects} />
      <ProjectSection title="Other Projects" projects={otherProjects} />

    </div>
  )
}
