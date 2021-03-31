import React from "react";

const Header = ({ name }) => (
    <h1>{name}</h1>
  )

const Content = ({ course }) => (
  course.parts.map((part) =>
    <Part part={part} key={part.id} />
  )
)
  
  const Part = ({ part }) => (
    <p>{part.name} {part.exercises}</p>
    )

  const Total = ({ parts }) => {
    let totals = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <p>Total exercises: {totals}</p>
    )
  }

const Course = ({ course }) => (
    <div className="course">
      <Header name={course.name} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )   

export default Course;