import React from "react";
import mock08 from '../assets/images/mock08.png';
import mock14 from '../assets/images/mock14.png';
import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/mock12.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/vishalorsu/AIRLINE-FINANCIAL-ECONOMICS-DASHBOARD" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vishalorsu/AIRLINE-FINANCIAL-ECONOMICS-DASHBOARD" target="_blank" rel="noreferrer"><h2>Airline Financial Dasboard</h2></a>
                <p>Developed an airline financial dashboard using Tableau and React, incorporating ARIMA modeling for forecasting operational and financial performance metrics.</p>
            </div>
            <div className="project">
                <a href="https://github.com/vishalorsu/Customer-Churn-Prediction" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vishalorsu/Customer-Churn-Prediction" target="_blank" rel="noreferrer"><h2>Customer Churn Prediction and Supermarket Sales</h2></a>
                <p>Developed a Power BI dashboard to analyze supermarket sales and implemented customer churn prediction using XGBoost for actionable business insights.</p>
            </div>
            <div className="project">
                <a href="https://github.com/vishalorsu/Data-Analysis-of-Real-Estate-Sales-from-2001-to-2020-in-Connecticut" target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vishalorsu/Data-Analysis-of-Real-Estate-Sales-from-2001-to-2020-in-Connecticut" target="_blank" rel="noreferrer"><h2>Data Analysis of Real Estate Sales in Connecticut</h2></a>
                <p>Performed data analysis of Connecticut real estate sales using Python and created an interactive map with Folium to visualize property locations and market trends.</p>
            </div>
            <div className="project">
                <a href="https://github.com/vishalorsu/IBM-Data-Science-Capstone-Project" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vishalorsu/IBM-Data-Science-Capstone-Project" target="_blank" rel="noreferrer"><h2>Spacex Falcon 9 Landing Prediction</h2></a>
                <p>Developed a prediction model for SpaceX Falcon 9 rocket landings using machine learning techniques, focusing on flight data and landing success rates.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;