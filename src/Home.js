import React, { useState, useEffect } from 'react'
import jpnImage from "./assets/jpnbgimg.jpg"
import { Link } from 'react-router-dom'


function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="App">
            <div
                className='backgroundImage'
                style={{
                    backgroundImage: `url(${jpnImage})`, /* Scroll distortion bug */
                }}
            >
                <div className='backdropDiv'>
                    <div className='backdropDivTextName'>Tobias Österlin</div>
                    <div className='backdropDivTextDesc'>Front-end developer</div>
                </div>

                <div className='aboutMeContainer'>
                    <div className='aboutMeText'>Recently graduated Front-end developer that loves<br />
                        creating both applications and websites.
                    </div>

                    <div className='aboutMeTitle'
                        style={{ transform: `translateX(${offsetY * .9}px)` }}
                    >About Me</div>
                </div>

                <div className='mainProjectsContainer'
                style={{ transform: `translateY(${offsetY * -.5}px)` }}
                >
                    <div className='projectsTitle'>Projects</div>
                    <div className='projectsContainer'>
                        <Link to="/actionreminder" className="project1"
                        >
                            <div className='project1BgBorder'></div>
                            <div className='project1bg'>
                                Action<br />Reminder
                            </div>
                        </Link>
                        <Link to="leagueofinfo" className='project2'>
                            <img className='lofProjectGif'
                                src={require("./assets/LeagueOfInfo/LeagueOfInfo.gif")} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home