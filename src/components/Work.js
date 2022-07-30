import React, { useState } from 'react'

function Work() {
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)

    const secondHandler = () => {
        setSecond(true)
        setFirst(false)
        setThird(false)
        setFourth(false)
    }

    const thirdHandler = () => {
        setThird(true)
        setSecond(false)
        setFirst(false)
        setFourth(false)
    }

    const fourthHandler = () => {
        setFourth(true)
        setSecond(false)
        setFirst(false)
        setThird(false)
    }

    const firstHandler = () => {
        setFirst(true)
        setSecond(false)
        setThird(false)
        setFourth(false)
    }


    return (
        <div className='work'>
            <h3 className='section-header'>Where I’ve Worked</h3>
            <div className='work-left'>
                <p className={first ? 'work-title-active' : ''} onClick={firstHandler}>Itech</p>
                <p className={second && 'work-title-active'} onClick={secondHandler}>Fiverr</p>
                <p className={third && 'work-title-active'} onClick={thirdHandler}>Hiit</p>
                <p className={fourth && 'work-title-active'} onClick={fourthHandler}>Upwork</p>
            </div>
            <div className='work-right'>
                {first && <div className='work-right-1'>
                    <h4 id='work-title'>Full-Stack developer @ <span id='work-title-span'>Itech</span></h4>
                    <p id='work-date'>Febuary 2020 - September 2021</p>
                    <p id='work-desc'>Developed a full-stack e-Commerce web application with add to cart, search and login
                        functionality using react, redux, MySQL and django Rest Framework.</p>
                    <p id='work-desc'>worked with other departments to mange the company's internal and external database</p>
                    <p id='work-desc'>Performing regular automated tests to ensure optimal performance of the company’s web app</p>
                </div>}

                {second && <div className='work-right-1'>
                    <h4 id='work-title'>Front-end developer @ <span id='work-title-span'>Fiverr</span></h4>
                    <p id='work-date'>December 2021 - till date</p>
                    <p id='work-desc'>Deployed a website built with react and material Ui.</p>
                    <p id='work-desc'>Helped solidify a brand direction for blistabloc that spans both packaging and web</p>
                    <p id='work-desc'>Contributed extensively to optimazation of a react website, improved the speed of the website</p>
                </div>}

                {third && <div className='work-right-1'>
                    <h4 id='work-title'>Hiit</h4>
                    <p id='work-date'>January - April 2018</p>
                    <p id='work-desc'>We were able to build a scrapping bot, to scrape the internet and get the required
                        Information. We used selenium web driver and beautiful soup library</p>
                    <p id='work-desc'>In my team we were able to make the company’s website more scalable and faster, we
                        removed some unnecessary files and disabled some plugins.</p>
                    <p id='work-desc'>We performed CCTV installation as our final project, with the aid of the networking networking knowledge gained  </p>
                </div>}

                {fourth && <div className='work-right-1'>
                    <h4 id='work-title'>Upwork</h4>
                    <p id='work-date'>January - April 2018</p>
                    <p id='work-desc'>Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern</p>
                    <p id='work-desc'>Helped solidify a brand direction for blistabloc that spans both packaging and web</p>
                    <p id='work-desc'>Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps</p>
                </div>}

            </div>
        </div>
    )
}

export default Work