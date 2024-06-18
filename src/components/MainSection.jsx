import React from 'react'
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Pinned from './Pinned';
import Info from './Info';
import Projects from './Projects';
export default function MainSection({ projects, posts }) {
    const location = useLocation();

    return (
        <main className="main-section pt-5">
            <div className="left-part">
                <div className='terminalgif'>
                    <div className='terminaltype'></div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-[#3b3b3b] sm:text-5xl">Hi, I am Danish 👋</h1>
                <h2 className="mt-3 text-lg  tracking-tight sm:text-xl text-green-500 font-bold">&#123;Web Developer&#125; <FontAwesomeIcon icon={faCode} /></h2>
                <p className="mt-4 max-w-xs leading-normal">Creating enhanced digital interactions and experiences, alongside having a good cup of coffee and a cheeze sandwich!</p>


                <div className='navPoints mt-3' >
                    <ul className="lg:h-48 h-auto ">
                        {/* ${aboutMeVisible ? 'active' : ''}` */}
                        {/* ${projectsVisible ? 'active' : ''}` className="font-bold text-base" */}
                        <Link to="/" >  <li className={location.pathname === "/" ? "active" : "font-bold text-base"} ><FontAwesomeIcon icon={faQuoteLeft} className='me-2' />About</li></Link>
                        <Link to="/Projects">    <li className={location.pathname === "/Projects" ? "active" : "font-bold text-base"} ><FontAwesomeIcon icon={faCodeFork} className='me-2' />Projects</li></Link>
                        {/* <Link to="/Ongoing"><li className={location.pathname === "/Ongoing" ? "active" : "font-bold text-base"} ><FontAwesomeIcon icon={faSpinner} className='me-2' />Ongoing</li></Link> */}
                        <Link to="/Pinned"><li className={location.pathname === "/Pinned" ? "active" : "font-bold text-base"} ><FontAwesomeIcon icon={faThumbTack} className='me-2' />Pinned </li></Link>
                    </ul>

                    <div className="mt-1" >
                        <a target="_blank" href="https://drive.google.com/file/d/1obdFmnQmNbl_vX--wr90sqIkPgKbgoto/view?usp=drive_link"> <button className="bg-transparent hover:bg-green-500 text-indigo-600 font-semibold hover:text-white py-2 px-4 border border-indigo-600 hover:border-transparent rounded flex ">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Download CV</span>
                        </button></a>
                    </div>
                </div>
            </div>
            <div className="right-part ">
                <Routes>

                    <Route path="/" element={<Info />} />
                    <Route path="/Projects" element={<Projects projects={projects} />} />
                    {/* <Route path="/Ongoing" element={<Ongoing />} /> */}
                    <Route path="/Pinned" element={<Pinned posts={posts} />} />
                </Routes>
            </div>
        </main>
    )
}
