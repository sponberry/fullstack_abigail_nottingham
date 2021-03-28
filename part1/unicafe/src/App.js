import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ text, count }) => (
  <p>{text} {count}</p>
)

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
    <Statistics text={"Good"} count={good} />
    <Statistics text={"Bad"} count={bad} />
    <Statistics text={"Neutral"} count={neutral} />
  </div>
  )
}

export default App;
