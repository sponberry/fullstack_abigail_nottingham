import React from "react";

const Header = (props) => (
  <h1>{props.title}</h1>
)

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };


  return (
  <div>
    <Header title={course} />
    <Part part={part1} />
    <Part part={part2} />
    <Part part={part3} />
    <Total objects={[part1, part2, part3]} />
  </div>
  )
}

export default App;
