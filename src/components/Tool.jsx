export default function Tool({tool}) {
  return (
    <div className="toolofchoice-card shrink-0">
        <span className="iconspace">{tool.icon}</span>&nbsp;<b>{tool.name}</b>
    </div>
  )
}
