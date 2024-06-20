export default function Tool({ tool }) {
  return (
    <div className="toolofchoice-card shrink-0">
      <span className="iconspace">
        <img src={tool.icon} alt={tool.name} />
      </span>
      &nbsp;<span className="text-base">{tool.name}</span>
    </div>
  );
}
