import React from 'react'
import ProjectCard from './ProjectCard';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
export default function MainSection({ projects }) {
    //   const aboutMeRef = useRef();
    //   const experienceRef = useRef();
    //   const projectsRef = useRef();
    //  const [projectsVisible , setprojectsVisible] = useState('');
    //  const [experienceVisible , setexperienceVisible] = useState('');

    // const experienceRef = useRef(null);
    // const projectsRef = useRef(null);
  
    //  const { ref : aboutMeRef, inView : elemVisible } = useInView();
    //  const { ref : experienceRef, inView : elemVisible } = useInView();
    const { ref: experienceRef, inView: aboutMeVisible } = useInView({ threshold: 1 });
    const { ref: projectsRef, inView: projectsVisible } = useInView({ threshold: 1 });




//    function handleScollToVIew(itemId){
//     if(itemId = 1){
//         experienceRef.current.scrollIntoView({ behavior: "smooth" });

//     }
//     else if(itemId = 2){
//     projectsRef.current.scrollIntoView({ behavior: "smooth" });

// }
//     };



    // const projects = Array(4).fill(null); // Create an array with 8 null elements
    // console.log('entry', elemVisible);

    // useEffect(()=>{
    // //   console.log('about Me Ref', aboutMeRef.current)
    // //   console.log('Exp Ref', experienceRef.current)
    // //   console.log('Projects Ref', projectsRef.current)

    //   const observer = new IntersectionObserver((entries)=>{
    //     const entry = entries[0];
    //     setElemVisible(entry.isIntersecting)
    //   })

    //   observer.observe(projectsRef.current)

    // }, [])
    return (
        <main className="main-section pt-5">
            <div className="left-part">
                <h1 className="text-4xl font-bold tracking-tight text-[#3b3b3b] sm:text-5xl"><a href="/">Tom Cat</a></h1>
                <h2 className="mt-3 text-lg  tracking-tight sm:text-xl text-green-500 font-bold">&#123;Web Developer&#125; <FontAwesomeIcon icon={faCode}/></h2>
                <p className="mt-4 max-w-xs leading-normal">I build pixel-perfect, engaging, and accessible digital experiences.</p>

                <div className='navPoints mt-3'>
                    <ul className="lg:h-60 h-auto">
                        <li  onClick={()=>handleScollToVIew(1)} className={`font-bold text-base ${aboutMeVisible ? 'active' : ''}`}><FontAwesomeIcon icon={faQuoteLeft} className='me-2' /><a href="#allaboutme">About</a></li>
                       <li  onClick={()=>handleScollToVIew(2)} className={`font-bold text-base ${projectsVisible ? 'active' : ''}`}><FontAwesomeIcon icon={faCodeFork} className='me-2' /><a href="#projectsSec">My Projects</a></li>
                        <li className='font-bold text-base'><FontAwesomeIcon icon={faHashtag} className='me-2' />My Social</li>
                        <li className='font-bold text-base'><FontAwesomeIcon icon={faSpinner} className='me-2' />Ongoing</li>
                        <li className='font-bold text-base'><FontAwesomeIcon icon={faThumbTack} className='me-2' />Pinned Blogs</li>
                    </ul>

                    <a href="https://drive.google.com/file/d/1HgTNTIi1jJf6Z7nIQOZYKQfbNIqrLPqf/view?usp=drive_link"> <button className="bg-transparent hover:bg-green-500 text-stone-600 font-semibold hover:text-white py-2 px-4 border border-stone-600 hover:border-transparent rounded flex ">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download CV</span>
                    </button></a>
                </div>
            </div>
            <div className="right-part  overflow-y-auto h-4/5">

                <div className='aboutmeSec mb-4' ref={experienceRef}  id="allaboutme">
                    {/* {aboutMeVisible ? " yes" : "no"} */}
                    <p><b style={{ fontSize: "20px" }}>Back in 2012, I decided</b> to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and <b>web development</b>. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                        My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                        When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my <b>wife and two cats</b>, or running around Hyrule searching for Korok seeds
                    </p>
                </div>

                <div className='myExperienceSec' >

                    <h4 className='font-bold text-base'>What Do I Do?</h4>
                    <div className='mt-3'>
                        <h4 className='font-bold text-sm'>Company Name</h4>
                        <ul className='list ms-5'>
                            <li>Focusing on users-first approach, I prefer to do intensive user research, gathering feedback to drive iterative improvements.
                            </li>
                            <li>Embracing Agile workflows and collaborating closely with cross-functional teams, I strive to deliver great digital interfaces that iterate rapidly per feedback</li>
                        </ul>

                        <h4 className='font-bold text-sm'>Company Name</h4>
                        <ul className='list ms-5'>
                            <li>My role involves  utilizing technologies like HTML5-CSS3, Javascript, JQuery, React.js, Bootstrap, Tailwind and Prototyping tools such as Figma, for developing frontend designs and concepts, ensuring consistency across projects, and creating reusable components for enhanced efficiency,
                                to craft user-centric web experiences. </li>
                            <li>Focusing on users-first approach, I prefer to do intensive user research, gathering feedback to drive iterative improvements.
                            </li>
                            <li>Embracing Agile workflows and collaborating closely with cross-functional teams, I strive to deliver great digital interfaces that iterate rapidly per feedback</li>

                        </ul>
                    </div>
                </div>

<hr className='mb-5'/>


                <div className='projectsSec' id="projectsSec" ref={projectsRef}>
                    <h4 className='font-bold text-3xl mb-3'>My Projects</h4>

                    {/* {projectsVisible ? "yes" : "no"} */}

                    <div className='flex flex-col'>
                        {projects.map((item, index) => (
                            <ProjectCard key={index} title={item.projectname} desc={item.description} img={item.imgKey} link={item.githublink}/> // Pass an index as a key for each iteration
                        ))}
                    </div>
                </div>

            </div>
        </main>
    )
}

