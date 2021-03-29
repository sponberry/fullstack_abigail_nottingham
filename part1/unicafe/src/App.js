import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good > 0 || bad > 0 || neutral > 0) {
    let totals = good + neutral + bad
    let representativeTotals = good + (neutral * 0.5) + (bad * -1)
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {totals}</p>
        <p>Average: {representativeTotals / totals}</p>
        <p>Positive: {(good / totals)*100}%</p>
      </div>
    )
    } else {
      return (
        <p>No feedback given</p>
      )
    }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedback = () => setGood(good + 1);
  const badFeedback = () => setBad(bad + 1);
  const neutralFeedback = () => setNeutral(neutral + 1);


  return (
  <div>
    <h1>give feedback</h1>
    <Button handleClick={goodFeedback} text="Good" />
    <Button handleClick={badFeedback} text="Bad" />
    <Button handleClick={neutralFeedback} text="Neutral" />
    <h2>statistics</h2>
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>
  )
}

export default App;
