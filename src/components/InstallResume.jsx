import { useState } from "react";

export default function InstallResume() {
  const [command, setCommand] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const RESUME_URL = "/Danish_Resume_2026.pdf";

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (command.trim().toLowerCase() === "install resume") {
        setError("");
        setLoading(true);

        setTimeout(() => {
          window.open(RESUME_URL, "_blank");
          setLoading(false);
          setCommand("");
        }, 1200);
      } else {
        setError("command not found");
      }
    }
  };

  return (
    <div className="font-mono text-sm text-green-400">
      <div className="flex items-center gap-2">
        <span className="text-green-500">$</span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none text-green-400 w-full"
          placeholder="install resume"
          // autoFocus
        />
      </div>

      {loading && (
        <div className="ml-4 mt-2 text-gray-400 animate-pulse">
          installing resume…
        </div>
      )}

      {error && (
        <div className="ml-4 mt-2 text-red-400">
          {error}
        </div>
      )}
    </div>
  );
}