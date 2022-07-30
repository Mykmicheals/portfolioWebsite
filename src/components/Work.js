import React, { useState } from 'react'

function Work() {
    return (
        <div className='work'>
            <h3 className='section-header'>Where I’ve Worked</h3>
            <div className='work-left'>
                <p>Itech</p>
                <p>Fiverr</p>
                <p>Hiit</p>
                <p>Upwork</p>
                <p>Snowview</p>
            </div>
            <div className='work-right'>
                <div className='work-right-inner'>
                    <h4 id='work-title'>Studio Developer @ Scout</h4>
                    <p id='work-date'>January - April 2018</p>
                    <p id='work-desc'>Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern</p>
                    <p id='work-desc'>Helped solidify a brand direction for blistabloc that spans both packaging and web</p>
                    <p id='work-desc'>Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps</p>
                </div>

            </div>
        </div>
    )
}

export default Work