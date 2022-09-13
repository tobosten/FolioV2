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
                    <div className='backdropDivTextDesc'>Application developer</div>
                </div>

                <div className='aboutMeSectionContainer'>
                    <div className='aboutMeSectionText'>Recently graduated Application developer that loves<br />
                        creating both applications and websites.<br />
                        <Link className='aboutMeSectionMoreText' to="/aboutme">More</Link>
                    </div>

                    <div className='aboutMeSectionTitle noSelect'
                        style={{
                            transform: `translateX(${offsetY * .5}px)`
                        }}
                    >About Me</div>
                    <div
                        className="meImgContainer"
                        style={{
                            transform: `translateY(${offsetY * -0.2}px)`
                        }}
                    >
                        <img
                            src={require("./assets/Me.jpg")}
                            className="meImg noSelect"
                        />
                    </div>

                </div>

                <div className='mainProjectsContainer'>
                    <div className='projectsTitle noSelect'
                        style={{
                            transform: `translateX(${offsetY * -0.25}px)`,
                        }}
                    >Projects</div>
                    <div className='projectsContainer'
                        style={{}}
                    >
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

                    <img className='homeReactLogo noSelect'
                        src={require("./assets/Logos/reactLogo2.png")}
                        style={{
                            transform: `translateY(${offsetY * -0.15}px)`,
                        }}
                    />
                    <img className='homeJSLogo noSelect'
                        src={require("./assets/Logos/jsLogo.png")}
                        style={{
                            transform: `translateY(${offsetY * -0.10}px)`,
                        }}
                    />
                    <img className='homeCSSLogo noSelect'
                        src={require("./assets/Logos/cssLogo.png")}
                        style={{
                            transform: `translateY(${offsetY * -0.05}px)`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home