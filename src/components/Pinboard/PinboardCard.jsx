export default function PinboardCard({
  tags,
  title,
  description,
  linkText,
  href,
  highlight,
  isVideo
}) {
  return (
    <div
      className={`relative rounded-2xl p-6 transition ${
        highlight
          ? "bg-violet-50 border border-violet-200"
          : "bg-white border hover:shadow-md"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-6 bg-violet-600 text-white text-xs px-3 py-1 rounded-full">
         {isVideo ? "Must Watch" : "Must Read" } 
        </span>
      )}


     {tags.map((tag)=>{
      return <span
        className={`inline-block mx-1 mb-3 text-xs font-medium px-2 py-1 rounded-full ${
          highlight
            ? "text-violet-700 bg-violet-100"
            : "text-gray-600 bg-gray-100"
        }`}
      >
        {tag}
      </span>

     })}
      

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium text-violet-600 hover:underline"
      >
        {isVideo ? "Watch The Video" : "Read The Article" } 
      </a>
    </div>
  );
}