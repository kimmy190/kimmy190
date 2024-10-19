import React from 'react'
import '../styles/modal.css';


const Experience = ({ onClose }) => {
    const experienceData = [
        {title: "C Private Tutor", 
            company:"self-employed", 
            time:"2023.09 – 12", 
         description:"I tutored C to a fellow computer science student, covering both fundamental and core concepts. Developed personalized learning materials to strengthen their understanding and enhance their programming skills.", 
        }, 
        {title: "Content Writer", 
            company:"self-employed", 
            time:"2022.03 – 10", 
            description: "As a content writer for a digital NFT newsletter NOV, I helped grow the subscriber base by over 1,000 through weekly newsletters covering a variety of topics. I conducted A/B testing on titles, which led to a 3-5% increase in the newsletter's opening rate. I also ensured accuracy and proper language in articles written by teammates."
        }
    ]


  return (
    <div className="modal-project position-right">
      {/* <button className="modal-close" onClick={onClose}>X</button> */}
      <div className='flex flex-row p-4 space-x-2 border-b-4 border-darkbrown'>
            <span className="flex items-center justify-center w-6 h-6 text-xl font-bold border-4 rounded-full cursor-pointer border-darkbrown close" onClick={onClose}>
                
                <svg data-slot="icon" fill="none" stroke-width="5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                </svg>

            </span>
            <span className='inline-block w-6 h-6 border-4 rounded-full border-darkbrown'></span>
        </div>
      <div className='justify-start modal-content'>
        <h2 className="text-5xl font-bold text-center mb-7 text-darkbrown" >Experience</h2>
        
        {/* inside the experience section  */}
        <div className="flex flex-col flex-wrap items-center justify-center space-y-10 lg:space-y-0 lg:justify-start lg:grid lg:grid-cols-2 lg:gap-10">
            {experienceData.map((experience, index) => (
                <div key={index} className="flex flex-col w-5/6 px-4 py-6 border-4 lg:h-full lg:w-full md:border-4 modal-writing border-darkbrown">
                    {/* <div className='flex justify-between'> */}

                    <span className="mb-3 text-3xl font-bold">{experience.title}</span>

                    <div className='flex justify-between my-3'>
                        <span className='text-base'>{experience.company}</span>
                        <span className='text-base'>{experience.time}</span>
                    </div>

                    <span>{experience.description}</span>
                    {/* </div> */}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Experience