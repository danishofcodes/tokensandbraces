import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faCodeBranch,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

export default function TechStackSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-12 text-center">⚡ Tech Stack</h3>

      <div className="flex flex-wrap justify-center gap-4">
        <span className="pill">
          <FontAwesomeIcon icon={faJs} className="text-yellow-400" />
          JavaScript (ES6+)
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faReact} className="text-cyan-400" />
          React
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faReact} className="text-black" />
          Next.js
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faCubes} className="text-purple-500" />
          Redux
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faCubes} className="text-sky-400" />
          Tailwind CSS
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faNodeJs} className="text-green-500" />
          Node.js
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faCodeBranch} />
          Express.js
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faDatabase} className="text-blue-600" />
          PostgreSQL
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faDatabase} className="text-green-600" />
          MongoDB
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faShopify} className="text-green-500" />
          Shopify
        </span>

        <span className="pill">
          <FontAwesomeIcon icon={faGitAlt} className="text-orange-500" />
          Git
        </span>

        <span className="pill">System Design</span>
        <span className="pill">SOLID</span>
      </div>
    </section>
  );
}