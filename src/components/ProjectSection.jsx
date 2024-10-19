import React from 'react'
import '../styles/modal.css';

const ProjectSection = ({ roles, project, year, website, description }) => {
  return (
    <div className="flex flex-col w-5/6 px-4 py-6 border-4 lg:h-full lg:w-full md:border-4 modal-writing border-darkbrown">
        <div className='flex justify-between'>
        <span className="mb-3 text-3xl font-bold">{project}</span>

        {website ? (
            <a href={`${website}`} target="_blank" className=''>
                <svg className="w-6 h-6" data-slot="icon" fill="none" strokeWidth="3.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                </svg>
            </a>
            ) : null}
        </div>
        

        <span className='text-sm'>{year}</span>
        
        <div className='flex flex-wrap mt-1 mb-2'>
            {/* language stack  */}
            {roles.map((role, index) => (
                <span key={index} className='px-3 py-0.5 mr-2 mb-2 text-sm text-beige bg-brown rounded-lg'>
                {role.title}
                </span>
            ))}
        </div>
        

        {/* description */}
        <span>{description}</span>
    </div>
  )
}

export default ProjectSection