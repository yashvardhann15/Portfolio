import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function MyWork() {
    const [expandedCards, setExpandedCards] = useState({});
    const [showAll, setShowAll] = useState(false);

    const toggleCardExpansion = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const truncateDescription = (description, maxLength = 50) => {
        if (!description) return "No description available.";
        if (description.length <= maxLength) return description;
        return description.substr(0, maxLength) + '...';
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const visibleProjects = showAll ? mywork_data : mywork_data.slice(0, 3);

    return (
        <div>
            <div className="mywork" id='work'>
                <div className="mywork-title">
                    <h1>My Projects</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="mywork-container">
                    {visibleProjects.map((work, index) => (
                        <div key={index} className={`project-card ${expandedCards[index] ? 'expanded' : ''}`}>
                            <a href={work.w_link || "#"} target="_blank" rel="noopener noreferrer">
                                <img src={work.w_img} alt={work.w_name || "Project image"} />
                            </a>
                            <div className="project-info">
                                <h3>{work.w_name || "Untitled Project"}</h3>
                                <p>
                                    {expandedCards[index] 
                                        ? (work.w_description || "No description available.") 
                                        : truncateDescription(work.w_description)}
                                </p>
                                <button 
                                    className="read-more-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleCardExpansion(index);
                                    }}
                                >
                                    {expandedCards[index] ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {mywork_data.length > 4 && (
                    <div className="mywork-showmore" onClick={toggleShowAll}>
                        <p>{showAll ? 'Show Less' : 'Show More'}</p>
                        <img src={arrow_icon} alt="" className={showAll ? 'rotate' : ''} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyWork