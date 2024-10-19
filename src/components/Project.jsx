import React from 'react'
import ProjectSection from './ProjectSection';

const Project = ({ onClose }) => {
    const projectData = [
        {
          project: "AI chatbot API",
          roles: [
            {title: "Python"}, 
            { title: "Django" },
            { title: "PostgreSQL", bgColor: "bg-green-100 text-green-800" }, 
          ],
          year: "2024.01 – 2024.04",
          website: null,
          description: "An API for a mental health chatbot startup Mhapy that can quantify and analyze client’s free responses for mental health assessments"
        },
        {
          project: "Petpal",
          roles: [
            { title: "React", bgColor: "bg-blue-100 text-blue-800" },
            { title: "TailwindCSS", bgColor: "bg-blue-100 text-blue-800" },
            { title: "Django", bgColor: "bg-green-100 text-green-800" }, 
            { title: "PostgreSQL", bgColor: "bg-green-100 text-green-800" }
          ],
          year: "2023.09 –2023.12",
          website: "https://github.com/kimmy190/Petpal",
          description: "A full-stack web application for pet adoption that can be used by pet shelters and pet seekers"
        }, 
        {
            project: "Worksphere",
            roles: [
                { title: "Figma" },
                          ],
            year: "2023.09 – 2023.12",
            website: "https://www.figma.com/proto/3QdxyKHY54U1t8hYwN4pIw/High-Fidelity-Prototype---CSC318?node-id=318-470&t=PKqlgYb6gUxeHFli-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=318%3A470&show-proto-sidebar=1",
            description: "Developed a low and high fidelity prototype of workplace social interaction app"
          }, 
          {
            project: "Ebook",
            roles: [
                { title: "Java"},
                { title: "Springboot"},
                { title: "JavaScript"},
                          ],
            year: "2023.09 – 2023.12",
            website: "https://www.figma.com/proto/3QdxyKHY54U1t8hYwN4pIw/High-Fidelity-Prototype---CSC318?node-id=318-470&t=PKqlgYb6gUxeHFli-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=318%3A470&show-proto-sidebar=1",
            description: "Built an online E-book system that allows university students, professors, and other users to access and provide online course materials including textbooks (either paid or free of cost), lecture slides and extra readings"
          }
      ];

      
  return (
    <div className="modal-project position-left lg:ml-8">
        <div className='flex flex-row p-4 space-x-2 border-b-4 border-darkbrown'>
            <span className="flex items-center justify-center w-6 h-6 text-xl font-bold border-4 rounded-full cursor-pointer border-darkbrown close" onClick={onClose}>
                
                <svg data-slot="icon" fill="none" stroke-width="5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                </svg>

            </span>
            <span className='inline-block w-6 h-6 border-4 rounded-full border-darkbrown'></span>
            {/* <span className='text-3xl font-bold text-darkbrown'>Projects</span> */}
        </div>

        <div className="justify-start modal-content">
            <h2 className="text-5xl font-bold text-center mb-7 text-darkbrown" >Projects</h2>

            {/* contain all the projects together */}
            <div className="flex flex-col flex-wrap items-center justify-center space-y-10 lg:space-y-0 lg:justify-start lg:grid lg:grid-cols-2 lg:gap-14">
            {projectData.map((data, index) => (
                <ProjectSection
                    key={index}
                    roles={data.roles}
                    project={data.project}
                    year={data.year}
                    website={data.website}
                    description={data.description}
                />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Project