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
                <p><b style={{ fontSize: "20px" }}>A dusty Pentium 3 in 2008</b> became my gateway to a digital wonderland. Sketching in MSPaint with colorful lines which were nothing but pixels in reality, and that facinated me, and of course pc games. Soon, I was tinkering on that clunky machine, sparking a lifelong fascination with the world of computers. 

In school, I practically lived in the computer lab, often extending my stays by convincing teachers I was absorbed in learning — when really, I was immersed in building cool mini projects in Java with my teacher.

Fast forward 6 years, and I'm a frontend developer, crafting user interfaces that are as sleek as they are functional. But my passion lies at the crossroads of design and engineering: building software that's beautiful on the outside and rock-solid within. 

Currently, I'm delving deeper into the backend, creating utility and productivity web apps. 

My ultimate goal? To become a full-stack developer, someone who can build beautiful frontend and and reliably-solid back-end, optimised for every kind of users. 

But my life isn't all ones and zeros. When I'm not coding, I'm lost in a good book, catching up on the latest superhero sagas (MCU or DC, no bias here!), or indulging in the holy trinity of comfort food: pizza, burgers, and biryani. </p>
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
