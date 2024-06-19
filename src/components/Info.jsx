import React from 'react'
import Experience from './Experience'
import Tool from './Tool'
import react from '../assets/icons/ReactJs.png'
import postman from '../assets/icons/Postman.png'
import node from '../assets/icons/Node.png'
import vscode from '../assets/icons/VSCode.png'
import JavaScript from '../assets/icons/javascript.png'
import jQuery from '../assets/icons/jquery.png'
import express from '../assets/icons/express.png'
import npm from '../assets/icons/npm.png'
import bootstrap from '../assets/icons/bootstrap.png'
import tailwind from '../assets/icons/tailwind.png'
import java from '../assets/icons/java2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default function Info() {

    const experience = [
        {
            company: 'Genius Consultants Ltd.',
            role: 'Web Developer',
            timeperiod: "December 2022 - Present",
            description: 'As a Front-End Developer I leveraged my skills in HTML5, CSS3, my love JavaScript, React.js, Bootstrap, Tailwind CSS, and Figma to craft user-centric web experiences. Prioritizing user needs through in-depth research, collaborate effectively with cross-functional teams in Agile environments, and deliver exceptional digital interfaces through rapid iteration based on feedback. ',
            responisbilities: ['Design & Develop Frontend', 'Maintain Frontend Of Legacy Projects', 'Create Features & Components', 'Fix UI Bugs', 'UI/UX', 'JavaScript', 'JQuery', 'Bootstrap', 'Figma', 'ReactJS']
        },


    ]

    const tools = [
        {
            name: 'React Js',
            icon: react
        },
        {
            name: 'JQuery',
            icon: jQuery
        },
        {
            name: 'Node',
            icon: node
        },
        {
            name: 'Express',
            icon: express
        },
        {
            name: 'JavaScript',
            icon: JavaScript
        },
        {
            name: 'Java',
            icon: java
        },
        {
            name: 'Tailwind',
            icon: tailwind
        },
        {
            name: 'Bootstrap',
            icon: bootstrap
        },
        {
            name: 'VSCode',
            icon: vscode
        },
        {
            name: 'Postman',
            icon: postman
        },
        {
            name: 'Npm',
            icon: npm
        }
    ]
    return (
        <>
            {/* ref={experienceRef}  */}
            <div className='aboutmeSec mb-4 fadeUpanimate' id="allaboutme">
                {/* {aboutMeVisible ? " yes" : "no"} */}
                <p><b style={{ fontSize: "20px" }}>Back in 2012, I decided</b> to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and <b>web development</b>. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                    My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything.
                    When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my <b>wife and two cats</b>, or running around Hyrule searching for Korok seeds
                </p>
            </div>

            <hr className='mb-5' />


            <div className='myTools fadeUpanimate' >
                <h4 className='font-bold text-xl'>My Favorite Tools <FontAwesomeIcon className="text-red-400" icon={faHeart} /></h4>
                <div className='my-3 flex flex-wrap lg:gap-3 sm:gap-1'>
                    {tools.map((tool, index) => (<Tool key={index} tool={tool} />))}
                </div>
            </div>
            <hr className='mb-5' />

            <div className='myExperienceSec fadeUpanimate' >
                <h4 className='font-bold text-base '>What Do I Do?</h4>
                <div className='mt-3'>
                    {experience.map((item, index) => (<Experience key={index} item={item} />))}
                </div>
            </div>

        </>
    )
}
