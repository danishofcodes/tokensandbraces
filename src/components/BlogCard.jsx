import { faLink, faThumbTack } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function BlogCard({title, desc, img , link}) {
  return (
    <div className="blogcard rise">
            {/* <div className="card-image">
                <img src={img} alt="Image description" />
            </div> */}

            <div className="card-details flex">
            <div className="blogpin"><FontAwesomeIcon icon={faThumbTack}/></div>

                <div>
                <h3 className='font-bold text-base'>{title}</h3>
                <p className='mb-1'>{desc}</p>
                </div>
                <a href={link} ><FontAwesomeIcon icon={faLink} /> View on GitHub </a>
            </div>
        </div>
  )
}
