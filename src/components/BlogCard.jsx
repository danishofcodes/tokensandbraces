import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faLink, faThumbTack } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function BlogCard({ title, desc, link, sitename, isVideo }) {
  return (
    <div className="blogcard rise">
      {/* <div className="card-image">
                <img src={img} alt="Image description" />
            </div> */}

      <div className="card-details flex">
        <div className="blogpin"><FontAwesomeIcon icon={faThumbTack} /></div>

        <div>
          <h3 className='font-bold text-base'>{title}</h3>
          <p className='mb-1'>{desc}</p>
        </div>
        {isVideo ? <a href={link} target="_blank"><FontAwesomeIcon icon={faYoutube} className="text-red-600" /> Watch On {sitename} </a> : <a href={link} ><FontAwesomeIcon icon={faLink} /> Read On {sitename} </a>}

      </div>
    </div>
  )
}
