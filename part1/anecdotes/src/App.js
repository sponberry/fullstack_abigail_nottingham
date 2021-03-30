import React, { useState } from "react";

const NumberButton = ({ handleClick }) => (
  <button onClick={() => handleClick((Math.floor(Math.random() * 6)))}>next anecdote</button>
  )

const VoteButton = ({ handleClick, points, selected }) => {
  const copy = [...points]
  copy[selected] += 1

  return (
    <button onClick={() => handleClick(copy)}>vote</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
  
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(6))

  let winner = null
  let mostPoints = 0
  let display = "No votes yet"
  for(var index=0; index<points.length; index++) {
    if (points[index] > mostPoints && points[index] > 0) {
      mostPoints = points[index];
      winner = index
      display = `has ${points[winner]} votes`
    }
  }

  return (
  <div>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[selected]}</p>
    <p>has {points[selected]} votes</p>
    <VoteButton handleClick={setPoints} points={points} selected={selected} />
    <NumberButton handleClick={setSelected}/>
    <h2>Anecdote with the most votes</h2>
    <p>{anecdotes[winner]}</p>
    <p>{display}</p>
  </div>
  )
}

export default App;
