import reactIcon from '../assets/react.svg'
// import { useRef, useEffect } from 'react';
export default function ProjectCard() {
    // const cardRef = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const [entry] = entries;
    //         if (entry.isIntersecting) {
    //             cardRef.current.classList.add('slide-in');
    //         }
    //     });
    
    //     observer.observe(cardRef.current);
    
    //     return () => observer.unobserve(cardRef.current);
    // }, []); // Empty dependency array to run this effect only once


    return (
        <div className="card rise">
            <div className="card-image">
                <img src={reactIcon} alt="Image description" />
            </div>
            <div className="card-details">
                <h3 className='font-bold text-base'>Project Title</h3>
                <p className='mb-3'>This is a brief description of your GitHub project. You can highlight key features or functionalities here.</p>
                <a href="https://github.com/your-username/your-repo" >View on GitHub</a>
            </div>
        </div>
    )
}
