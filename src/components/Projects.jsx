import ProjectCard from './ProjectCard';

export default function Projects({projects}) {
  return (
    // ref={projectsRef}
<div className='projectsSec' id="projectsSec" >
<h4 className='font-bold text-3xl mb-3'>My Projects</h4>

{/* {projectsVisible ? "yes" : "no"} */}
<div className='flex flex-col'>
    {projects.map((item, index) => (
        <ProjectCard key={index} title={item.projectname} desc={item.description} img={item.imgKey} link={item.githublink}/> // Pass an index as a key for each iteration
    ))}
</div>
</div>


  )
}

