import React , {useEffect, useState} from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/image.png'

//https://alfa-leetcode-api.onrender.com/yashvardhannn152004/contest
function About() {
    // const [rate, setRate] = useState('Loading...'); 
    // const [solved, setSolved] = useState('Loading...');

    // useEffect(() => {
    //     const fetchRating = async () => {
    //         const response = await fetch('https://alfa-leetcode-api.onrender.com/yashvardhannn152004/contest');
    //         const data = await response.json();
    //         let maxi = 0;
    //         for(let i = 0; i < data.contestParticipation.length; i++){
    //             maxi = Math.max(maxi, data.contestParticipation[i].rating);
    //         }
    //         setRate(Math.floor(maxi)); // Update the rate state
    //         console.log(maxi);
    //     };
    //     fetchRating();
    // }, []); 

    // useEffect(() => {
    //     const fetchSolved = async () => {
    //         const response = await fetch('https://alfa-leetcode-api.onrender.com/yashvardhannn152004/solved');
    //         const data = await response.json();

    //         setSolved(data.solvedProblem); // Update the solved state
    //     }
    //     fetchSolved();
    // } , []);

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
                        <p>Hi, I’m Yashvardhan Gupta, a final-year BTech student at NSUT, Delhi, with a keen interest in backend development and system design. I enjoy building reliable, efficient, and scalable systems that make a real impact.</p>
                        <div className="about-list">
                            <h2>Skills & Interests:</h2>
                            <ul>
                                <li>Backend Development (Java, Spring Boot)</li>
                                <li>Object-Oriented Programming & Design Patterns</li>
                                <li>System Design & Low-Level Design</li>
                                <li>Always exploring new technologies and learning by building.</li>
                            </ul>
                        </div>           
                        <p>I’m looking for opportunities where I can apply my skills, grow as a developer, and contribute to meaningful products. Let’s connect and create something impactful together!</p>
                    </div>
                    <div className="about-skills">

                        <div className='about-skill'>
                            <p>System Design | OOPS </p>
                            <hr style={{width: "850%"}}/>
                        </div>
                        <div className='about-skill'>
                            <p>Backend </p>
                            <hr style={{width: "80%"}}/>
                        </div>
                        <div className='about-skill'>
                            <p>Spring Boot</p>
                            <hr style={{width: "85%"}}/>
                        </div>
                        <div className='about-skill'>
                            <p>Data Structures</p>
                            <hr style={{width: "95%"}}/>
                        </div>
                        <div className='about-skill'>
                            <p>JAVA | C++ | JS</p>
                            <hr style={{width: "90%"}}/>
                        </div>
                            <div className='about-skill'>
                            <p>DBMS</p>
                            <hr style={{width: "80%"}}/>
                        </div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    {/* <h1>{solved}</h1> */}
                    <h1>600+</h1>
                    <p>Questions on Leetcode</p>
                </div>
                <hr />
                <div className="about-achievement">
                    {/* <h1>{rate}</h1> */}
                    <h1>1752</h1>
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