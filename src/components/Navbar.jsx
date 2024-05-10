export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-8xl mx-auto px-4 py-4 bg-neutral-100 h-16 lg:px-8">
      <div className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold">
        Danish's Folio
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <a href="#" className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold">Option 1</a>
        <a href="#" className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold">Option 2</a>
        <a href="#" className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold">Option 3</a>
      </div>
      <div className="lg:hidden">
        {/* Hamburger menu icon (implementation depends on your choice) */}
        Open
      </div>
    </nav>
  );
}