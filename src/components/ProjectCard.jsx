import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faChrome } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({title, desc, img , link}) {

    return (
        <div className="card rise">
            <div className="card-image">
                <img src={img} alt="Image description" />
            </div>
            <div className="card-details flex">
                <div>
                <h3 className='font-bold text-base'>{title}</h3>
                <p className='mb-1'>{desc}</p>
                </div>
                <div className="flex items-center justify-evenly">
                <a href={link} className=" bg-stone-100 text-stone-600 px-3 py-1 rounded-full hover:bg-stone-400" ><FontAwesomeIcon icon={faChrome} /> View</a>
                <a href={link} className="px-3"><FontAwesomeIcon icon={faCode} /> Source Code </a>
                </div>
            </div>
        </div>
    )
}
