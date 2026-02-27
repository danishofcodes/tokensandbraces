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

const clientProjects = [

  {
    title: "GulfFruits.com",
    description:
      "International fruit export Shopify store with custom product categorization, inquiry workflows, and conversion-optimized UI.",
    tech: [
      { name: "Shopify" },
      { name: "Liquid" },
      { name: "E-commerce Optimization" },
    ],
    demoLink: "#",
    featured: true,
  },
  
  {
    title: "LionsBot B2B Multi-Store (Asia, USA, Europe)",
    description:
      "Multi-region Shopify architecture managing separate storefronts for Asia, USA, and Europe with region-based pricing, localization, and B2B structure.",
    tech: [
      { name: "Shopify" },
      { name: "Multi-store Architecture" },
      { name: "B2B Setup" },
      { name: "Theme Customization" },
    ],
    demoLink: "#",
    featured: true,
  },
{
    title: "Mechanic Super Store USA",
    description:
      "High-volume Shopify automotive store with advanced filtering, structured collections, and optimized checkout experience.",
    tech: [
      { name: "Shopify" },
      { name: "Liquid" },
      { name: "Performance Optimization" },
    ],
    demoLink: "#",
    featured: false,
  }
  // {
  //   title: "Alboom Marine",
  //   description:
  //     "Shopify-based marine industry store built with custom theme modifications, structured collections, and optimized conversion-focused layout.",
  //   tech: [
  //     { name: "Shopify" },
  //     { name: "Liquid" },
  //     { name: "Custom Theme Development" },
  //   ],
  //   demoLink: "#",
  //   featured: true,
  // }
  
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
      <ProjectSection title={"Client Projects"} projects={clientProjects}/>
      <ProjectSection title="Other Projects" projects={otherProjects} />
   
    </div>
  )
}
