
export default function Experience({item}) {



  return (
    <div className="pb-3">
      <div>
        <h4 className='font-bold text-lg text-[#801DFF]'>{item.company}</h4>
        <p className="font-bold text-sm">{item.role}</p>
        </div>
        <p className="font-bold text-md">{item.role}</p>
        <p>{item.description}</p>
        <div>
            <div>
                {item.responisbilities.map((responsibility)=>{
                  return   <span className="pill">{responsibility} </span>
                })}
            </div>
        </div>
        {/* <ul className='list ms-5'>
            <li>Focusing on users-first approach, I prefer to do intensive user research, gathering feedback to drive iterative improvements.
            </li>
            <li>Embracing Agile workflows and collaborating closely with cross-functional teams, I strive to deliver great digital interfaces that iterate rapidly per feedback</li>
        </ul> */}
   </div>
  )
}
