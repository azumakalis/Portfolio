import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen px-3'>
      <p className='sm:text-x1 py-3 px-3'>Get in touch with me -</p>
      <a href="https://www.instagram.com/_.ritulpr_/" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram">Instagram</i>
      </a>
      <br />
      <a href="https://www.linkedin.com/in/ritul-priyadarsan-944588315/" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin">LinkedIn</i>
      </a>
      <br />
      <a href="mailto:ritulashu2006@gmail.com" aria-label="Gmail">
        <i class="fas fa-envelope">GMail</i>
      </a>
    </div>
  )
}

export default Contact