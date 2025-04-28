import React from 'react'
const projects = [
    {
      id:1,
      title:"Web Design",
      description:"Creating visually appealing and user-friendly web design",
    },
    {
      id:1,
      title:"Web Design",
      description:"Creating visually appealing and user-friendly web design",
    },
    {
      id:1,
      title:"Web Design",
      description:"Creating visually appealing and user-friendly web design",
    },
    {
      id:1,
      title:"Web Design",
      description:"Creating visually appealing and user-friendly web design",
    },
    {
      id:1,
      title:"Web Design",
      description:"Creating visually appealing and user-friendly web design",
    },
    {
      id:1,
      title:"Web Design",
      description:"Creating visually appealing and user-friendly web design",
    }
]
const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='service'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'> My Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map(()=>{

              })}
            </div>
        </div>
    </div>
  )
}

export default Projects
