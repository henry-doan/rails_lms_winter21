import React from "react";

const Course = ({ course, users }) => {
    const { title, id, desc } = course;
    return (
      <>
        <div>
          <h1>{title}</h1>
          <p>{desc}</p>
          <hr />
          <a href={`/courses/${id}/enrollments`}>Enrollments</a>
          <br />
          <a>Edit</a>
          <a href={`/courses/${id}`} data-method="delete">
            Course delete
          </a>
          <h1>Users</h1>
          { users.map( (user) => (
            <a href={`/users/${user.id}`}>{user.first_name} {user.last_name}</a>
          ))}
          <a href={`/courses/${id}/enrollments/new`}>Add Enrollment</a>
        </div>
      </>
    );
}

export default Course;