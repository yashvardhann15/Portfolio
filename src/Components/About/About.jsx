import React , {useEffect, useState} from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/image.png'

//https://alfa-leetcode-api.onrender.com/yashvardhannn152004/contest
function About() {
    const [rate, setRate] = useState('Loading...'); 
    const [solved, setSolved] = useState('Loading...');

    useEffect(() => {
        const fetchRating = async () => {
            const response = await fetch('https://alfa-leetcode-api.onrender.com/yashvardhannn152004/contest');
            const data = await response.json();
            let maxi = 0;
            for(let i = 0; i < data.contestParticipation.length; i++){
                maxi = Math.max(maxi, data.contestParticipation[i].rating);
            }
            setRate(Math.floor(maxi)); // Update the rate state
            console.log(maxi);
        };
        fetchRating();
    }, []); 

    useEffect(() => {
        const fetchSolved = async () => {
            const response = await fetch('https://alfa-leetcode-api.onrender.com/yashvardhannn152004/solved');
            const data = await response.json();

            setSolved(data.solvedProblem); // Update the solved state
        }
        fetchSolved();
    } , []);

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
                    <h1>{solved}</h1>
                    <p>Questions on leetcode</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>{rate}</h1>
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