import React from "react";
import './MyCompetence.scss';
import bannerImage from '../../assets/banner/banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGit, faSass, faDiscord, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faArrowTrendUp, faDatabase, faCode, faCamera, faBezierCurve, faUser } from "@fortawesome/free-solid-svg-icons";

const skills = {
    'Front-End': [
        { icon: faHtml5, title: 'HTML5', value: 0.95 },
        { icon: faCss3Alt, title: 'CSS3', value: 0.9 },
        { icon: faSass, title: 'SASS', value: 0.9 },
        { icon: faArrowTrendUp, title: 'SEO', value: 0.85 },
        { icon: faReact, title: 'React.js', value: 0.8 },
        { icon: faJs, title: 'JavaScript', value: 0.75 },
    ],
    'Back-End': [
        { icon: faDiscord, title: 'Discord.js', value: 0.85 },
        { icon: faNodeJs, title: 'Node.js', value: 0.7 },
        { icon: faJs, title: 'Express.js', value: 0.65 },
        { icon: faDatabase, title: 'MongoDB', value: 0.4 },
    ],
    'Outils': [
        { icon: faCode, title: 'VSCode', value: 0.95 },
        { icon: faGithub, title: 'GitHub', value: 0.8 },
        { icon: faGit, title: 'Git', value: 0.75 },
        { icon: faFigma, title: 'Figma', value: 0.65 },
        { icon: faUser, title: 'Postman', value: 0.6 },
        { icon: faBezierCurve, title: 'Illustrator', value: 0.6 },
        { icon: faCamera, title: 'Photoshop', value: 0.6 },

    ],
};

const MyCompetence = () => {
    return (
        <div id="mycompetence" className="mycompetence">
            <div className="banner-container">
                <img className="banner" src={bannerImage} alt="Section A propos de moi" />
                <h1 className="banner-title">Mes compétences</h1>
                <p className="banner-text">
                    L'évolution continue de mes compétences en développement web est le fruit de mon engagement profond dans ce métier. <br />
                    Ma curiosité et ma passion pour la technologie m'incitent à apprendre et à innover quotidiennement.
                </p>
            </div>

            <div className="mycompetence-container">
                {Object.entries(skills).map(([category, items]) => (
                    <div className="mycompetence-card" key={category}>
                        <h1 className="mycompetence-card-title">{category}</h1>
                        <div className="skills-container">
                            {items.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <div className="progress-info">
                                        <FontAwesomeIcon icon={skill.icon} className="icon" />
                                        <h3>{skill.title}</h3>
                                    </div>
                                    <progress className="progress-bar" value={skill.value} max="1" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCompetence;
