import Pill from "./Pill";

const ProjectCard = ({ title, description, tech, demoLink, codeLink, featured }) => {
  return (
    <div className={`relative bg-white rounded-2xl p-6 border ${featured ? 'border-violet-200 shadow-md hover:shadow-lg transition' : 'border-gray-200 hover:shadow-sm transition'}`}>
      {featured && (
        <span className="absolute -top-3 left-6 bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Featured
        </span>
      )}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h4 className="text-xl font-semibold mb-1">{title}</h4>
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <Pill key={i} secondary={t.secondary}>{t.name}</Pill>
            ))}
          </div>
          <div className="flex gap-4">
            {demoLink && <a href={demoLink} className="text-violet-600 font-medium hover:underline">🔗 Live Demo</a>}
            {/* {codeLink && <a href={codeLink} className="text-gray-600 hover:underline">&lt;/&gt; Source Code</a>} */}
          </div>
        </div>
        {/* {featured && (
          <div className="w-32 h-20 bg-gradient-to-br from-violet-100 to-violet-200 rounded-lg flex items-center justify-center text-violet-500 text-sm font-medium">
            Preview
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProjectCard;