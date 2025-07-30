import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-x1 text-center'>{text}</p>
        <br />
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (<h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi! I am <span className='font-semibold'>Ritul</span><br /> A Sophomore, pursuing BTech. in CSE at IIT Bombay.
    </h1>),
    2: (<h1 className='text-white'>
        <InfoBox text="Started learning three.js a few months ago as part of the SOC Project." link="/about" btnText="Learn more" />
    </h1>),
    3: (<h1 className='text-white'>
        <InfoBox text="Have done various other projects using HTML, CSS and JS" link="/projects" btnText="Other Projects" />
    </h1>),
    4: (<h1 className='text-white'>
        <InfoBox text="Here are the links to some of my socials..." link="/contact" btnText="Socials" />
    </h1>)
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo