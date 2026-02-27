import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      
      <div className='max-w-7xl mx-auto px-6 py-6 flex items-center justify-between '>
      {/* Brand */}
      <h1 className="text-xl font-bold text-slate-800">
        Danish.dev
      </h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">

        {/* Links */}

<nav className="flex gap-8 text-sm font-medium">
  <NavLink to="/" className="nav-link">
    About Me
  </NavLink>
  <NavLink to="/projects" className="nav-link">
    Projects
  </NavLink>
  <NavLink to="/pinboard" className="nav-link">
    Pin Board
  </NavLink>
  {/* <NavLink to="/contact" className="nav-link">
    Contact
  </NavLink> */}
</nav>
        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="https://github.com/danishofcodes" target="_blank" className="social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/danish-sheik" target="_blank" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:danishfromwork@gmail.com" className="social-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl text-violet-600" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Danish.dev</h2>
            <button onClick={() => setOpen(false)} className="text-2xl">
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-lg font-medium">
            <NavLink to="/" className="nav-link"
             onClick={() => setOpen(false)}
            >About</NavLink>
             <NavLink to="/projects" className="nav-link"
              onClick={() => setOpen(false)}
             >Projects</NavLink>
            <NavLink to="/pinboard" className="nav-link"
             onClick={() => setOpen(false)}
            >Pin Board</NavLink>
            {/* <NavLink to="/" className="nav-link">About</NavLink> */}

            {/* <a href="/" className="nav-link">About</a> */}
            {/* <a href="/projects" className="nav-link">Projects</a> */}
            {/* <a href="/pinboard" className="nav-link">Pin Board</a>
            <a href="/contact" className="nav-link">Contact</a> */}

            <div className="flex gap-6 mt-6">
              <a href="https://github.com/danishofcodes" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com/in/danish-sheik" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:danishfromwork@gmail.com" className="social-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}