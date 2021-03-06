import React from "react"
import './Statistics.css'
import PropTypes from "prop-types";


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
        
        return ( 
            <ul className="statisticUl">
                <li className="statsLi">Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feddback: {positivePercentage}%</li>
            </ul>
        ) 
    
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;