import React from "react";

const Header = (props) => (
  <h1>{props.title}</h1>
)

const Part = (props) => (
  props.parts.map(part => 
    <p>{part.name} {part.exercises}</p>
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
  const course = 'Half Stack application development';
  const parts = [
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
  ];

  return (
  <div>
    <Header title={course} />
    <Part parts={parts} />
    <Total objects={parts} />
  </div>
  )
}

export default App;
