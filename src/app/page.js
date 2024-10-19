"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Project from '@/components/Project';
import Experience from '@/components/Experience';

export default function Home() {
//   const [openModal, setOpenModal] = useState(null);
    const [openModals, setOpenModals] = useState({
        about: false,
        project: false,
        experience: false
    });

  const handleOpenModal = (modalName) => {
    setOpenModals((prev) => ({ ...prev, [modalName]: true }));
    // setOpenModals(modalName);
  };

  const handleCloseModal = (modalName) => {
    setOpenModals((prev) => ({ ...prev, [modalName]: false }));
    // setOpenModals(null);
  };

  return (
    
    <div className="bg-[url('/images/background2.png')] bg-cover bg-center min-h-screen">
    
    <div className='flex flex-col-reverse h-screen py-4 md:justify-between md:flex-row'>

        <div className='flex justify-between px-4 md:flex-col md:p-10 lg:ml-5'>
            {/* about amy kim */}
            <div className="file-icon" onClick={() => handleOpenModal('about')}>
                {/* className="w-14 sm:w-16 lg:w-20" */}
                {/* <img src="/images/computer.png" alt="computer" className="w-16 md:w-24 lg:w-28" /> */}
                <img src="/images/computer.png" alt="computer" className="w-16 md:w-24 lg:w-28" />

                <p className='text-base font-bold sm:text-lg lg:text-xl text-darkbrown'>amy kim</p>
            </div>

            {/* projects */}
            <div className="md:pb-4 md:pl-12 file-icon" onClick={() => handleOpenModal('project')}>
                {/* className="w-12 sm:w-14 lg:w-16" */}
            <img src="/images/project.png" alt="fole" className="w-14 md:w-20 lg:w-24"/>
            <p className='text-base font-bold sm:text-lg lg:text-xl text-darkbrown'>Projects</p>
        </div>

            {/* experiences  */}
        <div className="file-icon" onClick={() => handleOpenModal('experience')}>
            <img src="/images/earth.png" alt="fole" className="w-16 md:w-24 lg:w-28" />
            <p className='text-base font-bold sm:text-lg lg:text-xl text-darkbrown'>Experience</p>
        </div>

        {/* clear */}
        <div className="file-icon" onClick={() => setOpenModals({ about: false, project: false, experience: false })}>
        <img src="/images/clear.png" alt="fole" className="w-16 md:w-24 lg:w-28" />
        <p className="text-base font-bold sm:text-lg lg:text-xl text-darkbrown">Clear</p>
        </div>
        
        </div>

        <Hero/> 
        
    </div>

      {/* Render modals conditionally */}
      {/* {openModal === 'about' && <About onClose={handleCloseModal} />}
      {openModal === 'project' && <Project onClose={handleCloseModal} />}
      {openModal === 'experience' && <Experience onClose={handleCloseModal} />} */}
      {openModals.about && <About onClose={() => handleCloseModal('about')} />}
      {openModals.project && <Project onClose={() => handleCloseModal('project')} />}
      {openModals.experience && <Experience onClose={() => handleCloseModal('experience')} />}
    </div>
  );
}
