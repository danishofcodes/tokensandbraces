import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-violet-600 mb-4">404</h1>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
}