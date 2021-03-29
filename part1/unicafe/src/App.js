import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, count }) => (
  <tr>
  <th scope="row">{text}</th> <td>{count}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good > 0 || bad > 0 || neutral > 0) {
    let totals = good + neutral + bad
    let representativeTotals = good + (neutral * 0.5) + (bad * -1)
    return (
      <tbody>
        <tr><th scope="row">All</th> <td>{totals}</td></tr>
        <tr><th scope="row">Average</th> <td>{representativeTotals / totals}</td></tr>
        <tr><th scope="row">Positive</th> <td>{(good / totals)*100}%</td></tr>
      </tbody>
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
    <table>
      <tbody>
        <Statistic text={"Good"} count={good} />
        <Statistic text={"Bad"} count={bad} />
        <Statistic text={"Neutral"} count={neutral} />
      </tbody>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </table>
  </div>
  )
}

export default App;
