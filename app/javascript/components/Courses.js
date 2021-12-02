import React from "react";

const Courses = ({ courses }) => {
  return (
    <>
      <h1>Courses</h1>
      <a href="/courses/new">Add Course</a>
      <br />
      <h2>{ courses.length <= 0 ? "No Courses" : "" }</h2> 
      { courses.map((course) => (
        <div>
          <a href={`/courses/${course.id}`}>{course.title}</a>
        </div>
      ))}
    </>
  )
}

export default Courses;