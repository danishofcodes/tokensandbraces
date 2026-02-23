import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = ({ title, projects }) => {
  const isFeatured = projects.some(p => p.featured);

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 mb-10">
        A selection of things I’ve built — from experiments to production-ready apps.
      </p>

      <div className={isFeatured ? "grid md:grid-cols-2 gap-8" : "grid md:grid-cols-3 gap-4"}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;