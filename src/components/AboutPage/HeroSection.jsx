// import { useTypewriter } from "../../hooks/useTypewriter";

import InstallResume from "../InstallResume";

export default function HeroSection() {

  //  const line1 = useTypewriter( "Software Engineer building scalable web & e-commerce applications.", 25);


  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center"
    >
      {/* LEFT */}
      <div>
        <p className="text-violet-600 font-semibold mb-3">
          👋 Hello, I'm Danish
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Full-Stack Developer building{" "}
          <span className="text-violet-600">scalable</span> &{" "}
          <span className="text-violet-600">high-performance</span> web apps
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          Full-Stack Software Engineer with 3+ years of experience building scalable
          web applications using modern JavaScript stacks. Strong background in
          React, Next.js, Node.js, and backend integrations.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4">
          {/* <a className="px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition" href="/Danish_Resume_2026.pdf">
            Download Resume
          </a> */}
          <a
  href="/Danish_Resume_2026.pdf"
  className="pulse-glow relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-violet-600"
>
  Download Resume
</a>
          <a className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-violet-600 hover:text-violet-600 transition" href="/projects">
            View Projects
          </a>
        </div>
      </div>

      {/* RIGHT – TERMINAL */}
      <div className="bg-gray-900 rounded-2xl shadow-lg p-6 text-green-400 font-mono text-sm">
     
  <div className="flex items-center gap-2 mb-4">
    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    <span className="ml-3 text-gray-400 text-xs">danish@portfolio:~</span>
  </div>

  <p><span className="text-green-500">$</span> whoami</p>
  <p className="ml-4 text-gray-300">
    Software Engineer building scalable web and e-commerce applications.
  </p>

    {/* <div className="font-mono text-sm">
    
        <p className="ml-4 text-gray-300">{line1}</p>
     
    </div> */}


  <br/>

  <p><span className="text-green-500">$</span> cat about.txt</p>
  <p className="ml-4 text-gray-300 leading-relaxed">
    My journey began in 2008 with my dad’s Pentium III PC. From MS Paint to PC games,
    curiosity turned into a career. Today, I design and develop frontend-heavy and
    full-stack applications with a focus on performance, usability, and clean UI.
  </p>

    <br/>

  <p><span className="text-green-500">$</span> cat interests.txt</p>
  <p className="ml-4 text-gray-300">
    📚 Books  <br/>
    🦸 Superhero sagas (Marvel & DC)  <br/>
    🍕 Pizza, burgers, and biryani
  </p>

  <br/>

  {/* <div className="ml-4 my-3 flex items-center gap-3 text-gray-400">
    <div className="donut"></div>
    <span>npm install personality</span>
  </div> */}

  <p>
    {/* <span className="text-green-500">$</span>
    <span className="animate-pulse">_</span> */}
     <InstallResume/>
  </p>


      </div>
      
      
    </section>
  );
}