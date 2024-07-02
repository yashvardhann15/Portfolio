import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/image.png'

function About() {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>
                    About Me
                </h1>
                <img src= {theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className='about-left'>
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’ve always had a natural curiosity for machinery and technology. My studies have provided me with broad proficiency in the use of computer engineering methods, coding languages and techniques.</p>
                        <p>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.</p>
                    </div>
                    <div className="about-skills">

                        <div className='about-skill'>
                            <p>HTML  |  CSS </p>
                            <hr style={{width: "70%"}}/>
                        </div>
                        <div className='about-skill'>
                            <p>ReactJS</p>
                            <hr style={{width: "60%"}}/>
                        </div>
                        <div className='about-skill'>
                            <p>Data Structures</p>
                            <hr style={{width: "90%"}}/>
                        </div>
                        <div className='about-skill'>
                            <p>C++  | JS</p>
                            <hr style={{width: "70%"}}/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>400+</h1>
                    <p>Questions on leetcode</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>1624</h1>
                    <p>Max Contest Rating</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Various</h1>
                    <p>Real World Projects</p>
                </div>
            </div>
        </div>
    )
}

export default About
