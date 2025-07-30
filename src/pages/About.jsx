import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='w-full h-screen'>
      <h1 className='head-text px-2 py-2'>Hello, I am <span className='blue-gradient_text font-semibold drop-shadow-2xl'>Ritul</span>!</h1>
      <div>
        <p className='px-3 flex flex-col gap-3 text-slate-500'>BTech. student at CSE, IIT Bombay, specially interested in web-development.</p>
      </div>
      <div className='py-10 flex flex-col px-3'>
        <h3>My Skills</h3>
        <div className='mt-5 flex flex-wrap gap-12'>
          <img src="src\constants\6132222.png" className='w-12 h-12'/>
          <img src="src\constants\5968350.png" className='w-12 h-12'/>
          <img src="src\constants\5968292.png" className='w-12 h-12'/>
          <img src="src\constants\html-5_5968267.png" className='w-12 h-12' />
          <img src="src\constants\5968242.png" className='w-12 h-12'/>
        </div>
        <p className='mt-5 flex flex-col gap-3 text-slate-500'>Have a project in mind? Let's build it together!</p>
        <Link to="/contact" className="btn">Contact</Link>
      </div>
    </section>
  )
}

export default About