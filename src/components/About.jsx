"use client"; 

import React from 'react'
import '../styles/modal.css';

const About = ({ onClose }) => {
    return (
      <div className="modal">
        <div className='flex flex-row p-4 space-x-2 border-b-4 border-darkbrown'>
            <span className="flex items-center justify-center w-6 h-6 text-xl font-bold border-4 rounded-full cursor-pointer border-darkbrown close" onClick={onClose}>
                
                <svg data-slot="icon" fill="none" stroke-width="5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                </svg>

            </span>
            <span className='inline-block w-6 h-6 border-4 rounded-full border-darkbrown'></span>
        </div>

            {/* content under the upper bar */}
                <div className="justify-center modal-content">
                {/* <h2 className='font-bold'>About me!</h2> */}
                <p className="modal-writing">Hi! I&apos;m Amy, a 4th year computer science and a statistic student at the University of Toronto. Also a passionate developer fascinated on bringing my ideas to life through various applications. 
                <br/>I&apos;m always eager to try new things, and learn from each experiences.
                <br/><br/>
                + while I'm not coding I love doing arts as a side to fuel my creativity :)
                
                </p>
                
                    <div className='flex justify-end'>
                        <button className="modal-button" onClick={onClose}>nice!</button>
                    </div>
                </div>        
      </div>
    );
  };

export default About