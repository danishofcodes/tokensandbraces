import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from '@fortawesome/free-solid-svg-icons';

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
                <a href={link} ><FontAwesomeIcon icon={faCode} /> View on GitHub </a>
            </div>
        </div>
    )
}
