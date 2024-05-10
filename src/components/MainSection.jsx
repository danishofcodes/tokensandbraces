import React from 'react'
import ProjectCard from './ProjectCard';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MainSection() {
//   const aboutMeRef = useRef();
//   const experienceRef = useRef();
//   const projectsRef = useRef();
//  const [projectsVisible , setprojectsVisible] = useState('');
//  const [experienceVisible , setexperienceVisible] = useState('');


//  const { ref : aboutMeRef, inView : elemVisible } = useInView();
//  const { ref : experienceRef, inView : elemVisible } = useInView();
 const { ref : projectsRef, inView : projectsVisible } = useInView({threshold: 1});
 const { ref : experienceRef, inView : aboutMeVisible } = useInView({threshold: 1});


 




    const projects = Array(4).fill(null); // Create an array with 8 null elements
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
        <main className="main-section ">
            <div className="left-part">
                <h1 className="text-4xl font-bold tracking-tight text-indigo-800 sm:text-5xl"><a href="/">Tom Cat</a></h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-indigo-800 sm:text-xl">Web Developer</h2>
                <p className="mt-4 max-w-xs leading-normal">I build pixel-perfect, engaging, and accessible digital experiences.</p>

                <div className='navPoints mt-3'>
                    <ul>
                        <li  className={`font-bold text-base ${ aboutMeVisible ? 'secInView' : ''}`}>About</li>
                        <li  className={`font-bold text-base ${ projectsVisible ? 'secInView' : ''}`}>My Projects</li>
                        <li className='font-bold text-base'>My Social</li>
                        <li className='font-bold text-base'>Ongoing</li>
                        <li className='font-bold text-base'>Pinned Blogs</li>
                    </ul>
                </div>
            </div>
            <div className="right-part  overflow-y-auto h-4/5">

                <div className='aboutmeSec mb-4' >
                {aboutMeVisible ?  " yes" : "no"}
                    <p><b style={{ fontSize: "20px" }}>Back in 2012, I decided</b> to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and <b>web development</b>. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                        My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                        When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my <b>wife and two cats</b>, or running around Hyrule searching for Korok seeds
                    </p>
                </div>

                <div className='myExperienceSec' ref={experienceRef} >
                    
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




                    <div className='projectsSec' ref={projectsRef}>
                        <h4 className='font-bold text-base'>My Projects</h4>
                        
                        {projectsVisible ? "yes" : "no"}
                      
                        <div className='flex flex-col'>
                            {projects.map((item, index) => (
                                <ProjectCard key={index} /> // Pass an index as a key for each iteration
                            ))}
                        </div>
                    </div>

                </div>
        </main>
    )
}

