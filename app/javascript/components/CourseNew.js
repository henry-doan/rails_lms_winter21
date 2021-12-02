import React from "react";

const CourseNew = ({ course }) => {
    const { title, desc, errors } = course;
    const defaultTitle = title ? title : "";
    const defaultDesc = desc ? desc : "";
    return (
      <>
        <h1>Add Course</h1>
        { errors && errors }
        <form action="/courses" method="post">
          <input
            placeholder="Title"
            type="text"
            defaultValue={defaultTitle}
            name="course[title]"
          />
          <input
            placeholder="Desc"
            type="text"
            defaultValue={defaultDesc}
            name="course[desc]"
          />
          <button type="submit">Add</button>
        </form>
      </>
    );
}

export default CourseNew;