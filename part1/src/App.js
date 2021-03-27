import React from "react";

const Header = (props) => (
  <h1>{props.title}</h1>
)

const Content = (props) => (
  <>
  {props.parts.map(function (part, index) {
    return (
      <p key={index}>{part} {props.exercises[index]}</p>
    )
  })}
  </>
)

const Total = (props) => (
  <p>Number of exercises {props.totals}</p>
)

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;


  return (
  <div>
    <Header title={course} />
    <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
    <Total totals={exercises1 + exercises2 + exercises3} />
  </div>
  )
}

export default App;
