import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faAt, faBars, faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Navbar() {
 const [visible, setVisible] = useState(false);
  function openCollapsibleNav(){
    setVisible(prev => !prev)
  }
  return (
    <nav className="flex items-center justify-between max-w-8xl mx-auto px-4 py-4 bg-neutral-100 h-16 lg:px-8">
      <div className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold">
        Danish's Folio
      </div>
      <div className="hidden  lg:flex items-center space-x-4">
        <a href="#" className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold lg:flex items-center hover:text-[#801DFF] "><FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px' }}/></a>
        {/* <a href="#" className="text-slate-700 dark:text-slate-200 text-sm leading-6 font-semibold">Option 2</a>  bg-stone-200 px-2 py-2 rounded border-b-2 border-fuchsia-600*/}
      
        <a href="#" className="text-slate-700 dark:text-slate-200  leading-6 font-semibold flex text-xl hover:text-[#801DFF] "><FontAwesomeIcon icon={faEnvelope} className='' style={{ fontSize: '25px' }} /></a>

      </div>
      <div className="lg:hidden" onClick={openCollapsibleNav}>
      <FontAwesomeIcon icon={faBars} style={{fontSize:"25px"}}/>
      </div>
      <div className={visible ?'overlayNav' : 'hidden'}>
        <div className='flex justify-end items-center p-3'> 
        <button className="h-10 w-10" onClick={openCollapsibleNav}><FontAwesomeIcon icon={faClose} style={{fontSize:"25px"}}/></button>
        </div>
         <div className='px-4 py-2 optSocial'><FontAwesomeIcon icon={faGithub} style={{fontSize:"25px"}} className='me-2'/>Github</div> 
         <hr/>
         <div className='px-4 py-2 optSocial'><FontAwesomeIcon icon={faEnvelope} style={{fontSize:"25px"}} className='me-2'/>Email</div>  
         <hr/>
         <div className='px-4 py-2 optSocial'><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"25px"}} className='me-2'/>LinkedIn</div>     
      </div>
      

    </nav>
  );
}