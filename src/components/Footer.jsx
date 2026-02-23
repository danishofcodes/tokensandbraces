export default function Footer() {
  return (
    <footer className="border-t bg-violet-600 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-100 font-bold">
          © {new Date().getFullYear()} Danish. All rights reserved.
        </p>

        {/* Center */}
        {/* <p className="text-sm text-gray-100 font-bold">
          Built with <span className="font-medium text-gray-700">Heart</span> &{" "}
          <span className="font-medium text-gray-700">Tailwind CSS</span>
        </p> */}

        {/* Right */}
        <div className="flex gap-4 text-gray-100 font-bold">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-gray-900 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}