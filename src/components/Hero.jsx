import React from 'react'

const Hero = () => {
    const links = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/amy-kim8/", label: "LinkedIn" },
        { name: "Github", url: "https://github.com/kimmy190", label: "Github" },
      ];
      
  return (

        <div className='flex items-center justify-end pb-20 md:justify-center md:pr-14'>
        <div className="flex flex-col items-end p-4 space-y-6 sm:p-8">
        <p className='speech-bubble'>Nice to meet you!</p>

            <h2 className='mb-5 font-bold text-7xl md:text-8xl text-darkbrown' >I’m Amy,</h2>
            <p className='text-2xl font-bold text-right md:text-3xl text-darkbrown'>A developer focused on building impactful <br/> applications and contributing to the society</p>

            <div className="">
                <a href="mailto:aaamykm001@gmail.com" className="inline-block px-3 py-2 m-1 text-xl font-bold rounded-lg contact">aaamykm001@gmail.com</a>
                <div className="flex justify-end">
            {links.map((link) => (
                <a
                key={link.name}
                href={link.url}
                target="_blank"
                className="inline-block px-3 py-2 m-1 text-xl font-bold rounded-lg contact"
                >
                {link.label}
                </a>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero