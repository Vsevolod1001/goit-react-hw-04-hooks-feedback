import React, {useState} from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions"
import Statistics from "./Statistics"
import Notification from "./Notification";

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const hendlerChange = e => {
   const key = e.target.textContent;
   switch (key) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
       break;
   
     default:
       return;
   }
  };
  const countTotalFeedback = () => {    
    return good + neutral + bad;
    
  }
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() ? Math.round((good * 100) / countTotalFeedback()) : 0;
  }  
    
    const total = countTotalFeedback();
    return (
      <>
        <Section
        title ="Please leave feedback">       
          <FeedbackOptions 
            options={['good', 'neutral', 'bad']} 
            onLeaveFeedback={hendlerChange} 
          />   
        </Section>  
        <Section
          title="Statistics">
            {total > 0 ? (
               <Statistics 
               good={good} 
               neutral={neutral} 
               bad={bad} 
               total={total} 
               positivePercentage={countPositiveFeedbackPercentage()}
             />
            ) : (
              <Notification message = "No feedback given" />
            )}
         
          </Section>        
      </>
    )
  
};

