import React from 'react'
import jpnImage from "./assets/jpnbgimg.jpg"
import { Link } from 'react-router-dom'

function Home() {

    return (
        <div className="App">
            <div
                className='backgroundImage'
                style={{
                    backgroundImage: `url(${jpnImage})`,
                }}
            >
                <div className='backdropDiv'>
                    <div className='backdropDivText'>Hello!<br />
                        My name is Tobias
                    </div>
                </div>


                <div className='mainProjectsContainer'>
                    <div className='projectsTitle'>Projects</div>
                    <div className='projectsContainer'>
                        <Link to="/actionreminder" className="project1"
                        >
                            <div className='project1BgBorder'></div>
                            <div className='project1bg'>
                                Action<br />Reminder
                            </div>
                        </Link>
                        <div className='project'>

                        </div>
                        <div className='project'>

                        </div>
                        <div className='project'>

                        </div>
                        <div className='project'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home