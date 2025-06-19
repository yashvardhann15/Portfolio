import React, { useState } from 'react'
import './hero.css'
import profile_img from '../../assets/image.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    const [showPDF, setShowPDF] = useState(false);

    return (
        <div className='hero' id='home'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Yashvardhan,</span> Student at NetaJi Subhas University of Technology</h1>
            <p>Hi, I’m Yashvardhan Gupta, a final-year BTech student at NSUT, Delhi, with a keen interest in backend development and system design. I enjoy building reliable, efficient, and scalable systems that make a real impact.</p>
            <div className="hero-action">
                <div className="hero-connect"><Link to="/contact" className="link-style">Connect with Me</Link></div>
                <div className="hero-resume" onClick={() => setShowPDF(true)}>My Resume</div>
            </div>

            {showPDF && (
                <div className="pdf-overlay">
                    <button className="close-btn" onClick={() => setShowPDF(false)}>×</button>
                    <iframe
                        src="/Resume.pdf"
                        title="Resume"
                        className="pdf-frame"
                    ></iframe>
                </div>
            )}
        </div>
    )
}

export default Hero
