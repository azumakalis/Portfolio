import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='w-full h-screen'>
      <h1 className='head-text px-2 py-2'>My <span className='blue-gradient_text font-semibold drop-shadow-2xl'>Projects</span></h1>
      <div>
        <p className='px-3 flex flex-col gap-3 text-slate-500'>Ever since I got into web-development, I have done various projects, although not significant, but still a great experience for me to learn nevertheless. This website has been made using three.js and React, frameworks that I have only learned recently, but some projects that I made before this one are listed below. Your reviews on these projects are highly valued!</p>
      </div>
      <div className='py-10 flex flex-col px-3'>
        <div className='flex flex-wrap gap-12'>
          <div>
            <Link to="https://github.com/azumakalis/Roman-Numeral-Converter" target='_blank'>Roman Numeral Converter</Link>
            <p className='text-slate-500'>A simple web-app that converts numbers to Roman Numerals, made using simple HTML, CSS and JS.</p>
          </div>
          <div>
            <Link to="https://github.com/azumakalis/palindrome-checker" target='_blank'>Palindrome Checker</Link>
            <p className='text-slate-500'>Check whether your word or sentence is a palindrome, made using simple HTML, CSS and JS.</p>
          </div>
          <div>
            <Link to="https://github.com/azumakalis/Calculator" target="_blank">Calculator</Link>
            <p className='text-slate-500'>Web calculator that nearly simulates an android version, still needs some updates, made using HTML, CSS and JS.</p>
          </div>
          <div>
            <Link to="https://github.com/azumakalis/HowzattCricketScorekeeper" target="_blank">Howzatt! Cricket Scorekeeper</Link>
            <p className='text-slate-500'>Made as part of core course project, functions like backend of any cricket score app, like CricBuzz. Just put in your teams and get to control the score. Made using HTML, CSS and JS.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects