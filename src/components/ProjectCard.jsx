import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faChrome } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({ title, desc, img, link, view }) {

    return (
        <div className="card rise fadeUpanimate">
            <div className="card-image">
                <img src={img} alt="Image description" />
            </div>
            <div className="card-details flex">
                <div>
                    <h3 className='font-bold text-base'>{title}</h3>
                    <p className='mb-1'>{desc}</p>
                </div>
                <div className="flex items-center justify-evenly">
                    <a href={view} target="_blank" className=" bg-[#464646] text-stone-100 px-3 py-1 rounded-full hover:bg-stone-400 hover:text-stone-800 me-1" ><FontAwesomeIcon icon={faChrome} /> View </a>
                    <a href={link} target="_blank" className="px-3"><FontAwesomeIcon icon={faCode} /> Source Code </a>
                </div>
            </div>
        </div>
    )
}
