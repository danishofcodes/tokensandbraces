import ProjectSection from './ProjectSection';

export default function Projects() {
const featuredProjects = [
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
    featured: true,
  },
  {
    title: "LinkedIn Optimizer AI",
    description:
      "AI-powered LinkedIn profile optimizer that generates high-converting headlines, About sections, skill tags, and actionable optimization tips.",
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
      { name: "Theme Customization" },
      { name: "Liquid" },
      { name: "Feature additions to Cart and Checkout Page" },
      { name: "Optimization" },
    ],
    demoLink: "https://gulffruits.com/",
    featured: false,
  },
  
  {
    title: "LionsBot B2B Multi-Store (Asia, USA, Europe)",
    description:
      "Multi-region Shopify architecture managing separate storefronts for Asia, USA, and Europe with region-based pricing, localization, and B2B structure.",
    tech: [
      { name: "Shopify" },
      { name: "Shopify Plus" },
      { name: "Theme Customization" },
      { name: "Liquid" },
      { name: "Multi-store Architecture" },
      { name: "B2B Setup" },
      { name: "Theme Customization" },
    ],
    demoLink: "https://www.lionsbot.com/",
    featured: false,
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
    demoLink: "https://mechanicsuperstore.com/",
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
  //   demoLink: "https://gulffruits.com/",
  //   featured: true,
  // }
  
];

const otherProjects = [
  {
    title: "Wordbox",
    description:
      "A Wordle-inspired word guessing game with dynamic hints, keyboard tracking, and game state management.",
    tech: [
      { name: "React", secondary: true },
      { name: "JavaScript", secondary: true },
      { name: "CSS", secondary: true },
    ],
    demoLink: "https://wordboxgame.netlify.app/",
    codeLink: "#",
    featured: false,
  },
 
  {
    title: "Todo App",
    description:
      "A lightweight todo app using React Context API and LocalStorage for persistent state management across sessions.",
    tech: [
      { name: "React", secondary: true },
      { name: "Context API", secondary: true },
      { name: "LocalStorage", secondary: true },
    ],
    demoLink: "https://flotodo.netlify.app/",
    codeLink: "#",
    featured: false,
  },
];


  return (
    <div>

        
         <ProjectSection title="Featured Projects" projects={featuredProjects} subheading={"My favorite apps made by me"} />
      <ProjectSection title={"Client Projects"} projects={clientProjects} subheading={"Client Projects and products I designed, built, and shipped. "} />
      <ProjectSection title="Other Projects" projects={otherProjects} subheading={"A selection of things I’ve built — from experiments to production-ready apps."}/>
   
    </div>
  )
}
