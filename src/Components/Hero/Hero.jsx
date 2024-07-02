import React from 'react'
import './hero.css'
import profile_img from '../../assets/image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = ()=> {
    return (
        <div className='hero' id='home'>
            <img src={profile_img} alt="" />
            <h1> <span>I'm Yashvardhan,</span>  Student at NetaJi Subhas University of Technology</h1>
            <p>I am a hardworking,ambitious and dedicated student at NSUT, persuing computer science and engineering.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' href = '#contact'>Connect with Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
