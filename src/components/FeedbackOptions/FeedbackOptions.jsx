import React from "react";
import PropTypes from "prop-types";
import './FeedbackOptions.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(key => (
                <button
                    key={key}
                    type="button"
                    onClick={onLeaveFeedback}
                    className="optionsBtn"
                    
                >
                    {key}
                </button>
            ))}
        </div>
    )
};
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    
    onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;