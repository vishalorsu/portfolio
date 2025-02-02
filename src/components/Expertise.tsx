import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faReact } from "@fortawesome/free-brands-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "Power BI",
    "Tableau"
];

const labelsSecond = [
    "Git",
    "Azure DevOps",
    "Jira",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "PostgreSQL"
];

const labelsThird = [
    "TensorFlow",
    "Keras",
    "PySpark",
    "LangChain",
    "Hugging Face",
    "LlamaIndex",
    "Plotly",
    "Matplotlib",
    "Scikit-learn"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I specialize in building dynamic web applications, integrating frontend technologies like React with backend systems using Flask and Python. My work emphasizes robust design, optimization, and end-to-end delivery.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Analytics & DevOps</h3>
                    <p>Experienced in implementing analytics pipelines and automating CI/CD processes. My focus is on deploying scalable solutions while ensuring seamless integration across teams using tools like Azure DevOps and Docker.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Machine Learning & AI</h3>
                    <p>I leverage cutting-edge AI technologies to develop predictive models, automate decision-making, and enhance analytical insights. My expertise includes deep learning frameworks and integrating GenAI capabilities.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
