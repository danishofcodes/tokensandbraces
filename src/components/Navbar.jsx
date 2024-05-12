import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-8xl mx-auto px-4 py-4 bg-neutral-100 h-16 lg:px-8">
      <div className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold">
        Danish's Folio
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <a href="#" className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold"><FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px' }} /></a>
        {/* <a href="#" className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold">Option 2</a> */}
        <div className="">
        <a href="#" className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold text-[#fff]"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px' }} /></a>
        </div>
      </div>
      <div className="lg:hidden">
        {/* Hamburger menu icon (implementation depends on your choice) */}
        Open
      </div>
    </nav>
  );
}