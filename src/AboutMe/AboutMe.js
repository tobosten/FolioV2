import React from 'react'
import "./AboutMe.css" /* Also uses styles from ActionReminder.css */


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
                    During this education I learned to create applications with React Native, SwiftUI and Kotlin, and<br />
                    websites with html, css and React.js. Currently have most experience working with React Native and React.js.
                </div>


            </div>
        </div>
    )
}

export default AboutMe