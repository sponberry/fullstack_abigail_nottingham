import React from "react";

const Header = (props) => (
  <h1>{props.title}</h1>
)

const Part = (props) => (
  props.parts.map((part, index) => 
    <p key={index}>{part.name} {part.exercises}</p>
  )
)

const Total = (props) => {
  let totals = 0
  props.objects.forEach(element => {
    totals += element.exercises
  });
  return (
    <p>Number of exercises {totals}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ],
  };

  return (
  <div>
    <Header title={course.name} />
    <Part parts={course.parts} />
    <Total objects={course.parts} />
  </div>
  )
}

export default App;
