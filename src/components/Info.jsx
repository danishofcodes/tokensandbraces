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
                <p><b style={{ fontSize: "16px" }}>A PC with Pentium III in 2008</b> My dad's first computer opened a digital wonderland for me! I started with MSPaint, where pixels turned into art strokes. Then, hooked on the Demorash PC game, I dove into understanding how 1s and 0s create magic. 
                Thanks to my awesome CS teacher, the school's computer lab became my second home. We churned out Java projects—calculators, calendars, you name it. It was fun.! Fast forward 5 years, and I'm a frontend developer, crafting user interfaces that are as sleek as they are functional. But  I enjoy the crossroads of design and engineering: building software that's beautiful on the outside and relaiably-solid within.
                    <br/>
                    <br/>
                    <b style={{ fontSize: "16px" }}>Currently,</b> I'm delving deeper into the backend,Currently, I'm diving into backend development, creating utility-focused web apps as personal projects. My goal? Mastery in crafting stunning frontend and robust backend solutions for all users.
                    Off-screen, I devour books, geek out over superhero sagas (MCU or DC, no bias!), and indulge in comfort food: pizza, burgers, and biryani.</p>
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
