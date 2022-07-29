import React from 'react'
import myPhoto from '../assets/Images/micPort.jpg'

function About() {
  return (
      <div className='about'>
          <h3 className='section-header'>About Me</h3>
          <div className='about-text'>
              <p className='about-p'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>

              <p className='about-p'>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>

              <p>Here are a few technologies I’ve been working with recently:</p>
              <span id='about-technologies'>
                  <span>
                      <p>Javascript  (ES6+)</p>
                      <p>Next.js</p>
                      <p>React</p>
                  </span>
                  <span>
                      <p>Django</p>
                      <p>Qt C++</p>
                      <p>Typescript</p>
                  </span>
              </span>
          </div>
          <div className='about-image'>
          <img src={myPhoto} alt = 'photo' />
          </div>
    </div>
  )
}

export default About