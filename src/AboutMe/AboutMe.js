import React from 'react'
import "./AboutMe.css" /* Also uses styles from ActionReminder.css */
import { Link } from 'react-router-dom';


function AboutMe() {
    return (
        <div className='mainAboutMeContainer'>
            <div className='mainAboutMeTitle noSelect'>About Me</div>
            <div className='aboutMeHeaderContainer'>
                <div className='aboutMeIntroductionTitle'>Introduction</div>
                <div className='aboutMeIntroductionText'>
                    Newly graduate from
                    <a className='linkTextPR'
                        href='https://www.iths.se/utbildningar/applikationsutvecklare/'
                        target={"_blank"}>IT-Högskolan</a>
                    with a 2 year vocational education in application development.<br />
                    During this education I learned to create applications with React Native, SwiftUI, Kotlin and<br />
                    websites with html, css and React.js. Currently have most experience working with React Native and React.js.
                </div>
                <a className='cvDownloadContainer'
                    href={require("../assets/CV.pdf")}
                    download="CV Tobias Österlin AD"
                >
                    <div style={{ color: "#84789c", }}>Download CV</div> 
                    <img src={require("../assets/downloadArrow.png")}
                        style={{ height: 30, width: 30, marginLeft: 10 }}
                    />
                </a>

            </div>
        </div>
    )
}

export default AboutMe