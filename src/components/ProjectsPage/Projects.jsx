import ProjectSection from './ProjectSection';

export default function Projects() {

      
   const featuredProjects = [
    {
      title: "GameWyre",
      description: "E-commerce platform for gaming products with advanced filters, search, and cart flow.",
      tech: [{ name: "React" }, { name: "Redux" }],
      demoLink: "#",
      codeLink: "#",
      featured: true,
    },
    {
      title: "GameWyre 2.0",
      description: "Redesigned interface with new cart flow and better search.",
      tech: [{ name: "React" }, { name: "Tailwind" }],
      demoLink: "#",
      codeLink: "#",
      featured: true,
    },
  ];

  const otherProjects = [
    {
      title: "Dictionary App",
      description: "Lookup meanings, usage, and synonyms instantly.",
      tech: [{ name: "JavaScript", secondary: true }, { name: "API", secondary: true }],
      demoLink: "#",
      codeLink: "#",
      featured: false,
    },
    {
      title: "Survey Bubble",
      description: "Feedback surveys with dynamic forms.",
      tech: [{ name: "React", secondary: true }, { name: "Formik", secondary: true }],
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
