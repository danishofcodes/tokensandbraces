import React from 'react'
import Experience from './Experience'
import Tool from './Tool'
export default function Info() {


    const experience = [
        {
            company: 'Genius Consultants Ltd.',
            role: 'Web Developer',
            timeperiod:"December 2022 - Present",
            description: 'As a Front-End Developer I leveraged my skills in HTML5, CSS3, my love JavaScript, React.js, Bootstrap, Tailwind CSS, and Figma to craft user-centric web experiences. Prioritizing user needs through in-depth research, collaborate effectively with cross-functional teams in Agile environments, and deliver exceptional digital interfaces through rapid iteration based on feedback. ',
            responisbilities: ['Design & Develop Frontend', 'Maintain Frontend Of Legacy Projects', 'Create Features & Components', 'Fix UI Bugs', 'UI/UX', 'JavaScript', 'JQuery', 'Bootstrap', 'Figma', 'ReactJS']
        },


       
        

        {
            company: 'NxtAspect',
            role: 'PHP Developer',
            timeperiod:"June 2022 - October 2022",
            description: 'In my internship, I developed backend functionality using PHP. I also actively tested the application to identify and report bugs, ensuring a smooth user experience.',
            responisbilities: ['Write PHP Codes', 'Report Bugs']
        },
    ]


    const tools = [
        {
            name: 'React Js',
            icon : 'icn',
        },
        {
            name: 'Node',
            icon : 'icn',
        },
        {
            name: 'Express Js',
            icon : 'icn',
        },
        {
            name: 'Bootstrap',
            icon : 'icn',
        },
        {
            name: 'TailwindCSS',
            icon : 'icn',
        },
        {
            name: 'MongoDB',
            icon : 'icn',
        },
        {
            name: 'Mysql',
            icon : 'icn',
        }
    
    ]



    return (
        <>
            {/* ref={experienceRef}  */}
            <div className='aboutmeSec mb-4' id="allaboutme">
                {/* {aboutMeVisible ? " yes" : "no"} */}
                <p><b style={{ fontSize: "20px" }}>Back in 2012, I decided</b> to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and <b>web development</b>. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
                    My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything.
                    When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my <b>wife and two cats</b>, or running around Hyrule searching for Korok seeds
                </p>
            </div>

            <hr className='mb-5' />


            <div className='myTools' >
                <h4 className='font-bold text-base'>My Tools Of Choice</h4>
                <div className='my-3 flex flex-wrap'>
                {tools.map((tool, index) => ( <Tool key={index} tool={tool} />))}
                </div>
               
               
            </div>


            <hr className='mb-5' />

            <div className='myExperienceSec' >
                <h4 className='font-bold text-base'>What Do I Do?</h4>
                <div className='mt-3'>
                {experience.map((item, index) => ( <Experience key={index} item={item} />))}
                
                </div>
               
               
            </div>

        </>
    )
}
