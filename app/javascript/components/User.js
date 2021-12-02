import React from 'react';

const User = ({ user, courses,  fullName }) => {
  return (
    <>
      <h1>{fullName}</h1>
      <a>Edit</a>
      <a>Delete</a>
      <h2>Courses</h2>
      { courses.map((course) => (
        <div>
          <a href={`/courses/${course.id}`}>{course.title}</a>
        </div>
      ))}
    </>
  )
}

export default User;