import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faChrome } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({ title, desc, img, link, view , bgColor}) {

    return (
        <div className="card rise fadeUpanimate">
            <div className="card-image" style={{background:bgColor}}>
                {/* <img src={img} alt="Image description" /> */}
                <FontAwesomeIcon icon={img} style={{fontSize:"3em", color:"#575757"}}/>
            </div>
            <div className="card-details flex">
                <div>
                    <h3 className='font-bold text-base'>{title}</h3>
                    <p className='mb-1'>{desc}</p>
                </div>
                <div className="flex items-center justify-evenly">
                    <a href={view} target="_blank" className=" bg-[#ff8b36] text-stone-100 px-3 py-1 rounded-full hover:bg-[#222d74] hover:text-white  me-1" ><FontAwesomeIcon icon={faChrome} /> View </a>
                    <a href={link} target="_blank" className="px-3 hover:text-[#22c55e]"><FontAwesomeIcon icon={faCode} /> Source Code </a>
                </div>
            </div>
        </div>
    )
}
