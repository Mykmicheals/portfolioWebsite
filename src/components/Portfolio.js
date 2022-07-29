import React from 'react'
import exon from '../assets/Images/exon.png'
import famitil from '../assets/Images/famitil.png'
import news from '../assets/Images/news.png'

function Portfolio() {
    return (
        <div className='portfolio'>
            <h3 className='section-header'>Some Things I’ve Built</h3>
            <div className='portfolio-inner'>
                <div className='portfolio-left'>
                    <img id='portfolio-img' src={exon} alt='exon-smith' />
                </div>
                <div className='portfolio-right'>
                    <p id='project-type'>Featured Project</p>
                    <h4 id='port-title'>Business Website</h4>
                    <p id='portfolio-description'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                    </p>
                    
                    <div id='port-bottom'>
                        <span >React</span>
                        <span >Django</span>
                        <span >Material Ui</span>
                        <span >sqlite</span>
                  </div>
                </div>
            </div>

            <div className='portfolio-inner-inverted'>
                <div id='portfolio-left-inverted'>
                    <p id='project-type-inverted'>Featured Project</p>
                    <h4 id='port-title-inverted'>Business Website</h4>
                    <p id='portfolio-description-inverted'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                    </p>
                </div>

                <div className='portfolio-right-inverted'>
                    <img id='portfolio-img' src={famitil} alt='exon-smith' />
                </div>
              
            </div>

            <div className='portfolio-inner'>
                <div className='portfolio-left'>
                    <img id='portfolio-img' src={news} alt='exon-smith' />
                </div>
                <div className='portfolio-right'>
                    <p id='project-type'>Featured Project</p>
                    <h4 id='port-title'>Business Website</h4>
                    <p id='portfolio-description'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                    </p>

                    <div id='port-bottom'>
                        <span >React</span>
                        <span >Redux</span>
                        <span >Material Ui</span>
                        <span >Firebase</span>
                    </div>

                </div>
            </div>

            <div className='portfolio-inner-inverted'>
                <div className='portfolio-left-inverted'>
                    <p id='project-type-inverted'>Featured Project</p>
                    <h4 id='port-title-inverted'>Business Website</h4>
                    <p id='portfolio-description-inverted'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                    </p>
                    <div id='port-bottom-inverted'>
                        <span >React</span>
                        <span >Redux</span>
                        <span >Material Ui</span>
                        <span >Firebase</span>
                    </div>
                </div>
                

                <div className='portfolio-right-inverted'>
                    <img id='portfolio-img' src={famitil} alt='exon-smith' />
                </div>

            </div>


        </div>
    )
}

export default Portfolio